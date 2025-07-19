import type { CanvasState, MathObject, Viewport, Point, CanvasAPI, StateManager } from '@getgrix/core';
interface CanvasStore extends CanvasState {
    setViewport: (updates: Partial<Viewport>) => void;
    addObject: (object: MathObject) => void;
    removeObject: (id: string) => void;
    updateObject: (id: string, updates: Partial<MathObject>) => void;
    selectObject: (id: string, multiSelect?: boolean) => void;
    clearSelection: () => void;
    setSnapToGrid: (enabled: boolean) => void;
    setGridDensity: (density: 'fine' | 'coarse') => void;
    canvasSize: {
        width: number;
        height: number;
    };
    setCanvasSize: (size: {
        width: number;
        height: number;
    }) => void;
    getObject: (id: string) => MathObject | undefined;
    getAllObjects: () => MathObject[];
    getSelectedObjects: () => MathObject[];
    screenToWorld: (point: Point) => Point;
    worldToScreen: (point: Point) => Point;
}
export declare const useCanvasStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<CanvasStore>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: CanvasStore, previousSelectedState: CanvasStore) => void): () => void;
        <U>(selector: (state: CanvasStore) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean;
        } | undefined): () => void;
    };
}>;
export declare const createCanvasAPI: () => CanvasAPI;
export declare const createStateManager: () => StateManager;
export {};
