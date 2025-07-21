import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';
import { storageManager } from '../utils/storageManager.js';

interface LineToolTutorialProps {
  isVisible: boolean;
  onDismiss: () => void;
}

export function LineToolTutorial({ isVisible, onDismiss }: LineToolTutorialProps) {
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  const handleDismiss = (dontShowAgain = false) => {
    if (dontShowAgain) {
      // Save preference to never show again
      const state = storageManager.loadState() || {};
      const newState = {
        ...state,
        tutorialSettings: {
          ...state.tutorialSettings,
          lineToolTutorialSeen: true
        }
      };
      storageManager.saveState(newState);
      storageManager.scheduleSave();
    }
    
    setIsAnimating(false);
    setTimeout(() => onDismiss(), 300); // Allow fade out animation
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-t-2xl relative overflow-hidden">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1 text-white drop-shadow-sm">
              {t('linetool.firstTime.title')}
            </h3>
            <p className="text-white/90 text-sm">
              {t('linetool.firstTime.subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Feature List */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-sm">{t('linetool.firstTime.feature1')}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm">{t('linetool.firstTime.feature2')}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm">{t('linetool.firstTime.feature3')}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sm">{t('linetool.firstTime.feature4')}</span>
            </div>
          </div>

          {/* Visual Preview */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border-2 border-dashed border-gray-300">
            <div className="relative w-full h-24 flex items-center justify-center">
              {/* Mini grid representation */}
              <svg width="120" height="80" viewBox="0 0 120 80" className="absolute">
                {/* Grid lines */}
                <g stroke="#E5E7EB" strokeWidth="0.5">
                  {/* Vertical lines */}
                  <line x1="20" y1="0" x2="20" y2="80" />
                  <line x1="40" y1="0" x2="40" y2="80" />
                  <line x1="60" y1="0" x2="60" y2="80" />
                  <line x1="80" y1="0" x2="80" y2="80" />
                  <line x1="100" y1="0" x2="100" y2="80" />
                  {/* Horizontal lines */}
                  <line x1="0" y1="20" x2="120" y2="20" />
                  <line x1="0" y1="40" x2="120" y2="40" />
                  <line x1="0" y1="60" x2="120" y2="60" />
                </g>
                
                {/* Axes */}
                <g stroke="#374151" strokeWidth="1">
                  <line x1="60" y1="0" x2="60" y2="80" />
                  <line x1="0" y1="40" x2="120" y2="40" />
                </g>
                
                {/* Origin point (pulsing) */}
                <circle cx="60" cy="40" r="3" fill="#EF4444" className="animate-pulse">
                  <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Sample line from origin */}
                <line x1="60" y1="40" x2="100" y2="20" stroke="#2563eb" strokeWidth="2" />
                
                {/* Sample fraction label */}
                <g transform="translate(100, 15)">
                  <rect x="-8" y="-8" width="16" height="16" fill="#60A5FA" rx="2" opacity="0.9" />
                  <text x="0" y="-2" fontSize="6" fill="white" textAnchor="middle">3</text>
                  <line x1="-6" y1="0" x2="6" y2="0" stroke="white" strokeWidth="0.5" />
                  <text x="0" y="6" fontSize="6" fill="white" textAnchor="middle">2</text>
                </g>
                
                {/* Equivalent fraction markers */}
                <circle cx="80" cy="30" r="1.5" fill="#22C55E" opacity="0.7" />
                <circle cx="100" cy="20" r="1.5" fill="#22C55E" opacity="0.7" />
              </svg>
              
              {/* Hint text */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                  Start here: (0,0)
                </span>
              </div>
            </div>
          </div>

          {/* Hint */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm font-medium text-center">
              {t('linetool.firstTime.hint')}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleDismiss(false)}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('linetool.firstTime.dismiss')}
            </button>
            <button
              onClick={() => handleDismiss(true)}
              className="px-4 py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              {t('linetool.firstTime.dontShow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}