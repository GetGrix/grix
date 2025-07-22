// Grid utilities for adaptive coordinate system
import type { Point, Viewport } from '@getgrix/core';

export interface GridConfig {
  minSpacing: number; // Minimum pixel spacing between grid lines
  maxSpacing: number; // Maximum pixel spacing between grid lines
  labelMinSpacing: number; // Minimum spacing for labels
}

export interface GridSystem {
  gridSize: number; // World units per grid line
  labelStep: number; // World units per label
  shouldShowGrid: boolean;
  shouldShowLabels: boolean;
  opacity: number;
}

export function calculateAdaptiveGrid(
  viewport: Viewport,
  config: GridConfig = {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  }
): GridSystem {
  const zoom = viewport.zoom;
  
  // Start with base grid size of 1 world unit
  let baseGridSize = 1;
  let gridSize = baseGridSize;
  
  // Calculate screen spacing for current grid size
  let screenSpacing = gridSize * zoom;
  
  // If grid is too dense, increase grid size
  while (screenSpacing < config.minSpacing && gridSize < 10000) {
    gridSize *= getNextStep(gridSize);
    screenSpacing = gridSize * zoom;
  }
  
  // If grid is too sparse, decrease grid size
  while (screenSpacing > config.maxSpacing && gridSize > 0.0001) {
    gridSize /= getPrevStep(gridSize);
    screenSpacing = gridSize * zoom;
  }
  
  // Calculate label step (labels should be less dense than grid)
  let labelStep = gridSize;
  let labelSpacing = labelStep * zoom;
  
  while (labelSpacing < config.labelMinSpacing && labelStep < gridSize * 100) {
    labelStep *= getNextStep(labelStep);
    labelSpacing = labelStep * zoom;
  }
  
  // Calculate opacity based on how close we are to minimum spacing
  const opacityFactor = Math.max(0.1, Math.min(1, (screenSpacing - config.minSpacing) / (config.maxSpacing - config.minSpacing)));
  
  return {
    gridSize,
    labelStep,
    shouldShowGrid: screenSpacing >= config.minSpacing,
    shouldShowLabels: labelSpacing >= config.labelMinSpacing,
    opacity: opacityFactor
  };
}

// Smart stepping function for nice round numbers
function getNextStep(currentValue: number): number {
  if (currentValue < 1) {
    if (currentValue >= 0.5) return 2; // 0.5 -> 1
    if (currentValue >= 0.2) return 2.5; // 0.2 -> 0.5, 0.4 -> 1
    if (currentValue >= 0.1) return 2; // 0.1 -> 0.2
    return 2; // smaller values
  } else if (currentValue < 10) {
    if (currentValue >= 5) return 2; // 5 -> 10
    if (currentValue >= 2) return 2.5; // 2 -> 5
    if (currentValue >= 1) return 2; // 1 -> 2
    return 2;
  } else {
    // For larger values, use powers of 10 with 1, 2, 5 multipliers
    const magnitude = Math.pow(10, Math.floor(Math.log10(currentValue)));
    const normalized = currentValue / magnitude;
    
    if (normalized >= 5) return 2; // 5 -> 10
    if (normalized >= 2) return 2.5; // 2 -> 5
    if (normalized >= 1) return 2; // 1 -> 2
    return 2;
  }
}

function getPrevStep(currentValue: number): number {
  if (currentValue <= 1) {
    if (currentValue <= 0.1) return 2; // 0.1 -> 0.05
    if (currentValue <= 0.2) return 2; // 0.2 -> 0.1
    if (currentValue <= 0.5) return 2.5; // 0.5 -> 0.2
    if (currentValue <= 1) return 2; // 1 -> 0.5
    return 2;
  } else if (currentValue <= 10) {
    if (currentValue <= 2) return 2; // 2 -> 1
    if (currentValue <= 5) return 2.5; // 5 -> 2
    if (currentValue <= 10) return 2; // 10 -> 5
    return 2;
  } else {
    // For larger values
    const magnitude = Math.pow(10, Math.floor(Math.log10(currentValue)));
    const normalized = currentValue / magnitude;
    
    if (normalized <= 2) return 2; // 2 -> 1
    if (normalized <= 5) return 2.5; // 5 -> 2
    if (normalized <= 10) return 2; // 10 -> 5
    return 2;
  }
}

