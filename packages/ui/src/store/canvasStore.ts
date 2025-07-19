import { create } from 'zustand';
import type { 
  CanvasState, 
  MathObject, 
  Viewport, 
  Point,
  CanvasAPI,
  StateManager 
} from '@getgrix/core';
import { MathUtils } from '@getgrix/core';

interface CanvasStore extends CanvasState {
  // Actions
  setViewport: (updates: Partial<Viewport>) => void;
  addObject: (object: MathObject) => void;
  removeObject: (id: string) => void;
  updateObject: (id: string, updates: Partial<MathObject>) => void;
  selectObject: (id: string, multiSelect?: boolean) => void;
  clearSelection: () => void;
  setSnapToGrid: (enabled: boolean) => void;
  setGridDensity: (density: 'fine' | 'coarse') => void;
  
  // Canvas dimensions (for coordinate transformations)
  canvasSize: { width: number; height: number };
  setCanvasSize: (size: { width: number; height: number }) => void;
  
  // Helper methods
  getObject: (id: string) => MathObject | undefined;
  getAllObjects: () => MathObject[];
  getSelectedObjects: () => MathObject[];
  screenToWorld: (point: Point) => Point;
  worldToScreen: (point: Point) => Point;
}

export const useCanvasStore = create<CanvasStore>((set, get) => ({
    // Initial state
    viewport: {
      center: { x: 0, y: 0 },
      zoom: 20, // Start zoomed in so grid is visible
      bounds: { x: -10, y: -10, width: 20, height: 20 }
    },
    objects: [],
    selectedObjects: [],
    snapToGrid: true,
    gridDensity: 'fine',
    canvasSize: { width: 800, height: 600 },

    // Viewport actions
    setViewport: (updates) => {
      set((state) => ({
        viewport: { ...state.viewport, ...updates }
      }));
    },

    // Object management
    addObject: (object) => {
      set((state) => ({
        objects: [...state.objects, object]
      }));
    },

    removeObject: (id) => {
      set((state) => ({
        objects: state.objects.filter(obj => obj.id !== id),
        selectedObjects: state.selectedObjects.filter(objId => objId !== id)
      }));
    },

    updateObject: (id, updates) => {
      set((state) => ({
        objects: state.objects.map(obj => 
          obj.id === id ? { ...obj, ...updates } : obj
        )
      }));
    },

    // Selection management
    selectObject: (id, multiSelect = false) => {
      set((state) => {
        if (multiSelect) {
          const isSelected = state.selectedObjects.includes(id);
          return {
            selectedObjects: isSelected
              ? state.selectedObjects.filter(objId => objId !== id)
              : [...state.selectedObjects, id]
          };
        } else {
          return { selectedObjects: [id] };
        }
      });
    },

    clearSelection: () => {
      set({ selectedObjects: [] });
    },

    // Grid settings
    setSnapToGrid: (enabled) => {
      set({ snapToGrid: enabled });
    },

    setGridDensity: (density) => {
      set({ gridDensity: density });
    },

    // Canvas size
    setCanvasSize: (size) => {
      set({ canvasSize: size });
    },

    // Helper methods
    getObject: (id) => {
      return get().objects.find(obj => obj.id === id);
    },

    getAllObjects: () => {
      return get().objects;
    },

    getSelectedObjects: () => {
      const state = get();
      return state.objects.filter(obj => state.selectedObjects.includes(obj.id));
    },

    screenToWorld: (point) => {
      const { viewport, canvasSize } = get();
      return MathUtils.screenToWorld(point, viewport, canvasSize);
    },

    worldToScreen: (point) => {
      const { viewport, canvasSize } = get();
      return MathUtils.worldToScreen(point, viewport, canvasSize);
    }
  }));

// Create API implementations for plugins
export const createCanvasAPI = (): CanvasAPI => {
  return {
    addObject: (object: MathObject) => useCanvasStore.getState().addObject(object),
    removeObject: (id: string) => useCanvasStore.getState().removeObject(id),
    updateObject: (id: string, updates: Partial<MathObject>) => useCanvasStore.getState().updateObject(id, updates),
    getObject: (id: string) => useCanvasStore.getState().getObject(id),
    getAllObjects: () => useCanvasStore.getState().getAllObjects(),
    screenToWorld: (point: Point) => useCanvasStore.getState().screenToWorld(point),
    worldToScreen: (point: Point) => useCanvasStore.getState().worldToScreen(point)
  };
};

export const createStateManager = (): StateManager => {
  return {
    getState: () => {
      const state = useCanvasStore.getState();
      return {
        viewport: state.viewport,
        objects: state.objects,
        selectedObjects: state.selectedObjects,
        snapToGrid: state.snapToGrid,
        gridDensity: state.gridDensity
      };
    },
    
    setState: (updates) => {
      useCanvasStore.setState(updates);
    },
    
    subscribe: (callback) => {
      return useCanvasStore.subscribe((state) => {
        callback({
          viewport: state.viewport,
          objects: state.objects,
          selectedObjects: state.selectedObjects,
          snapToGrid: state.snapToGrid,
          gridDensity: state.gridDensity
        });
      });
    }
  };
};