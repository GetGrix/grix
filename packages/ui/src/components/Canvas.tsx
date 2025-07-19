import React, { useRef, useEffect, useCallback } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useInputSystem } from '../hooks/useInputSystem.js';
import { useCanvasPluginIntegration, usePluginManager } from '../plugins/PluginManager.js';
import type { UnifiedPointerEvent } from '@getgrix/core';
import type { GestureEvent } from '../hooks/useInputSystem.js';

interface CanvasProps {
  width?: number;
  height?: number;
  className?: string;
  onObjectInteraction?: (objectId: string, event: UnifiedPointerEvent) => void;
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
    snapToGrid,
    gridDensity,
    canvasSize,
    setCanvasSize,
    screenToWorld,
    worldToScreen
  } = useCanvasStore();

  // Connect to plugin system
  const pluginHandlers = useCanvasPluginIntegration();
  const { activeTool, setActiveTool } = usePluginManager();

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

  // Handle pointer events
  const handlePointerDown = useCallback((event: UnifiedPointerEvent) => {
    const screenPoint = { x: event.x, y: event.y };
    
    // If no tool is active, check if clicking on an object to auto-activate tool
    if (!activeTool) {
      const tolerance = 22; // Use fixed tolerance for now
      const worldPoint = screenToWorld(screenPoint);
      
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
          
          if (startDistance <= tolerance || endDistance <= tolerance) {
            setActiveTool('ray-tool');
            // Let the newly activated tool handle this click on next frame
            setTimeout(() => {
              pluginHandlers.handlePointerDown(event);
            }, 0);
            return;
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
            setActiveTool('rectangle-tool');
            setTimeout(() => {
              pluginHandlers.handlePointerDown(event);
            }, 0);
            return;
          }
          
          // Check corner handles
          const cornerDistance1 = Math.sqrt(
            Math.pow(screenPoint.x - topLeft.x, 2) + 
            Math.pow(screenPoint.y - topLeft.y, 2)
          );
          const cornerDistance2 = Math.sqrt(
            Math.pow(screenPoint.x - (topLeft.x + rectWidth), 2) + 
            Math.pow(screenPoint.y - (topLeft.y + rectHeight), 2)
          );
          
          if (cornerDistance1 <= tolerance || cornerDistance2 <= tolerance) {
            setActiveTool('rectangle-tool');
            setTimeout(() => {
              pluginHandlers.handlePointerDown(event);
            }, 0);
            return;
          }
        }
      }
    }
    
    // Forward to plugin system
    pluginHandlers.handlePointerDown(event);
    
    // Only start panning if no tool is active and no object was clicked
    if (!activeTool && (event.type === 'touch' || event.type === 'mouse')) {
      panStateRef.current = {
        isPanning: true,
        startPoint: { x: event.x, y: event.y },
        startCenter: { ...viewport.center }
      };
    }
  }, [viewport.center, pluginHandlers, activeTool, setActiveTool, objects, screenToWorld, worldToScreen, viewport.zoom]);

  const handlePointerMove = useCallback((event: UnifiedPointerEvent) => {
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
  }, [viewport.zoom, setViewport, pluginHandlers, activeTool]);

  const handlePointerUp = useCallback((event: UnifiedPointerEvent) => {
    // Forward to plugin system first
    pluginHandlers.handlePointerUp(event);
    
    // Reset pan state
    panStateRef.current.isPanning = false;
  }, [pluginHandlers]);

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

  // Calculate grid parameters
  const gridSize = gridDensity === 'fine' ? 1 : 10;
  const gridSpacing = gridSize * viewport.zoom;
  const shouldShowGrid = gridSpacing >= 8; // Only show grid if spacing is reasonable

  // Calculate visible grid bounds
  const viewBounds = {
    left: viewport.center.x - (width / 2) / viewport.zoom,
    right: viewport.center.x + (width / 2) / viewport.zoom,
    top: viewport.center.y + (height / 2) / viewport.zoom,
    bottom: viewport.center.y - (height / 2) / viewport.zoom
  };

  const gridStartX = Math.floor(viewBounds.left / gridSize) * gridSize;
  const gridEndX = Math.ceil(viewBounds.right / gridSize) * gridSize;
  const gridStartY = Math.floor(viewBounds.bottom / gridSize) * gridSize;
  const gridEndY = Math.ceil(viewBounds.top / gridSize) * gridSize;

  // Generate grid lines
  const verticalLines = [];
  const horizontalLines = [];
  
  if (shouldShowGrid) {
    for (let x = gridStartX; x <= gridEndX; x += gridSize) {
      const screenX = worldToScreen({ x, y: 0 }).x;
      const isAxis = Math.abs(x) < gridSize / 2;
      const isMajor = x % (gridSize * 5) === 0;
      
      verticalLines.push(
        <line
          key={`v${x}`}
          x1={screenX}
          y1={0}
          x2={screenX}
          y2={height}
          stroke={isAxis ? '#374151' : isMajor ? '#9CA3AF' : '#E5E7EB'}
          strokeWidth={isAxis ? 2 : isMajor ? 1 : 0.5}
          opacity={isAxis ? 1 : isMajor ? 0.6 : 0.3}
        />
      );
    }

    for (let y = gridStartY; y <= gridEndY; y += gridSize) {
      const screenY = worldToScreen({ x: 0, y }).y;
      const isAxis = Math.abs(y) < gridSize / 2;
      const isMajor = y % (gridSize * 5) === 0;
      
      horizontalLines.push(
        <line
          key={`h${y}`}
          x1={0}
          y1={screenY}
          x2={width}
          y2={screenY}
          stroke={isAxis ? '#374151' : isMajor ? '#9CA3AF' : '#E5E7EB'}
          strokeWidth={isAxis ? 2 : isMajor ? 1 : 0.5}
          opacity={isAxis ? 1 : isMajor ? 0.6 : 0.3}
        />
      );
    }
  }

  // Render mathematical objects
  const renderObject = (obj: any) => {
    switch (obj.type) {
      case 'ray':
        const start = worldToScreen(obj.properties.startPoint);
        const end = worldToScreen(obj.properties.endPoint);
        return (
          <g key={obj.id}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#2563eb"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
            <circle
              cx={start.x}
              cy={start.y}
              r={touchTargetSize / 4}
              fill="#2563eb"
              style={{ cursor: 'pointer' }}
            />
            <circle
              cx={end.x}
              cy={end.y}
              r={touchTargetSize / 4}
              fill="#2563eb"
              style={{ cursor: 'pointer' }}
            />
          </g>
        );
      
      case 'rectangle':
        const topLeft = worldToScreen({ 
          x: obj.properties.x, 
          y: obj.properties.y + obj.properties.height 
        });
        const rectWidth = obj.properties.width * viewport.zoom;
        const rectHeight = obj.properties.height * viewport.zoom;
        
        return (
          <g key={obj.id}>
            <rect
              x={topLeft.x}
              y={topLeft.y}
              width={rectWidth}
              height={rectHeight}
              fill="rgba(34, 197, 94, 0.2)"
              stroke="#22c55e"
              strokeWidth={2}
              style={{ cursor: 'pointer' }}
            />
            {/* Corner handles for resizing */}
            <circle
              cx={topLeft.x}
              cy={topLeft.y}
              r={touchTargetSize / 6}
              fill="#22c55e"
              style={{ cursor: 'nw-resize' }}
            />
            <circle
              cx={topLeft.x + rectWidth}
              cy={topLeft.y + rectHeight}
              r={touchTargetSize / 6}
              fill="#22c55e"
              style={{ cursor: 'se-resize' }}
            />
          </g>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="absolute inset-0 bg-white"
        style={{ touchAction: 'none' }}
      >
        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#2563eb"
            />
          </marker>
        </defs>

        {/* Grid */}
        <g className="grid">
          {verticalLines}
          {horizontalLines}
        </g>

        {/* Mathematical objects */}
        <g className="objects">
          {objects.map(renderObject)}
        </g>

        {/* Coordinate labels */}
        {shouldShowGrid && (
          <g className="labels" fontSize="12" fill="#6B7280">
            {/* X-axis labels */}
            {Array.from({ length: Math.floor((gridEndX - gridStartX) / gridSize) + 1 }, (_, i) => {
              const x = gridStartX + i * gridSize;
              if (Math.abs(x) < gridSize / 2) return null; // Skip origin
              const screenPos = worldToScreen({ x, y: 0 });
              return (
                <text
                  key={`xlabel${x}`}
                  x={screenPos.x}
                  y={screenPos.y + 20}
                  textAnchor="middle"
                  fontSize="10"
                >
                  {x}
                </text>
              );
            })}
            
            {/* Y-axis labels */}
            {Array.from({ length: Math.floor((gridEndY - gridStartY) / gridSize) + 1 }, (_, i) => {
              const y = gridStartY + i * gridSize;
              if (Math.abs(y) < gridSize / 2) return null; // Skip origin
              const screenPos = worldToScreen({ x: 0, y });
              return (
                <text
                  key={`ylabel${y}`}
                  x={screenPos.x - 15}
                  y={screenPos.y + 4}
                  textAnchor="middle"
                  fontSize="10"
                >
                  {y}
                </text>
              );
            })}
            
            {/* Origin label */}
            <text
              x={worldToScreen({ x: 0, y: 0 }).x + 10}
              y={worldToScreen({ x: 0, y: 0 }).y - 10}
              fontSize="10"
              fill="#374151"
            >
              (0,0)
            </text>
          </g>
        )}
      </svg>

      {/* Debug info */}
      {capabilities && (
        <div className="absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded">
          <div>Input: {capabilities.hasTouch ? '👆' : '🖱️'} {capabilities.hasPencil ? '✏️' : ''}</div>
          <div>Zoom: {viewport.zoom.toFixed(2)}x</div>
          <div>Center: ({viewport.center.x.toFixed(1)}, {viewport.center.y.toFixed(1)})</div>
          <div>Tool: {activeTool || 'Pan Mode'}</div>
        </div>
      )}
    </div>
  );
}