// Object rendering component for better modularity
import React, { useState } from 'react';
import { formatCoordinate } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';
import type { MathObject, Point, Viewport } from '@getgrix/core';

interface ObjectRendererProps {
  objects: MathObject[];
  viewport: Viewport;
  touchTargetSize: number;
  worldToScreen: (point: Point) => Point;
  selectedObjects?: string[];
  canvasSize: { width: number; height: number };
}

export function ObjectRenderer({ objects, viewport, touchTargetSize, worldToScreen, selectedObjects = [], canvasSize }: ObjectRendererProps) {
  // Get visualization settings
  const visualSettings = useVisualizationStore();
  
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
              style={{ cursor: 'move' }}
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
              style={{ cursor: 'move' }}
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
            
            {/* Infinite line extension and equivalent fractions for origin lines */}
            {(() => {
              const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
              
              if (!isFromOrigin) return null;
              
              const endX = obj.properties.endPoint.x;
              const endY = obj.properties.endPoint.y;
              
              // Only show if we have a valid line (not just a point)
              if (Math.abs(endX) < 0.001 && Math.abs(endY) < 0.001) return null;
              
              // Calculate the direction vector
              const dx = endX;
              const dy = endY;
              
              // Find the bounds of the canvas in world coordinates
              const viewBounds = {
                left: viewport.center.x - (canvasSize.width / 2) / viewport.zoom,
                right: viewport.center.x + (canvasSize.width / 2) / viewport.zoom,
                top: viewport.center.y + (canvasSize.height / 2) / viewport.zoom,
                bottom: viewport.center.y - (canvasSize.height / 2) / viewport.zoom
              };
              
              // Extend the line far beyond the viewport
              const maxExtent = Math.max(
                Math.abs(viewBounds.left), Math.abs(viewBounds.right),
                Math.abs(viewBounds.top), Math.abs(viewBounds.bottom)
              ) * 2;
              
              // Calculate extended endpoint
              const length = Math.sqrt(dx * dx + dy * dy);
              if (length === 0) return null;
              
              const unitX = dx / length;
              const unitY = dy / length;
              const extendedEnd = {
                x: maxExtent * unitX,
                y: maxExtent * unitY
              };
              
              const extendedEndScreen = worldToScreen(extendedEnd);
              
              // Find all integer intersections along the extended line
              const equivalentPoints = [];
              
              // We'll check multiples of the original fraction
              const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);
              const originalGCD = gcd(Math.abs(Math.round(endY)), Math.abs(Math.round(endX)));
              
              if (originalGCD > 0) {
                const baseY = Math.round(endY) / originalGCD;
                const baseX = Math.round(endX) / originalGCD;
                
                // Find multiples that are within reasonable bounds and have integer coordinates
                for (let multiplier = 1; multiplier <= 20; multiplier++) {
                  const pointX = baseX * multiplier;
                  const pointY = baseY * multiplier;
                  
                  // Check if this point is within a reasonable distance and has integer coordinates
                  if (Math.abs(pointX - Math.round(pointX)) < 0.001 && 
                      Math.abs(pointY - Math.round(pointY)) < 0.001 &&
                      Math.abs(pointX) <= maxExtent && 
                      Math.abs(pointY) <= maxExtent) {
                    
                    const screenPos = worldToScreen({ x: pointX, y: pointY });
                    
                    // Only include if within visible area (with some padding)
                    if (screenPos.x >= -100 && screenPos.x <= canvasSize.width + 100 &&
                        screenPos.y >= -100 && screenPos.y <= canvasSize.height + 100) {
                      equivalentPoints.push({
                        world: { x: pointX, y: pointY },
                        screen: screenPos,
                        fraction: { num: Math.round(pointY), den: Math.round(pointX) }
                      });
                    }
                  }
                }
              }
              
              // Calculate line length multiples for educational purposes
              const originalLength = Math.sqrt(endX * endX + endY * endY);
              const lengthMultiples = [];
              
              if (originalLength > 0 && visualSettings.showLengthMultiples) {
                for (let multiple = 2; multiple <= 5; multiple++) {
                  const multipleX = endX * multiple;
                  const multipleY = endY * multiple;
                  const screenPos = worldToScreen({ x: multipleX, y: multipleY });
                  
                  // Only show if within reasonable view bounds
                  if (screenPos.x >= -50 && screenPos.x <= canvasSize.width + 50 &&
                      screenPos.y >= -50 && screenPos.y <= canvasSize.height + 50) {
                    lengthMultiples.push({
                      screen: screenPos,
                      multiple: multiple
                    });
                  }
                }
              }

              return (
                <g>
                  {/* Extended dotted line - only show if equivalent fractions are enabled */}
                  {visualSettings.showEquivalentFractions && (
                    <line
                      x1={end.x}
                      y1={end.y}
                      x2={extendedEndScreen.x}
                      y2={extendedEndScreen.y}
                      stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                      strokeWidth="1"
                      opacity="0.3"
                      strokeDasharray="3,3"
                    />
                  )}
                  
                  {/* Length multiple tick marks */}
                  {lengthMultiples.map((mark, index) => (
                    <g key={`length-${index}`}>
                      {/* Small tick mark */}
                      <circle
                        cx={mark.screen.x}
                        cy={mark.screen.y}
                        r="2"
                        fill={isSelected ? "#1D4ED8" : "#2563eb"}
                        opacity="0.4"
                      />
                      {/* Subtle multiple label */}
                      <text
                        x={mark.screen.x + 8}
                        y={mark.screen.y - 8}
                        fontSize="7"
                        fontWeight="400"
                        fill={isSelected ? "#1D4ED8" : "#2563eb"}
                        textAnchor="start"
                        opacity="0.5"
                      >
                        ×{mark.multiple}
                      </text>
                    </g>
                  ))}
                  
                  {/* Soft area rectangle for multiplication visualization */}
                  {visualSettings.showAreaRectangle && (() => {
                    // Only show if endpoint has positive integer-ish coordinates
                    const roundedX = Math.round(endX);
                    const roundedY = Math.round(endY);
                    
                    if (roundedX > 0 && roundedY > 0 && 
                        Math.abs(endX - roundedX) < 0.1 && 
                        Math.abs(endY - roundedY) < 0.1) {
                      
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const endpointScreen = worldToScreen({ x: roundedX, y: roundedY });
                      
                      const rectWidth = Math.abs(endpointScreen.x - originScreen.x);
                      const rectHeight = Math.abs(endpointScreen.y - originScreen.y);
                      
                      // Position rectangle properly (origin at bottom-left in world coords)
                      const rectX = Math.min(originScreen.x, endpointScreen.x);
                      const rectY = Math.min(originScreen.y, endpointScreen.y);
                      
                      const area = roundedX * roundedY;
                      
                      return (
                        <g>
                          {/* Super soft background rectangle */}
                          <rect
                            x={rectX}
                            y={rectY}
                            width={rectWidth}
                            height={rectHeight}
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            opacity="0.08"
                            stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                            strokeWidth="0.5"
                            strokeOpacity="0.15"
                          />
                          
                          {/* Area label at top center */}
                          <text
                            x={rectX + rectWidth / 2}
                            y={rectY + 15}
                            fontSize="10"
                            fontWeight="400"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="middle"
                            opacity="0.6"
                          >
                            {roundedY} × {roundedX} = {area}
                          </text>
                        </g>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* Rise/Run Triangle for slope visualization */}
                  {visualSettings.showRiseRunTriangle && (() => {
                    const roundedX = Math.round(endX);
                    const roundedY = Math.round(endY);
                    
                    if (roundedX > 0 && roundedY > 0 && 
                        Math.abs(endX - roundedX) < 0.1 && 
                        Math.abs(endY - roundedY) < 0.1) {
                      
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const rightScreen = worldToScreen({ x: roundedX, y: 0 });
                      const topScreen = worldToScreen({ x: roundedX, y: roundedY });
                      
                      return (
                        <g>
                          {/* Triangle outline */}
                          <path
                            d={`M ${originScreen.x},${originScreen.y} L ${rightScreen.x},${rightScreen.y} L ${topScreen.x},${topScreen.y} Z`}
                            fill="none"
                            stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                            strokeWidth="1"
                            opacity="0.4"
                            strokeDasharray="2,2"
                          />
                          
                          {/* Rise label */}
                          <text
                            x={rightScreen.x + 10}
                            y={(rightScreen.y + topScreen.y) / 2}
                            fontSize="9"
                            fontWeight="500"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="start"
                            opacity="0.7"
                          >
                            rise: {roundedY}
                          </text>
                          
                          {/* Run label */}
                          <text
                            x={(originScreen.x + rightScreen.x) / 2}
                            y={rightScreen.y + 8}
                            fontSize="9"
                            fontWeight="500"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="middle"
                            opacity="0.7"
                          >
                            run: {roundedX}
                          </text>
                        </g>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* Radial distance markers as quarter circles */}
                  {visualSettings.showDistanceMarkers && (() => {
                    const radialMarkers = [];
                    const lineLength = Math.sqrt(endX * endX + endY * endY);
                    
                    if (lineLength > 0) {
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const lineAngle = Math.atan2(endY, endX);
                      
                      // Show quarter-circle arcs at unit intervals from origin, plus one at the exact endpoint
                      const radiiToShow = [];
                      
                      // Add integer unit circles
                      for (let i = 1; i <= Math.floor(lineLength); i++) {
                        radiiToShow.push({ radius: i, isUnit: true });
                      }
                      
                      // Add circle at exact endpoint if it's not already an integer
                      if (Math.abs(lineLength - Math.floor(lineLength)) > 0.1) {
                        radiiToShow.push({ radius: lineLength, isUnit: false });
                      }
                      
                      radiiToShow.forEach(({ radius, isUnit }, index) => {
                        const radiusInScreen = radius * viewport.zoom;
                        
                        // Only show if radius is reasonable size on screen
                        if (radiusInScreen >= 15 && radiusInScreen <= 800) {
                          // Only show if we have a meaningful angle (not too close to x-axis)
                          if (Math.abs(lineAngle) > 0.05) {
                            const arcPath = `M ${originScreen.x + radiusInScreen},${originScreen.y} A ${radiusInScreen},${radiusInScreen} 0 0,0 ${originScreen.x + radiusInScreen * Math.cos(lineAngle)},${originScreen.y - radiusInScreen * Math.sin(lineAngle)}`;
                            
                            radialMarkers.push(
                              <path
                                key={`radial-${radius}`}
                                d={arcPath}
                                fill="none"
                                stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                                strokeWidth={isUnit ? "1" : "1.5"}
                                opacity={isUnit ? "0.3" : "0.6"}
                                strokeDasharray={isUnit ? "2,2" : "none"}
                              />
                            );
                          }
                        }
                      });
                    }
                    
                    return <g>{radialMarkers}</g>;
                  })()}
                  
                  {/* Angle arc for trigonometry preview */}
                  {visualSettings.showAngleArc && (() => {
                    let angle = Math.atan2(endY, endX);
                    
                    // Convert negative angles to positive (0-360°)
                    if (angle < 0) {
                      angle = angle + 2 * Math.PI;
                    }
                    
                    // Only show if we have a meaningful line (not just a point)
                    if (Math.abs(endX) > 0.05 || Math.abs(endY) > 0.05) {
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const arcRadius = 50; // screen pixels
                      const angleInDegrees = (angle * 180 / Math.PI).toFixed(1);
                      
                      // Calculate arc path - always from positive x-axis to the line direction
                      const startAngle = 0;
                      const endAngle = angle;
                      
                      // Determine if we need a large arc (> 180°)
                      const largeArcFlag = angle > Math.PI ? 1 : 0;
                      
                      const arcPath = `M ${originScreen.x + arcRadius},${originScreen.y} A ${arcRadius},${arcRadius} 0 ${largeArcFlag},0 ${originScreen.x + arcRadius * Math.cos(endAngle)},${originScreen.y - arcRadius * Math.sin(endAngle)}`;
                      
                      // Position text at the middle of the arc
                      const textAngle = angle / 2;
                      const textRadius = arcRadius * 0.7;
                      const textX = originScreen.x + textRadius * Math.cos(textAngle);
                      const textY = originScreen.y - textRadius * Math.sin(textAngle);
                      
                      return (
                        <g>
                          {/* Arc */}
                          <path
                            d={arcPath}
                            fill="none"
                            stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                            strokeWidth="2"
                            opacity="0.6"
                          />
                          
                          {/* Angle symbol and value */}
                          <text
                            x={textX}
                            y={textY}
                            fontSize="11"
                            fontWeight="600"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="middle"
                            opacity="0.8"
                          >
                            θ = {angleInDegrees}°
                          </text>
                        </g>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* Equivalent fraction points */}
                  {visualSettings.showEquivalentFractions && equivalentPoints.map((point, index) => {
                    // Don't show green circle if it's at x=1 and division answer is also showing
                    const isAtXOne = Math.abs(point.world.x - 1) < 0.1;
                    const shouldSkipForDivision = isAtXOne && visualSettings.showDivisionAnswer;
                    
                    // Don't show green circle if it's at the same location as the line endpoint (which already has blue fraction label)
                    const isAtEndpoint = Math.abs(point.world.x - endX) < 0.1 && Math.abs(point.world.y - endY) < 0.1;
                    
                    if (shouldSkipForDivision || isAtEndpoint) return null;
                    
                    return (
                      <g key={`equiv-${index}`}>
                        {/* Green hollow circle */}
                        <circle
                          cx={point.screen.x}
                          cy={point.screen.y}
                          r="4"
                          fill="white"
                          stroke="#22C55E"
                          strokeWidth="2"
                          opacity="0.8"
                        />
                        {/* Fraction label */}
                        <text
                          x={point.screen.x + 15}
                          y={point.screen.y + 4}
                          fontSize="9"
                          fontWeight="500"
                          fill="#22C55E"
                          textAnchor="start"
                          opacity="0.8"
                        >
                          {point.fraction.num}/{point.fraction.den}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
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