import { create } from "zustand";
import { storageManager } from "../utils/storageManager.js";

interface VisualizationSettings {
  // Origin line enhancements
  showEquivalentFractions: boolean;
  showLengthMultiples: boolean;
  showAreaRectangle: boolean;
  showDivisionMultiples: boolean;
  showRiseRunTriangle: boolean;
  showDistanceMarkers: boolean;
  showAngleArc: boolean;
  showCoordinateProjections: boolean;

  // Circle enhancements
  showTangentLines: boolean;

  // Function enhancements
  showFunctionExtensions: boolean;

  // Triangle enhancements
  showTriangleAngles: boolean;
  showSOHCAHTOA: boolean;
  showTrigValues: boolean;
  showTriangleClassification: boolean;
  showTriangleAltitudes: boolean;
  showSpecialTriangles: boolean;
  showPythagoreanSquares: boolean;

  // Division visualization
  showDivisionAnswer: boolean;

  // Grid enhancements
  showLatticePoints: boolean;
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
  showCoordinateCrosshairs: boolean; // Show coordinate crosshairs when hovering in pan mode

  // Snapping settings
  snapPrecision: "adaptive" | "whole" | "half" | "quarter" | "tenth"; // Controls snapping granularity

  // Coordinate system settings
  coordinateSystem: "cartesian" | "polar" | "both";
  showPolarGrid: boolean;
  customOrigin: { x: number; y: number } | null; // null = default (0,0)

}

interface VisualizationStore extends VisualizationSettings {
  // Actions
  toggleSetting: (setting: keyof VisualizationSettings) => void;
  setFontScale: (scale: number) => void;
  setSnapPrecision: (
    precision: "adaptive" | "whole" | "half" | "quarter" | "tenth"
  ) => void;
  setCoordinateSystem: (system: "cartesian" | "polar" | "both") => void;
  setCustomOrigin: (origin: { x: number; y: number } | null) => void;
  resetToDefaults: () => void;
}

const defaultSettings: VisualizationSettings = {
  // Origin line enhancements - enable key features by default
  showEquivalentFractions: true,
  showLengthMultiples: true,
  showAreaRectangle: true,
  showDivisionMultiples: true,
  showRiseRunTriangle: true,
  showDistanceMarkers: true,
  showAngleArc: false,
  showCoordinateProjections: true,

  // Circle enhancements
  showTangentLines: false,

  // Function enhancements
  showFunctionExtensions: true,

  // Triangle enhancements
  showTriangleAngles: true,
  showSOHCAHTOA: false,
  showTrigValues: false,
  showTriangleClassification: true,
  showTriangleAltitudes: false,
  showSpecialTriangles: true,
  showPythagoreanSquares: false,

  // Division visualization
  showDivisionAnswer: true,

  // Grid enhancements
  showLatticePoints: false,
  showReferenceLineY_equals_X: true,

  // Rectangle-based educational concepts
  showFactorPairs: false,
  showCommutativeProperty: false,
  showDistributiveProperty: false,
  showPrimeComposite: false,
  showGCF: true,
  showLCM: false,

  // Display settings
  fontScale: 1.2,
  showCoordinateCrosshairs: false,

  // Snapping settings
  snapPrecision: "whole",

  // Coordinate system settings
  coordinateSystem: "cartesian",
  showPolarGrid: false,
  customOrigin: null,
};

export const useVisualizationStore = create<VisualizationStore>((set) => ({
  ...defaultSettings,

  toggleSetting: (setting) => {
    set((state) => ({
      [setting]: !state[setting],
    }));
    storageManager.scheduleSave();
  },

  setFontScale: (scale) => {
    set({ fontScale: scale });
    storageManager.scheduleSave();
  },

  setSnapPrecision: (precision) => {
    set({ snapPrecision: precision });
    storageManager.scheduleSave();
  },

  setCoordinateSystem: (system) => {
    set({ coordinateSystem: system });
    storageManager.scheduleSave();
  },

  setCustomOrigin: (origin) => {
    set({ customOrigin: origin });
    storageManager.scheduleSave();
  },

  resetToDefaults: () => {
    set(defaultSettings);
    storageManager.scheduleSave();
  },
}));
