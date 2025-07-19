import type { Plugin, PluginContext, UnifiedPointerEvent } from '@getgrix/core';
export declare class RectangleTool implements Plugin {
    id: string;
    name: string;
    private context;
    private state;
    init(context: PluginContext): void;
    destroy(): void;
    private handleToolChange;
    private cancelCreation;
    private generateId;
    private snapPoint;
    private findRectangleAtPoint;
    private isNearCorner;
    onPointerDown(event: UnifiedPointerEvent): void;
    onPointerMove(event: UnifiedPointerEvent): void;
    onPointerUp(event: UnifiedPointerEvent): void;
}
export declare function createRectangleTool(): Plugin;
