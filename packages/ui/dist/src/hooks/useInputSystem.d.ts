import { type InputCapabilities, type UnifiedPointerEvent } from '@getgrix/core';
export interface InputSystemConfig {
    enableGestures: boolean;
    touchTargetSize: number;
    preventScrolling: boolean;
}
export interface InputHandlers {
    onPointerDown?: (event: UnifiedPointerEvent) => void;
    onPointerMove?: (event: UnifiedPointerEvent) => void;
    onPointerUp?: (event: UnifiedPointerEvent) => void;
    onPointerCancel?: (event: UnifiedPointerEvent) => void;
    onGesture?: (gesture: GestureEvent) => void;
}
export interface GestureEvent {
    type: 'pinch' | 'pan' | 'tap' | 'longpress';
    center: {
        x: number;
        y: number;
    };
    scale?: number;
    deltaX?: number;
    deltaY?: number;
    touches?: number;
}
export declare function useInputSystem(elementRef: React.RefObject<HTMLElement | SVGSVGElement>, handlers: InputHandlers, config?: Partial<InputSystemConfig>): {
    capabilities: InputCapabilities | null;
    activePointers: UnifiedPointerEvent[];
    isGesturing: boolean;
    touchTargetSize: number;
};
