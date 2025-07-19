import type { Plugin, PluginContext, Rectangle } from '@getgrix/core';

interface AreaBadge {
  rectangleId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  area: number;
  visible: boolean;
}

export class AreaCounter implements Plugin {
  id = 'area-counter';
  name = 'Area Counter';
  
  private context!: PluginContext;
  private badges: Map<string, AreaBadge> = new Map();
  private badgeElements: Map<string, HTMLElement> = new Map();

  init(context: PluginContext): void {
    this.context = context;
    
    // Listen for rectangle events
    context.events.on('rectangle:created', this.handleRectangleCreated.bind(this));
    context.events.on('rectangle:update', this.handleRectangleUpdated.bind(this));
    context.events.on('object:removed', this.handleObjectRemoved.bind(this));
    
    // Create badges for existing rectangles
    this.createBadgesForExistingRectangles();
    
    // Listen for viewport changes to update badge positions
    const unsubscribe = context.state.subscribe((state) => {
      this.updateBadgePositions();
    });
    
    // Store unsubscribe function for cleanup
    (this as any).unsubscribeFromState = unsubscribe;
  }

  destroy(): void {
    this.context.events.off('rectangle:created', this.handleRectangleCreated.bind(this));
    this.context.events.off('rectangle:update', this.handleRectangleUpdated.bind(this));
    this.context.events.off('object:removed', this.handleObjectRemoved.bind(this));
    
    // Clean up state subscription
    if ((this as any).unsubscribeFromState) {
      (this as any).unsubscribeFromState();
    }
    
    // Remove all badge elements
    this.badgeElements.forEach(element => {
      element.remove();
    });
    this.badgeElements.clear();
    this.badges.clear();
  }

  private createBadgesForExistingRectangles(): void {
    const objects = this.context.canvas.getAllObjects();
    objects.forEach(obj => {
      if (obj.type === 'rectangle') {
        this.createBadge(obj as Rectangle);
      }
    });
  }

  private handleRectangleCreated(data: { rectangleId: string; rectangle: Rectangle }): void {
    this.createBadge(data.rectangle);
  }

  private handleRectangleUpdated(data: { rectangleId: string; rectangle: Rectangle }): void {
    this.updateBadge(data.rectangle);
  }

  private handleObjectRemoved(data: { objectId: string }): void {
    this.removeBadge(data.objectId);
  }

  private createBadge(rectangle: Rectangle): void {
    const badge: AreaBadge = {
      rectangleId: rectangle.id,
      x: rectangle.properties.x,
      y: rectangle.properties.y,
      width: rectangle.properties.width,
      height: rectangle.properties.height,
      area: rectangle.properties.area,
      visible: true
    };

    this.badges.set(rectangle.id, badge);
    this.createBadgeElement(badge);
  }

  private updateBadge(rectangle: Rectangle): void {
    const badge = this.badges.get(rectangle.id);
    if (badge) {
      badge.x = rectangle.properties.x;
      badge.y = rectangle.properties.y;
      badge.width = rectangle.properties.width;
      badge.height = rectangle.properties.height;
      badge.area = rectangle.properties.area;
      
      this.updateBadgeElement(badge);
    }
  }

  private removeBadge(rectangleId: string): void {
    const element = this.badgeElements.get(rectangleId);
    if (element) {
      element.remove();
      this.badgeElements.delete(rectangleId);
    }
    this.badges.delete(rectangleId);
  }

  private createBadgeElement(badge: AreaBadge): void {
    // Create badge container
    const badgeElement = document.createElement('div');
    badgeElement.className = 'area-badge';
    badgeElement.style.cssText = `
      position: absolute;
      background: rgba(34, 197, 94, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      white-space: nowrap;
      pointer-events: none;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(34, 197, 94, 1);
    `;

    // Find the canvas container to append the badge
    const canvasContainer = document.querySelector('[data-grix-canvas]') || document.body;
    canvasContainer.appendChild(badgeElement);

    this.badgeElements.set(badge.rectangleId, badgeElement);
    this.updateBadgeElement(badge);
  }

  private updateBadgeElement(badge: AreaBadge): void {
    const element = this.badgeElements.get(badge.rectangleId);
    if (!element) return;

    // Calculate badge position (center of rectangle)
    const centerX = badge.x + badge.width / 2;
    const centerY = badge.y + badge.height / 2;
    const screenPos = this.context.canvas.worldToScreen({ x: centerX, y: centerY });

    // Format the area display
    const areaText = this.formatArea(badge.area, badge.width, badge.height);
    element.textContent = areaText;

    // Position the badge at the center of the rectangle
    const rect = element.getBoundingClientRect();
    element.style.left = `${screenPos.x - rect.width / 2}px`;
    element.style.top = `${screenPos.y - rect.height / 2}px`;

    // Show/hide based on rectangle visibility and size
    const state = this.context.state.getState();
    const minBadgeSize = 30; // Minimum screen size to show badge
    const screenWidth = badge.width * state.viewport.zoom;
    const screenHeight = badge.height * state.viewport.zoom;
    
    element.style.display = (screenWidth >= minBadgeSize && screenHeight >= minBadgeSize) 
      ? 'block' 
      : 'none';
  }

  private formatArea(area: number, width: number, height: number): string {
    // For integer dimensions, show the multiplication
    const isIntegerWidth = Math.abs(width - Math.round(width)) < 0.001;
    const isIntegerHeight = Math.abs(height - Math.round(height)) < 0.001;
    
    if (isIntegerWidth && isIntegerHeight) {
      const w = Math.round(width);
      const h = Math.round(height);
      return `${w} × ${h} = ${w * h}`;
    }
    
    // For non-integer dimensions, show decimal area
    if (area >= 1000) {
      return `${area.toFixed(0)} sq units`;
    } else if (area >= 10) {
      return `${area.toFixed(1)} sq units`;
    } else {
      return `${area.toFixed(2)} sq units`;
    }
  }

  private updateBadgePositions(): void {
    this.badges.forEach(badge => {
      this.updateBadgeElement(badge);
    });
  }

  // Additional public methods for external control
  public showBadge(rectangleId: string): void {
    const badge = this.badges.get(rectangleId);
    if (badge) {
      badge.visible = true;
      this.updateBadgeElement(badge);
    }
  }

  public hideBadge(rectangleId: string): void {
    const badge = this.badges.get(rectangleId);
    if (badge) {
      badge.visible = false;
      const element = this.badgeElements.get(rectangleId);
      if (element) {
        element.style.display = 'none';
      }
    }
  }

  public showAllBadges(): void {
    this.badges.forEach((badge, id) => {
      this.showBadge(id);
    });
  }

  public hideAllBadges(): void {
    this.badges.forEach((badge, id) => {
      this.hideBadge(id);
    });
  }
}

// Export factory function for easy instantiation
export function createAreaCounter(): Plugin {
  return new AreaCounter();
}