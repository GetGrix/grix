import React, { useState, useEffect } from 'react';
import type { MathObject } from '@getgrix/core';
import { formatCoordinate, formatMathValue } from '../utils/gridUtils.js';
import { storageManager } from '../utils/storageManager.js';
import { useTranslation } from '../i18n/useTranslation.js';

interface ContextMenuProps {
  selectedObject: MathObject | null;
  onDelete: () => void;
  onUpdate: (objectId: string, updates: Partial<any>) => void;
  onClose: () => void;
}

export function ContextMenu({ selectedObject, onDelete, onUpdate, onClose }: ContextMenuProps) {
  const { t } = useTranslation();
  
  // Detect if we're on a mobile device
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
  
  // Initialize collapsed state directly from storage, defaulting to collapsed on mobile
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const state = storageManager.loadState();
    const savedCollapsed = state?.uiSettings?.contextMenuCollapsed;
    
    // If we have a saved preference in the main storage, use it
    if (savedCollapsed !== undefined) {
      return savedCollapsed;
    }
    
    // Fallback to localStorage for immediate reliability
    try {
      const fallbackCollapsed = localStorage.getItem('grix-ui-collapsed');
      if (fallbackCollapsed !== null) {
        return fallbackCollapsed === 'true';
      }
    } catch (e) {
      // Handle cases where localStorage is not available
    }
    
    // Default to collapsed on all devices
    return true;
  });

  // Ensure collapsed state is saved to storage on mount if not already set
  useEffect(() => {
    const state = storageManager.loadState();
    if (state?.uiSettings?.contextMenuCollapsed === undefined) {
      const defaultCollapsed = true;
      const newState = {
        ...state,
        uiSettings: {
          ...state?.uiSettings,
          contextMenuCollapsed: defaultCollapsed
        }
      };
      storageManager.saveState(newState);
      storageManager.scheduleSave();
      setIsCollapsed(defaultCollapsed);
    }
  }, [isMobile]);

  // Save collapsed state to storage
  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    
    // Immediately save the new state
    const state = storageManager.loadState() || {};
    const newState = {
      ...state,
      uiSettings: {
        ...state.uiSettings,
        contextMenuCollapsed: newCollapsed
      }
    };
    storageManager.saveState(newState);
    storageManager.scheduleSave();
    
    // Also force a save to localStorage immediately for reliability
    try {
      localStorage.setItem('grix-ui-collapsed', newCollapsed.toString());
    } catch (e) {
      // Handle cases where localStorage is not available
      console.warn('Could not save collapsed state to localStorage');
    }
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
            <div className="space-y-1 text-xs text-gray-600">
              <div>{t('context.start')}: ({formatCoordinate(startPoint.x, 1)}, {formatCoordinate(startPoint.y, 1)})</div>
              <div>{t('context.end')}: ({formatCoordinate(endPoint.x, 1)}, {formatCoordinate(endPoint.y, 1)})</div>
              {isFromOrigin && (
                <div>{t('context.fraction')}: {Math.round(endPoint.y)}/{Math.round(endPoint.x)}</div>
              )}
              <div>{t('context.slope')}: {isFinite(slope) ? slope.toFixed(3) : 'undefined'}</div>
            </div>
          </div>
        );
        
      case 'rectangle':
        const { x, y, width, height, area } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="space-y-1 text-xs text-gray-600">
              <div>{t('context.position')}: ({formatCoordinate(x, 1)}, {formatCoordinate(y, 1)})</div>
              <div>{t('context.size')}: {formatCoordinate(width, 1)} × {formatCoordinate(height, 1)}</div>
            </div>
          </div>
        );
        
      case 'circle':
        const { center, radius, diameter, circumference, area: circleArea } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="space-y-1 text-xs text-gray-600">
              <div>{t('context.center')}: ({formatCoordinate(center.x, 1)}, {formatCoordinate(center.y, 1)})</div>
              <div>{t('context.radius')}: {formatMathValue(radius)}</div>
              <div>{t('context.diameter')}: {formatMathValue(diameter)}</div>
              <div>{t('context.circumference')}: {formatMathValue(circumference)}</div>
              <div>{t('context.area')}: {formatMathValue(circleArea)}</div>
            </div>
          </div>
        );
        
      case 'triangle':
        const { vertices, sideA, sideB, sideC, angleA, angleB, angleC, area: triangleArea, perimeter, type: triangleType } = selectedObject.properties;
        
        return (
          <div className="space-y-2">
            <div className="space-y-1 text-xs text-gray-600">
              <div>{t('context.type')}: {triangleType}</div>
              <div>{t('context.vertices')}:</div>
              <div className="ml-2">
                <div>A: ({formatCoordinate(vertices[0].x, 1)}, {formatCoordinate(vertices[0].y, 1)})</div>
                <div>B: ({formatCoordinate(vertices[1].x, 1)}, {formatCoordinate(vertices[1].y, 1)})</div>
                <div>C: ({formatCoordinate(vertices[2].x, 1)}, {formatCoordinate(vertices[2].y, 1)})</div>
              </div>
              <div>{t('context.sides')}: {formatMathValue(sideA)}, {formatMathValue(sideB)}, {formatMathValue(sideC)}</div>
              <div>{t('context.angles')}: {formatMathValue(angleA)}°, {formatMathValue(angleB)}°, {formatMathValue(angleC)}°</div>
              <div>{t('context.area')}: {formatMathValue(triangleArea)}</div>
              <div>{t('context.perimeter')}: {formatMathValue(perimeter)}</div>
            </div>
          </div>
        );
        
      case 'function':
        const functionObj = selectedObject as any;
        const { equation, functionType, domain, points } = functionObj.properties;
        
        return (
          <div className="space-y-2">
            <div className="space-y-1 text-xs text-gray-600">
              <div>{t('context.equation')}: f(x) = {equation}</div>
              <div>{t('context.type')}: {functionType}</div>
              <div>{t('context.domain')}: [{formatCoordinate(domain.min, 1)}, {formatCoordinate(domain.max, 1)}]</div>
              <div>{t('context.points')}: {points.length}</div>
            </div>
            
            {/* Editable equation input */}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {t('context.editEquation')}:
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
        return `${t('objects.line')}: ${t('context.slope')} ${formatMathValue((selectedObject as any).properties.slope)}`;
      case 'rectangle':
        const rect = selectedObject as any;
        return `${t('objects.rectangle')}: ${formatMathValue(rect.properties.width)} × ${formatMathValue(rect.properties.height)}`;
      case 'circle':
        return `${t('objects.circle')}: r=${formatMathValue((selectedObject as any).properties.radius)}`;
      case 'triangle':
        return `${t('objects.triangle')}`;
      case 'function':
        return `${t('objects.function')}: ${(selectedObject as any).properties.equation}`;
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
            title={t('context.expand')}
          >
            ▶
          </button>
          <span className="text-sm text-gray-700">{getObjectLabel()}</span>
          <button
            onClick={handleDelete}
            className="ml-2 text-red-600 hover:text-red-700"
            title={t('context.delete')}
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
        <h3 className="text-sm font-semibold text-gray-700">{t(`context.${selectedObject.type}Details`)}</h3>
        <button
          onClick={handleToggleCollapse}
          className="text-gray-400 hover:text-gray-600 text-xs"
          title={t('context.collapse')}
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
          {t('context.delete')}
        </button>
        <button
          onClick={onClose}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded transition-colors"
        >
          <span>✕</span>
          {t('context.close')}
        </button>
      </div>
    </div>
  );
}