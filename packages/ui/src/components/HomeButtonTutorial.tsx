import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';
import { storageManager } from '../utils/storageManager.js';

interface HomeButtonTutorialProps {
  isVisible: boolean;
  onDismiss: () => void;
}

export function HomeButtonTutorial({ isVisible, onDismiss }: HomeButtonTutorialProps) {
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
          homeButtonTutorialSeen: true
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
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white p-6 rounded-t-2xl relative overflow-hidden">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1 text-white drop-shadow-sm">
              {t('homebutton.firstTime.title')}
            </h3>
            <p className="text-white/90 text-sm">
              {t('homebutton.firstTime.subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Control Options */}
          <div className="space-y-4 mb-6">
            {/* Single Click */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👆</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t('homebutton.firstTime.singleClick')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('homebutton.firstTime.singleClickDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Double Click */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">👆👆</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t('homebutton.firstTime.doubleClick')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('homebutton.firstTime.doubleClickDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 mb-6 border-2 border-dashed border-blue-300">
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Grid representation */}
              <svg width="200" height="100" viewBox="0 0 200 100" className="absolute">
                {/* Grid lines */}
                <g stroke="#E5E7EB" strokeWidth="0.5">
                  {/* Vertical lines */}
                  {[40, 60, 80, 100, 120, 140, 160].map(x => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" />
                  ))}
                  {/* Horizontal lines */}
                  {[20, 40, 60, 80].map(y => (
                    <line key={`h${y}`} x1="0" y1={y} x2="200" y2={y} />
                  ))}
                </g>
                
                {/* Axes */}
                <g stroke="#374151" strokeWidth="1">
                  <line x1="100" y1="0" x2="100" y2="100" />
                  <line x1="0" y1="50" x2="200" y2="50" />
                </g>
                
                {/* Origin marker */}
                <circle cx="100" cy="50" r="3" fill="#EF4444" />
                
                {/* Home button representation */}
                <g transform="translate(170, 70)">
                  <rect x="-15" y="-15" width="30" height="30" rx="15" fill="#2563eb" opacity="0.9" />
                  <text x="0" y="5" fontSize="16" fill="white" textAnchor="middle">🏠</text>
                  
                  {/* Animated click indicator */}
                  <circle cx="0" cy="0" r="20" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.3">
                    <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Arrow pointing to origin */}
                <path d="M 130 50 L 110 50 M 110 50 L 115 45 M 110 50 L 115 55" 
                      stroke="#10B981" strokeWidth="2" fill="none" 
                      strokeDasharray="2,2" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Hint */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm font-medium text-center">
              {t('homebutton.firstTime.hint')}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleDismiss(false)}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('homebutton.firstTime.dismiss')}
            </button>
            <button
              onClick={() => handleDismiss(true)}
              className="px-4 py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              {t('homebutton.firstTime.dontShow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}