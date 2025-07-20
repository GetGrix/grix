// Grid rendering component for better modularity
import React from 'react';
import { calculateAdaptiveGrid, generateGridLines, formatCoordinate } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';
import type { Point, Viewport, MathObject } from '@getgrix/core';

interface GridRendererProps {
  viewport: Viewport;
  canvasSize: { width: number; height: number };
  worldToScreen: (point: Point) => Point;
  objects?: MathObject[];
}

export function GridRenderer({ viewport, canvasSize, worldToScreen, objects = [] }: GridRendererProps) {
  // Get visualization settings
  const visualSettings = useVisualizationStore();
  
  // Helper function to scale font sizes
  const scaledFontSize = (baseSize: number) => Math.round(baseSize * visualSettings.fontScale);
  
  // Calculate adaptive grid system with scaling
  const gridSystem = calculateAdaptiveGrid(viewport, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  });
  
  // Apply grid scale
  const scaledGridSystem = {
    ...gridSystem,
    gridSize: gridSystem.gridSize / visualSettings.gridScale,
    labelStep: gridSystem.labelStep / visualSettings.gridScale
  };
  
  const { verticalLines: vLines, horizontalLines: hLines } = generateGridLines(
    viewport,
    canvasSize,
    scaledGridSystem,
    worldToScreen,
    visualSettings.showIntegerGridLines
  );

  if (!gridSystem.shouldShowGrid) {
    return null;
  }

  // Calculate polar grid elements
  const polarElements = [];
  if (visualSettings.coordinateSystem === 'polar' || visualSettings.coordinateSystem === 'both') {
    const originScreen = worldToScreen({ x: 0, y: 0 });
    const maxRadius = Math.max(
      Math.abs(viewport.center.x) + canvasSize.width / (2 * viewport.zoom),
      Math.abs(viewport.center.y) + canvasSize.height / (2 * viewport.zoom)
    );
    
    // Concentric circles at unit intervals
    for (let r = scaledGridSystem.gridSize; r <= maxRadius; r += scaledGridSystem.gridSize) {
      const radiusInScreen = r * viewport.zoom;
      if (radiusInScreen >= 10) {
        polarElements.push(
          <circle
            key={`polar-circle-${r}`}
            cx={originScreen.x}
            cy={originScreen.y}
            r={radiusInScreen}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="0.5"
            opacity={0.4}
          />
        );
      }
    }
    
    // Radial lines at 30-degree intervals
    for (let angle = 0; angle < 360; angle += 30) {
      const radians = (angle * Math.PI) / 180;
      const endX = originScreen.x + maxRadius * viewport.zoom * Math.cos(radians);
      const endY = originScreen.y - maxRadius * viewport.zoom * Math.sin(radians);
      
      polarElements.push(
        <line
          key={`polar-line-${angle}`}
          x1={originScreen.x}
          y1={originScreen.y}
          x2={endX}
          y2={endY}
          stroke="#9CA3AF"
          strokeWidth="0.5"
          opacity={0.3}
        />
      );
    }
  }

  // Find ray intersections with x=1 line (rays starting from origin)
  const rayIntersections: Array<{ y: number; screenY: number }> = [];
  objects.forEach(obj => {
    if (obj.type === 'ray') {
      const { startPoint, endPoint } = obj.properties;
      // Check if ray starts from origin (0,0)
      if (Math.abs(startPoint.x) < 0.001 && Math.abs(startPoint.y) < 0.001) {
        // Calculate intersection with x=1 line
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        
        if (Math.abs(dx) > 0.001) { // Avoid division by zero
          const t = 1 / dx; // Parameter for x=1
          if (t > 0 && t <= 1) { // Ray goes through x=1 within its length
            const intersectionY = startPoint.y + t * dy;
            const screenPos = worldToScreen({ x: 1, y: intersectionY });
            rayIntersections.push({ y: intersectionY, screenY: screenPos.y });
          }
        }
      }
    }
  });

  // Generate grid line elements with special x=1 line
  const verticalLines = vLines.map(line => {
    // Special styling for x=1 line
    const isXOne = Math.abs(line.value - 1) < 0.001;
    const stroke = line.isAxis ? '#374151' : 
                   isXOne ? '#60A5FA' : // Light blue for x=1
                   line.isInteger ? '#E5E7EB' : // Very faint for integer lines
                   line.isMajor ? '#9CA3AF' : '#E5E7EB';
    const strokeWidth = line.isAxis ? 2 : 
                        isXOne ? 1.5 :
                        line.isInteger ? Math.max(1.0, viewport.zoom * 0.05) :
                        line.isMajor ? 1 : 0.5;
    const opacity = line.isAxis ? 1 : 
                    isXOne ? 0.8 :
                    line.isInteger ? Math.max(0.6, 0.4 * gridSystem.opacity) : // Ensure minimum visibility
                    line.isMajor ? 0.6 * gridSystem.opacity : 0.3 * gridSystem.opacity;
    
    return (
      <line
        key={`v${line.value}`}
        x1={line.x}
        y1={0}
        x2={line.x}
        y2={canvasSize.height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
    );
  });

  const horizontalLines = hLines.map(line => (
    <line
      key={`h${line.value}`}
      x1={0}
      y1={line.y}
      x2={canvasSize.width}
      y2={line.y}
      stroke={line.isAxis ? '#374151' : 
              line.isInteger ? '#E5E7EB' : // Very faint for integer lines
              line.isMajor ? '#9CA3AF' : '#E5E7EB'}
      strokeWidth={line.isAxis ? 2 : 
                   line.isInteger ? Math.max(1.0, viewport.zoom * 0.05) :
                   line.isMajor ? 1 : 0.5}
      opacity={line.isAxis ? 1 : 
               line.isInteger ? Math.max(0.6, 0.4 * gridSystem.opacity) : // Ensure minimum visibility
               line.isMajor ? 0.6 * gridSystem.opacity : 0.3 * gridSystem.opacity}
    />
  ));

  // Calculate 45-degree reference line (y=x) if enabled
  const yEqualsXLine = visualSettings.showReferenceLineY_equals_X ? (() => {
    // Find the bounds of the canvas in world coordinates
    const viewBounds = {
      left: viewport.center.x - (canvasSize.width / 2) / viewport.zoom,
      right: viewport.center.x + (canvasSize.width / 2) / viewport.zoom,
      top: viewport.center.y + (canvasSize.height / 2) / viewport.zoom,
      bottom: viewport.center.y - (canvasSize.height / 2) / viewport.zoom
    };
    
    // Calculate start and end points for the y=x line that spans the visible area
    const minCoord = Math.min(viewBounds.left, viewBounds.bottom);
    const maxCoord = Math.max(viewBounds.right, viewBounds.top);
    
    const lineStart = worldToScreen({ x: minCoord, y: minCoord });
    const lineEnd = worldToScreen({ x: maxCoord, y: maxCoord });
    
    return { lineStart, lineEnd };
  })() : null;
  
  // Calculate lattice points if enabled - with performance optimization
  const latticePoints = visualSettings.showLatticePoints ? (() => {
    const viewBounds = {
      left: viewport.center.x - (canvasSize.width / 2) / viewport.zoom,
      right: viewport.center.x + (canvasSize.width / 2) / viewport.zoom,
      top: viewport.center.y + (canvasSize.height / 2) / viewport.zoom,
      bottom: viewport.center.y - (canvasSize.height / 2) / viewport.zoom
    };
    
    const points = [];
    const startX = Math.max(-20, Math.floor(viewBounds.left));
    const endX = Math.min(20, Math.ceil(viewBounds.right));
    const startY = Math.max(-20, Math.floor(viewBounds.bottom));
    const endY = Math.min(20, Math.ceil(viewBounds.top));
    
    // Limit total points for performance (max ~200 points)
    const totalPointsEstimate = (endX - startX + 1) * (endY - startY + 1);
    if (totalPointsEstimate > 200) {
      // Skip points at higher zoom out levels
      const skipFactor = Math.ceil(Math.sqrt(totalPointsEstimate / 200));
      for (let x = startX; x <= endX; x += skipFactor) {
        for (let y = startY; y <= endY; y += skipFactor) {
          const screenPos = worldToScreen({ x, y });
          if (screenPos.x >= -20 && screenPos.x <= canvasSize.width + 20 &&
              screenPos.y >= -20 && screenPos.y <= canvasSize.height + 20) {
            points.push(screenPos);
          }
        }
      }
    } else {
      for (let x = startX; x <= endX; x++) {
        for (let y = startY; y <= endY; y++) {
          const screenPos = worldToScreen({ x, y });
          if (screenPos.x >= -20 && screenPos.x <= canvasSize.width + 20 &&
              screenPos.y >= -20 && screenPos.y <= canvasSize.height + 20) {
            points.push(screenPos);
          }
        }
      }
    }
    return points;
  })() : [];

  return (
    <g className="grid">
      {/* Polar coordinate system */}
      {(visualSettings.coordinateSystem === 'polar' || visualSettings.coordinateSystem === 'both') && (
        <g className="polar-grid">
          {polarElements}
        </g>
      )}
      
      {/* Cartesian coordinate system */}
      {(visualSettings.coordinateSystem === 'cartesian' || visualSettings.coordinateSystem === 'both') && (
        <g className="cartesian-grid">
          {verticalLines}
          {horizontalLines}
        </g>
      )}
      
      {/* Lattice points */}
      {latticePoints.map((point, index) => (
        <circle
          key={`lattice-${index}`}
          cx={point.x}
          cy={point.y}
          r="1.5"
          fill="#9CA3AF"
          opacity="0.3"
        />
      ))}
      
      {/* 45-degree reference line (y=x) */}
      {yEqualsXLine && (
        <line
          x1={yEqualsXLine.lineStart.x}
          y1={yEqualsXLine.lineStart.y}
          x2={yEqualsXLine.lineEnd.x}
          y2={yEqualsXLine.lineEnd.y}
          stroke="#A78BFA"
          strokeWidth="1.5"
          opacity="0.6"
          strokeDasharray="5,5"
        />
      )}
      
      {/* Coordinate labels */}
      {gridSystem.shouldShowLabels && (
        <g className="labels" fontSize="12" fill="#374151">
          {/* X-axis labels */}
          {vLines
            .filter(line => {
              // Only show labels for values that are multiples of labelStep
              const isLabelValue = Math.abs(line.value % scaledGridSystem.labelStep) < scaledGridSystem.gridSize / 10;
              // Skip values too close to origin to avoid overcrowding
              const notTooCloseToOrigin = Math.abs(line.value) >= scaledGridSystem.labelStep / 2;
              return isLabelValue && notTooCloseToOrigin;
            })
            // Remove duplicates by grouping nearby values (within 0.001 tolerance)
            .filter((line, index, array) => {
              return !array.slice(0, index).some(prevLine => 
                Math.abs(prevLine.value - line.value) < 0.001
              );
            })
            .map(line => (
              <text
                key={`xlabel${line.value}`}
                x={line.x}
                y={worldToScreen({ x: 0, y: 0 }).y + 20}
                textAnchor="middle"
                fontSize={scaledFontSize(11)}
                fontWeight="500"
                opacity={Math.max(0.7, gridSystem.opacity)}
              >
                {formatCoordinate(line.value, gridSystem.gridSize)}
              </text>
            ))
          }
          
          {/* Y-axis labels */}
          {hLines
            .filter(line => {
              // Only show labels for values that are multiples of labelStep
              const isLabelValue = Math.abs(line.value % scaledGridSystem.labelStep) < scaledGridSystem.gridSize / 10;
              // Skip values too close to origin to avoid overcrowding
              const notTooCloseToOrigin = Math.abs(line.value) >= scaledGridSystem.labelStep / 2;
              return isLabelValue && notTooCloseToOrigin;
            })
            // Remove duplicates by grouping nearby values (within 0.001 tolerance)
            .filter((line, index, array) => {
              return !array.slice(0, index).some(prevLine => 
                Math.abs(prevLine.value - line.value) < 0.001
              );
            })
            .map(line => (
              <text
                key={`ylabel${line.value}`}
                x={worldToScreen({ x: 0, y: 0 }).x - 15}
                y={line.y + 4}
                textAnchor="middle"
                fontSize={scaledFontSize(11)}
                fontWeight="500"
                opacity={Math.max(0.7, gridSystem.opacity)}
              >
                {formatCoordinate(line.value, gridSystem.gridSize)}
              </text>
            ))
          }
          
          {/* Origin label and visual marker */}
          <g>
            {/* Origin marker - small circle to make (0,0) more visible */}
            <circle
              cx={worldToScreen({ x: 0, y: 0 }).x}
              cy={worldToScreen({ x: 0, y: 0 }).y}
              r="3"
              fill="#374151"
              opacity="0.6"
            />
            
            {/* Origin label - positioned to the left of y-axis */}
            <text
              x={worldToScreen({ x: 0, y: 0 }).x - 25}
              y={worldToScreen({ x: 0, y: 0 }).y - 10}
              fontSize={scaledFontSize(11)}
              fontWeight="600"
              fill="#374151"
              opacity={Math.max(0.8, gridSystem.opacity)}
            >
              (0,0)
            </text>
          </g>

          {/* Ray intersection labels and dots on x=1 line */}
          {visualSettings.showDivisionAnswer && rayIntersections.map((intersection, index) => {
            const xOneScreenX = worldToScreen({ x: 1, y: 0 }).x;
            return (
              <g key={`ray-intersection-${index}`}>
                {/* Hollow dot at intersection point */}
                <circle
                  cx={xOneScreenX}
                  cy={intersection.screenY}
                  r="4"
                  fill="white"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  opacity="0.9"
                />
                {/* Label text */}
                <text
                  x={xOneScreenX + 15}
                  y={intersection.screenY + 4}
                  fontSize={scaledFontSize(10)}
                  fontWeight="600"
                  fill="#60A5FA"
                  opacity="0.9"
                >
                  y = {intersection.y.toFixed(2)}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </g>
  );
}