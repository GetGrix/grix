import React, { useState, useEffect } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useTranslation } from '../i18n/useTranslation.js';

interface EndpointTooltipProps {
  onDismiss: () => void;
}

export function EndpointTooltip({ onDismiss }: EndpointTooltipProps) {
  const { worldToScreen, objects } = useCanvasStore();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  // Find the default line to get the actual endpoint
  const defaultLine = objects.find(obj => obj.id.startsWith('ray_default_'));
  const rawEndPoint = defaultLine?.properties.endPoint || { x: 3, y: 9 };
  
  // TEMPORARY FIX: There seems to be a 3-unit Y offset issue, so adjust
  const endPoint = { x: rawEndPoint.x, y: rawEndPoint.y - 3 };

  // Auto-dismiss after 30 seconds, or when user interacts with the endpoint
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 30000);

    // Also listen for mouse/touch events on the endpoint to dismiss
    const handleInteraction = () => {
      clearTimeout(timer);
      setTimeout(() => handleDismiss(), 500); // Short delay to let user see what they clicked
    };

    // Listen for any canvas interaction
    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => onDismiss(), 300);
  };

  if (!isVisible) return null;

  // Get endpoint screen position for the pulse effect
  const screenPos = worldToScreen(endPoint);
  const isMobile = window.innerWidth < 768;

  // If no default line found, don't show tooltip
  if (!defaultLine) {
    return null;
  }

  return (
    <>
      {/* Gentle backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-10"
        onClick={handleDismiss}
      />
      
      {/* Highlight effect on the actual endpoint */}
      <div
        className="fixed z-45 pointer-events-none"
        style={{
          left: screenPos.x - 16,
          top: screenPos.y - 16,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Pulsing rings */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
          <div className="absolute inset-1 bg-blue-500 rounded-full animate-ping opacity-40 animation-delay-200"></div>
          
          {/* Inner highlight circle */}
          <div className="absolute inset-2 bg-white rounded-full border-2 border-blue-600 shadow-lg animate-pulse"></div>
          
          {/* Center dot */}
          <div className="absolute inset-3 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Toast-style notification */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${isMobile ? 'bottom-20 left-4 right-4' : 'bottom-8 left-1/2 transform -translate-x-1/2'}`}
        style={!isMobile ? { width: '400px', maxWidth: '90vw' } : {}}
      >
        <div className="bg-white border border-blue-200 rounded-xl shadow-lg p-4 relative">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl leading-none w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
          
          <div className="pr-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="font-semibold text-gray-800 text-sm">
                {t('endpoint.tooltip.title')}
              </div>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
              {t('endpoint.tooltip.message')}
            </div>
          </div>
          
          {/* Subtle gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </>
  );
}