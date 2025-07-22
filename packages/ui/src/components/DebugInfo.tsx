// Debug info component for better modularity
import React from 'react';
import type { InputCapabilities, Viewport } from '@getgrix/core';
import { useTranslation } from '../i18n/useTranslation.js';

interface DebugInfoProps {
  capabilities: InputCapabilities | null;
  viewport: Viewport;
  activeTool: string | null;
  selectedObjectsCount: number;
}

export function DebugInfo({ capabilities, viewport, activeTool, selectedObjectsCount }: DebugInfoProps) {
  const { t } = useTranslation();
  
  if (!capabilities) return null;

  return (
    <div className="absolute top-2 left-2 text-xs text-gray-500 bg-white/80 p-2 rounded shadow-sm">
      <div>{t('debug.input')}: {capabilities.hasTouch ? '👆' : '🖱️'} {capabilities.hasPencil ? '✏️' : ''}</div>
      <div>{t('debug.zoom')}: {viewport.zoom >= 1 ? viewport.zoom.toFixed(1) : viewport.zoom.toFixed(2)}×</div>
      <div>{t('debug.center')}: ({viewport.center.x.toFixed(1)}, {viewport.center.y.toFixed(1)})</div>
      <div>{t('debug.tool')}: {activeTool || t('debug.panMode')}</div>
      {selectedObjectsCount > 0 && (
        <div>{t('debug.selected')}: {selectedObjectsCount} {selectedObjectsCount === 1 ? t('debug.object') : t('debug.objects')}</div>
      )}
    </div>
  );
}