export function generateGridLines(
  viewport: Viewport,
  canvasSize: { width: number; height: number },
  gridSystem: GridSystem,
  worldToScreen: (point: Point) => Point,
  showIntegerLines: boolean = true
): {
  verticalLines: Array<{ x: number; isAxis: boolean; isMajor: boolean; isInteger: boolean; value: number }>;
  horizontalLines: Array<{ y: number; isAxis: boolean; isMajor: boolean; isInteger: boolean; value: number }>;
} {
  const { gridSize } = gridSystem;
  
  // Calculate visible world bounds
  const viewBounds = {
    left: viewport.center.x - (canvasSize.width / 2) / viewport.zoom,
    right: viewport.center.x + (canvasSize.width / 2) / viewport.zoom,
    top: viewport.center.y + (canvasSize.height / 2) / viewport.zoom,
    bottom: viewport.center.y - (canvasSize.height / 2) / viewport.zoom
  };
  
  const verticalLines = [];
  const horizontalLines = [];
  
  // Generate main grid vertical lines
  const startX = Math.floor(viewBounds.left / gridSize) * gridSize;
  const endX = Math.ceil(viewBounds.right / gridSize) * gridSize;
  
  for (let x = startX; x <= endX; x += gridSize) {
    const screenX = worldToScreen({ x, y: 0 }).x;
    const isAxis = Math.abs(x) < gridSize / 2;
    const isMajor = Math.abs(x % (gridSize * 5)) < gridSize / 2;
    
    verticalLines.push({ x: screenX, isAxis, isMajor, isInteger: false, value: x });
  }
  
  // Generate faint integer lines if setting is enabled and it's useful
  // Show integer lines when:
  // 1. Grid size is >= 2 (normal spacing), OR
  // 2. Grid size is smaller (zoomed in) and integer lines would be helpful
  if (showIntegerLines && (gridSize >= 2 || gridSize < 1)) {
    const intStartX = Math.floor(viewBounds.left);
    const intEndX = Math.ceil(viewBounds.right);
    
    for (let x = intStartX; x <= intEndX; x += 1) {
      // Don't add if already covered by main grid
      if (Math.abs(x % gridSize) > 0.001) {
        const screenX = worldToScreen({ x, y: 0 }).x;
        const isAxis = Math.abs(x) < 0.5;
        
        verticalLines.push({ x: screenX, isAxis, isMajor: false, isInteger: true, value: x });
      }
    }
  }
  
  // Generate main grid horizontal lines
  const startY = Math.floor(viewBounds.bottom / gridSize) * gridSize;
  const endY = Math.ceil(viewBounds.top / gridSize) * gridSize;
  
  for (let y = startY; y <= endY; y += gridSize) {
    const screenY = worldToScreen({ x: 0, y }).y;
    const isAxis = Math.abs(y) < gridSize / 2;
    const isMajor = Math.abs(y % (gridSize * 5)) < gridSize / 2;
    
    horizontalLines.push({ y: screenY, isAxis, isMajor, isInteger: false, value: y });
  }
  
  // Generate faint integer lines if setting is enabled and it's useful
  // Show integer lines when:
  // 1. Grid size is >= 2 (normal spacing), OR
  // 2. Grid size is smaller (zoomed in) and integer lines would be helpful
  if (showIntegerLines && (gridSize >= 2 || gridSize < 1)) {
    const intStartY = Math.floor(viewBounds.bottom);
    const intEndY = Math.ceil(viewBounds.top);
    
    for (let y = intStartY; y <= intEndY; y += 1) {
      // Don't add if already covered by main grid
      if (Math.abs(y % gridSize) > 0.001) {
        const screenY = worldToScreen({ x: 0, y }).y;
        const isAxis = Math.abs(y) < 0.5;
        
        horizontalLines.push({ y: screenY, isAxis, isMajor: false, isInteger: true, value: y });
      }
    }
  }
  
  return { verticalLines, horizontalLines };
}

