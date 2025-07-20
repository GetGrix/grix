import { create } from 'zustand';

interface VisualizationSettings {
  // Origin line enhancements
  showEquivalentFractions: boolean;
  showLengthMultiples: boolean;
  showAreaRectangle: boolean;
  showDivisionMultiples: boolean;
  showRiseRunTriangle: boolean;
  showDistanceMarkers: boolean;
  showAngleArc: boolean;
  
  // Division visualization
  showDivisionAnswer: boolean;
  
  // Grid enhancements
  showLatticePoints: boolean;
  showIntegerGridLines: boolean;
  showReferenceLineY_equals_X: boolean;
  
  // Rectangle-based educational concepts
  showFactorPairs: boolean;
  showCommutativeProperty: boolean;
  showDistributiveProperty: boolean;
  showPrimeComposite: boolean;
  showGCF: boolean;
  showLCM: boolean;
  
  // Display settings
  fontScale: number; // 1.0 = normal, 1.5 = 50% bigger, etc.
  gridScale: number; // 1.0 = normal, 2.0 = 2x denser, 0.5 = 2x sparser
  
  // Snapping settings
  snapPrecision: 'adaptive' | 'whole' | 'half' | 'quarter' | 'tenth'; // Controls snapping granularity
  
  // Coordinate system settings
  coordinateSystem: 'cartesian' | 'polar' | 'both';
  showPolarGrid: boolean;
  customOrigin: { x: number; y: number } | null; // null = default (0,0)
}

interface VisualizationStore extends VisualizationSettings {
  // Actions
  toggleSetting: (setting: keyof VisualizationSettings) => void;
  setFontScale: (scale: number) => void;
  setGridScale: (scale: number) => void;
  setSnapPrecision: (precision: 'adaptive' | 'whole' | 'half' | 'quarter' | 'tenth') => void;
  setCoordinateSystem: (system: 'cartesian' | 'polar' | 'both') => void;
  setCustomOrigin: (origin: { x: number; y: number } | null) => void;
  resetToDefaults: () => void;
}

const defaultSettings: VisualizationSettings = {
  // Origin line enhancements - start with most basic ones enabled
  showEquivalentFractions: true,
  showLengthMultiples: true,
  showAreaRectangle: true,
  showDivisionMultiples: true,
  showRiseRunTriangle: false,
  showDistanceMarkers: false,
  showAngleArc: false,
  
  // Division visualization
  showDivisionAnswer: true,
  
  // Grid enhancements
  showLatticePoints: false,
  showIntegerGridLines: true,
  showReferenceLineY_equals_X: true,
  
  // Rectangle-based educational concepts
  showFactorPairs: false,
  showCommutativeProperty: false,
  showDistributiveProperty: false,
  showPrimeComposite: false,
  showGCF: true,
  showLCM: false,
  
  // Display settings
  fontScale: 1.0,
  gridScale: 1.0,
  
  // Snapping settings
  snapPrecision: 'whole',
  
  // Coordinate system settings
  coordinateSystem: 'cartesian',
  showPolarGrid: false,
  customOrigin: null,
};

export const useVisualizationStore = create<VisualizationStore>((set) => ({
  ...defaultSettings,

  toggleSetting: (setting) => {
    set((state) => ({
      [setting]: !state[setting]
    }));
  },

  setFontScale: (scale) => {
    set({ fontScale: scale });
  },

  setGridScale: (scale) => {
    set({ gridScale: scale });
  },

  setSnapPrecision: (precision) => {
    set({ snapPrecision: precision });
  },

  setCoordinateSystem: (system) => {
    set({ coordinateSystem: system });
  },

  setCustomOrigin: (origin) => {
    set({ customOrigin: origin });
  },

  resetToDefaults: () => {
    set(defaultSettings);
  },
}));