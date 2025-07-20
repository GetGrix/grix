// Object rendering component for better modularity
import React, { useState } from 'react';
import { formatCoordinate, formatMathValue, calculateSnapSize } from '../utils/gridUtils.js';
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
  
  // Track mouse position for tangent lines on circles  
  const [mousePosition, setMousePosition] = useState<Point | null>(null);
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
  const [touchTangentInfo, setTouchTangentInfo] = useState<{circleId: string, point: Point, slope: number | null} | null>(null);
  
  // Track triangle hover for trig values
  const [hoveredTriangle, setHoveredTriangle] = useState<string | null>(null);
  const [triangleHoverPoint, setTriangleHoverPoint] = useState<Point | null>(null);
  
  // Track function hover for coordinate display
  const [hoveredFunction, setHoveredFunction] = useState<string | null>(null);
  const [functionHoverPoint, setFunctionHoverPoint] = useState<Point | null>(null);
  
  // Use a ref to track leave timeout to prevent brief mouse exits from clearing state
  const leaveTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
  // Clear touch tangent info when touching anywhere else
  React.useEffect(() => {
    const handleGlobalTouch = (e: TouchEvent) => {
      // Check if the touch is on a circle - if not, clear tangent info
      const target = e.target as Element;
      if (touchTangentInfo && !target?.closest('circle')) {
        setTouchTangentInfo(null);
      }
    };
    
    if (touchTangentInfo) {
      document.addEventListener('touchstart', handleGlobalTouch);
      return () => document.removeEventListener('touchstart', handleGlobalTouch);
    }
  }, [touchTangentInfo]);
  
  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

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
                  
                  {/* Division multiples visualization - horizontal lines and optional shading */}
                  {visualSettings.showDivisionMultiples && (() => {
                    // Only show for lines from origin to show division concept
                    const isFromOrigin = Math.abs(obj.properties.startPoint.x) < 0.001 && Math.abs(obj.properties.startPoint.y) < 0.001;
                    if (!isFromOrigin || endX <= 0) return null;
                    
                    // Calculate the division answer (slope)
                    const divisionAnswer = endY / endX;
                    
                    // Performance safeguards to prevent too many lines
                    const minDivisionAnswer = 0.15; // Don't show lines if slope is too small
                    const maxDivisionLines = 25; // Maximum number of division lines to show
                    
                    // Skip if division answer is too small (would create too many lines)
                    if (divisionAnswer < minDivisionAnswer) return null;
                    
                    // Generate horizontal lines at multiples of the division answer
                    const originScreen = worldToScreen({ x: 0, y: 0 });
                    const xOneScreen = worldToScreen({ x: 1, y: 0 });
                    const markers = [];
                    
                    // Calculate how many lines we would show and limit it
                    const maxMultiple = Math.min(
                      Math.floor(endY / divisionAnswer),
                      maxDivisionLines
                    );
                    
                    // Start from the division answer and go up to the endpoint y-value (or max lines)
                    for (let multiple = 1; multiple <= maxMultiple; multiple++) {
                      const yValue = multiple * divisionAnswer;
                      const yScreen = worldToScreen({ x: 0, y: yValue }).y;
                      
                      // Check if this is the division answer line
                      const isAnswerLine = Math.abs(yValue - divisionAnswer) < 0.01;
                      
                      // Add shaded rectangle if area rectangle is off
                      if (!visualSettings.showAreaRectangle) {
                        const rectHeight = Math.abs(yScreen - originScreen.y) / multiple;
                        const rectWidth = Math.abs(xOneScreen.x - originScreen.x);
                        
                        markers.push(
                          <rect
                            key={`division-box-${multiple}`}
                            x={originScreen.x}
                            y={yScreen}
                            width={rectWidth}
                            height={rectHeight}
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            opacity="0.08"
                            stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                            strokeWidth="0.5"
                            strokeOpacity="0.15"
                          />
                        );
                      }
                      
                      markers.push(
                        <g key={`division-marker-${multiple}`}>
                          {/* Light horizontal line from y-axis to x=1 */}
                          <line
                            x1={originScreen.x}
                            y1={yScreen}
                            x2={xOneScreen.x}
                            y2={yScreen}
                            stroke={isSelected ? "#1D4ED8" : "#2563eb"}
                            strokeWidth="1"
                            opacity="0.3"
                            strokeDasharray={isAnswerLine ? "4,2" : "2,2"}
                          />
                          
                          {/* Label above the line (don't label the answer line) */}
                          {!isAnswerLine && (
                            <text
                              x={xOneScreen.x + 8}
                              y={yScreen - 5}
                              fontSize={scaledFontSize(8)}
                              fontWeight="400"
                              fill={isSelected ? "#1D4ED8" : "#2563eb"}
                              textAnchor="start"
                              opacity="0.5"
                            >
                              {formatMathValue(yValue)}
                            </text>
                          )}
                        </g>
                      );
                    }
                    
                    return <g>{markers}</g>;
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
                          {/* Distance label - positioned to the right of arrow, above x-axis */}
                          <text
                            x={distancePointScreen.x + 15}
                            y={originScreen.y - 8}
                            fontSize={scaledFontSize(10)}
                            fontWeight="600"
                            fill={isSelected ? "#1D4ED8" : "#2563eb"}
                            textAnchor="start"
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
      
      case 'circle':
        const center = worldToScreen(obj.properties.center);
        const radius = obj.properties.radius * viewport.zoom;
        
        // Calculate tangent line if hovering and tangent lines are enabled
        const showTangent = visualSettings.showTangentLines && 
          ((hoveredCircle === obj.id && mousePosition) || (touchTangentInfo && touchTangentInfo.circleId === obj.id));
        let tangentInfo = null;
        
        if (showTangent) {
          let worldMouse = null;
          
          // Use touch tangent info if available, otherwise use mouse position
          if (touchTangentInfo && touchTangentInfo.circleId === obj.id) {
            worldMouse = touchTangentInfo.point;
          } else if (mousePosition && hoveredCircle === obj.id) {
            // Convert mouse position to world coordinates
            worldMouse = {
              x: (mousePosition.x - canvasSize.width / 2) / viewport.zoom + viewport.center.x,
              y: -(mousePosition.y - canvasSize.height / 2) / viewport.zoom + viewport.center.y
            };
          }
          
          if (worldMouse) {
            // Calculate direction from center to mouse (no distance checking - hover circle handles that)
            const dx = worldMouse.x - obj.properties.center.x;
            const dy = worldMouse.y - obj.properties.center.y;
            
            // Find the closest point on the circle circumference to the mouse
            const angle = Math.atan2(dy, dx);
            const tangentPoint = {
              x: obj.properties.center.x + obj.properties.radius * Math.cos(angle),
              y: obj.properties.center.y + obj.properties.radius * Math.sin(angle)
            };
            
            // Calculate tangent slope (perpendicular to radius)
            const radiusSlope = dy / dx;
            const tangentSlope = isFinite(radiusSlope) && radiusSlope !== 0 ? -1 / radiusSlope : null;
            
            // Calculate tangent line endpoints (extend beyond visible area)
            const lineLength = Math.max(canvasSize.width, canvasSize.height) / viewport.zoom;
            const tangentStart = {
              x: tangentPoint.x - lineLength * Math.cos(angle + Math.PI / 2),
              y: tangentPoint.y - lineLength * Math.sin(angle + Math.PI / 2)
            };
            const tangentEnd = {
              x: tangentPoint.x + lineLength * Math.cos(angle + Math.PI / 2),
              y: tangentPoint.y + lineLength * Math.sin(angle + Math.PI / 2)
            };
            
            tangentInfo = {
              point: tangentPoint,
              start: tangentStart,
              end: tangentEnd,
              slope: tangentSlope,
              angle: angle
            };
          }
        }
        
        return (
          <g key={obj.id}>
            {/* Selection glow effect */}
            {isSelected && (
              <circle
                cx={center.x}
                cy={center.y}
                r={radius + 3}
                fill="none"
                stroke="#60A5FA"
                strokeWidth={4}
                opacity={0.5}
              />
            )}
            {/* Invisible larger circle for better hover detection */}
            <circle
              cx={center.x}
              cy={center.y}
              r={radius * 1.8}
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => {
                // Clear any pending leave timeout
                if (leaveTimeoutRef.current) {
                  clearTimeout(leaveTimeoutRef.current);
                  leaveTimeoutRef.current = null;
                }
                setHoveredCircle(obj.id);
              }}
              onMouseLeave={() => {
                // Small delay to prevent brief exits from clearing the tangent
                leaveTimeoutRef.current = setTimeout(() => {
                  setHoveredCircle(null);
                  setMousePosition(null);
                }, 100); // 100ms grace period
              }}
              onMouseMove={(e) => {
                if (visualSettings.showTangentLines && hoveredCircle === obj.id) {
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect) {
                    setMousePosition({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                  }
                }
              }}
              onTouchStart={(e) => {
                if (visualSettings.showTangentLines) {
                  e.preventDefault();
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect && e.touches[0]) {
                    const touchPoint = {
                      x: e.touches[0].clientX - rect.left,
                      y: e.touches[0].clientY - rect.top
                    };
                    
                    // Convert to world coordinates
                    const worldTouch = {
                      x: (touchPoint.x - canvasSize.width / 2) / viewport.zoom + viewport.center.x,
                      y: -(touchPoint.y - canvasSize.height / 2) / viewport.zoom + viewport.center.y
                    };
                    
                    // Calculate tangent slope at touch point
                    const dx = worldTouch.x - obj.properties.center.x;
                    const dy = worldTouch.y - obj.properties.center.y;
                    const radiusSlope = dy / dx;
                    const tangentSlope = isFinite(radiusSlope) ? -1 / radiusSlope : null;
                    
                    setTouchTangentInfo({
                      circleId: obj.id,
                      point: worldTouch,
                      slope: tangentSlope
                    });
                  }
                }
              }}
              onTouchEnd={() => {
                // Clear tangent info on touch end, but with a small delay to allow seeing it
                setTimeout(() => setTouchTangentInfo(null), 100);
              }}
            />
            
            {/* Visible circle */}
            <circle
              cx={center.x}
              cy={center.y}
              r={radius}
              fill={isSelected ? "rgba(168, 85, 247, 0.15)" : "rgba(168, 85, 247, 0.1)"}
              stroke={isSelected ? "#7C3AED" : "#A855F7"}
              strokeWidth={isSelected ? 3 : 2}
              style={{ cursor: 'pointer', pointerEvents: 'none' }}
            />
            
            {/* Tangent line visualization */}
            {tangentInfo && (
              <g>
                {/* Tangent line */}
                <line
                  x1={worldToScreen(tangentInfo.start).x}
                  y1={worldToScreen(tangentInfo.start).y}
                  x2={worldToScreen(tangentInfo.end).x}
                  y2={worldToScreen(tangentInfo.end).y}
                  stroke="#EF4444"
                  strokeWidth="2"
                  opacity="0.7"
                  strokeDasharray="4,2"
                />
                
                {/* Tangent point */}
                <circle
                  cx={worldToScreen(tangentInfo.point).x}
                  cy={worldToScreen(tangentInfo.point).y}
                  r="3"
                  fill="#EF4444"
                  opacity="0.8"
                />
                
                {/* Radius to tangent point */}
                <line
                  x1={center.x}
                  y1={center.y}
                  x2={worldToScreen(tangentInfo.point).x}
                  y2={worldToScreen(tangentInfo.point).y}
                  stroke="#EF4444"
                  strokeWidth="1"
                  opacity="0.5"
                  strokeDasharray="2,2"
                />
                
                {/* Slope label */}
                {tangentInfo.slope !== null && isFinite(tangentInfo.slope) && (
                  <text
                    x={worldToScreen(tangentInfo.point).x + 15}
                    y={worldToScreen(tangentInfo.point).y - 10}
                    fontSize={scaledFontSize(10)}
                    fontWeight="500"
                    fill="#EF4444"
                    textAnchor="start"
                    opacity="0.9"
                  >
                    slope = {tangentInfo.slope.toFixed(2)}
                  </text>
                )}
                {(tangentInfo.slope === null || !isFinite(tangentInfo.slope)) && (
                  <text
                    x={worldToScreen(tangentInfo.point).x + 15}
                    y={worldToScreen(tangentInfo.point).y - 10}
                    fontSize={scaledFontSize(10)}
                    fontWeight="500"
                    fill="#EF4444"
                    textAnchor="start"
                    opacity="0.9"
                  >
                    slope = ∞
                  </text>
                )}
              </g>
            )}
            
            {/* Center handle */}
            <circle
              cx={center.x}
              cy={center.y}
              r={touchTargetSize / 6}
              fill={isSelected ? "#7C3AED" : "#A855F7"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'move' }}
            />
            
            {/* Radius handle */}
            <circle
              cx={center.x + radius}
              cy={center.y}
              r={touchTargetSize / 6}
              fill={isSelected ? "#7C3AED" : "#A855F7"}
              stroke={isSelected ? "#60A5FA" : "none"}
              strokeWidth={isSelected ? 2 : 0}
              style={{ cursor: 'ew-resize' }}
            />
            
            {/* Radius line */}
            <line
              x1={center.x}
              y1={center.y}
              x2={center.x + radius}
              y2={center.y}
              stroke={isSelected ? "#7C3AED" : "#A855F7"}
              strokeWidth="1"
              opacity="0.6"
              strokeDasharray="2,2"
            />
            
            {/* Properties labels - positioned outside the circle */}
            <text
              x={center.x}
              y={center.y - radius - 25}
              fontSize={scaledFontSize(10)}
              fontWeight="500"
              fill={isSelected ? "#7C3AED" : "#A855F7"}
              textAnchor="middle"
              opacity="0.8"
            >
              r = {formatMathValue(obj.properties.radius)}
            </text>
            <text
              x={center.x}
              y={center.y - radius - 15}
              fontSize={scaledFontSize(9)}
              fontWeight="400"
              fill={isSelected ? "#7C3AED" : "#A855F7"}
              textAnchor="middle"
              opacity="0.7"
            >
              A = {formatMathValue(obj.properties.area)}
            </text>
            <text
              x={center.x}
              y={center.y - radius - 5}
              fontSize={scaledFontSize(9)}
              fontWeight="400"
              fill={isSelected ? "#7C3AED" : "#A855F7"}
              textAnchor="middle"
              opacity="0.7"
            >
              C = {formatMathValue(obj.properties.circumference)}
            </text>
          </g>
        );
      
      case 'triangle':
        const vertices = obj.properties.vertices.map(worldToScreen);
        const [v0, v1, v2] = vertices;
        const worldVertices = obj.properties.vertices;
        
        // Calculate enhanced triangle properties
        const enhancedProps = (() => {
          const [a, b, c] = worldVertices;
          
          // Side lengths
          const sideA = Math.sqrt((b.x - c.x) ** 2 + (b.y - c.y) ** 2); // opposite vertex a
          const sideB = Math.sqrt((a.x - c.x) ** 2 + (a.y - c.y) ** 2); // opposite vertex b  
          const sideC = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2); // opposite vertex c
          
          // Angles using law of cosines (in degrees)
          const angleA = Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) * 180 / Math.PI;
          const angleB = Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC)) * 180 / Math.PI;
          const angleC = 180 - angleA - angleB;
          
          // Triangle classification
          const tolerance = 1;
          let classification = 'scalene';
          let isRight = false;
          let isSpecial = false;
          let specialType = '';
          
          // Check for right triangle
          if (Math.abs(angleA - 90) < tolerance || Math.abs(angleB - 90) < tolerance || Math.abs(angleC - 90) < tolerance) {
            isRight = true;
            classification = 'right';
          }
          // Check for obtuse/acute
          else if (angleA > 90 || angleB > 90 || angleC > 90) {
            classification = 'obtuse';
          } else {
            classification = 'acute';
          }
          
          // Check for equilateral/isosceles
          if (Math.abs(sideA - sideB) < 0.1 && Math.abs(sideB - sideC) < 0.1) {
            classification = 'equilateral';
          } else if (Math.abs(sideA - sideB) < 0.1 || Math.abs(sideB - sideC) < 0.1 || Math.abs(sideA - sideC) < 0.1) {
            classification = 'isosceles';
          }
          
          // Check for special triangles
          const angles = [angleA, angleB, angleC].sort((x, y) => x - y);
          if (Math.abs(angles[0] - 30) < tolerance && Math.abs(angles[1] - 60) < tolerance && Math.abs(angles[2] - 90) < tolerance) {
            isSpecial = true;
            specialType = '30-60-90';
          } else if (Math.abs(angles[0] - 45) < tolerance && Math.abs(angles[1] - 45) < tolerance && Math.abs(angles[2] - 90) < tolerance) {
            isSpecial = true;
            specialType = '45-45-90';
          }
          
          return {
            sideA, sideB, sideC,
            angleA, angleB, angleC,
            classification, isRight, isSpecial, specialType,
            area: obj.properties.area
          };
        })();
        
        // SOH-CAH-TOA only makes sense for right triangles
        const sohcahtoaInfo = (() => {
          if (!visualSettings.showSOHCAHTOA || !enhancedProps.isRight) return null;
          
          const angles = [
            { index: 0, value: enhancedProps.angleA },
            { index: 1, value: enhancedProps.angleB },
            { index: 2, value: enhancedProps.angleC }
          ];
          
          // Find the right angle (90°) and the acute angles
          const rightAngle = angles.find(a => Math.abs(a.value - 90) < 1);
          const acuteAngles = angles.filter(a => a.value < 89);
          
          if (!rightAngle || acuteAngles.length < 2) return null;
          
          // Use the larger acute angle as reference
          const referenceAngle = acuteAngles.reduce((max, angle) => angle.value > max.value ? angle : max);
          
          const rightVertex = rightAngle.index;
          const refVertex = referenceAngle.index;
          const thirdVertex = [0,1,2].find(i => i !== rightVertex && i !== refVertex)!;
          
          return {
            referenceAngle,
            rightVertex,
            refVertex,
            thirdVertex,
            // Hypotenuse is ALWAYS opposite the right angle
            hypotenuseStart: refVertex,
            hypotenuseEnd: thirdVertex,
            // Opposite side is opposite the reference angle
            oppositeStart: rightVertex,
            oppositeEnd: thirdVertex,
            // Adjacent side touches reference angle but isn't hypotenuse
            adjacentStart: refVertex,
            adjacentEnd: rightVertex
          };
        })();
        
        return (
          <g key={obj.id}>
            {/* Special triangle background highlighting */}
            {visualSettings.showSpecialTriangles && enhancedProps.isSpecial && (
              <path
                d={`M ${v0.x},${v0.y} L ${v1.x},${v1.y} L ${v2.x},${v2.y} Z`}
                fill="rgba(255, 215, 0, 0.15)"
                stroke="none"
              />
            )}
            
            {/* Selection glow effect */}
            {isSelected && (
              <path
                d={`M ${v0.x},${v0.y} L ${v1.x},${v1.y} L ${v2.x},${v2.y} Z`}
                fill="none"
                stroke="#60A5FA"
                strokeWidth={6}
                opacity={0.4}
              />
            )}
            
            {/* Main triangle */}
            <path
              d={`M ${v0.x},${v0.y} L ${v1.x},${v1.y} L ${v2.x},${v2.y} Z`}
              fill={isSelected ? "rgba(245, 101, 101, 0.15)" : "rgba(245, 101, 101, 0.1)"}
              stroke={isSelected ? "#DC2626" : "#F56565"}
              strokeWidth={isSelected ? 3 : 2}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => {
                if (visualSettings.showTrigValues) {
                  setHoveredTriangle(obj.id);
                }
              }}
              onMouseLeave={() => {
                setHoveredTriangle(null);
                setTriangleHoverPoint(null);
              }}
              onMouseMove={(e) => {
                if (visualSettings.showTrigValues && hoveredTriangle === obj.id) {
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect) {
                    setTriangleHoverPoint({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                  }
                }
              }}
            />
            
            {/* SOH-CAH-TOA Visualization */}
            {sohcahtoaInfo && (
              <g>
                {/* Highlight the reference angle vertex */}
                <circle
                  cx={vertices[sohcahtoaInfo.referenceAngle.index].x}
                  cy={vertices[sohcahtoaInfo.referenceAngle.index].y}
                  r="8"
                  fill="rgba(255, 215, 0, 0.3)"
                  stroke="#FFA500"
                  strokeWidth="2"
                />
                
                {/* Label sides correctly for right triangle */}
                <g>
                  {/* Hypotenuse (GREEN) - always the side opposite the right angle */}
                  <line
                    x1={vertices[sohcahtoaInfo.hypotenuseStart].x}
                    y1={vertices[sohcahtoaInfo.hypotenuseStart].y}
                    x2={vertices[sohcahtoaInfo.hypotenuseEnd].x}
                    y2={vertices[sohcahtoaInfo.hypotenuseEnd].y}
                    stroke="#00AA00"
                    strokeWidth="5"
                    opacity="0.8"
                  />
                  <text
                    x={(vertices[sohcahtoaInfo.hypotenuseStart].x + vertices[sohcahtoaInfo.hypotenuseEnd].x) / 2}
                    y={(vertices[sohcahtoaInfo.hypotenuseStart].y + vertices[sohcahtoaInfo.hypotenuseEnd].y) / 2 - 15}
                    fontSize={scaledFontSize(11)}
                    fontWeight="700"
                    fill="#00AA00"
                    textAnchor="middle"
                  >
                    HYPOTENUSE
                  </text>
                  
                  {/* Opposite side (RED) - side opposite the reference angle */}
                  <line
                    x1={vertices[sohcahtoaInfo.oppositeStart].x}
                    y1={vertices[sohcahtoaInfo.oppositeStart].y}
                    x2={vertices[sohcahtoaInfo.oppositeEnd].x}
                    y2={vertices[sohcahtoaInfo.oppositeEnd].y}
                    stroke="#FF0000"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <text
                    x={(vertices[sohcahtoaInfo.oppositeStart].x + vertices[sohcahtoaInfo.oppositeEnd].x) / 2 + 15}
                    y={(vertices[sohcahtoaInfo.oppositeStart].y + vertices[sohcahtoaInfo.oppositeEnd].y) / 2}
                    fontSize={scaledFontSize(10)}
                    fontWeight="600"
                    fill="#FF0000"
                    textAnchor="middle"
                  >
                    OPPOSITE
                  </text>
                  
                  {/* Adjacent side (BLUE) - side adjacent to reference angle (not hypotenuse) */}
                  <line
                    x1={vertices[sohcahtoaInfo.adjacentStart].x}
                    y1={vertices[sohcahtoaInfo.adjacentStart].y}
                    x2={vertices[sohcahtoaInfo.adjacentEnd].x}
                    y2={vertices[sohcahtoaInfo.adjacentEnd].y}
                    stroke="#0000FF"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <text
                    x={(vertices[sohcahtoaInfo.adjacentStart].x + vertices[sohcahtoaInfo.adjacentEnd].x) / 2}
                    y={(vertices[sohcahtoaInfo.adjacentStart].y + vertices[sohcahtoaInfo.adjacentEnd].y) / 2 + 20}
                    fontSize={scaledFontSize(10)}
                    fontWeight="600"
                    fill="#0000FF"
                    textAnchor="middle"
                  >
                    ADJACENT
                  </text>
                  
                  {/* Reference angle label */}
                  <text
                    x={vertices[sohcahtoaInfo.refVertex].x}
                    y={vertices[sohcahtoaInfo.refVertex].y - 25}
                    fontSize={scaledFontSize(10)}
                    fontWeight="700"
                    fill="#FFA500"
                    textAnchor="middle"
                  >
                    Reference Angle: {sohcahtoaInfo.referenceAngle.value.toFixed(1)}°
                  </text>
                </g>
              </g>
            )}
            
            {/* Pythagorean Theorem Visualization - show a² + b² = c² with actual squares */}
            {visualSettings.showPythagoreanSquares && enhancedProps.isRight && (
              <g>
                {(() => {
                  // Find the right angle vertex and the two legs
                  const rightAngleIndex = [
                    { index: 0, angle: enhancedProps.angleA },
                    { index: 1, angle: enhancedProps.angleB },
                    { index: 2, angle: enhancedProps.angleC }
                  ].find(a => Math.abs(a.angle - 90) < 1)?.index;
                  
                  if (rightAngleIndex === undefined) return null;
                  
                  // Get the three vertices
                  const rightVertex = worldVertices[rightAngleIndex];
                  const vertex1 = worldVertices[(rightAngleIndex + 1) % 3];
                  const vertex2 = worldVertices[(rightAngleIndex + 2) % 3];
                  
                  // Calculate side lengths (legs and hypotenuse)
                  const legA = Math.sqrt((rightVertex.x - vertex1.x) ** 2 + (rightVertex.y - vertex1.y) ** 2);
                  const legB = Math.sqrt((rightVertex.x - vertex2.x) ** 2 + (rightVertex.y - vertex2.y) ** 2);
                  const hypotenuse = Math.sqrt((vertex1.x - vertex2.x) ** 2 + (vertex1.y - vertex2.y) ** 2);
                  
                  // Calculate unit vectors for each side to position squares correctly
                  const dirA = {
                    x: (vertex1.x - rightVertex.x) / legA,
                    y: (vertex1.y - rightVertex.y) / legA
                  };
                  const dirB = {
                    x: (vertex2.x - rightVertex.x) / legB,
                    y: (vertex2.y - rightVertex.y) / legB
                  };
                  const dirHyp = {
                    x: (vertex2.x - vertex1.x) / hypotenuse,
                    y: (vertex2.y - vertex1.y) / hypotenuse
                  };
                  
                  // Helper function to determine if a point is inside the triangle
                  const isPointInTriangle = (point, v1, v2, v3) => {
                    const sign = (p1, p2, p3) => (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
                    const d1 = sign(point, v1, v2);
                    const d2 = sign(point, v2, v3);
                    const d3 = sign(point, v3, v1);
                    const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
                    const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
                    return !(hasNeg && hasPos);
                  };
                  
                  // Calculate perpendicular vectors both ways and choose the one that goes away from triangle
                  const perpA1 = { x: -dirA.y, y: dirA.x };
                  const perpA2 = { x: dirA.y, y: -dirA.x };
                  const perpB1 = { x: -dirB.y, y: dirB.x };
                  const perpB2 = { x: dirB.y, y: -dirB.x };
                  const perpHyp1 = { x: -dirHyp.y, y: dirHyp.x };
                  const perpHyp2 = { x: dirHyp.y, y: -dirHyp.x };
                  
                  // Test which perpendicular direction goes away from the triangle
                  const testPointA1 = { x: rightVertex.x + legA * perpA1.x * 0.1, y: rightVertex.y + legA * perpA1.y * 0.1 };
                  const testPointA2 = { x: rightVertex.x + legA * perpA2.x * 0.1, y: rightVertex.y + legA * perpA2.y * 0.1 };
                  const perpA = isPointInTriangle(testPointA1, rightVertex, vertex1, vertex2) ? perpA2 : perpA1;
                  
                  const testPointB1 = { x: rightVertex.x + legB * perpB1.x * 0.1, y: rightVertex.y + legB * perpB1.y * 0.1 };
                  const testPointB2 = { x: rightVertex.x + legB * perpB2.x * 0.1, y: rightVertex.y + legB * perpB2.y * 0.1 };
                  const perpB = isPointInTriangle(testPointB1, rightVertex, vertex1, vertex2) ? perpB2 : perpB1;
                  
                  const midHyp = { x: (vertex1.x + vertex2.x) / 2, y: (vertex1.y + vertex2.y) / 2 };
                  const testPointHyp1 = { x: midHyp.x + hypotenuse * perpHyp1.x * 0.1, y: midHyp.y + hypotenuse * perpHyp1.y * 0.1 };
                  const testPointHyp2 = { x: midHyp.x + hypotenuse * perpHyp2.x * 0.1, y: midHyp.y + hypotenuse * perpHyp2.y * 0.1 };
                  const perpHyp = isPointInTriangle(testPointHyp1, rightVertex, vertex1, vertex2) ? perpHyp2 : perpHyp1;
                  
                  // Square on leg A (from right vertex to vertex1) - going away from triangle
                  const squareA = [
                    rightVertex,
                    { x: rightVertex.x + legA * dirA.x, y: rightVertex.y + legA * dirA.y },
                    { x: rightVertex.x + legA * dirA.x + legA * perpA.x, y: rightVertex.y + legA * dirA.y + legA * perpA.y },
                    { x: rightVertex.x + legA * perpA.x, y: rightVertex.y + legA * perpA.y }
                  ];
                  
                  // Square on leg B (from right vertex to vertex2) - going away from triangle
                  const squareB = [
                    rightVertex,
                    { x: rightVertex.x + legB * dirB.x, y: rightVertex.y + legB * dirB.y },
                    { x: rightVertex.x + legB * dirB.x + legB * perpB.x, y: rightVertex.y + legB * dirB.y + legB * perpB.y },
                    { x: rightVertex.x + legB * perpB.x, y: rightVertex.y + legB * perpB.y }
                  ];
                  
                  // Square on hypotenuse (from vertex1 to vertex2) - going away from triangle
                  const squareC = [
                    vertex1,
                    vertex2,
                    { x: vertex2.x + hypotenuse * perpHyp.x, y: vertex2.y + hypotenuse * perpHyp.y },
                    { x: vertex1.x + hypotenuse * perpHyp.x, y: vertex1.y + hypotenuse * perpHyp.y }
                  ];
                  
                  // Convert to screen coordinates
                  const squareAScreen = squareA.map(worldToScreen);
                  const squareBScreen = squareB.map(worldToScreen);
                  const squareCScreen = squareC.map(worldToScreen);
                  
                  return (
                    <g>
                      {/* Square on leg A (blue) */}
                      <path
                        d={`M ${squareAScreen[0].x},${squareAScreen[0].y} L ${squareAScreen[1].x},${squareAScreen[1].y} L ${squareAScreen[2].x},${squareAScreen[2].y} L ${squareAScreen[3].x},${squareAScreen[3].y} Z`}
                        fill="rgba(59, 130, 246, 0.3)"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <text
                        x={(squareAScreen[0].x + squareAScreen[1].x + squareAScreen[2].x + squareAScreen[3].x) / 4}
                        y={(squareAScreen[0].y + squareAScreen[1].y + squareAScreen[2].y + squareAScreen[3].y) / 4}
                        fontSize={scaledFontSize(10)}
                        fontWeight="600"
                        fill="#1D4ED8"
                        textAnchor="middle"
                      >
                        a² = {(legA ** 2).toFixed(1)}
                      </text>
                      
                      {/* Square on leg B (red) */}
                      <path
                        d={`M ${squareBScreen[0].x},${squareBScreen[0].y} L ${squareBScreen[1].x},${squareBScreen[1].y} L ${squareBScreen[2].x},${squareBScreen[2].y} L ${squareBScreen[3].x},${squareBScreen[3].y} Z`}
                        fill="rgba(239, 68, 68, 0.3)"
                        stroke="#EF4444"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <text
                        x={(squareBScreen[0].x + squareBScreen[1].x + squareBScreen[2].x + squareBScreen[3].x) / 4}
                        y={(squareBScreen[0].y + squareBScreen[1].y + squareBScreen[2].y + squareBScreen[3].y) / 4}
                        fontSize={scaledFontSize(10)}
                        fontWeight="600"
                        fill="#DC2626"
                        textAnchor="middle"
                      >
                        b² = {(legB ** 2).toFixed(1)}
                      </text>
                      
                      {/* Square on hypotenuse (green) */}
                      <path
                        d={`M ${squareCScreen[0].x},${squareCScreen[0].y} L ${squareCScreen[1].x},${squareCScreen[1].y} L ${squareCScreen[2].x},${squareCScreen[2].y} L ${squareCScreen[3].x},${squareCScreen[3].y} Z`}
                        fill="rgba(34, 197, 94, 0.3)"
                        stroke="#22C55E"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <text
                        x={(squareCScreen[0].x + squareCScreen[1].x + squareCScreen[2].x + squareCScreen[3].x) / 4}
                        y={(squareCScreen[0].y + squareCScreen[1].y + squareCScreen[2].y + squareCScreen[3].y) / 4}
                        fontSize={scaledFontSize(10)}
                        fontWeight="600"
                        fill="#16A34A"
                        textAnchor="middle"
                      >
                        c² = {(hypotenuse ** 2).toFixed(1)}
                      </text>
                      
                      {/* Pythagorean equation display - positioned to avoid overlaps */}
                      {(() => {
                        // Find a good position that avoids squares and other labels
                        const triangleCentroid = {
                          x: (v0.x + v1.x + v2.x) / 3,
                          y: (v0.y + v1.y + v2.y) / 3
                        };
                        
                        // Calculate bounding box of all squares
                        const allSquarePoints = [...squareAScreen, ...squareBScreen, ...squareCScreen];
                        const minX = Math.min(...allSquarePoints.map(p => p.x));
                        const maxX = Math.max(...allSquarePoints.map(p => p.x));
                        const minY = Math.min(...allSquarePoints.map(p => p.y));
                        const maxY = Math.max(...allSquarePoints.map(p => p.y));
                        
                        // Try different positions: below, above, left, right of the combined area
                        const positions = [
                          { x: (minX + maxX) / 2, y: maxY + 40, label: 'below' },
                          { x: (minX + maxX) / 2, y: minY - 40, label: 'above' },
                          { x: minX - 80, y: (minY + maxY) / 2, label: 'left' },
                          { x: maxX + 80, y: (minY + maxY) / 2, label: 'right' }
                        ];
                        
                        // Choose the position closest to triangle centroid but outside squares
                        let bestPosition = positions[0];
                        let minDistanceToCentroid = Infinity;
                        
                        positions.forEach(pos => {
                          const distance = Math.sqrt(
                            (pos.x - triangleCentroid.x) ** 2 + 
                            (pos.y - triangleCentroid.y) ** 2
                          );
                          if (distance < minDistanceToCentroid) {
                            minDistanceToCentroid = distance;
                            bestPosition = pos;
                          }
                        });
                        
                        return (
                          <g>
                            {/* Background for better readability */}
                            <rect
                              x={bestPosition.x - 85}
                              y={bestPosition.y - 20}
                              width="170"
                              height="35"
                              fill="rgba(255, 255, 255, 0.9)"
                              stroke="#374151"
                              strokeWidth="1"
                              rx="6"
                              opacity="0.95"
                            />
                            
                            {/* Numerical equation */}
                            <text
                              x={bestPosition.x}
                              y={bestPosition.y - 5}
                              fontSize={scaledFontSize(11)}
                              fontWeight="700"
                              fill="#374151"
                              textAnchor="middle"
                              opacity="1"
                            >
                              {(legA ** 2).toFixed(1)} + {(legB ** 2).toFixed(1)} = {(hypotenuse ** 2).toFixed(1)}
                            </text>
                            
                            {/* Algebraic form */}
                            <text
                              x={bestPosition.x}
                              y={bestPosition.y + 10}
                              fontSize={scaledFontSize(10)}
                              fontWeight="600"
                              fill="#6B7280"
                              textAnchor="middle"
                              opacity="1"
                            >
                              a² + b² = c²
                            </text>
                          </g>
                        );
                      })()}
                    </g>
                  );
                })()}
              </g>
            )}
            
            {/* Triangle altitude lines */}
            {visualSettings.showTriangleAltitudes && (
              <g>
                {worldVertices.map((vertex, i) => {
                  const opposite1 = worldVertices[(i + 1) % 3];
                  const opposite2 = worldVertices[(i + 2) % 3];
                  
                  // Calculate foot of perpendicular from vertex to opposite side
                  const dx = opposite2.x - opposite1.x;
                  const dy = opposite2.y - opposite1.y;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  
                  if (length === 0) return null;
                  
                  const t = ((vertex.x - opposite1.x) * dx + (vertex.y - opposite1.y) * dy) / (length * length);
                  const foot = {
                    x: opposite1.x + t * dx,
                    y: opposite1.y + t * dy
                  };
                  
                  const vertexScreen = worldToScreen(vertex);
                  const footScreen = worldToScreen(foot);
                  
                  return (
                    <g key={`altitude-${i}`}>
                      <line
                        x1={vertexScreen.x}
                        y1={vertexScreen.y}
                        x2={footScreen.x}
                        y2={footScreen.y}
                        stroke="#9CA3AF"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        opacity="0.7"
                      />
                      <circle
                        cx={footScreen.x}
                        cy={footScreen.y}
                        r="2"
                        fill="#9CA3AF"
                        opacity="0.7"
                      />
                    </g>
                  );
                })}
              </g>
            )}
            
            {/* Vertex handles */}
            {vertices.map((vertex, index) => (
              <circle
                key={`vertex-${index}`}
                cx={vertex.x}
                cy={vertex.y}
                r={touchTargetSize / 6}
                fill={isSelected ? "#DC2626" : "#F56565"}
                stroke={isSelected ? "#60A5FA" : "none"}
                strokeWidth={isSelected ? 2 : 0}
                style={{ cursor: 'move' }}
              />
            ))}
            
            {/* Angle measurements */}
            {visualSettings.showTriangleAngles && (
              <g>
                {[
                  { vertex: v0, angle: enhancedProps.angleA, label: 'A' },
                  { vertex: v1, angle: enhancedProps.angleB, label: 'B' },
                  { vertex: v2, angle: enhancedProps.angleC, label: 'C' }
                ].map((angleInfo, index) => (
                  <text
                    key={`angle-${index}`}
                    x={angleInfo.vertex.x + (index === 0 ? -25 : index === 1 ? 25 : 0)}
                    y={angleInfo.vertex.y + (index === 2 ? 25 : -15)}
                    fontSize={scaledFontSize(9)}
                    fontWeight="600"
                    fill={isSelected ? "#DC2626" : "#F56565"}
                    textAnchor="middle"
                    opacity="0.9"
                  >
                    {angleInfo.label}: {angleInfo.angle.toFixed(1)}°
                  </text>
                ))}
                
                {/* Angle sum verification */}
                <text
                  x={(v0.x + v1.x + v2.x) / 3}
                  y={(v0.y + v1.y + v2.y) / 3 + 20}
                  fontSize={scaledFontSize(8)}
                  fontWeight="400"
                  fill={isSelected ? "#DC2626" : "#F56565"}
                  textAnchor="middle"
                  opacity="0.6"
                >
                  Sum: {(enhancedProps.angleA + enhancedProps.angleB + enhancedProps.angleC).toFixed(1)}°
                </text>
              </g>
            )}
            
            {/* Triangle classification */}
            {visualSettings.showTriangleClassification && (
              <g>
                <text
                  x={(v0.x + v1.x + v2.x) / 3}
                  y={(v0.y + v1.y + v2.y) / 3 - 15}
                  fontSize={scaledFontSize(11)}
                  fontWeight="600"
                  fill={enhancedProps.isSpecial ? "#FFA500" : (isSelected ? "#DC2626" : "#F56565")}
                  textAnchor="middle"
                  opacity="0.9"
                >
                  {enhancedProps.isSpecial ? enhancedProps.specialType : enhancedProps.classification}
                </text>
                
                {enhancedProps.isSpecial && (
                  <text
                    x={(v0.x + v1.x + v2.x) / 3}
                    y={(v0.y + v1.y + v2.y) / 3 - 2}
                    fontSize={scaledFontSize(9)}
                    fontWeight="500"
                    fill="#FFA500"
                    textAnchor="middle"
                    opacity="0.8"
                  >
                    Special Triangle!
                  </text>
                )}
              </g>
            )}
            
            {/* Area label */}
            <text
              x={(v0.x + v1.x + v2.x) / 3}
              y={(v0.y + v1.y + v2.y) / 3 + (visualSettings.showTriangleAngles ? 35 : 8)}
              fontSize={scaledFontSize(10)}
              fontWeight="500"
              fill={isSelected ? "#DC2626" : "#F56565"}
              textAnchor="middle"
              opacity="0.8"
            >
              Area = {formatMathValue(enhancedProps.area)}
            </text>
            
            {/* Trigonometric values on hover - works for any triangle, not just right triangles */}
            {visualSettings.showTrigValues && hoveredTriangle === obj.id && triangleHoverPoint && (
              <g>
                {(() => {
                  // For trig values, show values for all three angles
                  const angles = [
                    { label: 'A', value: enhancedProps.angleA, index: 0 },
                    { label: 'B', value: enhancedProps.angleB, index: 1 },
                    { label: 'C', value: enhancedProps.angleC, index: 2 }
                  ];
                  
                  // Find the angle closest to the mouse hover point
                  let closestAngle = angles[0];
                  let minDistance = Infinity;
                  
                  angles.forEach(angleInfo => {
                    const vertex = vertices[angleInfo.index];
                    const distance = Math.sqrt(
                      (triangleHoverPoint.x - vertex.x) ** 2 + 
                      (triangleHoverPoint.y - vertex.y) ** 2
                    );
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestAngle = angleInfo;
                    }
                  });
                  
                  const angle = closestAngle.value * Math.PI / 180; // Convert to radians
                  const sin = Math.sin(angle);
                  const cos = Math.cos(angle);
                  const tan = Math.tan(angle);
                  
                  return (
                    <g>
                      <rect
                        x={triangleHoverPoint.x + 10}
                        y={triangleHoverPoint.y - 55}
                        width="140"
                        height="60"
                        fill="rgba(255, 255, 255, 0.95)"
                        stroke="#374151"
                        strokeWidth="1"
                        rx="4"
                      />
                      <text
                        x={triangleHoverPoint.x + 80}
                        y={triangleHoverPoint.y - 40}
                        fontSize={scaledFontSize(9)}
                        fontWeight="600"
                        fill="#374151"
                        textAnchor="middle"
                      >
                        Angle {closestAngle.label}: {closestAngle.value.toFixed(1)}°
                      </text>
                      <text
                        x={triangleHoverPoint.x + 80}
                        y={triangleHoverPoint.y - 28}
                        fontSize={scaledFontSize(8)}
                        fontWeight="500"
                        fill="#374151"
                        textAnchor="middle"
                      >
                        sin = {sin.toFixed(3)}
                      </text>
                      <text
                        x={triangleHoverPoint.x + 80}
                        y={triangleHoverPoint.y - 16}
                        fontSize={scaledFontSize(8)}
                        fontWeight="500"
                        fill="#374151"
                        textAnchor="middle"
                      >
                        cos = {cos.toFixed(3)}
                      </text>
                      <text
                        x={triangleHoverPoint.x + 80}
                        y={triangleHoverPoint.y - 4}
                        fontSize={scaledFontSize(8)}
                        fontWeight="500"
                        fill="#374151"
                        textAnchor="middle"
                      >
                        tan = {isFinite(tan) ? tan.toFixed(3) : '∞'}
                      </text>
                    </g>
                  );
                })()}
              </g>
            )}
            
            {/* Side length labels */}
            <text
              x={(v0.x + v1.x) / 2}
              y={(v0.y + v1.y) / 2 - 10}
              fontSize={scaledFontSize(8)}
              fontWeight="400"
              fill={isSelected ? "#DC2626" : "#F56565"}
              textAnchor="middle"
              opacity="0.6"
            >
              {formatMathValue(enhancedProps.sideC)}
            </text>
            <text
              x={(v1.x + v2.x) / 2 + 10}
              y={(v1.y + v2.y) / 2}
              fontSize={scaledFontSize(8)}
              fontWeight="400"
              fill={isSelected ? "#DC2626" : "#F56565"}
              textAnchor="middle"
              opacity="0.6"
            >
              {formatMathValue(enhancedProps.sideA)}
            </text>
            <text
              x={(v0.x + v2.x) / 2 - 10}
              y={(v0.y + v2.y) / 2}
              fontSize={scaledFontSize(8)}
              fontWeight="400"
              fill={isSelected ? "#DC2626" : "#F56565"}
              textAnchor="middle"
              opacity="0.6"
            >
              {formatMathValue(enhancedProps.sideB)}
            </text>
          </g>
        );
      
      case 'function':
        const functionObj = obj as any; // Function type from core
        const points = functionObj.properties.points;
        
        if (!points || points.length < 2) return null;
        
        // Convert world points to screen coordinates
        const screenPoints = points.map(worldToScreen);
        
        // Create SVG path string
        const pathData = screenPoints.reduce((path, point, index) => {
          if (index === 0) {
            return `M ${point.x} ${point.y}`;
          } else {
            return `${path} L ${point.x} ${point.y}`;
          }
        }, '');
        
        // Show domain endpoints for manipulation
        const domainStart = worldToScreen({ x: functionObj.properties.domain.min, y: points[0]?.y || 0 });
        const domainEnd = worldToScreen({ x: functionObj.properties.domain.max, y: points[points.length - 1]?.y || 0 });
        
        return (
          <g key={obj.id}>
            {/* Function extensions beyond domain (like equivalent fractions) */}
            {visualSettings.showFunctionExtensions && (() => {
              // Simple helper to evaluate function safely
              const evaluateFunction = (equation: string, x: number): number | null => {
                try {
                  const safeEquation = equation
                    .replace(/\bx\b/g, `(${x})`)
                    .replace(/\^/g, '**')
                    .replace(/sin/g, 'Math.sin')
                    .replace(/cos/g, 'Math.cos')
                    .replace(/tan/g, 'Math.tan')
                    .replace(/log/g, 'Math.log')
                    .replace(/ln/g, 'Math.log')
                    .replace(/exp/g, 'Math.exp')
                    .replace(/sqrt/g, 'Math.sqrt')
                    .replace(/abs/g, 'Math.abs')
                    .replace(/pi/g, 'Math.PI')
                    .replace(/e\b/g, 'Math.E');
                  
                  const func = new Function('x', `return ${safeEquation}`);
                  const y = func(x);
                  return (typeof y === 'number' && !isNaN(y) && isFinite(y)) ? y : null;
                } catch (e) {
                  return null;
                }
              };
              
              // Calculate viewport bounds for extensions
              const viewBounds = {
                left: viewport.center.x - (canvasSize.width / 2) / viewport.zoom,
                right: viewport.center.x + (canvasSize.width / 2) / viewport.zoom
              };
              
              const equation = functionObj.properties.equation;
              const extensionPaths = [];
              
              // Left extension (dashed line beyond domain start)
              if (functionObj.properties.domain.min > viewBounds.left) {
                const leftPoints = [];
                const startX = Math.max(viewBounds.left, functionObj.properties.domain.min - 6);
                const step = (functionObj.properties.domain.min - startX) / 15;
                
                for (let x = startX; x <= functionObj.properties.domain.min; x += step) {
                  const y = evaluateFunction(equation, x);
                  if (y !== null) {
                    leftPoints.push(worldToScreen({ x, y }));
                  }
                }
                
                if (leftPoints.length > 1) {
                  const leftPath = leftPoints.reduce((path, point, idx) => 
                    path + (idx === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`), '');
                  extensionPaths.push(leftPath);
                }
              }
              
              // Right extension (dashed line beyond domain end)
              if (functionObj.properties.domain.max < viewBounds.right) {
                const rightPoints = [];
                const endX = Math.min(viewBounds.right, functionObj.properties.domain.max + 6);
                const step = (endX - functionObj.properties.domain.max) / 15;
                
                for (let x = functionObj.properties.domain.max; x <= endX; x += step) {
                  const y = evaluateFunction(equation, x);
                  if (y !== null) {
                    rightPoints.push(worldToScreen({ x, y }));
                  }
                }
                
                if (rightPoints.length > 1) {
                  const rightPath = rightPoints.reduce((path, point, idx) => 
                    path + (idx === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`), '');
                  extensionPaths.push(rightPath);
                }
              }
              
              return (
                <g>
                  {/* Render extension paths with subtle dashed styling */}
                  {extensionPaths.map((extPath, idx) => (
                    <path
                      key={`ext-${idx}`}
                      d={extPath}
                      fill="none"
                      stroke={functionObj.properties.color || "#2563eb"}
                      strokeWidth={1}
                      strokeDasharray="4,4"
                      opacity={0.5}
                      strokeLinecap="round"
                    />
                  ))}
                </g>
              );
            })()}
            
            {/* Selection glow effect */}
            {isSelected && (
              <path
                d={pathData}
                fill="none"
                stroke="#60A5FA"
                strokeWidth={6}
                opacity={0.4}
              />
            )}
            
            {/* Invisible wider path for better hover detection */}
            <path
              d={pathData}
              fill="none"
              stroke="transparent"
              strokeWidth={12}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pointerEvents: 'stroke' }}
              onMouseEnter={() => setHoveredFunction(obj.id)}
              onMouseLeave={() => {
                setHoveredFunction(null);
                setFunctionHoverPoint(null);
              }}
              onMouseMove={(e) => {
                if (hoveredFunction === obj.id) {
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect) {
                    const screenX = e.clientX - rect.left;
                    const screenY = e.clientY - rect.top;
                    
                    // Convert to world coordinates
                    const worldX = viewport.center.x + (screenX - canvasSize.width / 2) / viewport.zoom;
                    const worldY = viewport.center.y - (screenY - canvasSize.height / 2) / viewport.zoom;
                    
                    // Find closest point on the function curve
                    let closestPoint = null;
                    let minDistance = Infinity;
                    
                    for (const point of points) {
                      const screenPoint = worldToScreen(point);
                      const distance = Math.sqrt(
                        (screenX - screenPoint.x) ** 2 + (screenY - screenPoint.y) ** 2
                      );
                      if (distance < minDistance) {
                        minDistance = distance;
                        closestPoint = point;
                      }
                    }
                    
                    if (closestPoint) {
                      setFunctionHoverPoint(closestPoint);
                    }
                  }
                }
              }}
            />
            
            {/* Function curve */}
            <path
              d={pathData}
              fill="none"
              stroke={isSelected ? "#1D4ED8" : functionObj.properties.color || "#2563eb"}
              strokeWidth={isSelected ? 3 : functionObj.properties.strokeWidth || 2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pointerEvents: 'none' }}
            />
            
            {/* Domain endpoints when selected */}
            {isSelected && (
              <g>
                {/* Start domain handle */}
                <circle
                  cx={domainStart.x}
                  cy={domainStart.y}
                  r="6"
                  fill="#1D4ED8"
                  stroke="white"
                  strokeWidth="2"
                  opacity={0.8}
                />
                
                {/* End domain handle */}
                <circle
                  cx={domainEnd.x}
                  cy={domainEnd.y}
                  r="6"
                  fill="#1D4ED8"
                  stroke="white"
                  strokeWidth="2"
                  opacity={0.8}
                />
              </g>
            )}
            
            {/* Function coordinate display on hover */}
            {hoveredFunction === obj.id && functionHoverPoint && (
              <g>
                {/* Highlight point on curve */}
                <circle
                  cx={worldToScreen(functionHoverPoint).x}
                  cy={worldToScreen(functionHoverPoint).y}
                  r="4"
                  fill={functionObj.properties.color || "#2563eb"}
                  stroke="white"
                  strokeWidth="2"
                />
                
                {/* Coordinate and equation label */}
                <rect
                  x={worldToScreen(functionHoverPoint).x - 70}
                  y={worldToScreen(functionHoverPoint).y - 55}
                  width="140"
                  height="45"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#374151"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x={worldToScreen(functionHoverPoint).x}
                  y={worldToScreen(functionHoverPoint).y - 40}
                  fontSize={scaledFontSize(9)}
                  fontWeight="600"
                  fill="#374151"
                  textAnchor="middle"
                >
                  ({formatCoordinate(functionHoverPoint.x, gridSize)}, {formatCoordinate(functionHoverPoint.y, gridSize)})
                </text>
                <text
                  x={worldToScreen(functionHoverPoint).x}
                  y={worldToScreen(functionHoverPoint).y - 28}
                  fontSize={scaledFontSize(8)}
                  fontWeight="500"
                  fill="#374151"
                  textAnchor="middle"
                >
                  f({formatCoordinate(functionHoverPoint.x, gridSize)}) = {formatCoordinate(functionHoverPoint.y, gridSize)}
                </text>
                <text
                  x={worldToScreen(functionHoverPoint).x}
                  y={worldToScreen(functionHoverPoint).y - 16}
                  fontSize={scaledFontSize(8)}
                  fontWeight="400"
                  fill="#666"
                  textAnchor="middle"
                >
                  f(x) = {functionObj.properties.equation}
                </text>
              </g>
            )}
            
            {/* Function equation label */}
            {(isSelected || hoveredEndpoint === obj.id) && (
              <g>
                <rect
                  x={domainStart.x - 40}
                  y={domainStart.y - 35}
                  width="80"
                  height="25"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="#374151"
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x={domainStart.x}
                  y={domainStart.y - 20}
                  fontSize={scaledFontSize(10)}
                  fontWeight="600"
                  fill="#374151"
                  textAnchor="middle"
                >
                  f(x) = {functionObj.properties.equation}
                </text>
              </g>
            )}
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