import React, { useState, useEffect } from 'react';
import type { MathObject } from '@getgrix/core';
import { formatCoordinate, formatMathValue } from '../utils/gridUtils.js';
import { storageManager } from '../utils/storageManager.js';

interface ContextMenuProps {
  selectedObject: MathObject | null;
  onDelete: () => void;
  onUpdate: (objectId: string, updates: Partial<any>) => void;
  onClose: () => void;
}

export function ContextMenu({ selectedObject, onDelete, onUpdate, onClose }: ContextMenuProps) {
  // Detect if we're on a mobile device
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
  
  // Initialize collapsed state directly from storage, defaulting to collapsed on mobile
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const state = storageManager.loadState();
    if (state?.uiSettings?.contextMenuCollapsed !== undefined) {
      return state.uiSettings.contextMenuCollapsed;
    }
    // Default to collapsed on mobile, expanded on desktop
    const defaultCollapsed = isMobile;
    
    // Save the default value to storage
    const newState = {
      ...state,
      uiSettings: {
        ...state?.uiSettings,
        contextMenuCollapsed: defaultCollapsed
      }
    };
    storageManager.saveState(newState);
    storageManager.scheduleSave();
    
    return defaultCollapsed;
  });

  // Save collapsed state to storage
  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    
    const state = storageManager.loadState() || {};
    storageManager.saveState({
      ...state,
      uiSettings: {
        ...state.uiSettings,
        contextMenuCollapsed: newCollapsed
      }
    });
    storageManager.scheduleSave();
  };

  if (!selectedObject) return null;

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  // Helper function to update function equation and regenerate points
  const updateFunctionEquation = (functionObj: any, newEquation: string) => {
    try {
      // Helper to safely evaluate function
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

      // Detect function type
      const detectFunctionType = (equation: string): 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom' => {
        if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) {
          return 'trigonometric';
        }
        if (equation.includes('exp') || equation.includes('e^')) {
          return 'exponential';
        }
        if (equation.includes('log') || equation.includes('ln')) {
          return 'logarithmic';
        }
        if (/x\^\d+|x\*\*\d+/.test(equation)) {
          return 'polynomial';
        }
        return 'custom';
      };

      // Regenerate points with new equation
      const domain = functionObj.properties.domain;
      const resolution = functionObj.properties.resolution || 20;
      const points = [];
      const step = (domain.max - domain.min) / (resolution * (domain.max - domain.min));
      
      for (let x = domain.min; x <= domain.max; x += step) {
        const y = evaluateFunction(newEquation, x);
        if (y !== null) {
          points.push({ x, y });
        }
      }

      // Return updated function properties
      return {
        properties: {
          ...functionObj.properties,
          equation: newEquation,
          functionType: detectFunctionType(newEquation),
          points: points
        }
      };
    } catch (error) {
      console.error('Failed to update function equation:', error);
      return null;
    }
  };

  const renderObjectDetails = () => {
    switch (selectedObject.type) {
      case 'ray':
        const { startPoint, endPoint, slope } = selectedObject.properties;
        const isFromOrigin = Math.abs(startPoint.x) < 0.001 && Math.abs(startPoint.y) < 0.001;
        
        return (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Line Details</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Start: ({formatCoordinate(startPoint.x, 1)}, {formatCoordinate(startPoint.y, 1)})</div>
              <div>End: ({formatCoordinate(endPoint.x, 1)}, {formatCoordinate(endPoint.y, 1)})</div>
              {isFromOrigin && (
                <div>Fraction: {Math.round(endPoint.y)}/{Math.round(endPoint.x)}</div>
              )}
              <div>Slope: {isFinite(slope) ? slope.toFixed(3) : 'undefined'}</div>
            </div>
          </div>
        );
        
      case 'rectangle':
        const { x, y, width, height, area } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Rectangle Details</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Position: ({formatCoordinate(x, 1)}, {formatCoordinate(y, 1)})</div>
              <div>Size: {formatCoordinate(width, 1)} × {formatCoordinate(height, 1)}</div>
            </div>
          </div>
        );
        
      case 'circle':
        const { center, radius, diameter, circumference, area: circleArea } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Circle Details</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Center: ({formatCoordinate(center.x, 1)}, {formatCoordinate(center.y, 1)})</div>
              <div>Radius: {formatMathValue(radius)}</div>
              <div>Diameter: {formatMathValue(diameter)}</div>
              <div>Circumference: {formatMathValue(circumference)}</div>
              <div>Area: {formatMathValue(circleArea)}</div>
            </div>
          </div>
        );
        
      case 'triangle':
        const { vertices, sideA, sideB, sideC, angleA, angleB, angleC, area: triangleArea, perimeter, type: triangleType } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Triangle Details</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Type: {triangleType}</div>
              <div>Vertices:</div>
              <div className="ml-2">
                <div>A: ({formatCoordinate(vertices[0].x, 1)}, {formatCoordinate(vertices[0].y, 1)})</div>
                <div>B: ({formatCoordinate(vertices[1].x, 1)}, {formatCoordinate(vertices[1].y, 1)})</div>
                <div>C: ({formatCoordinate(vertices[2].x, 1)}, {formatCoordinate(vertices[2].y, 1)})</div>
              </div>
              <div>Sides: {formatMathValue(sideA)}, {formatMathValue(sideB)}, {formatMathValue(sideC)}</div>
              <div>Angles: {formatMathValue(angleA)}°, {formatMathValue(angleB)}°, {formatMathValue(angleC)}°</div>
              <div>Area: {formatMathValue(triangleArea)}</div>
              <div>Perimeter: {formatMathValue(perimeter)}</div>
            </div>
          </div>
        );
        
      case 'function':
        const functionObj = selectedObject as any;
        const { equation, functionType, domain, points } = functionObj.properties;
        
        return (
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Function Details</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Equation: f(x) = {equation}</div>
              <div>Type: {functionType}</div>
              <div>Domain: [{formatCoordinate(domain.min, 1)}, {formatCoordinate(domain.max, 1)}]</div>
              <div>Points: {points.length}</div>
            </div>
            
            {/* Editable equation input */}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Edit Equation:
              </label>
              <input
                type="text"
                defaultValue={equation}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="e.g., x^2, sin(x), 2*x + 1"
                onKeyDown={(e) => {
                  // Prevent all keyboard events from propagating to the grid
                  e.stopPropagation();
                  
                  if (e.key === 'Enter') {
                    const newEquation = (e.target as HTMLInputElement).value.trim();
                    if (newEquation && newEquation !== equation) {
                      // Update the function with new equation
                      const updatedFunction = updateFunctionEquation(functionObj, newEquation);
                      if (updatedFunction) {
                        onUpdate(selectedObject.id, { properties: updatedFunction.properties });
                      }
                    }
                    // Blur the input to exit editing mode
                    (e.target as HTMLInputElement).blur();
                  } else if (e.key === 'Escape') {
                    // Cancel editing and blur
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                onKeyUp={(e) => {
                  // Also prevent keyup events from propagating
                  e.stopPropagation();
                }}
                onKeyPress={(e) => {
                  // Also prevent keypress events from propagating
                  e.stopPropagation();
                }}
                onFocus={(e) => {
                  // Select all text when focused for easy editing
                  (e.target as HTMLInputElement).select();
                }}
              />
              <div className="text-xs text-gray-500 mt-1">
                Press Enter to apply. Examples: x^2, sin(x), cos(x), log(x), exp(x)
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  // Get object label for collapsed view
  const getObjectLabel = () => {
    switch (selectedObject.type) {
      case 'ray':
        return `Line: slope ${formatMathValue((selectedObject as any).properties.slope)}`;
      case 'rectangle':
        const rect = selectedObject as any;
        return `Rectangle: ${formatMathValue(rect.properties.width)} × ${formatMathValue(rect.properties.height)}`;
      case 'circle':
        return `Circle: r=${formatMathValue((selectedObject as any).properties.radius)}`;
      case 'triangle':
        return `Triangle`;
      case 'function':
        return `Function: ${(selectedObject as any).properties.equation}`;
      default:
        return selectedObject.type;
    }
  };

  if (isCollapsed) {
    return (
      <div className="fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="flex items-center gap-2 px-3 py-2">
          <button
            onClick={handleToggleCollapse}
            className="text-gray-500 hover:text-gray-700"
            title="Expand"
          >
            ▶
          </button>
          <span className="text-sm text-gray-700">{getObjectLabel()}</span>
          <button
            onClick={handleDelete}
            className="ml-2 text-red-600 hover:text-red-700"
            title="Delete"
          >
            🗑️
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed top-20 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48"
      onKeyDown={(e) => {
        // Prevent all keyboard events from propagating to the canvas/grid
        e.stopPropagation();
      }}
      onKeyUp={(e) => {
        e.stopPropagation();
      }}
      onKeyPress={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-700">{selectedObject.type.charAt(0).toUpperCase() + selectedObject.type.slice(1)} Details</h3>
        <button
          onClick={handleToggleCollapse}
          className="text-gray-400 hover:text-gray-600 text-xs"
          title="Collapse"
        >
          ▼
        </button>
      </div>
      
      {renderObjectDetails()}
      
      <div className="mt-3 pt-2 border-t border-gray-100 flex gap-2">
        <button
          onClick={handleDelete}
          className="flex items-center gap-1 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors"
        >
          <span>🗑️</span>
          Delete
        </button>
        <button
          onClick={onClose}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors"
        >
          <span>✕</span>
          Close
        </button>
      </div>
    </div>
  );
}