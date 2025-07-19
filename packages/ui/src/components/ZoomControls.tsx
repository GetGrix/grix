// Zoom controls component for better modularity
import React, { useState, useRef } from 'react';
import type { Viewport } from '@getgrix/core';

interface ZoomControlsProps {
  viewport: Viewport;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onCenterOnly: () => void;
}

export function ZoomControls({ viewport, onZoomIn, onZoomOut, onZoomReset, onCenterOnly }: ZoomControlsProps) {
  const [lastClickTime, setLastClickTime] = useState(0);
  const clickTimeoutRef = useRef<number | null>(null);

  const handleHomeClick = () => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;

    if (timeSinceLastClick < 500) {
      // Double click - reset zoom too
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
      }
      onZoomReset();
    } else {
      // Single click - center only after delay to detect double click
      clickTimeoutRef.current = window.setTimeout(() => {
        onCenterOnly();
        clickTimeoutRef.current = null;
      }, 300);
    }
    
    setLastClickTime(now);
  };
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={onZoomIn}
        className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors"
        title="Zoom in (Ctrl+scroll up)"
        disabled={viewport.zoom >= 1000}
      >
        +
      </button>
      <button
        onClick={onZoomOut}
        className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors"
        title="Zoom out (Ctrl+scroll down)"
        disabled={viewport.zoom <= 0.01}
      >
        −
      </button>
      <button
        onClick={handleHomeClick}
        className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-xs transition-colors"
        title="Center view (single click) or Reset zoom (double click)"
      >
        ⌂
      </button>
      
      {/* Zoom level indicator */}
      <div className="w-10 h-6 bg-white/90 border border-gray-300 rounded text-xs flex items-center justify-center text-gray-600">
        {viewport.zoom >= 1 ? Math.round(viewport.zoom) : viewport.zoom.toFixed(1)}×
      </div>
    </div>
  );
}