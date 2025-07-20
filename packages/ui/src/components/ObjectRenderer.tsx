// Object rendering component for better modularity
import React, { useState } from 'react';
import { formatCoordinate, calculateSnapSize } from '../utils/gridUtils.js';
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
  
  // Helper function to scale font sizes
  const scaledFontSize = (baseSize: number) => Math.round(baseSize * visualSettings.fontScale);
  
  // Calculate proper snap size for coordinate formatting (shared across all objects)
  const snapSize = calculateSnapSize(viewport, visualSettings.gridScale, visualSettings.snapPrecision);
  const gridSize = snapSize; // Use snap size for coordinate formatting
  
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
                fontSize={scaledFontSize(10)}
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
                fontSize={scaledFontSize(10)}
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
                  
                  // Use actual coordinates for the fraction display
                  // Format to appropriate precision based on grid size
                  const numerator = formatCoordinate(endY, gridSize);
                  const denominator = formatCoordinate(endX, gridSize);
                  
                  // Always render as fraction for origin lines using actual coordinates
                  return (
                    <g>
                      <text
                        x={labelX + 15}
                        y={labelY - 25}
                        fontSize={scaledFontSize(9)}
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
                        fontSize={scaledFontSize(9)}
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
              
              // Find reasonable points along the extended line
              const equivalentPoints = [];
              
              // Find equivalent fractions - only show true multiples of the original fraction
              if (Math.abs(endX) > 0.001 && Math.abs(endY) > 0.001) {
                // Get the original fraction in simplified form
                const originalX = endX;
                const originalY = endY;
                
                // Generate true equivalent fractions by multiplying the original ratio
                for (let multiple = 2; multiple <= 8; multiple++) {
                  const equivX = originalX * multiple;
                  const equivY = originalY * multiple;
                  
                  // Only include if both coordinates are integers (or close to snap precision)
                  const snapX = Math.round(equivX / snapSize) * snapSize;
                  const snapY = Math.round(equivY / snapSize) * snapSize;
                  
                  // Check if the multiplied coordinates align with snap grid
                  if (Math.abs(equivX - snapX) < snapSize / 10 && 
                      Math.abs(equivY - snapY) < snapSize / 10 &&
                      snapX > 0 && snapY > 0 && 
                      snapX <= Math.min(20, Math.abs(maxExtent)) && 
                      snapY <= Math.min(20, Math.abs(maxExtent))) {
                    
                    const screenPos = worldToScreen({ x: snapX, y: snapY });
                    
                    // Only include if within visible area (with some padding)
                    if (screenPos.x >= -100 && screenPos.x <= canvasSize.width + 100 &&
                        screenPos.y >= -100 && screenPos.y <= canvasSize.height + 100) {
                      equivalentPoints.push({
                        world: { x: snapX, y: snapY },
                        screen: screenPos,
                        fraction: { 
                          num: formatCoordinate(snapY, snapSize), 
                          den: formatCoordinate(snapX, snapSize) 
                        }
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
                        fontSize={scaledFontSize(7)}
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
                    // Show for any positive coordinates (including fractional)
                    if (endX > 0 && endY > 0) {
                      
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const endpointScreen = worldToScreen({ x: endX, y: endY });
                      
                      const rectWidth = Math.abs(endpointScreen.x - originScreen.x);
                      const rectHeight = Math.abs(endpointScreen.y - originScreen.y);
                      
                      // Position rectangle properly (origin at bottom-left in world coords)
                      const rectX = Math.min(originScreen.x, endpointScreen.x);
                      const rectY = Math.min(originScreen.y, endpointScreen.y);
                      
                      const area = endX * endY;
                      
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
                            fontSize={scaledFontSize(10)}
                            fontWeight="400"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="middle"
                            opacity="0.6"
                          >
                            {formatCoordinate(endY, gridSize)} × {formatCoordinate(endX, gridSize)} = {formatCoordinate(area, gridSize)}
                          </text>
                        </g>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* Rise/Run Triangle for slope visualization */}
                  {visualSettings.showRiseRunTriangle && (() => {
                    // Show for any positive coordinates (including fractional)
                    if (endX > 0 && endY > 0) {
                      
                      const originScreen = worldToScreen({ x: 0, y: 0 });
                      const rightScreen = worldToScreen({ x: endX, y: 0 });
                      const topScreen = worldToScreen({ x: endX, y: endY });
                      
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
                            x={rightScreen.x + 12}
                            y={(rightScreen.y + topScreen.y) / 2}
                            fontSize={scaledFontSize(9)}
                            fontWeight="500"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="start"
                            opacity="0.7"
                          >
                            rise: {formatCoordinate(endY, gridSize)}
                          </text>
                          
                          {/* Run label */}
                          <text
                            x={(originScreen.x + rightScreen.x) / 2}
                            y={rightScreen.y + 8}
                            fontSize={scaledFontSize(9)}
                            fontWeight="500"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="middle"
                            opacity="0.7"
                          >
                            run: {formatCoordinate(endX, gridSize)}
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
                      let lineAngle = Math.atan2(endY, endX);
                      
                      // Normalize angle to 0-2π range for proper arc rendering
                      if (lineAngle < 0) {
                        lineAngle = lineAngle + 2 * Math.PI;
                      }
                      
                      // Show quarter-circle arcs at unit intervals from origin, plus one at the exact endpoint
                      const radiiToShow = [];
                      
                      // Add integer unit circles
                      for (let i = 1; i <= Math.floor(lineLength); i++) {
                        radiiToShow.push({ radius: i, isUnit: true });
                      }
                      
                      // Always add circle at exact endpoint (this is the actual distance)
                      radiiToShow.push({ radius: lineLength, isUnit: false });
                      
                      radiiToShow.forEach(({ radius, isUnit }, index) => {
                        const radiusInScreen = radius * viewport.zoom;
                        
                        // Only show if radius is reasonable size on screen
                        if (radiusInScreen >= 15 && radiusInScreen <= 800) {
                          // Only show if we have a meaningful angle (not too close to x-axis)
                          if (Math.abs(lineAngle) > 0.05) {
                            // Calculate the correct sweep direction and large arc flag
                            const largeArcFlag = lineAngle > Math.PI ? 1 : 0;
                            const sweepFlag = 0; // Always counter-clockwise from positive x-axis
                            
                            const arcPath = `M ${originScreen.x + radiusInScreen},${originScreen.y} A ${radiusInScreen},${radiusInScreen} 0 ${largeArcFlag},${sweepFlag} ${originScreen.x + radiusInScreen * Math.cos(lineAngle)},${originScreen.y - radiusInScreen * Math.sin(lineAngle)}`;
                            
                            radialMarkers.push(
                              <path
                                key={`radial-${obj.id}-${radius.toFixed(3)}-${lineAngle.toFixed(3)}-${index}`}
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
                      
                      // Add distance indicator on x-axis for Pythagorean theorem
                      const distancePointScreen = worldToScreen({ x: lineLength, y: 0 });
                      
                      radialMarkers.push(
                        <g key={`distance-${obj.id}`}>
                          {/* Small triangle pointing up to show distance */}
                          <path
                            d={`M ${distancePointScreen.x},${originScreen.y} L ${distancePointScreen.x - 4},${originScreen.y + 8} L ${distancePointScreen.x + 4},${originScreen.y + 8} Z`}
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            opacity="0.7"
                          />
                          {/* Distance label - positioned to the left of arrow, above x-axis */}
                          <text
                            x={distancePointScreen.x - 15}
                            y={originScreen.y - 8}
                            fontSize={scaledFontSize(8)}
                            fontWeight="600"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="end"
                            opacity="0.8"
                          >
                            d = {lineLength.toFixed(2)}
                          </text>
                        </g>
                      );
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
                            fontSize={scaledFontSize(11)}
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
                          fontSize={scaledFontSize(9)}
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
              fontSize={scaledFontSize(9)}
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
              fontSize={scaledFontSize(9)}
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
              fontSize={scaledFontSize(9)}
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
              fontSize={scaledFontSize(9)}
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
              fontSize={scaledFontSize(12)}
              fontWeight="600"
              fill="#22c55e"
              textAnchor="middle"
              opacity="0.9"
            >
              {formatCoordinate(obj.properties.height, gridSize)} × {formatCoordinate(obj.properties.width, gridSize)} = {formatCoordinate(obj.properties.area, gridSize)}
            </text>
            
            {/* Rectangle-based educational concepts */}
            {(() => {
              const width = obj.properties.width;
              const height = obj.properties.height;
              const area = obj.properties.area;
              
              // Only show for positive integer dimensions to keep it educational
              if (width <= 0 || height <= 0 || width !== Math.floor(width) || height !== Math.floor(height)) {
                return null;
              }
              
              const educationalElements = [];
              
              // Factor Pairs: Show all rectangles with the same area
              if (visualSettings.showFactorPairs && area > 1 && area <= 50) {
                const factorPairs = [];
                for (let w = 1; w <= Math.sqrt(area); w++) {
                  if (area % w === 0) {
                    const h = area / w;
                    if (w !== width || h !== height) { // Don't show the current rectangle
                      factorPairs.push({ w, h });
                    }
                  }
                }
                
                factorPairs.forEach((pair, index) => {
                  const offsetX = (index + 1) * (rectWidth + 20);
                  const ghostRect = {
                    x: topLeft.x + offsetX,
                    y: topLeft.y,
                    width: pair.w * viewport.zoom,
                    height: pair.h * viewport.zoom
                  };
                  
                  educationalElements.push(
                    <rect
                      key={`factor-${index}`}
                      x={ghostRect.x}
                      y={ghostRect.y}
                      width={ghostRect.width}
                      height={ghostRect.height}
                      fill="rgba(168, 85, 247, 0.15)"
                      stroke="#A855F7"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                  );
                });
              }
              
              // Commutative Property: Show flipped version
              if (visualSettings.showCommutativeProperty && width !== height) {
                const flippedRect = {
                  x: topLeft.x - rectHeight - 30,
                  y: topLeft.y,
                  width: height * viewport.zoom,
                  height: width * viewport.zoom
                };
                
                educationalElements.push(
                  <g key="commutative">
                    <rect
                      x={flippedRect.x}
                      y={flippedRect.y}
                      width={flippedRect.width}
                      height={flippedRect.height}
                      fill="rgba(59, 130, 246, 0.15)"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      strokeDasharray="4,2"
                      opacity="0.7"
                    />
                    {/* Arrow showing equivalence */}
                    <path
                      d={`M ${flippedRect.x + flippedRect.width + 5},${flippedRect.y + flippedRect.height / 2} L ${topLeft.x - 5},${topLeft.y + rectHeight / 2}`}
                      stroke="#3B82F6"
                      strokeWidth="1"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      opacity="0.6"
                    />
                  </g>
                );
              }
              
              // Prime vs Composite indicator
              if (visualSettings.showPrimeComposite && area > 1 && area <= 100) {
                const isPrime = area > 1 && ![...Array(Math.floor(Math.sqrt(area)) + 1).keys()].slice(2).some(i => area % i === 0);
                
                educationalElements.push(
                  <g key="prime-composite">
                    <circle
                      cx={topLeft.x + rectWidth + 15}
                      cy={topLeft.y - 15}
                      r="8"
                      fill={isPrime ? "#10B981" : "#F59E0B"}
                      opacity="0.8"
                    />
                    <text
                      x={topLeft.x + rectWidth + 15}
                      y={topLeft.y - 11}
                      fontSize={scaledFontSize(8)}
                      fontWeight="600"
                      fill="white"
                      textAnchor="middle"
                    >
                      {isPrime ? "P" : "C"}
                    </text>
                    <text
                      x={topLeft.x + rectWidth + 30}
                      y={topLeft.y - 10}
                      fontSize={scaledFontSize(8)}
                      fontWeight="500"
                      fill={isPrime ? "#10B981" : "#F59E0B"}
                      textAnchor="start"
                      opacity="0.8"
                    >
                      {isPrime ? "Prime" : "Composite"}
                    </text>
                  </g>
                );
              }
              
              // Greatest Common Factor: Show largest square tiling
              if (visualSettings.showGCF && width > 1 && height > 1) {
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const gcf = gcd(width, height);
                
                if (gcf > 1) {
                  // Show grid of GCF squares
                  const squareSize = gcf * viewport.zoom;
                  const tilesX = width / gcf;
                  const tilesY = height / gcf;
                  
                  const tileElements = [];
                  for (let x = 0; x < tilesX; x++) {
                    for (let y = 0; y < tilesY; y++) {
                      tileElements.push(
                        <rect
                          key={`gcf-${x}-${y}`}
                          x={topLeft.x + x * squareSize}
                          y={topLeft.y + y * squareSize}
                          width={squareSize}
                          height={squareSize}
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="1.5"
                          opacity="0.6"
                        />
                      );
                    }
                  }
                  
                  educationalElements.push(
                    <g key="gcf">
                      {tileElements}
                      {/* GCF label */}
                      <text
                        x={topLeft.x + rectWidth / 2}
                        y={topLeft.y - 25}
                        fontSize={scaledFontSize(10)}
                        fontWeight="600"
                        fill="#10B981"
                        textAnchor="middle"
                        opacity="0.9"
                      >
                        GCF({width}, {height}) = {gcf}
                      </text>
                      {/* Square count */}
                      <text
                        x={topLeft.x + rectWidth / 2}
                        y={topLeft.y - 10}
                        fontSize={scaledFontSize(8)}
                        fontWeight="500"
                        fill="#10B981"
                        textAnchor="middle"
                        opacity="0.7"
                      >
                        {tilesX} × {tilesY} = {tilesX * tilesY} squares
                      </text>
                    </g>
                  );
                }
              }
              
              // Least Common Multiple: Show smallest rectangle containing both dimensions
              if (visualSettings.showLCM && width > 1 && height > 1) {
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const lcm = (a, b) => (a * b) / gcd(a, b);
                const lcmValue = lcm(width, height);
                
                if (lcmValue > Math.max(width, height) && lcmValue <= 100) {
                  // Show LCM rectangle outline - positioned up and to the right from bottom-left corner
                  const lcmWidth = lcmValue * viewport.zoom;
                  const lcmHeight = lcmValue * viewport.zoom;
                  
                  // Position LCM box starting from bottom-left corner (topLeft.x, topLeft.y + rectHeight)
                  const lcmX = topLeft.x;
                  const lcmY = topLeft.y + rectHeight - lcmHeight; // Go up from bottom-left
                  
                  // Calculate how many of each rectangle fit
                  const horizontalCount = lcmValue / width;
                  const verticalCount = lcmValue / height;
                  
                  const shadowElements = [];
                  
                  // Add shadow duplicate rectangles to show tiling
                  for (let row = 0; row < verticalCount; row++) {
                    for (let col = 0; col < horizontalCount; col++) {
                      const shadowX = lcmX + col * (width * viewport.zoom);
                      const shadowY = lcmY + row * (height * viewport.zoom);
                      
                      shadowElements.push(
                        <rect
                          key={`shadow-${row}-${col}`}
                          x={shadowX}
                          y={shadowY}
                          width={width * viewport.zoom}
                          height={height * viewport.zoom}
                          fill="rgba(245, 158, 11, 0.1)"
                          stroke="#F59E0B"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                          opacity="0.6"
                          pointerEvents="none"
                        />
                      );
                    }
                  }
                  
                  educationalElements.push(
                    <g key="lcm">
                      {/* LCM square outline */}
                      <rect
                        x={lcmX}
                        y={lcmY}
                        width={lcmWidth}
                        height={lcmHeight}
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.8"
                        pointerEvents="none"
                      />
                      
                      {/* Shadow duplicate rectangles */}
                      {shadowElements}
                      
                      {/* Labels */}
                      <text
                        x={lcmX + lcmWidth / 2}
                        y={lcmY - 15}
                        fontSize={scaledFontSize(10)}
                        fontWeight="600"
                        fill="#F59E0B"
                        textAnchor="middle"
                        opacity="0.9"
                        pointerEvents="none"
                      >
                        LCM({width}, {height}) = {lcmValue}
                      </text>
                      <text
                        x={lcmX + lcmWidth / 2}
                        y={lcmY - 2}
                        fontSize={scaledFontSize(8)}
                        fontWeight="500"
                        fill="#F59E0B"
                        textAnchor="middle"
                        opacity="0.7"
                        pointerEvents="none"
                      >
                        {horizontalCount} × {verticalCount} = {horizontalCount * verticalCount} rectangles
                      </text>
                    </g>
                  );
                }
              }
              
              // Distributive Property: Show area breakdown
              if (visualSettings.showDistributiveProperty && width > 2 && height > 1) {
                // Split the rectangle to show a(b + c) = ab + ac
                const split = Math.floor(width / 2);
                const leftWidth = split * viewport.zoom;
                const rightWidth = (width - split) * viewport.zoom;
                
                educationalElements.push(
                  <g key="distributive">
                    {/* Vertical divider */}
                    <line
                      x1={topLeft.x + leftWidth}
                      y1={topLeft.y}
                      x2={topLeft.x + leftWidth}
                      y2={topLeft.y + rectHeight}
                      stroke="#EF4444"
                      strokeWidth="2"
                      opacity="0.8"
                    />
                    {/* Left area label */}
                    <text
                      x={topLeft.x + leftWidth / 2}
                      y={topLeft.y + rectHeight + 20}
                      fontSize={scaledFontSize(9)}
                      fontWeight="500"
                      fill="#EF4444"
                      textAnchor="middle"
                      opacity="0.8"
                    >
                      {height} × {split} = {height * split}
                    </text>
                    {/* Right area label */}
                    <text
                      x={topLeft.x + leftWidth + rightWidth / 2}
                      y={topLeft.y + rectHeight + 20}
                      fontSize={scaledFontSize(9)}
                      fontWeight="500"
                      fill="#EF4444"
                      textAnchor="middle"
                      opacity="0.8"
                    >
                      {height} × {width - split} = {height * (width - split)}
                    </text>
                    {/* Distributive equation */}
                    <text
                      x={topLeft.x + rectWidth / 2}
                      y={topLeft.y + rectHeight + 40}
                      fontSize={scaledFontSize(10)}
                      fontWeight="600"
                      fill="#EF4444"
                      textAnchor="middle"
                      opacity="0.9"
                    >
                      {height} × ({split} + {width - split}) = {height * split} + {height * (width - split)} = {area}
                    </text>
                  </g>
                );
              }
              
              return educationalElements;
            })()}
          </g>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* Arrow markers for educational concepts */}
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
            fill="#3B82F6"
            opacity="0.6"
          />
        </marker>
      </defs>

      {/* Mathematical objects */}
      <g className="objects">
        {objects.map(renderObject)}
      </g>
    </>
  );
}