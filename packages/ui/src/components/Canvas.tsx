import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useInputSystem } from '../hooks/useInputSystem.js';
import { useCanvasPluginIntegration, usePluginManager } from '../plugins/PluginManager.js';
import { GridRenderer } from './GridRenderer.js';
import { ZoomControls } from './ZoomControls.js';
import { ObjectRenderer } from './ObjectRenderer.js';
import { DebugInfo } from './DebugInfo.js';
import { ContextMenu } from './ContextMenu.js';
import { SettingsPanel } from './SettingsPanel.js';
import { TutorialOverlay } from './TutorialOverlay.js';
import { InfoModal } from './InfoModal.js';
import { useTransformationStore } from '../store/transformationStore.js';
import type { UnifiedPointerEvent, Point } from '@getgrix/core';
import type { GestureEvent } from '../hooks/useInputSystem.js';
import { distanceToLineSegment, pointInTriangle, distanceToCircleEdge } from '../utils/gridUtils.js';

interface CanvasProps {
  width?: number;
  height?: number;
  className?: string;
  onObjectInteraction?: (objectId: string, event: UnifiedPointerEvent) => void;
}

// Utility function to calculate distance from a point to a line segment
function distanceFromPointToLine(point: Point, lineStart: Point, lineEnd: Point): number {
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  
  if (length === 0) return Math.sqrt(Math.pow(point.x - lineStart.x, 2) + Math.pow(point.y - lineStart.y, 2));
  
  const t = Math.max(0, Math.min(1, ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) / (length * length)));
  const projection = {
    x: lineStart.x + t * dx,
    y: lineStart.y + t * dy
  };
  
  return Math.sqrt(Math.pow(point.x - projection.x, 2) + Math.pow(point.y - projection.y, 2));
}

