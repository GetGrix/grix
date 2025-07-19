import type { Plugin, PluginContext, UnifiedPointerEvent, Rectangle, Point } from '@getgrix/core';

interface RectangleState {
  isCreating: boolean;
  startPoint: Point | null;
  currentRectangle: Rectangle | null;
  dragTarget: 'move' | 'corner' | null;
  dragOffset: Point | null;
}

export class RectangleTool implements Plugin {
  id = 'rectangle-tool';
  name = 'Rectangle Selector';
  
  private context!: PluginContext;
  private state: RectangleState = {
    isCreating: false,
    startPoint: null,
    currentRectangle: null,
    dragTarget: null,
    dragOffset: null
  };

  init(context: PluginContext): void {
    this.context = context;
    
    // Listen for tool activation
    context.events.on('tool:changed', this.handleToolChange.bind(this));
  }

  destroy(): void {
    this.context.events.off('tool:changed', this.handleToolChange.bind(this));
  }

  private handleToolChange(data: { current: string | null }): void {
    if (data.current !== this.id) {
      // Cancel any ongoing creation when tool is deactivated
      this.cancelCreation();
    }
  }

  private cancelCreation(): void {
    if (this.state.currentRectangle && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentRectangle.id);
    }
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }

  private generateId(): string {
    return `rect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
      const gridSize = canvasState.gridDensity === 'fine' ? 1 : 10;
      return this.context.math.snapToGrid(point, gridSize);
    }
    return point;
  }

  private findRectangleAtPoint(worldPoint: Point): Rectangle | null {
    const objects = this.context.canvas.getAllObjects();
    
    for (const obj of objects) {
      if (obj.type === 'rectangle') {
        const rect = obj as Rectangle;
        const { x, y, width, height } = rect.properties;
        
        if (worldPoint.x >= x && worldPoint.x <= x + width &&
            worldPoint.y >= y && worldPoint.y <= y + height) {
          return rect;
        }
      }
    }
    
    return null;
  }

  private isNearCorner(worldPoint: Point, rect: Rectangle, tolerance: number = 0.5): boolean {
    const { x, y, width, height } = rect.properties;
    
    // Check all four corners
    const corners = [
      { x, y }, // bottom-left
      { x: x + width, y }, // bottom-right
      { x, y: y + height }, // top-left
      { x: x + width, y: y + height } // top-right
    ];
    
    return corners.some(corner => 
      this.context.math.distance(worldPoint, corner) <= tolerance
    );
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing rectangle
    const existingRect = this.findRectangleAtPoint(worldPoint);
    
    if (existingRect) {
      // Check if we're near a corner for resizing
      if (this.isNearCorner(worldPoint, existingRect)) {
        this.state.currentRectangle = existingRect;
        this.state.dragTarget = 'corner';
        this.state.isCreating = false;
        return;
      } else {
        // Start moving the rectangle
        this.state.currentRectangle = existingRect;
        this.state.dragTarget = 'move';
        this.state.dragOffset = {
          x: worldPoint.x - existingRect.properties.x,
          y: worldPoint.y - existingRect.properties.y
        };
        this.state.isCreating = false;
        return;
      }
    }

    // Start creating new rectangle
    this.state.isCreating = true;
    this.state.startPoint = worldPoint;
    
    const newRectangle: Rectangle = {
      id: this.generateId(),
      type: 'rectangle',
      properties: {
        x: worldPoint.x,
        y: worldPoint.y,
        width: 0,
        height: 0,
        area: 0
      },
      visible: true,
      selected: false
    };
    
    this.state.currentRectangle = newRectangle;
    this.context.canvas.addObject(newRectangle);
  }

  onPointerMove(event: UnifiedPointerEvent): void {
    if (!this.state.currentRectangle) return;

    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    if (this.state.isCreating && this.state.startPoint) {
      // Update rectangle dimensions while creating
      const x = Math.min(this.state.startPoint.x, worldPoint.x);
      const y = Math.min(this.state.startPoint.y, worldPoint.y);
      const width = Math.abs(worldPoint.x - this.state.startPoint.x);
      const height = Math.abs(worldPoint.y - this.state.startPoint.y);
      const area = width * height;

      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x,
          y,
          width,
          height,
          area
        }
      });
    } else if (this.state.dragTarget === 'move' && this.state.dragOffset) {
      // Move the rectangle
      const newX = worldPoint.x - this.state.dragOffset.x;
      const newY = worldPoint.y - this.state.dragOffset.y;
      
      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          ...this.state.currentRectangle.properties,
          x: newX,
          y: newY
        }
      });
    } else if (this.state.dragTarget === 'corner') {
      // Resize the rectangle from the corner
      const current = this.context.canvas.getObject(this.state.currentRectangle.id) as Rectangle;
      if (!current) return;

      const { x: origX, y: origY, width: origWidth, height: origHeight } = current.properties;
      
      // Determine which corner we're dragging based on the current position
      const centerX = origX + origWidth / 2;
      const centerY = origY + origHeight / 2;
      
      let newX = origX;
      let newY = origY;
      let newWidth = origWidth;
      let newHeight = origHeight;
      
      if (worldPoint.x > centerX) {
        // Dragging right side
        newWidth = worldPoint.x - origX;
      } else {
        // Dragging left side
        newX = worldPoint.x;
        newWidth = origX + origWidth - worldPoint.x;
      }
      
      if (worldPoint.y > centerY) {
        // Dragging top side
        newHeight = worldPoint.y - origY;
      } else {
        // Dragging bottom side
        newY = worldPoint.y;
        newHeight = origY + origHeight - worldPoint.y;
      }
      
      // Ensure minimum size
      newWidth = Math.max(0.1, newWidth);
      newHeight = Math.max(0.1, newHeight);
      
      const area = newWidth * newHeight;

      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: newX,
          y: newY,
          width: newWidth,
          height: newHeight,
          area
        }
      });
    }

    // Emit rectangle update event for other plugins (like area counter)
    this.context.events.emit('rectangle:update', {
      rectangleId: this.state.currentRectangle.id,
      rectangle: this.context.canvas.getObject(this.state.currentRectangle.id)
    });
  }

  onPointerUp(event: UnifiedPointerEvent): void {
    if (this.state.isCreating && this.state.currentRectangle) {
      const current = this.context.canvas.getObject(this.state.currentRectangle.id) as Rectangle;
      
      if (current) {
        // Check if rectangle has meaningful size
        if (current.properties.width < 0.1 || current.properties.height < 0.1) {
          // Too small, remove it
          this.context.canvas.removeObject(this.state.currentRectangle.id);
        } else {
          // Finalize the rectangle
          this.context.events.emit('rectangle:created', {
            rectangleId: this.state.currentRectangle.id,
            rectangle: current
          });
        }
      }
    }

    // Reset state
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRectangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}

// Export factory function for easy instantiation
export function createRectangleTool(): Plugin {
  return new RectangleTool();
}