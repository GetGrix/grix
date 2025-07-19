import { create } from 'zustand';

interface VisualizationSettings {
  // Origin line enhancements
  showEquivalentFractions: boolean;
  showLengthMultiples: boolean;
  showAreaRectangle: boolean;
  showRiseRunTriangle: boolean;
  showDistanceMarkers: boolean;
  showAngleArc: boolean;
  
  // Division visualization
  showDivisionAnswer: boolean;
  
  // Grid enhancements
  showLatticePoints: boolean;
  showIntegerGridLines: boolean;
  showReferenceLineY_equals_X: boolean;
}

interface VisualizationStore extends VisualizationSettings {
  // Actions
  toggleSetting: (setting: keyof VisualizationSettings) => void;
  resetToDefaults: () => void;
}

const defaultSettings: VisualizationSettings = {
  // Origin line enhancements - start with most basic ones enabled
  showEquivalentFractions: true,
  showLengthMultiples: true,
  showAreaRectangle: true,
  showRiseRunTriangle: false,
  showDistanceMarkers: false,
  showAngleArc: false,
  
  // Division visualization
  showDivisionAnswer: true,
  
  // Grid enhancements
  showLatticePoints: false,
  showIntegerGridLines: true,
  showReferenceLineY_equals_X: true,
};

export const useVisualizationStore = create<VisualizationStore>((set) => ({
  ...defaultSettings,

  toggleSetting: (setting) => {
    set((state) => ({
      [setting]: !state[setting]
    }));
  },

  resetToDefaults: () => {
    set(defaultSettings);
  },
}));