import type { UnifiedPointerEvent } from '@getgrix/core';
interface CanvasProps {
    width?: number;
    height?: number;
    className?: string;
    onObjectInteraction?: (objectId: string, event: UnifiedPointerEvent) => void;
}
export declare function Canvas({ width, height, className, onObjectInteraction }: CanvasProps): import("react/jsx-runtime").JSX.Element;
export {};
