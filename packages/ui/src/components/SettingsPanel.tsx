import React, { useState, useEffect, useRef } from 'react';
import { useVisualizationStore } from '../store/visualizationStore.js';
import { useTranslation } from '../i18n/useTranslation.js';

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

interface SettingsPanelProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export function SettingsPanel({ isOpen: externalIsOpen, onToggle }: SettingsPanelProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const panelRef = useRef<HTMLDivElement>(null);
  const visualizationStore = useVisualizationStore();
  const { toggleSetting, setFontScale, setGridScale, setSnapPrecision, setCoordinateSystem, setZoomSensitivity, resetToDefaults } = visualizationStore;
  const { t, language, changeLanguage, availableLanguages } = useTranslation();

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        if (onToggle) {
          onToggle();
        } else {
          setInternalIsOpen(false);
        }
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
  }, [isOpen, onToggle]);

  // Helper function to convert camelCase to translation key
  const getSettingTranslationKey = (key: string) => {
    // Convert showEquivalentFractions to equivalentFractions
    const cleanKey = key.replace(/^show/, '');
    return cleanKey.charAt(0).toLowerCase() + cleanKey.slice(1);
  };

  const allSettingSections: SettingSection[] = [
    {
      title: t('settings.sections.originLines'),
      subtitle: t('settings.sections.originLines.subtitle'),
      settings: [
        {
          key: 'showEquivalentFractions',
          label: t('settings.equivalentFractions'),
          description: t('settings.equivalentFractions.description'),
        },
        {
          key: 'showLengthMultiples',
          label: t('settings.lengthMultiples'),
          description: t('settings.lengthMultiples.description'),
        },
        {
          key: 'showAreaRectangle',
          label: t('settings.areaRectangle'),
          description: t('settings.areaRectangle.description'),
        },
        {
          key: 'showDivisionMultiples',
          label: t('settings.divisionMultiples'),
          description: t('settings.divisionMultiples.description'),
        },
        {
          key: 'showRiseRunTriangle',
          label: t('settings.riseRunTriangle'),
          description: t('settings.riseRunTriangle.description'),
        },
        {
          key: 'showDistanceMarkers',
          label: t('settings.distanceMarkers'),
          description: t('settings.distanceMarkers.description'),
        },
        {
          key: 'showAngleArc',
          label: t('settings.angleArc'),
          description: t('settings.angleArc.description'),
        },
        {
          key: 'showCoordinateProjections',
          label: t('settings.coordinateProjections'),
          description: t('settings.coordinateProjections.description'),
        },
      ],
    },
    {
      title: t('settings.sections.divisionFractions'),
      subtitle: t('settings.sections.divisionFractions.subtitle'),
      settings: [
        {
          key: 'showDivisionAnswer',
          label: t('settings.divisionAnswer'),
          description: t('settings.divisionAnswer.description'),
        },
      ],
    },
    {
      title: t('settings.sections.gridReference'),
      subtitle: t('settings.sections.gridReference.subtitle'),
      settings: [
        {
          key: 'showLatticePoints',
          label: t('settings.latticePoints'),
          description: t('settings.latticePoints.description'),
        },
        {
          key: 'showReferenceLineY_equals_X',
          label: t('settings.referenceLineY_equals_X'),
          description: t('settings.referenceLineY_equals_X.description'),
        },
      ],
    },
    {
      title: t('settings.sections.circleConcepts'),
      subtitle: t('settings.sections.circleConcepts.subtitle'),
      settings: [
        {
          key: 'showTangentLines',
          label: t('settings.tangentLines'),
          description: t('settings.tangentLines.description'),
        },
      ],
    },
    {
      title: t('settings.sections.functionConcepts'),
      subtitle: t('settings.sections.functionConcepts.subtitle'),
      settings: [
        {
          key: 'showFunctionExtensions',
          label: t('settings.functionExtensions'),
          description: t('settings.functionExtensions.description'),
        },
      ],
    },
    {
      title: t('settings.sections.triangleConcepts'),
      subtitle: t('settings.sections.triangleConcepts.subtitle'),
      settings: [
        {
          key: 'showTriangleAngles',
          label: t('settings.triangleAngles'),
          description: t('settings.triangleAngles.description'),
        },
        {
          key: 'showTriangleClassification',
          label: t('settings.triangleClassification'),
          description: t('settings.triangleClassification.description'),
        },
        {
          key: 'showSpecialTriangles',
          label: t('settings.specialTriangles'),
          description: t('settings.specialTriangles.description'),
        },
        {
          key: 'showSOHCAHTOA',
          label: t('settings.SOHCAHTOA'),
          description: t('settings.SOHCAHTOA.description'),
        },
        {
          key: 'showTrigValues',
          label: t('settings.trigValues'),
          description: t('settings.trigValues.description'),
        },
        {
          key: 'showTriangleAltitudes',
          label: t('settings.triangleAltitudes'),
          description: t('settings.triangleAltitudes.description'),
        },
        {
          key: 'showPythagoreanSquares',
          label: t('settings.pythagoreanSquares'),
          description: t('settings.pythagoreanSquares.description'),
        },
      ],
    },
    {
      title: t('settings.sections.rectangleConcepts'),
      subtitle: t('settings.sections.rectangleConcepts.subtitle'),
      settings: [
        {
          key: 'showFactorPairs',
          label: t('settings.factorPairs'),
          description: t('settings.factorPairs.description'),
        },
        {
          key: 'showCommutativeProperty',
          label: t('settings.commutativeProperty'),
          description: t('settings.commutativeProperty.description'),
        },
        {
          key: 'showDistributiveProperty',
          label: t('settings.distributiveProperty'),
          description: t('settings.distributiveProperty.description'),
        },
        {
          key: 'showPrimeComposite',
          label: t('settings.primeComposite'),
          description: t('settings.primeComposite.description'),
        },
        {
          key: 'showGCF',
          label: t('settings.GCF'),
          description: t('settings.GCF.description'),
        },
        {
          key: 'showLCM',
          label: t('settings.LCM'),
          description: t('settings.LCM.description'),
        },
      ],
    },
    {
      title: t('settings.sections.display'),
      subtitle: t('settings.sections.display.subtitle'),
      settings: [], // No checkboxes for this section
    },
  ];

  // Filter sections based on selected category
  const settingSections = selectedCategory === 'all' 
    ? allSettingSections 
    : allSettingSections.filter(section => {
        // Create a URL-friendly version of the section title for comparison
        const sectionId = section.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
        return sectionId === selectedCategory;
      });

  // Create category options for the dropdown
  const categoryOptions = [
    { id: 'all', name: t('settings.allSettings') },
    ...allSettingSections.map(section => ({
      id: section.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: section.title
    }))
  ];

  return (
    <div ref={panelRef} className="relative">
      <button
        onClick={handleToggle}
        className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center"
        title={t('settings.title')}
      >
        <span className="text-lg">⚙️</span>
      </button>

      {isOpen && (
        <div className="settings-panel absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[28rem] overflow-y-auto z-60">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">{t('settings.title')}</h3>
              <button
                onClick={resetToDefaults}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                {t('settings.resetAll')}
              </button>
            </div>
            
            {/* Category Filter */}
            <div className="px-4 pt-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white"
              >
                {categoryOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
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
                  {section.title === t('settings.sections.display') && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">
                          {t('settings.fontSize')}
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
                        {t('settings.fontSize.description')}
                      </div>
                      
                      {/* Grid Scale Control */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">
                            {t('settings.gridDensity')}
                          </label>
                          <span className="text-xs text-gray-500 font-mono">
                            {Math.round(visualizationStore.gridScale * 100)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">{t('settings.gridSparse')}</span>
                          <input
                            type="range"
                            min="0.2"
                            max="5.0"
                            step="0.1"
                            value={visualizationStore.gridScale}
                            onChange={(e) => setGridScale(parseFloat(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <span className="text-xs text-gray-600">{t('settings.gridDense')}</span>
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          {t('settings.gridDensity.description')}
                        </div>
                      </div>
                      
                      {/* Coordinate System Control */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-sm font-medium text-gray-700">
                          {t('settings.coordinateSystem')}
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: 'cartesian', label: t('settings.cartesianOnly'), desc: t('settings.cartesianOnly.description') },
                            { value: 'polar', label: t('settings.polarOnly'), desc: t('settings.polarOnly.description') },
                            { value: 'both', label: t('settings.bothSystems'), desc: t('settings.bothSystems.description') }
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
                          {t('settings.snapPrecision')}
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: 'adaptive', label: t('settings.adaptive'), desc: t('settings.adaptive.description') },
                            { value: 'whole', label: t('settings.wholeNumbers'), desc: t('settings.wholeNumbers.description') },
                            { value: 'half', label: t('settings.halfUnits'), desc: t('settings.halfUnits.description') },
                            { value: 'quarter', label: t('settings.quarterUnits'), desc: t('settings.quarterUnits.description') },
                            { value: 'tenth', label: t('settings.tenthUnits'), desc: t('settings.tenthUnits.description') }
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
                          {t('settings.snapPrecision.description')}
                        </div>
                      </div>
                      
                      {/* Zoom Sensitivity */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-sm font-medium text-gray-700">
                          {t('settings.zoomSensitivity')}
                        </label>
                        <div className="grid grid-cols-1 gap-1">
                          {[
                            { value: 'low', label: t('settings.low'), desc: t('settings.low.description') },
                            { value: 'medium', label: t('settings.medium'), desc: t('settings.medium.description') },
                            { value: 'high', label: t('settings.high'), desc: t('settings.high.description') }
                          ].map(option => (
                            <label key={option.value} className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer group">
                              <input
                                type="radio"
                                name="zoomSensitivity"
                                value={option.value}
                                checked={visualizationStore.zoomSensitivity === option.value}
                                onChange={(e) => setZoomSensitivity(e.target.value as 'low' | 'medium' | 'high')}
                                className="mt-0.5"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
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
                          {t('settings.zoomSensitivity.description')}
                        </div>
                      </div>
                      
                      {/* Language Selector */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-sm font-medium text-gray-700">
                          {t('settings.language')}
                        </label>
                        <select
                          value={language}
                          onChange={(e) => changeLanguage(e.target.value)}
                          className="w-full text-sm border border-gray-200 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          {availableLanguages.map(lang => (
                            <option key={lang.code} value={lang.code}>
                              {lang.nativeName} ({lang.name})
                            </option>
                          ))}
                        </select>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          {t('settings.language.description')}
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
              {t('settings.footerText')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}