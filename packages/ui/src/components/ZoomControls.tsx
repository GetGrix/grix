// Zoom controls component for better modularity
import React, { useState, useRef, useEffect } from 'react';
import type { Viewport } from '@getgrix/core';
import { storageManager } from '../utils/storageManager.js';

interface ZoomControlsProps {
  viewport: Viewport;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onCenterOnly: () => void;
}

export function ZoomControls({ viewport, onZoomIn, onZoomOut, onZoomReset, onCenterOnly }: ZoomControlsProps) {
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const clickTimeoutRef = useRef<number | null>(null);
  const tooltipTimeoutRef = useRef<number | null>(null);
  
  // Detect if we're on a touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Load tooltip dismissed state from storage
  useEffect(() => {
    const state = storageManager.loadState();
    if (state?.tooltipSettings?.homeButtonSeen) {
      setTooltipDismissed(true);
    }
  }, []);

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    setTooltipDismissed(true);
    
    // Save to storage that they've seen it
    const state = storageManager.loadState() || {};
    storageManager.saveState({
      ...state,
      tooltipSettings: {
        ...state.tooltipSettings,
        homeButtonSeen: true
      }
    });
  };

  const handleHomeClick = () => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;

    if (timeSinceLastClick < 500) {
      // Double click - reset zoom too
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
      }
      setShowTooltip(false);
      onZoomReset();
    } else {
      // Single click - center only after delay to detect double click
      clickTimeoutRef.current = window.setTimeout(() => {
        onCenterOnly();
        clickTimeoutRef.current = null;
      }, 300);
    }
    
    // Show tooltip only on first use if not seen before
    if (!tooltipDismissed) {
      setShowTooltip(true);
      
      // Auto-hide tooltip after 5 seconds and mark as seen
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
      tooltipTimeoutRef.current = window.setTimeout(() => {
        setShowTooltip(false);
        setTooltipDismissed(true);
        
        // Mark as seen in storage
        const state = storageManager.loadState() || {};
        storageManager.saveState({
          ...state,
          tooltipSettings: {
            ...state.tooltipSettings,
            homeButtonSeen: true
          }
        });
      }, 5000);
    }
    
    setLastClickTime(now);
  };

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, []);
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
      <div className="relative">
        <button
          onClick={handleHomeClick}
          className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-lg transition-colors"
          title="Center view (single click) or Reset zoom (double click)"
        >
          🏠
        </button>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-0 right-full mr-2 w-48 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
            <button
              onClick={handleDismissTooltip}
              className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center text-gray-400 hover:text-white"
              title="Got it!"
            >
              ×
            </button>
            <div className="pr-4">
              <p className="font-medium mb-1">🏠 Home Button</p>
              <p className="text-gray-300">
                {isTouchDevice ? (
                  <>
                    <strong>Tap once:</strong> Re-center the grid<br/>
                    <strong>Double tap:</strong> Reset zoom level
                  </>
                ) : (
                  <>
                    <strong>Click once:</strong> Re-center the grid<br/>
                    <strong>Double click:</strong> Reset zoom level
                  </>
                )}
              </p>
            </div>
            <div className="absolute bottom-4 left-full transform">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Zoom level indicator with status */}
      <div className={`w-12 h-8 border rounded text-xs flex flex-col items-center justify-center transition-colors ${
        viewport.zoom < 0.5 ? 'bg-red-50 border-red-200 text-red-700' :
        viewport.zoom > 100 ? 'bg-orange-50 border-orange-200 text-orange-700' :
        'bg-white/90 border-gray-300 text-gray-600'
      }`}>
        <div className="font-semibold">
          {viewport.zoom >= 1 ? Math.round(viewport.zoom) : viewport.zoom.toFixed(1)}×
        </div>
        {viewport.zoom < 0.5 && (
          <div className="text-[8px] leading-none">far</div>
        )}
        {viewport.zoom > 100 && (
          <div className="text-[8px] leading-none">close</div>
        )}
      </div>
      
      {/* Quick zoom presets for mobile */}
      {viewport.zoom < 0.5 || viewport.zoom > 100 ? (
        <button
          onClick={() => onZoomReset()}
          className="w-10 h-6 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded font-medium transition-colors"
          title="Reset to comfortable zoom"
        >
          Fix
        </button>
      ) : null}
    </div>
  );
}