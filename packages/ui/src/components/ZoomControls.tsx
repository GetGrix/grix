// Zoom controls component for better modularity
import React, { useState, useRef, useEffect } from 'react';
import type { Viewport } from '@getgrix/core';
import { useTranslation } from '../i18n/useTranslation.js';

interface ZoomControlsProps {
  viewport: Viewport;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onCenterOnly: () => void;
}

export function ZoomControls({ viewport, onZoomIn, onZoomOut, onZoomReset, onCenterOnly }: ZoomControlsProps) {
  const { t } = useTranslation();
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

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={onZoomIn}
        className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors"
        title={t('zoom.zoomIn')}
        disabled={viewport.zoom >= 1000}
      >
        +
      </button>
      <button
        onClick={onZoomOut}
        className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold transition-colors"
        title={t('zoom.zoomOut')}
        disabled={viewport.zoom <= 0.01}
      >
        −
      </button>
      <div className="relative">
        <button
          onClick={handleHomeClick}
          className="w-10 h-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-lg transition-colors"
          title={t('zoom.centerView')}
        >
          🏠
        </button>
        
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
          <div className="text-[8px] leading-none">{t('zoom.far')}</div>
        )}
        {viewport.zoom > 100 && (
          <div className="text-[8px] leading-none">{t('zoom.close')}</div>
        )}
      </div>
      
      {/* Quick zoom presets for mobile */}
      {viewport.zoom < 0.5 || viewport.zoom > 100 ? (
        <button
          onClick={() => onZoomReset()}
          className="w-10 h-6 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded font-medium transition-colors"
          title={t('zoom.centerView')}
        >
          {t('zoom.fix')}
        </button>
      ) : null}
    </div>
  );
}