export function formatMathValue(value: number | undefined | null, maxDecimals: number = 3): string {
  // Format a mathematical value with smart precision
  // Remove trailing zeros and use up to maxDecimals places
  
  // Guard against undefined/null values
  if (value === undefined || value === null || isNaN(value)) {
    return '0';
  }
  
  if (Number.isInteger(value)) {
    return value.toString();
  }
  
  // Use toFixed then remove trailing zeros
  const fixed = value.toFixed(maxDecimals);
  return parseFloat(fixed).toString();
}

// Shape selection utilities
export function distanceToLineSegment(point: Point, start: Point, end: Point): number {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  
  if (length === 0) return Math.sqrt((point.x - start.x) ** 2 + (point.y - start.y) ** 2);
  
  const t = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / (length * length)));
  const projection = {
    x: start.x + t * dx,
    y: start.y + t * dy
  };
  
  return Math.sqrt((point.x - projection.x) ** 2 + (point.y - projection.y) ** 2);
}

export function pointInTriangle(point: Point, vertices: [Point, Point, Point]): boolean {
  const [a, b, c] = vertices;
  const denominator = (b.y - c.y) * (a.x - c.x) + (c.x - b.x) * (a.y - c.y);
  const alpha = ((b.y - c.y) * (point.x - c.x) + (c.x - b.x) * (point.y - c.y)) / denominator;
  const beta = ((c.y - a.y) * (point.x - c.x) + (a.x - c.x) * (point.y - c.y)) / denominator;
  const gamma = 1 - alpha - beta;
  
  return alpha >= 0 && beta >= 0 && gamma >= 0;
}

export function distanceToCircleEdge(point: Point, center: Point, radius: number): number {
  const distance = Math.sqrt((point.x - center.x) ** 2 + (point.y - center.y) ** 2);
  return Math.abs(distance - radius);
}

export function formatCoordinate(value: number, gridSize: number): string {
  // Smart formatting based on grid size
  if (gridSize >= 1) {
    return value.toFixed(0);
  } else if (gridSize >= 0.1) {
    return value.toFixed(1);
  } else if (gridSize >= 0.01) {
    return value.toFixed(2);
  } else {
    return value.toFixed(3);
  }
}

export function calculateSnapSize(
  viewport: Viewport,
  snapPrecision: 'adaptive' | 'whole' | 'half' | 'quarter' | 'tenth'
): number {
  if (snapPrecision !== 'adaptive') {
    // Fixed precision modes
    switch (snapPrecision) {
      case 'whole': return 1;
      case 'half': return 0.5;
      case 'quarter': return 0.25;
      case 'tenth': return 0.1;
      default: return 1;
    }
  }
  
  // Adaptive mode: calculate snap size based on current grid system
  const adaptiveGrid = calculateAdaptiveGrid(viewport, {
    minSpacing: 8,
    maxSpacing: 80,
    labelMinSpacing: 40
  });
  
  // For very fine grids (high zoom), allow sub-unit snapping
  if (adaptiveGrid.gridSize <= 0.1) {
    return adaptiveGrid.gridSize; // Allow snapping to 0.05, 0.02, etc.
  } else if (adaptiveGrid.gridSize <= 0.5) {
    return 0.1; // Snap to tenths
  } else if (adaptiveGrid.gridSize <= 2) {
    return 0.25; // Snap to quarters
  } else {
    return 1; // Snap to whole numbers
  }
}