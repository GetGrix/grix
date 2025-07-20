import type { Plugin, PluginContext, UnifiedPointerEvent, Rectangle, Point } from '@getgrix/core';
import { calculateSnapSize } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface RectangleState {
  isCreating: boolean;
  startPoint: Point | null;
  currentRectangle: Rectangle | null;
  dragTarget: 'corner-tl' | 'corner-tr' | 'corner-bl' | 'corner-br' | 'move' | null;
  dragOffset: Point | null;
  lockedCorner: Point | null; // The opposite corner that stays fixed during resize
}

export class RectangleTool implements Plugin {
  id = 'rectangle-tool';
  name = 'Rectangle Builder';
  
  private context!: PluginContext;
  private state: RectangleState = {
    isCreating: false,
    startPoint: null,
    currentRectangle: null,
    dragTarget: null,
    dragOffset: null,
    lockedCorner: null
  };

  init(context: PluginContext): void {
    this.context = context;
    
    // Listen for tool activation and cancellation
    context.events.on('tool:changed', this.handleToolChange.bind(this));
    context.events.on('tool:cancel', this.handleToolCancel.bind(this));
  }

  destroy(): void {
    this.context.events.off('tool:changed', this.handleToolChange.bind(this));
    this.context.events.off('tool:cancel', this.handleToolCancel.bind(this));
  }

  private handleToolChange(data: { current: string | null }): void {
    if (data.current !== this.id) {
      // Cancel any ongoing creation when tool is deactivated
      this.cancelCreation();
    }
  }

  private handleToolCancel(data: { toolId: string }): void {
    if (data.toolId === this.id) {
      // Cancel any ongoing creation when Esc is pressed
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
      dragOffset: null,
      lockedCorner: null
    };
  }

  private generateId(): string {
    return `rect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
      // Special case: stronger snap to origin (0,0) for easier rectangle starting
      const distanceToOrigin = Math.sqrt(point.x * point.x + point.y * point.y);
      const originSnapThreshold = 0.75; // Snap to origin within 0.75 units
      
      if (distanceToOrigin <= originSnapThreshold) {
        return { x: 0, y: 0 };
      }
      
      // Get current visualization settings for snap precision
      const visualSettings = useVisualizationStore.getState();
      const snapSize = calculateSnapSize(
        canvasState.viewport,
        visualSettings.gridScale,
        visualSettings.snapPrecision
      );
      
      return this.context.math.snapToGrid(point, snapSize);
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

  private findNearestCorner(worldPoint: Point, rect: Rectangle, tolerance: number = 0.5): 'corner-tl' | 'corner-tr' | 'corner-bl' | 'corner-br' | null {
    const { x, y, width, height } = rect.properties;
    
    // Define all four corners with their types
    const corners = [
      { point: { x, y }, type: 'corner-bl' as const }, // bottom-left
      { point: { x: x + width, y }, type: 'corner-br' as const }, // bottom-right
      { point: { x, y: y + height }, type: 'corner-tl' as const }, // top-left
      { point: { x: x + width, y: y + height }, type: 'corner-tr' as const } // top-right
    ];
    
    // Find the closest corner within tolerance
    for (const corner of corners) {
      if (this.context.math.distance(worldPoint, corner.point) <= tolerance) {
        return corner.type;
      }
    }
    
    return null;
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing rectangle
    const existingRect = this.findRectangleAtPoint(worldPoint);
    
    if (existingRect) {
      // Only handle rectangle manipulation if this rectangle is selected
      const selectedObjects = this.context.state.getState().selectedObjects;
      
      if (selectedObjects.includes(existingRect.id)) {
        // Check if we're near a corner for resizing
        const cornerType = this.findNearestCorner(worldPoint, existingRect);
        if (cornerType) {
          this.state.currentRectangle = existingRect;
          this.state.dragTarget = cornerType;
          this.state.isCreating = false;
          
          // Calculate the locked corner (opposite corner)
          const { x, y, width, height } = existingRect.properties;
          switch (cornerType) {
            case 'corner-tl': // top-left, lock bottom-right
              this.state.lockedCorner = { x: x + width, y };
              break;
            case 'corner-tr': // top-right, lock bottom-left
              this.state.lockedCorner = { x, y };
              break;
            case 'corner-bl': // bottom-left, lock top-right
              this.state.lockedCorner = { x: x + width, y: y + height };
              break;
            case 'corner-br': // bottom-right, lock top-left
              this.state.lockedCorner = { x, y: y + height };
              break;
          }
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
    }

    // Create new rectangle (this will only be called when this tool is active due to PluginManager logic)
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
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith('corner-') && this.state.lockedCorner) {
      // Resize the rectangle from a specific corner
      const lockedCorner = this.state.lockedCorner;
      
      // Calculate new rectangle bounds with locked corner
      const minX = Math.min(worldPoint.x, lockedCorner.x);
      const maxX = Math.max(worldPoint.x, lockedCorner.x);
      const minY = Math.min(worldPoint.y, lockedCorner.y);
      const maxY = Math.max(worldPoint.y, lockedCorner.y);
      
      const newX = minX;
      const newY = minY;
      const newWidth = maxX - minX;
      const newHeight = maxY - minY;
      
      // Ensure minimum size
      const finalWidth = Math.max(0.1, newWidth);
      const finalHeight = Math.max(0.1, newHeight);
      const area = finalWidth * finalHeight;

      this.context.canvas.updateObject(this.state.currentRectangle.id, {
        properties: {
          x: newX,
          y: newY,
          width: finalWidth,
          height: finalHeight,
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
          
          // Emit event to return to pan mode after successful creation
          this.context.events.emit('tool:creation-complete', {
            toolId: this.id,
            objectId: this.state.currentRectangle.id
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
      dragOffset: null,
      lockedCorner: null
    };
  }
}

// Export factory function for easy instantiation
export function createRectangleTool(): Plugin {
  return new RectangleTool();
}