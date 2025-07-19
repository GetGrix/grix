import type { Plugin, PluginContext } from '@getgrix/core';
export declare class AreaCounter implements Plugin {
    id: string;
    name: string;
    private context;
    private badges;
    private badgeElements;
    init(context: PluginContext): void;
    destroy(): void;
    private createBadgesForExistingRectangles;
    private handleRectangleCreated;
    private handleRectangleUpdated;
    private handleObjectRemoved;
    private createBadge;
    private updateBadge;
    private removeBadge;
    private createBadgeElement;
    private updateBadgeElement;
    private formatArea;
    private updateBadgePositions;
    showBadge(rectangleId: string): void;
    hideBadge(rectangleId: string): void;
    showAllBadges(): void;
    hideAllBadges(): void;
}
export declare function createAreaCounter(): Plugin;
