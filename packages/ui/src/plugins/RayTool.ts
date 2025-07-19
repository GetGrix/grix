import type { Plugin, PluginContext, UnifiedPointerEvent, Ray, Point } from '@getgrix/core';

interface RayState {
  isCreating: boolean;
  startPoint: Point | null;
  currentRay: Ray | null;
  dragTarget: 'start' | 'end' | null;
}

export class RayTool implements Plugin {
  id = 'ray-tool';
  name = 'Ray Builder';
  
  private context!: PluginContext;
  private state: RayState = {
    isCreating: false,
    startPoint: null,
    currentRay: null,
    dragTarget: null
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
    if (this.state.currentRay && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentRay.id);
    }
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRay: null,
      dragTarget: null
    };
  }

  private generateId(): string {
    return `ray_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
      const gridSize = canvasState.gridDensity === 'fine' ? 1 : 10;
      return this.context.math.snapToGrid(point, gridSize);
    }
    return point;
  }

  private findNearestHandle(screenPoint: Point, tolerance: number = 20): { rayId: string; handle: 'start' | 'end' } | null {
    const worldPoint = this.context.canvas.screenToWorld(screenPoint);
    const objects = this.context.canvas.getAllObjects();
    
    for (const obj of objects) {
      if (obj.type === 'ray') {
        const ray = obj as Ray;
        const startDistance = this.context.math.distance(worldPoint, ray.properties.startPoint);
        const endDistance = this.context.math.distance(worldPoint, ray.properties.endPoint);
        
        const startScreen = this.context.canvas.worldToScreen(ray.properties.startPoint);
        const endScreen = this.context.canvas.worldToScreen(ray.properties.endPoint);
        
        const startScreenDistance = this.context.math.distance(screenPoint, startScreen);
        const endScreenDistance = this.context.math.distance(screenPoint, endScreen);
        
        if (startScreenDistance <= tolerance) {
          return { rayId: ray.id, handle: 'start' };
        }
        if (endScreenDistance <= tolerance) {
          return { rayId: ray.id, handle: 'end' };
        }
      }
    }
    
    return null;
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing ray handle
    const handle = this.findNearestHandle(screenPoint);
    
    if (handle) {
      // Start dragging existing ray handle
      const ray = this.context.canvas.getObject(handle.rayId) as Ray;
      if (ray) {
        this.state.currentRay = ray;
        this.state.dragTarget = handle.handle;
        this.state.isCreating = false;
        return;
      }
    }

    // Start creating new ray
    if (!this.state.isCreating) {
      this.state.isCreating = true;
      this.state.startPoint = worldPoint;
      
      const newRay: Ray = {
        id: this.generateId(),
        type: 'ray',
        properties: {
          startPoint: worldPoint,
          endPoint: { ...worldPoint }, // Start with same point
          slope: 0,
          yIntercept: worldPoint.y
        },
        visible: true,
        selected: false
      };
      
      this.state.currentRay = newRay;
      this.context.canvas.addObject(newRay);
    }
  }

  onPointerMove(event: UnifiedPointerEvent): void {
    if (!this.state.currentRay) return;

    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    if (this.state.isCreating) {
      // Update end point while creating
      const slope = this.context.math.slope(this.state.currentRay.properties.startPoint, worldPoint);
      const yIntercept = worldPoint.y - slope * worldPoint.x;
      
      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: {
          ...this.state.currentRay.properties,
          endPoint: worldPoint,
          slope: slope,
          yIntercept: isFinite(slope) ? yIntercept : this.state.currentRay.properties.startPoint.y
        }
      });
    } else if (this.state.dragTarget) {
      // Update specific handle
      const currentRay = this.context.canvas.getObject(this.state.currentRay.id) as Ray;
      if (!currentRay) return;

      const newProperties = { ...currentRay.properties };
      
      if (this.state.dragTarget === 'start') {
        newProperties.startPoint = worldPoint;
      } else {
        newProperties.endPoint = worldPoint;
      }
      
      // Recalculate slope and y-intercept
      const slope = this.context.math.slope(newProperties.startPoint, newProperties.endPoint);
      newProperties.slope = slope;
      newProperties.yIntercept = isFinite(slope) 
        ? newProperties.startPoint.y - slope * newProperties.startPoint.x
        : newProperties.startPoint.y;

      this.context.canvas.updateObject(this.state.currentRay.id, {
        properties: newProperties
      });
    }

    // Emit ray update event for other plugins to listen to
    this.context.events.emit('ray:update', {
      rayId: this.state.currentRay.id,
      ray: this.context.canvas.getObject(this.state.currentRay.id)
    });
  }

  onPointerUp(event: UnifiedPointerEvent): void {
    if (this.state.isCreating && this.state.currentRay) {
      // Finish creating ray
      const screenPoint = { x: event.x, y: event.y };
      const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));
      
      // Ensure the ray has a minimum length
      const startPoint = this.state.currentRay.properties.startPoint;
      const distance = this.context.math.distance(startPoint, worldPoint);
      
      if (distance < 0.1) {
        // Too short, remove the ray
        this.context.canvas.removeObject(this.state.currentRay.id);
      } else {
        // Finalize the ray
        this.context.events.emit('ray:created', {
          rayId: this.state.currentRay.id,
          ray: this.state.currentRay
        });
      }
    }

    // Reset state
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRay: null,
      dragTarget: null
    };
  }
}

// Export factory function for easy instantiation
export function createRayTool(): Plugin {
  return new RayTool();
}