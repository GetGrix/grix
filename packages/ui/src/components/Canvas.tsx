import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useInputSystem } from '../hooks/useInputSystem.js';
import { useCanvasPluginIntegration, usePluginManager } from '../plugins/PluginManager.js';
import { GridRenderer } from './GridRenderer.js';
import { ZoomControls } from './ZoomControls.js';
import { ObjectRenderer } from './ObjectRenderer.js';
import { DebugInfo } from './DebugInfo.js';
import { ContextMenu } from './ContextMenu.js';
import type { UnifiedPointerEvent } from '@getgrix/core';
import type { GestureEvent } from '../hooks/useInputSystem.js';

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
    worldToScreen
  } = useCanvasStore();

  // Connect to plugin system
  const pluginHandlers = useCanvasPluginIntegration();
  const { activeTool, setActiveTool, eventBus } = usePluginManager();

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
    
    // Always check if clicking on an object (regardless of active tool)
    const tolerance = 22; // Use fixed tolerance for now
    const worldPoint = screenToWorld(screenPoint);
    
    let objectClicked = false;
    
    for (const obj of objects) {
      if (obj.type === 'ray') {
        // Check if clicking near ray handles
        const startScreen = worldToScreen(obj.properties.startPoint);
        const endScreen = worldToScreen(obj.properties.endPoint);
        
        const startDistance = Math.sqrt(
          Math.pow(screenPoint.x - startScreen.x, 2) + 
          Math.pow(screenPoint.y - startScreen.y, 2)
        );
        const endDistance = Math.sqrt(
          Math.pow(screenPoint.x - endScreen.x, 2) + 
          Math.pow(screenPoint.y - endScreen.y, 2)
        );
        
        // Check line endpoints first
        if (startDistance <= tolerance || endDistance <= tolerance) {
          // Store selection info but still allow tool to handle the event for manipulation
          objectClicked = true;
          pointerStateRef.current.pendingSelection = { objectId: obj.id, type: 'ray' };
          // Select object but don't activate tool - keep selection separate from build mode
          selectObject(obj.id);
          break;
        }
        
        // Check if clicking anywhere on the line
        const lineDistanceThreshold = 8; // pixels
        const lineDistance = distanceFromPointToLine(screenPoint, startScreen, endScreen);
        if (lineDistance <= lineDistanceThreshold) {
          // Store selection info but still allow tool to handle the event for manipulation
          objectClicked = true;
          pointerStateRef.current.pendingSelection = { objectId: obj.id, type: 'ray' };
          // Select object but don't activate tool - keep selection separate from build mode
          selectObject(obj.id);
          break;
        }
      } else if (obj.type === 'rectangle') {
        // Check if clicking inside rectangle or near handles
        const topLeft = worldToScreen({ 
          x: obj.properties.x, 
          y: obj.properties.y + obj.properties.height 
        });
        const rectWidth = obj.properties.width * viewport.zoom;
        const rectHeight = obj.properties.height * viewport.zoom;
        
        // Check if inside rectangle
        if (screenPoint.x >= topLeft.x && 
            screenPoint.x <= topLeft.x + rectWidth &&
            screenPoint.y >= topLeft.y && 
            screenPoint.y <= topLeft.y + rectHeight) {
          // Store selection info but still allow tool to handle the event for manipulation
          objectClicked = true;
          pointerStateRef.current.pendingSelection = { objectId: obj.id, type: 'rectangle' };
          // Select object but don't activate tool - keep selection separate from build mode
          selectObject(obj.id);
          break;
        }
        
        // Check all four corner handles
        const corners = [
          { x: topLeft.x, y: topLeft.y }, // top-left
          { x: topLeft.x + rectWidth, y: topLeft.y }, // top-right  
          { x: topLeft.x, y: topLeft.y + rectHeight }, // bottom-left
          { x: topLeft.x + rectWidth, y: topLeft.y + rectHeight } // bottom-right
        ];
        
        const nearCorner = corners.some(corner => {
          const distance = Math.sqrt(
            Math.pow(screenPoint.x - corner.x, 2) + 
            Math.pow(screenPoint.y - corner.y, 2)
          );
          return distance <= tolerance;
        });
        
        if (nearCorner) {
          // Store selection info but still allow tool to handle the event for manipulation
          objectClicked = true;
          pointerStateRef.current.pendingSelection = { objectId: obj.id, type: 'rectangle' };
          // Select object but don't activate tool - keep selection separate from build mode
          selectObject(obj.id);
          break;
        }
      }
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
        if (gesture.scale) {
          const newZoom = Math.max(0.1, Math.min(10, viewport.zoom * gesture.scale));
          setViewport({ zoom: newZoom });
        }
        break;
      case 'tap':
        // Handle tap events (tool interactions will be handled by plugins)
        break;
    }
  }, [viewport.zoom, setViewport]);

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
      }
    };

    // Listen for tool creation completion to auto-return to pan mode
    const handleCreationComplete = (data: { toolId: string; objectId: string }) => {
      console.log('Object created, returning to pan mode:', data);
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

  // Show context menu when an object is selected
  useEffect(() => {
    if (selectedObjects.length === 1) {
      setShowContextMenu(true);
    } else {
      setShowContextMenu(false);
    }
  }, [selectedObjects]);

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
          onClose={handleContextMenuClose}
        />
      )}
    </div>
  );
}