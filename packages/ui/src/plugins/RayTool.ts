import type { Plugin, PluginContext, UnifiedPointerEvent, Ray, Point } from '@getgrix/core';
import { calculateSnapSize } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface RayState {
  isCreating: boolean;
  startPoint: Point | null;
  currentRay: Ray | null;
  dragTarget: 'start' | 'end' | 'move' | null;
  dragOffset: Point | null;
}

export class RayTool implements Plugin {
  id = 'ray-tool';
  name = 'Line Builder';
  
  private context!: PluginContext;
  private state: RayState = {
    isCreating: false,
    startPoint: null,
    currentRay: null,
    dragTarget: null,
    dragOffset: null
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
    if (this.state.currentRay && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentRay.id);
    }
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    };
  }

  private generateId(): string {
    return `ray_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
      // Special case: stronger snap to origin (0,0) for easier line starting
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

  private findNearestHandle(screenPoint: Point, tolerance: number = 20): { rayId: string; handle: 'start' | 'end' | 'move' } | null {
    const worldPoint = this.context.canvas.screenToWorld(screenPoint);
    const objects = this.context.canvas.getAllObjects();
    
    for (const obj of objects) {
      if (obj.type === 'ray') {
        const ray = obj as Ray;
        const startScreen = this.context.canvas.worldToScreen(ray.properties.startPoint);
        const endScreen = this.context.canvas.worldToScreen(ray.properties.endPoint);
        
        const startScreenDistance = this.context.math.distance(screenPoint, startScreen);
        const endScreenDistance = this.context.math.distance(screenPoint, endScreen);
        
        // Check endpoints first (higher priority)
        if (startScreenDistance <= tolerance) {
          return { rayId: ray.id, handle: 'start' };
        }
        if (endScreenDistance <= tolerance) {
          return { rayId: ray.id, handle: 'end' };
        }
        
        // Check if clicking on the line itself for moving
        const lineDistanceThreshold = 8; // pixels
        const dx = endScreen.x - startScreen.x;
        const dy = endScreen.y - startScreen.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        
        if (length > 0) {
          const t = Math.max(0, Math.min(1, ((screenPoint.x - startScreen.x) * dx + (screenPoint.y - startScreen.y) * dy) / (length * length)));
          const projection = {
            x: startScreen.x + t * dx,
            y: startScreen.y + t * dy
          };
          
          const lineDistance = this.context.math.distance(screenPoint, projection);
          if (lineDistance <= lineDistanceThreshold) {
            return { rayId: ray.id, handle: 'move' };
          }
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
      // Start dragging existing ray handle - only if this ray is selected
      const ray = this.context.canvas.getObject(handle.rayId) as Ray;
      const selectedObjects = this.context.state.getState().selectedObjects;
      
      if (ray && selectedObjects.includes(handle.rayId)) {
        this.state.currentRay = ray;
        this.state.dragTarget = handle.handle;
        this.state.isCreating = false;
        
        // For move operations, calculate offset
        if (handle.handle === 'move') {
          this.state.dragOffset = {
            x: worldPoint.x - ray.properties.startPoint.x,
            y: worldPoint.y - ray.properties.startPoint.y
          };
        }
        return;
      }
    }

    // Only create new ray if we're in creation mode (tool is active)
    // Check if this tool is called for manipulation vs creation
    if (!this.state.isCreating) {
      // If we're here from pan mode (object manipulation), don't create new objects
      // We can detect this by checking if we have an active ray but no valid handle
      const selectedObjects = this.context.state.getState().selectedObjects;
      const hasSelectedRay = selectedObjects.some(id => {
        const obj = this.context.canvas.getObject(id);
        return obj?.type === 'ray';
      });
      
      // If we have a selected ray but no handle, we're in pan mode - don't create
      if (hasSelectedRay) {
        return;
      }
      
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
        selected: false,
        zIndex: 0
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
      } else if (this.state.dragTarget === 'end') {
        newProperties.endPoint = worldPoint;
      } else if (this.state.dragTarget === 'move' && this.state.dragOffset) {
        // Move the entire ray without changing length or angle
        const dx = worldPoint.x - this.state.dragOffset.x - currentRay.properties.startPoint.x;
        const dy = worldPoint.y - this.state.dragOffset.y - currentRay.properties.startPoint.y;
        
        newProperties.startPoint = {
          x: currentRay.properties.startPoint.x + dx,
          y: currentRay.properties.startPoint.y + dy
        };
        newProperties.endPoint = {
          x: currentRay.properties.endPoint.x + dx,
          y: currentRay.properties.endPoint.y + dy
        };
      }
      
      // Recalculate slope and y-intercept only if endpoints changed
      if (this.state.dragTarget === 'start' || this.state.dragTarget === 'end') {
        const slope = this.context.math.slope(newProperties.startPoint, newProperties.endPoint);
        newProperties.slope = slope;
        newProperties.yIntercept = isFinite(slope) 
          ? newProperties.startPoint.y - slope * newProperties.startPoint.x
          : newProperties.startPoint.y;
      }

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
        
        // Emit event to return to pan mode after successful creation
        this.context.events.emit('tool:creation-complete', {
          toolId: this.id,
          objectId: this.state.currentRay.id
        });
      }
    }

    // Reset state
    this.state = {
      isCreating: false,
      startPoint: null,
      currentRay: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}

// Export factory function for easy instantiation
export function createRayTool(): Plugin {
  return new RayTool();
}