export function Canvas({ 
  width = 800, 
  height = 600, 
  className = '',
  onObjectInteraction 
}: CanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const {
    viewport,
    setViewport,
    objects,
    selectedObjects,
    snapToGrid,
    gridDensity,
    canvasSize,
    setCanvasSize,
    removeObject,
    clearSelection,
    selectObject,
    screenToWorld,
    worldToScreen,
    getObject,
    updateObject
  } = useCanvasStore();

  // Connect to plugin system
  const pluginHandlers = useCanvasPluginIntegration();
  const { activeTool, setActiveTool, eventBus } = usePluginManager();
  
  // Connect to transformation system
  const { rotate90, rotate180, rotate270, scaleObject, setSelectedObject } = useTransformationStore();

  // Update canvas size when dimensions change
  useEffect(() => {
    setCanvasSize({ width, height });
  }, [width, height, setCanvasSize]);

  // Pan state for smooth panning
  const panStateRef = useRef({
    isPanning: false,
    startPoint: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 }
  });

  // Track pointer movement to distinguish clicks from drags
  const pointerStateRef = useRef({
    isDown: false,
    startPoint: { x: 0, y: 0 },
    hasMoved: false,
    dragThreshold: 5, // pixels
    pendingSelection: null as { objectId: string; type: string } | null
  });

  // Track mouse position for preview cursor
  const [mousePosition, setMousePosition] = useState<Point | null>(null);
  
  // Track context menu state
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Track overlapping selection cycling
  const lastClickRef = useRef({ 
    worldPoint: { x: 0, y: 0 }, 
    timestamp: 0, 
    overlappingObjects: [] as string[],
    currentIndex: 0 
  });

  // Find all objects at a point with priority scoring
  const findObjectsAtPoint = useCallback((worldPoint: Point, tolerance: number = 0.5) => {
    const candidates: Array<{ object: any; priority: number; distance: number }> = [];
    
    for (const obj of objects) {
      let priority = 0;
      let distance = Infinity;
      let isHit = false;
      
      switch (obj.type) {
        case 'ray':
          // Check edge hit first (highest priority)
          const edgeDistance = distanceToLineSegment(
            worldPoint, 
            obj.properties.startPoint, 
            obj.properties.endPoint
          );
          if (edgeDistance <= tolerance) {
            priority = 100;
            distance = edgeDistance;
            isHit = true;
          }
          break;
          
        case 'rectangle':
          const { x, y, width, height } = obj.properties;
          // Check if near edges (high priority)
          const edges = [
            { start: { x, y }, end: { x: x + width, y } }, // bottom
            { start: { x: x + width, y }, end: { x: x + width, y: y + height } }, // right
            { start: { x: x + width, y: y + height }, end: { x, y: y + height } }, // top
            { start: { x, y: y + height }, end: { x, y } }, // left
          ];
          
          let minEdgeDistance = Infinity;
          for (const edge of edges) {
            const edgeDist = distanceToLineSegment(worldPoint, edge.start, edge.end);
            minEdgeDistance = Math.min(minEdgeDistance, edgeDist);
          }
          
          if (minEdgeDistance <= tolerance) {
            priority = 100;
            distance = minEdgeDistance;
            isHit = true;
          } else if (worldPoint.x >= x && worldPoint.x <= x + width && 
                     worldPoint.y >= y && worldPoint.y <= y + height) {
            // Inside area (lower priority)
            priority = 50;
            distance = 0;
            isHit = true;
          }
          break;
          
        case 'circle':
          const { center, radius } = obj.properties;
          const centerDistance = Math.sqrt(
            (worldPoint.x - center.x) ** 2 + (worldPoint.y - center.y) ** 2
          );
          
          // Check if near edge (high priority)
          const edgeDist = distanceToCircleEdge(worldPoint, center, radius);
          if (edgeDist <= tolerance) {
            priority = 100;
            distance = edgeDist;
            isHit = true;
          } else if (centerDistance <= radius) {
            // Inside area (lower priority)
            priority = 50;
            distance = radius - centerDistance;
            isHit = true;
          }
          break;
          
        case 'triangle':
          const { vertices } = obj.properties;
          // Check edge hits first
          const triangleEdges = [
            [vertices[0], vertices[1]],
            [vertices[1], vertices[2]],
            [vertices[2], vertices[0]]
          ];
          
          let minTriangleEdgeDistance = Infinity;
          for (const [start, end] of triangleEdges) {
            const edgeDist = distanceToLineSegment(worldPoint, start, end);
            minTriangleEdgeDistance = Math.min(minTriangleEdgeDistance, edgeDist);
          }
          
          if (minTriangleEdgeDistance <= tolerance) {
            priority = 100;
            distance = minTriangleEdgeDistance;
            isHit = true;
          } else if (pointInTriangle(worldPoint, vertices)) {
            // Inside area (lower priority)
            priority = 50;
            distance = 0;
            isHit = true;
          }
          break;
          
        case 'function':
          const functionObj = obj as any;
          const points = functionObj.properties.points;
          
          if (points && points.length > 1) {
            let minFunctionDistance = Infinity;
            for (let i = 0; i < points.length - 1; i++) {
              const p1 = points[i];
              const p2 = points[i + 1];
              const segmentDist = distanceToLineSegment(worldPoint, p1, p2);
              minFunctionDistance = Math.min(minFunctionDistance, segmentDist);
            }
            
            if (minFunctionDistance <= tolerance) {
              priority = 100;
              distance = minFunctionDistance;
              isHit = true;
            }
          }
          break;
      }
      
      if (isHit) {
        candidates.push({ object: obj, priority, distance });
      }
    }
    
    // Sort by priority (higher first), then by distance (closer first), then by zIndex (higher first)
    candidates.sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      if (a.distance !== b.distance) return a.distance - b.distance;
      return (b.object.zIndex || 0) - (a.object.zIndex || 0);
    });
    
    return candidates.map(c => c.object);
  }, [objects, distanceToLineSegment, pointInTriangle, distanceToCircleEdge]);

  // Handle pointer events
  const handlePointerDown = useCallback((event: UnifiedPointerEvent) => {
    const screenPoint = { x: event.x, y: event.y };
    
    // Initialize pointer tracking
    pointerStateRef.current = {
      isDown: true,
      startPoint: screenPoint,
      hasMoved: false,
      dragThreshold: 5,
      pendingSelection: null
    };
    
    // Smart object selection with edge priority and click cycling
    const worldPoint = screenToWorld(screenPoint);
    const tolerance = 0.5; // World units tolerance
    
    // Find all objects at this point
    const overlappingObjects = findObjectsAtPoint(worldPoint, tolerance);
    let objectClicked = false;
    let selectedObject = null;
    
    if (overlappingObjects.length > 0) {
      objectClicked = true;
      
      // Check if this is a repeated click in the same location (for cycling)
      const currentTime = Date.now();
      const lastClick = lastClickRef.current;
      const isSameLocation = Math.abs(worldPoint.x - lastClick.worldPoint.x) < 0.1 && 
                            Math.abs(worldPoint.y - lastClick.worldPoint.y) < 0.1;
      const isRecentClick = currentTime - lastClick.timestamp < 500; // 500ms window
      
      if (isSameLocation && isRecentClick && lastClick.overlappingObjects.length > 1) {
        // Cycle through overlapping objects
        const nextIndex = (lastClick.currentIndex + 1) % lastClick.overlappingObjects.length;
        const targetId = lastClick.overlappingObjects[nextIndex];
        selectedObject = overlappingObjects.find(obj => obj.id === targetId) || overlappingObjects[0];
        
        lastClickRef.current = {
          worldPoint,
          timestamp: currentTime,
          overlappingObjects: lastClick.overlappingObjects,
          currentIndex: nextIndex
        };
      } else {
        // First click or different location - select the highest priority object
        selectedObject = overlappingObjects[0];
        
        lastClickRef.current = {
          worldPoint,
          timestamp: currentTime,
          overlappingObjects: overlappingObjects.map(obj => obj.id),
          currentIndex: 0
        };
      }
      
      // Store selection info for plugin system
      pointerStateRef.current.pendingSelection = { 
        objectId: selectedObject.id, 
        type: selectedObject.type 
      };
      
      // Select the object
      selectObject(selectedObject.id);
    } else {
      // Reset click cycling when clicking empty space
      lastClickRef.current = {
        worldPoint: { x: 0, y: 0 },
        timestamp: 0,
        overlappingObjects: [],
        currentIndex: 0
      };
    }
    
    // If no object was clicked but we have an active tool, keep the tool active for creation
    // Only clear selection and tool if we're not in creation mode
    if (!objectClicked && !activeTool) {
      clearSelection();
    } else if (!objectClicked && activeTool) {
      // Clear selection but keep tool active for creation
      clearSelection();
    }
    
    // Always forward to plugin system if we have an active tool (for creation)
    // or if an object was clicked (for manipulation)
    if (activeTool || objectClicked) {
      pluginHandlers.handlePointerDown(event);
    }
    
    // Start panning if no object was clicked and no tool is active (pan mode)
    if (!objectClicked && !activeTool && (event.type === 'touch' || event.type === 'mouse')) {
      panStateRef.current = {
        isPanning: true,
        startPoint: { x: event.x, y: event.y },
        startCenter: { ...viewport.center }
      };
    }
  }, [viewport.center, pluginHandlers, activeTool, setActiveTool, objects, screenToWorld, worldToScreen, viewport.zoom]);

  const handlePointerMove = useCallback((event: UnifiedPointerEvent) => {
    const screenPoint = { x: event.x, y: event.y };
    
    // Update mouse position for preview cursor (only for mouse events in build mode)
    if (event.type === 'mouse' && activeTool) {
      setMousePosition(screenPoint);
    } else if (!activeTool) {
      setMousePosition(null);
    }
    
    // Check if pointer has moved significantly (for drag detection)
    if (pointerStateRef.current.isDown && !pointerStateRef.current.hasMoved) {
      const deltaX = Math.abs(event.x - pointerStateRef.current.startPoint.x);
      const deltaY = Math.abs(event.y - pointerStateRef.current.startPoint.y);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance >= pointerStateRef.current.dragThreshold) {
        pointerStateRef.current.hasMoved = true;
        setIsDragging(true);
        // Clear pending selection since this is a drag operation
        pointerStateRef.current.pendingSelection = null;
      }
    }
    
    // Forward to plugin system first
    pluginHandlers.handlePointerMove(event);
    
    // Handle canvas panning only if no tool is active and we're already panning
    if (!activeTool && panStateRef.current.isPanning) {
      const deltaX = (event.x - panStateRef.current.startPoint.x) / viewport.zoom;
      const deltaY = (event.y - panStateRef.current.startPoint.y) / viewport.zoom;
      
      setViewport({
        center: {
          x: panStateRef.current.startCenter.x - deltaX,
          y: panStateRef.current.startCenter.y + deltaY // Flip Y for mathematical coordinates
        }
      });
    }
  }, [viewport.zoom, setViewport, pluginHandlers, activeTool, setMousePosition]);

  const handlePointerUp = useCallback((event: UnifiedPointerEvent) => {
    // Selection mode is now separate from build mode, so no need to clear tools on click
    
    // Reset dragging state
    setIsDragging(false);
    
    // Reset pointer tracking
    pointerStateRef.current = {
      isDown: false,
      startPoint: { x: 0, y: 0 },
      hasMoved: false,
      dragThreshold: 5,
      pendingSelection: null
    };
    
    // Forward to plugin system first
    pluginHandlers.handlePointerUp(event);
    
    // Reset pan state
    panStateRef.current.isPanning = false;
  }, [pluginHandlers, setActiveTool]);

  // Handle gestures (pinch-zoom, etc.)
  const handleGesture = useCallback((gesture: GestureEvent) => {
    switch (gesture.type) {
      case 'pinch':
        if (gesture.scale && gesture.center) {
          // Mobile-optimized zoom handling - detect mobile through event properties
          const objectCount = objects.length;
          
          // Dampen zoom for touch devices to prevent aggressive scaling
          let adjustedScale = gesture.scale;
          if (gesture.touches && gesture.touches > 1) {
            // Multi-touch indicates mobile/tablet - apply moderate dampening
            // Check for iOS specifically for different handling if needed
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const dampeningFactor = isIOS ? 0.3 : 0.4; // 30% for iOS, 40% for other touch devices
            adjustedScale = 1 + (gesture.scale - 1) * dampeningFactor;
          }
          
          // Performance-based zoom limits (stricter when many objects)
          const maxZoom = objectCount > 50 ? 100 : objectCount > 20 ? 200 : 500;
          const minZoom = 0.1;
          
          // Calculate new zoom with center point
          const newZoom = Math.max(minZoom, Math.min(maxZoom, viewport.zoom * adjustedScale));
          
          // Zoom towards the center of the pinch gesture
          if (Math.abs(newZoom - viewport.zoom) > 0.001) {
            const zoomRatio = newZoom / viewport.zoom;
            const worldCenter = screenToWorld(gesture.center);
            
            // Calculate new center to zoom towards the gesture center
            const newCenter = {
              x: worldCenter.x + (viewport.center.x - worldCenter.x) / zoomRatio,
              y: worldCenter.y + (viewport.center.y - worldCenter.y) / zoomRatio
            };
            
            setViewport({ 
              zoom: newZoom,
              center: newCenter
            });
          }
        }
        break;
      case 'tap':
        // Handle tap events (tool interactions will be handled by plugins)
        break;
    }
  }, [viewport.zoom, viewport.center, setViewport, objects.length, screenToWorld]);

  // Set up input system
  const { capabilities, touchTargetSize } = useInputSystem(
    svgRef as React.RefObject<HTMLElement | SVGSVGElement>,
    {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onGesture: handleGesture
    },
    {
      enableGestures: true,
      preventScrolling: true
    }
  );

  // Keyboard event handling and tool event listening
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          // Move selected objects with arrow keys
          if (selectedObjects.length > 0) {
            event.preventDefault();
            const moveDistance = event.shiftKey ? 0.1 : 1; // Fine movement with shift
            let deltaX = 0;
            let deltaY = 0;
            
            switch (event.key) {
              case 'ArrowUp':
                deltaY = moveDistance;
                break;
              case 'ArrowDown':
                deltaY = -moveDistance;
                break;
              case 'ArrowLeft':
                deltaX = -moveDistance;
                break;
              case 'ArrowRight':
                deltaX = moveDistance;
                break;
            }
            
            // Move each selected object
            selectedObjects.forEach(objectId => {
              const obj = getObject(objectId);
              if (obj) {
                switch (obj.type) {
                  case 'ray':
                    updateObject(objectId, {
                      properties: {
                        ...obj.properties,
                        startPoint: {
                          x: obj.properties.startPoint.x + deltaX,
                          y: obj.properties.startPoint.y + deltaY
                        },
                        endPoint: {
                          x: obj.properties.endPoint.x + deltaX,
                          y: obj.properties.endPoint.y + deltaY
                        }
                      }
                    });
                    break;
                  case 'rectangle':
                    updateObject(objectId, {
                      properties: {
                        ...obj.properties,
                        x: obj.properties.x + deltaX,
                        y: obj.properties.y + deltaY
                      }
                    });
                    break;
                  case 'circle':
                    updateObject(objectId, {
                      properties: {
                        ...obj.properties,
                        center: {
                          x: obj.properties.center.x + deltaX,
                          y: obj.properties.center.y + deltaY
                        }
                      }
                    });
                    break;
                  case 'triangle':
                    const newVertices = obj.properties.vertices.map((vertex: any) => ({
                      x: vertex.x + deltaX,
                      y: vertex.y + deltaY
                    }));
                    updateObject(objectId, {
                      properties: {
                        ...obj.properties,
                        vertices: newVertices
                      }
                    });
                    break;
                  case 'function':
                    const newDomain = {
                      min: obj.properties.domain.min + deltaX,
                      max: obj.properties.domain.max + deltaX
                    };
                    
                    // Recalculate points for the shifted domain
                    const newPoints = obj.properties.points.map((point: any) => ({
                      x: point.x + deltaX,
                      y: point.y + deltaY
                    }));
                    
                    updateObject(objectId, {
                      properties: {
                        ...obj.properties,
                        domain: newDomain,
                        points: newPoints
                      }
                    });
                    break;
                }
              }
            });
          }
          break;
        case 'Escape':
          if (activeTool) {
            // Send cancel event to active tool first
            eventBus.emit('tool:cancel', { toolId: activeTool });
            // Then exit tool mode
            setActiveTool(null);
          }
          break;
        case 'Delete':
        case 'Backspace':
          if (selectedObjects.length > 0) {
            console.log('Deleting objects:', selectedObjects);
            selectedObjects.forEach(objectId => {
              // Emit event before removing so plugins can clean up
              eventBus.emit('object:removed', { objectId });
              removeObject(objectId);
            });
            clearSelection();
            // Deactivate any active tool after deletion
            setActiveTool(null);
          }
          break;
        case 'r':
        case 'R':
          // Rotate selected objects
          if (selectedObjects.length > 0 && !event.ctrlKey) {
            event.preventDefault();
            const canvasAPI = { getObject, updateObject };
            selectedObjects.forEach(objectId => {
              if (event.shiftKey) {
                rotate270(objectId, canvasAPI); // Shift+R = counter-clockwise
              } else {
                rotate90(objectId, canvasAPI); // R = clockwise
              }
            });
          }
          break;
        case 'f':
        case 'F':
          // Flip (180-degree rotation)
          if (selectedObjects.length > 0 && !event.ctrlKey) {
            event.preventDefault();
            const canvasAPI = { getObject, updateObject };
            selectedObjects.forEach(objectId => {
              rotate180(objectId, canvasAPI);
            });
          }
          break;
        case '=':
        case '+':
          // Scale up
          if (selectedObjects.length > 0 && !event.ctrlKey) {
            event.preventDefault();
            const canvasAPI = { getObject, updateObject };
            selectedObjects.forEach(objectId => {
              scaleObject(objectId, 2.0, canvasAPI);
            });
          }
          break;
        case '-':
        case '_':
          // Scale down
          if (selectedObjects.length > 0 && !event.ctrlKey) {
            event.preventDefault();
            const canvasAPI = { getObject, updateObject };
            selectedObjects.forEach(objectId => {
              scaleObject(objectId, 0.5, canvasAPI);
            });
          }
          break;
      }
    };

    // Listen for tool creation completion to auto-return to pan mode
    const handleCreationComplete = (data: { toolId: string; objectId: string }) => {
      clearSelection();
      setActiveTool(null);
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    eventBus.on('tool:creation-complete', handleCreationComplete);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      eventBus.off('tool:creation-complete', handleCreationComplete);
    };
  }, [activeTool, setActiveTool, eventBus, selectedObjects, removeObject, clearSelection]);

  // Show context menu when an object is selected and not dragging
  useEffect(() => {
    if (selectedObjects.length === 1 && !isDragging) {
      setShowContextMenu(true);
    } else {
      setShowContextMenu(false);
    }
  }, [selectedObjects, isDragging]);

  const handleContextMenuClose = useCallback(() => {
    setShowContextMenu(false);
  }, []);

  const handleContextMenuDelete = useCallback(() => {
    if (selectedObjects.length > 0) {
      selectedObjects.forEach(objectId => {
        eventBus.emit('object:removed', { objectId });
        removeObject(objectId);
      });
      clearSelection();
    }
  }, [selectedObjects, removeObject, clearSelection, eventBus]);

  const handleContextMenuUpdate = useCallback((objectId: string, updates: Partial<any>) => {
    updateObject(objectId, updates);
  }, [updateObject]);

  // Zoom controls with infinite range
  const handleZoomIn = useCallback(() => {
    const newZoom = Math.min(1000, viewport.zoom * 1.4);
    setViewport({ zoom: newZoom });
  }, [viewport.zoom, setViewport]);

  const handleZoomOut = useCallback(() => {
    const newZoom = Math.max(0.01, viewport.zoom / 1.4);
    setViewport({ zoom: newZoom });
  }, [viewport.zoom, setViewport]);

  const handleZoomReset = useCallback(() => {
    setViewport({ zoom: 20, center: { x: 0, y: 0 } });
  }, [setViewport]);

  const handleCenterOnly = useCallback(() => {
    setViewport({ center: { x: 0, y: 0 } });
  }, [setViewport]);

  // Scroll wheel handling: zoom with ctrl, pan without ctrl
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Always prevent default scrolling
      
      // Get current viewport state directly from store
      const currentState = useCanvasStore.getState();
      const currentViewport = currentState.viewport;
      
      if (event.ctrlKey || event.metaKey) {
        // Zoom with ctrl+scroll
        const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = Math.max(0.01, Math.min(1000, currentViewport.zoom * zoomFactor));
        setViewport({ zoom: newZoom });
      } else {
        // Pan without ctrl - simple and consistent approach
        const panSensitivity = 1; // Adjust this to control pan speed
        
        // Use simple delta values - most browsers use 100 as a standard wheel delta
        const deltaX = event.shiftKey ? event.deltaY : 0; // horizontal pan with shift
        const deltaY = event.shiftKey ? 0 : event.deltaY; // vertical pan without shift
        
        // Simple world coordinate calculation
        const worldDeltaX = (deltaX * panSensitivity) / currentViewport.zoom;
        const worldDeltaY = (deltaY * panSensitivity) / currentViewport.zoom;
        
        setViewport({
          center: {
            x: currentViewport.center.x + worldDeltaX,
            y: currentViewport.center.y - worldDeltaY // subtract because scroll down should move view down
          }
        });
      }
    };

    const canvas = svgRef.current;
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        canvas.removeEventListener('wheel', handleWheel);
      };
    }
  }, [setViewport]);

  // All grid and object rendering logic moved to separate components

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="absolute inset-0 bg-white"
        style={{ touchAction: 'none' }}
      >
        <GridRenderer
          viewport={viewport}
          canvasSize={{ width, height }}
          worldToScreen={worldToScreen}
          objects={objects}
        />
        
        <ObjectRenderer
          objects={objects}
          viewport={viewport}
          touchTargetSize={touchTargetSize}
          worldToScreen={worldToScreen}
          selectedObjects={selectedObjects}
          canvasSize={{ width, height }}
        />
        
        {/* Preview cursor dot in build mode - hide when pointer is down */}
        {activeTool && mousePosition && !pointerStateRef.current.isDown && (
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="4"
            fill="rgba(37, 99, 235, 0.4)"
            stroke="#2563eb"
            strokeWidth="1"
            opacity="0.8"
            style={{ pointerEvents: 'none' }}
          />
        )}
      </svg>

      <DebugInfo
        capabilities={capabilities}
        viewport={viewport}
        activeTool={activeTool}
        selectedObjectsCount={selectedObjects.length}
      />

      <ZoomControls
        viewport={viewport}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
        onCenterOnly={handleCenterOnly}
      />

      {/* Context menu for selected objects */}
      {showContextMenu && selectedObjects.length === 1 && (
        <ContextMenu
          selectedObject={objects.find(obj => obj.id === selectedObjects[0]) || null}
          onDelete={handleContextMenuDelete}
          onUpdate={handleContextMenuUpdate}
          onClose={handleContextMenuClose}
        />
      )}

      {/* Settings panel */}
      <SettingsPanel />

      {/* First-visit tutorial overlay */}
      <TutorialOverlay />

      {/* Info modal */}
      <InfoModal />
    </div>
  );
}