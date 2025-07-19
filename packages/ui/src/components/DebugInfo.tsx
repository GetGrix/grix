// Debug info component for better modularity
import React from 'react';
import type { InputCapabilities, Viewport } from '@getgrix/core';

interface DebugInfoProps {
  capabilities: InputCapabilities | null;
  viewport: Viewport;
  activeTool: string | null;
  selectedObjectsCount: number;
}

export function DebugInfo({ capabilities, viewport, activeTool, selectedObjectsCount }: DebugInfoProps) {
  if (!capabilities) return null;

  return (
    <div className="absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm">
      <div>Input: {capabilities.hasTouch ? '👆' : '🖱️'} {capabilities.hasPencil ? '✏️' : ''}</div>
      <div>Zoom: {viewport.zoom >= 1 ? viewport.zoom.toFixed(1) : viewport.zoom.toFixed(2)}×</div>
      <div>Center: ({viewport.center.x.toFixed(1)}, {viewport.center.y.toFixed(1)})</div>
      <div>Tool: {activeTool || 'Pan Mode'}</div>
      {selectedObjectsCount > 0 && (
        <div>Selected: {selectedObjectsCount} object{selectedObjectsCount !== 1 ? 's' : ''}</div>
      )}
    </div>
  );
}