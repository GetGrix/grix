// Object rendering component for better modularity
import React, { useState } from 'react';
import { formatCoordinate } from '../utils/gridUtils.js';
import type { MathObject, Point, Viewport } from '@getgrix/core';

interface ObjectRendererProps {
  objects: MathObject[];
  viewport: Viewport;
  touchTargetSize: number;
  worldToScreen: (point: Point) => Point;
  selectedObjects?: string[];
}

export function ObjectRenderer({ objects, viewport, touchTargetSize, worldToScreen, selectedObjects = [] }: ObjectRendererProps) {
  // Determine grid size for coordinate formatting (shared across all objects)
  const gridSize = viewport.zoom > 50 ? 0.1 : viewport.zoom > 10 ? 1 : 10;
  
  // Track hover state for ray endpoints
  const [hoveredEndpoint, setHoveredEndpoint] = useState<string | null>(null);

  // Render mathematical objects
  const renderObject = (obj: MathObject) => {
    const isSelected = selectedObjects.includes(obj.id);
    
    switch (obj.type) {
      case 'ray':
        const start = worldToScreen(obj.properties.startPoint);
        const end = worldToScreen(obj.properties.endPoint);
        
        return (
          <g key={obj.id}>
            {/* Selection glow effect */}
            {isSelected && (
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#60A5FA"
                strokeWidth={6}
                opacity={0.4}
              />
            )}
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={isSelected ? "#1D4ED8" : "#2563eb"}
              strokeWidth={isSelected ? 3 : 2}
            />
            <circle
              cx={start.x}
              cy={start.y}
              r={touchTargetSize / 4}
              fill={isSelected ? "#1D4ED8" : "#2563eb"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredEndpoint(`${obj.id}-start`)}
              onMouseLeave={() => setHoveredEndpoint(null)}
            />
            <circle
              cx={end.x}
              cy={end.y}
              r={touchTargetSize / 4}
              fill={isSelected ? "#1D4ED8" : "#2563eb"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredEndpoint(`${obj.id}-end`)}
              onMouseLeave={() => setHoveredEndpoint(null)}
            />
            
            {/* Coordinate labels for ray points - hide start if it's at origin, show end only on hover */}
            {!(Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001) && hoveredEndpoint === `${obj.id}-start` && (
              <text
                x={start.x - 5}
                y={start.y - 10}
                fontSize="10"
                fontWeight="500"
                fill={isSelected ? "#1D4ED8" : "#2563eb"}
                textAnchor="middle"
                opacity="0.8"
              >
                ({formatCoordinate(obj.properties.startPoint.x, gridSize)}, {formatCoordinate(obj.properties.startPoint.y, gridSize)})
              </text>
            )}
            {hoveredEndpoint === `${obj.id}-end` && (
              <text
                x={(() => {
                  // For lines from origin, show coordinates to the left to avoid mouse covering them
                  const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
                  return isFromOrigin ? end.x - 60 : end.x + 5;
                })()}
                y={(() => {
                  // For lines from origin, show coordinates at same level as point
                  const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
                  return isFromOrigin ? end.y + 4 : end.y - 10;
                })()}
                fontSize="10"
                fontWeight="500"
                fill={isSelected ? "#1D4ED8" : "#2563eb"}
                textAnchor={(() => {
                  const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
                  return isFromOrigin ? "end" : "middle";
                })()}
                opacity="0.8"
              >
                ({formatCoordinate(obj.properties.endPoint.x, gridSize)}, {formatCoordinate(obj.properties.endPoint.y, gridSize)})
              </text>
            )}
            
            {/* Slope label with fraction format - only show y/x for lines from origin */}
            {(() => {
              const dx = obj.properties.endPoint.x - obj.properties.startPoint.x;
              const dy = obj.properties.endPoint.y - obj.properties.startPoint.y;
              
              // Check if line starts from origin (0,0)
              const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
              
              if (Math.abs(dx) > 0.001) {
                // Position fraction label at the endpoint
                const labelX = end.x;
                const labelY = end.y;
                
                if (isFromOrigin) {
                  // For lines from origin, show y/x using actual endpoint coordinates (no simplification)
                  const endX = obj.properties.endPoint.x;
                  const endY = obj.properties.endPoint.y;
                  
                  // Use actual coordinates without simplification for the fraction display
                  // Round to integers for clean display
                  const numerator = Math.round(endY);
                  const denominator = Math.round(endX);
                  
                  // Always render as fraction for origin lines using actual coordinates
                  return (
                    <g>
                      <text
                        x={labelX + 15}
                        y={labelY - 25}
                        fontSize="9"
                        fontWeight="500"
                        fill={isSelected ? "#1D4ED8" : "#2563eb"}
                        textAnchor="middle"
                        opacity="0.8"
                      >
                        {numerator}
                      </text>
                      <line
                        x1={labelX + 8}
                        y1={labelY - 19}
                        x2={labelX + 22}
                        y2={labelY - 19}
                        stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                        strokeWidth="1"
                        opacity="0.8"
                      />
                      <text
                        x={labelX + 15}
                        y={labelY - 9}
                        fontSize="9"
                        fontWeight="500"
                        fill={isSelected ? "#1D4ED8" : "#2563eb"}
                        textAnchor="middle"
                        opacity="0.8"
                      >
                        {denominator}
                      </text>
                    </g>
                  );
                } else {
                  // For lines not from origin, don't show slope labels (coordinates will show on hover)
                  return null;
                }
              }
              return null;
            })()}
          </g>
        );
      
      case 'rectangle':
        const topLeft = worldToScreen({ 
          x: obj.properties.x, 
          y: obj.properties.y + obj.properties.height 
        });
        const rectWidth = obj.properties.width * viewport.zoom;
        const rectHeight = obj.properties.height * viewport.zoom;
        
        // Calculate all four corner coordinates in world space
        const bottomLeft = { x: obj.properties.x, y: obj.properties.y };
        const bottomRight = { x: obj.properties.x + obj.properties.width, y: obj.properties.y };
        const topLeftWorld = { x: obj.properties.x, y: obj.properties.y + obj.properties.height };
        const topRight = { x: obj.properties.x + obj.properties.width, y: obj.properties.y + obj.properties.height };
        
        return (
          <g key={obj.id}>
            {/* Selection glow effect */}
            {isSelected && (
              <rect
                x={topLeft.x - 3}
                y={topLeft.y - 3}
                width={rectWidth + 6}
                height={rectHeight + 6}
                fill="none"
                stroke="#60A5FA"
                strokeWidth={4}
                opacity={0.5}
                style={{ cursor: 'pointer' }}
              />
            )}
            <rect
              x={topLeft.x}
              y={topLeft.y}
              width={rectWidth}
              height={rectHeight}
              fill={isSelected ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)"}
              stroke={isSelected ? "#16A34A" : "#22c55e"}
              strokeWidth={isSelected ? 3 : 2}
              style={{ cursor: 'pointer' }}
            />
            
            {/* Corner handles for resizing - all four corners */}
            <circle
              cx={topLeft.x}
              cy={topLeft.y}
              r={touchTargetSize / 6}
              fill={isSelected ? "#16A34A" : "#22c55e"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'nw-resize' }}
            />
            <circle
              cx={topLeft.x + rectWidth}
              cy={topLeft.y}
              r={touchTargetSize / 6}
              fill={isSelected ? "#16A34A" : "#22c55e"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'ne-resize' }}
            />
            <circle
              cx={topLeft.x}
              cy={topLeft.y + rectHeight}
              r={touchTargetSize / 6}
              fill={isSelected ? "#16A34A" : "#22c55e"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'sw-resize' }}
            />
            <circle
              cx={topLeft.x + rectWidth}
              cy={topLeft.y + rectHeight}
              r={touchTargetSize / 6}
              fill={isSelected ? "#16A34A" : "#22c55e"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'se-resize' }}
            />
            
            {/* Coordinate labels for all corners */}
            <text
              x={topLeft.x - 10}
              y={topLeft.y - 5}
              fontSize="9"
              fontWeight="500"
              fill="#22c55e"
              textAnchor="end"
              opacity="0.8"
            >
              ({formatCoordinate(topLeftWorld.x, gridSize)}, {formatCoordinate(topLeftWorld.y, gridSize)})
            </text>
            <text
              x={topLeft.x + rectWidth + 10}
              y={topLeft.y - 5}
              fontSize="9"
              fontWeight="500"
              fill="#22c55e"
              textAnchor="start"
              opacity="0.8"
            >
              ({formatCoordinate(topRight.x, gridSize)}, {formatCoordinate(topRight.y, gridSize)})
            </text>
            <text
              x={topLeft.x - 10}
              y={topLeft.y + rectHeight + 15}
              fontSize="9"
              fontWeight="500"
              fill="#22c55e"
              textAnchor="end"
              opacity="0.8"
            >
              ({formatCoordinate(bottomLeft.x, gridSize)}, {formatCoordinate(bottomLeft.y, gridSize)})
            </text>
            <text
              x={topLeft.x + rectWidth + 10}
              y={topLeft.y + rectHeight + 15}
              fontSize="9"
              fontWeight="500"
              fill="#22c55e"
              textAnchor="start"
              opacity="0.8"
            >
              ({formatCoordinate(bottomRight.x, gridSize)}, {formatCoordinate(bottomRight.y, gridSize)})
            </text>
            
            {/* Area label in center - format as "h x w = area" */}
            <text
              x={topLeft.x + rectWidth / 2}
              y={topLeft.y + rectHeight / 2}
              fontSize="12"
              fontWeight="600"
              fill="#22c55e"
              textAnchor="middle"
              opacity="0.9"
            >
              {formatCoordinate(obj.properties.height, gridSize)} × {formatCoordinate(obj.properties.width, gridSize)} = {formatCoordinate(obj.properties.area, gridSize)}
            </text>
          </g>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* No arrow markers needed for lines */}
      <defs>
      </defs>

      {/* Mathematical objects */}
      <g className="objects">
        {objects.map(renderObject)}
      </g>
    </>
  );
}