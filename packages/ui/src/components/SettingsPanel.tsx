import React, { useState, useEffect, useRef } from 'react';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface SettingItem {
  key: keyof ReturnType<typeof useVisualizationStore>;
  label: string;
  description: string;
}

interface SettingSection {
  title: string;
  subtitle?: string;
  settings: SettingItem[];
}

export function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const visualizationStore = useVisualizationStore();
  const { toggleSetting, setFontScale, resetToDefaults } = visualizationStore;

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const settingSections: SettingSection[] = [
    {
      title: 'Origin Lines',
      subtitle: 'Enhancements for lines from (0,0)',
      settings: [
        {
          key: 'showEquivalentFractions',
          label: 'Equivalent Fractions',
          description: 'Green circles showing equivalent fractions',
        },
        {
          key: 'showLengthMultiples',
          label: 'Length Multiples',
          description: 'Small dots at 2×, 3×, 4× line length',
        },
        {
          key: 'showAreaRectangle',
          label: 'Area Rectangle',
          description: 'Soft rectangle showing multiplication',
        },
        {
          key: 'showRiseRunTriangle',
          label: 'Rise/Run Triangle',
          description: 'Triangle showing slope components',
        },
        {
          key: 'showDistanceMarkers',
          label: 'Distance Markers',
          description: 'Radial quarter-circles at unit distances',
        },
        {
          key: 'showAngleArc',
          label: 'Angle Arc',
          description: 'Arc showing angle from x-axis with measurement',
        },
      ],
    },
    {
      title: 'Division & Fractions',
      subtitle: 'Visual fraction and division concepts',
      settings: [
        {
          key: 'showDivisionAnswer',
          label: 'Division Answer (x=1 line)',
          description: 'Blue dot showing y-value at x=1',
        },
      ],
    },
    {
      title: 'Grid & Reference',
      subtitle: 'Grid enhancements and reference lines',
      settings: [
        {
          key: 'showLatticePoints',
          label: 'Lattice Points',
          description: 'Dots at all integer coordinates',
        },
        {
          key: 'showIntegerGridLines',
          label: 'Integer Grid Lines',
          description: 'Faint lines at whole numbers',
        },
        {
          key: 'showReferenceLineY_equals_X',
          label: 'y=x Reference Line',
          description: 'Purple diagonal line for comparison',
        },
      ],
    },
    {
      title: 'Display',
      subtitle: 'Adjust visibility for classrooms and large screens',
      settings: [], // No checkboxes for this section
    },
  ];

  return (
    <div ref={panelRef} className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        title="Visualization Settings"
      >
        <span className="text-lg">⚙️</span>
        <span className="text-sm font-medium text-gray-700">Settings</span>
        <span className={`text-xs transition-transform ${isOpen ? '' : 'rotate-180'}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">Visualization Settings</h3>
              <button
                onClick={resetToDefaults}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset All
              </button>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="p-4 space-y-5">
            {settingSections.map((section, sectionIndex) => (
              <div key={section.title}>
                {/* Section Header */}
                <div className={`${sectionIndex > 0 ? 'border-t border-gray-100 pt-4' : ''} mb-3`}>
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    {section.title}
                  </h4>
                  {section.subtitle && (
                    <p className="text-xs text-gray-500 mt-0.5">{section.subtitle}</p>
                  )}
                </div>

                {/* Section Settings */}
                <div className="space-y-2.5">
                  {section.settings.map((setting) => (
                    <label key={setting.key} className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={visualizationStore[setting.key] as boolean}
                        onChange={() => toggleSetting(setting.key)}
                        className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {setting.label}
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          {setting.description}
                        </div>
                      </div>
                    </label>
                  ))}
                  
                  {/* Font Scale Control for Display section */}
                  {section.title === 'Display' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">
                          Font Size
                        </label>
                        <span className="text-xs text-gray-500 font-mono">
                          {Math.round(visualizationStore.fontScale * 100)}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400">A</span>
                        <input
                          type="range"
                          min="0.8"
                          max="2.0"
                          step="0.1"
                          value={visualizationStore.fontScale}
                          onChange={(e) => setFontScale(parseFloat(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <span className="text-sm text-gray-600">A</span>
                      </div>
                      <div className="text-xs text-gray-500 leading-relaxed">
                        Increase font size for better visibility on TVs and projectors
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Toggle features to explore different mathematical concepts
            </p>
          </div>
        </div>
      )}
    </div>
  );
}