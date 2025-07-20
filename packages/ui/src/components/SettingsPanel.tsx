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
  const { toggleSetting, setFontScale, setGridScale, setSnapPrecision, setCoordinateSystem, resetToDefaults } = visualizationStore;

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      // Use capture phase to ensure we get the event before canvas handlers
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('click', handleClickOutside, true);
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
          key: 'showDivisionMultiples',
          label: 'Division Multiples',
          description: 'Horizontal lines showing division answer multiples',
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
          label: 'Slope/Division Answer (x=1)',
          description: 'Blue dot showing slope value and division answer at x=1',
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
      title: 'Circle Concepts',
      subtitle: 'Visual features for circles and curves',
      settings: [
        {
          key: 'showTangentLines',
          label: 'Tangent Lines',
          description: 'Show tangent line and slope on hover',
        },
      ],
    },
    {
      title: 'Triangle Concepts',
      subtitle: 'Trigonometry and geometry learning features',
      settings: [
        {
          key: 'showTriangleAngles',
          label: 'Angle Measurements',
          description: 'Show all three angles with degree values',
        },
        {
          key: 'showTriangleClassification',
          label: 'Triangle Classification',
          description: 'Label triangle type (scalene, isosceles, etc.)',
        },
        {
          key: 'showSpecialTriangles',
          label: 'Special Triangles',
          description: 'Highlight 30-60-90 and 45-45-90 triangles',
        },
        {
          key: 'showSOHCAHTOA',
          label: 'SOH-CAH-TOA Visualization',
          description: 'Highlight opposite, adjacent, hypotenuse sides',
        },
        {
          key: 'showTrigValues',
          label: 'Trigonometric Values',
          description: 'Show sin, cos, tan values on hover',
        },
        {
          key: 'showTriangleAltitudes',
          label: 'Altitude Lines',
          description: 'Show perpendicular height lines',
        },
        {
          key: 'showPythagoreanSquares',
          label: 'Pythagorean Squares',
          description: 'Show a² + b² = c² with actual squares (right triangles)',
        },
      ],
    },
    {
      title: 'Rectangle Concepts',
      subtitle: 'Educational features for rectangles and areas',
      settings: [
        {
          key: 'showFactorPairs',
          label: 'Factor Pairs',
          description: 'Show all rectangles with the same area',
        },
        {
          key: 'showCommutativeProperty',
          label: 'Commutative Property',
          description: 'Show flipped rectangle (w×h = h×w)',
        },
        {
          key: 'showDistributiveProperty',
          label: 'Distributive Property',
          description: 'Split rectangle to show a(b+c) = ab+ac',
        },
        {
          key: 'showPrimeComposite',
          label: 'Prime vs Composite',
          description: 'Badge showing if area is prime or composite',
        },
        {
          key: 'showGCF',
          label: 'Greatest Common Factor',
          description: 'Largest square tiling both dimensions',
        },
        {
          key: 'showLCM',
          label: 'Least Common Multiple',
          description: 'Smallest rectangle fitting both dimensions',
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
        <div className="settings-panel absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto">
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
          <div className="settings-scrollable p-4 space-y-5">
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
                      
                      {/* Grid Scale Control */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">
                            Grid Density
                          </label>
                          <span className="text-xs text-gray-500 font-mono">
                            {Math.round(visualizationStore.gridScale * 100)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">Sparse</span>
                          <input
                            type="range"
                            min="0.2"
                            max="5.0"
                            step="0.1"
                            value={visualizationStore.gridScale}
                            onChange={(e) => setGridScale(parseFloat(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <span className="text-xs text-gray-600">Dense</span>
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          Adjust grid line spacing for different zoom levels and detail needs
                        </div>
                      </div>
                      
                      {/* Coordinate System Control */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-sm font-medium text-gray-700">
                          Coordinate System
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: 'cartesian', label: 'Cartesian Only', desc: 'Standard x-y grid' },
                            { value: 'polar', label: 'Polar Only', desc: 'Circular coordinate system' },
                            { value: 'both', label: 'Both Systems', desc: 'Overlay polar on Cartesian' }
                          ].map(option => (
                            <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                              <input
                                type="radio"
                                name="coordinateSystem"
                                value={option.value}
                                checked={visualizationStore.coordinateSystem === option.value}
                                onChange={(e) => setCoordinateSystem(e.target.value as any)}
                                className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                  {option.label}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {option.desc}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      {/* Snap Precision Control */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-sm font-medium text-gray-700">
                          Snap Precision
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: 'adaptive', label: 'Adaptive', desc: 'Automatically adjusts based on zoom level' },
                            { value: 'whole', label: 'Whole Numbers', desc: 'Snap to 1, 2, 3, etc.' },
                            { value: 'half', label: 'Half Units', desc: 'Snap to 0.5, 1.0, 1.5, etc.' },
                            { value: 'quarter', label: 'Quarter Units', desc: 'Snap to 0.25, 0.5, 0.75, etc.' },
                            { value: 'tenth', label: 'Tenth Units', desc: 'Snap to 0.1, 0.2, 0.3, etc.' }
                          ].map(option => (
                            <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                              <input
                                type="radio"
                                name="snapPrecision"
                                value={option.value}
                                checked={visualizationStore.snapPrecision === option.value}
                                onChange={(e) => setSnapPrecision(e.target.value as any)}
                                className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                  {option.label}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {option.desc}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          Controls where objects can be placed when snap-to-grid is enabled
                        </div>
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