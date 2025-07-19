import React from 'react';
import type { MathObject } from '@getgrix/core';
import { formatCoordinate } from '../utils/gridUtils.js';

interface ContextMenuProps {
  selectedObject: MathObject | null;
  onDelete: () => void;
  onClose: () => void;
}

export function ContextMenu({ selectedObject, onDelete, onClose }: ContextMenuProps) {
  if (!selectedObject) return null;

  const handleDelete = () => {
    onDelete();
    onClose();
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
              <div>Area: {formatCoordinate(area, 1)}</div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 min-w-48">
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