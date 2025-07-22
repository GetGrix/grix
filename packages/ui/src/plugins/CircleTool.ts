import type { Plugin, PluginContext, UnifiedPointerEvent, Circle, Point } from '@getgrix/core';
import { calculateSnapSize } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface CircleState {
  isCreating: boolean;
  center: Point | null;
  currentCircle: Circle | null;
  dragTarget: 'center' | 'radius' | null;
  dragOffset: Point | null;
}

export class CircleTool implements Plugin {
  id = 'circle-tool';
  name = 'Circle Builder';
  
  private context!: PluginContext;
  private state: CircleState = {
    isCreating: false,
    center: null,
    currentCircle: null,
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
      this.cancelCreation();
    }
  }

  private handleToolCancel(data: { toolId: string }): void {
    if (data.toolId === this.id) {
      this.cancelCreation();
    }
  }

  private cancelCreation(): void {
    if (this.state.currentCircle && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentCircle.id);
    }
    this.state = {
      isCreating: false,
      center: null,
      currentCircle: null,
      dragTarget: null,
      dragOffset: null
    };
  }

  private generateId(): string {
    return `circle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
      // Special case: stronger snap to origin (0,0)
      const distanceToOrigin = Math.sqrt(point.x * point.x + point.y * point.y);
      const originSnapThreshold = 0.75;
      
      if (distanceToOrigin <= originSnapThreshold) {
        return { x: 0, y: 0 };
      }
      
      const visualSettings = useVisualizationStore.getState();
      const snapSize = calculateSnapSize(
        canvasState.viewport,
        visualSettings.snapPrecision
      );
      
      return this.context.math.snapToGrid(point, snapSize);
    }
    return point;
  }

  private calculateCircleProperties(center: Point, radiusPoint: Point) {
    const radius = this.context.math.distance(center, radiusPoint);
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    
    return { radius, diameter, circumference, area };
  }

  private findCircleAtPoint(worldPoint: Point): Circle | null {
    const objects = this.context.canvas.getAllObjects();
    
    for (const obj of objects) {
      if (obj.type === 'circle') {
        const circle = obj as Circle;
        const distance = this.context.math.distance(worldPoint, circle.properties.center);
        
        // Check if point is within circle (for selection) or near edge (for radius handle)
        if (distance <= circle.properties.radius + 0.5) {
          return circle;
        }
      }
    }
    
    return null;
  }

  private findNearestHandle(worldPoint: Point, circle: Circle, tolerance: number = 0.5): 'center' | 'radius' | null {
    const { center, radius } = circle.properties;
    
    // Check center handle
    if (this.context.math.distance(worldPoint, center) <= tolerance) {
      return 'center';
    }
    
    // Check radius handle (on the right side of the circle)
    const radiusHandle = { x: center.x + radius, y: center.y };
    if (this.context.math.distance(worldPoint, radiusHandle) <= tolerance) {
      return 'radius';
    }
    
    return null;
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing circle
    const existingCircle = this.findCircleAtPoint(worldPoint);
    
    // Don't create new circles if we're clicking on existing ones (unless they're selected for manipulation)
    if (existingCircle && !this.context.state.getState().selectedObjects.includes(existingCircle.id)) {
      // Let Canvas handle the selection, don't create a new circle
      return;
    }
    
    if (existingCircle) {
      const selectedObjects = this.context.state.getState().selectedObjects;
      
      if (selectedObjects.includes(existingCircle.id)) {
        // Check if we're near a handle for manipulation
        const handleType = this.findNearestHandle(worldPoint, existingCircle);
        if (handleType) {
          this.state.currentCircle = existingCircle;
          this.state.dragTarget = handleType;
          this.state.isCreating = false;
          
          if (handleType === 'center') {
            this.state.dragOffset = {
              x: worldPoint.x - existingCircle.properties.center.x,
              y: worldPoint.y - existingCircle.properties.center.y
            };
          }
          return;
        } else {
          // Click on circle but not on handle - start moving the whole circle
          this.state.currentCircle = existingCircle;
          this.state.dragTarget = 'center';
          this.state.isCreating = false;
          this.state.dragOffset = {
            x: worldPoint.x - existingCircle.properties.center.x,
            y: worldPoint.y - existingCircle.properties.center.y
          };
          return;
        }
      }
    }

    // Only create new circle if we're in creation mode (tool is active)
    // If we're here from pan mode (object manipulation), don't create new objects
    const selectedObjects = this.context.state.getState().selectedObjects;
    const hasSelectedCircle = selectedObjects.some(id => {
      const obj = this.context.canvas.getObject(id);
      return obj?.type === 'circle';
    });
    
    // If we have a selected circle but no handle, we're in pan mode - don't create
    if (hasSelectedCircle) {
      return;
    }
    
    this.state.isCreating = true;
    this.state.center = worldPoint;
    
    const newCircle: Circle = {
      id: this.generateId(),
      type: 'circle',
      properties: {
        center: worldPoint,
        radius: 0,
        diameter: 0,
        circumference: 0,
        area: 0
      },
      visible: true,
      selected: false,
      zIndex: 0
    };
    
    this.state.currentCircle = newCircle;
    this.context.canvas.addObject(newCircle);
  }

  onPointerMove(event: UnifiedPointerEvent): void {
    if (!this.state.currentCircle) return;

    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    if (this.state.isCreating && this.state.center) {
      // Update circle radius while creating
      const properties = this.calculateCircleProperties(this.state.center, worldPoint);
      
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center: this.state.center,
          ...properties
        }
      });
    } else if (this.state.dragTarget === 'center' && this.state.dragOffset) {
      // Move the circle
      const newCenter = {
        x: worldPoint.x - this.state.dragOffset.x,
        y: worldPoint.y - this.state.dragOffset.y
      };
      
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          ...this.state.currentCircle.properties,
          center: newCenter
        }
      });
    } else if (this.state.dragTarget === 'radius') {
      // Resize the circle
      const center = this.state.currentCircle.properties.center;
      const properties = this.calculateCircleProperties(center, worldPoint);
      
      this.context.canvas.updateObject(this.state.currentCircle.id, {
        properties: {
          center,
          ...properties
        }
      });
    }

    // Emit circle update event
    this.context.events.emit('circle:update', {
      circleId: this.state.currentCircle.id,
      circle: this.context.canvas.getObject(this.state.currentCircle.id)
    });
  }

  onPointerUp(event: UnifiedPointerEvent): void {
    if (this.state.isCreating && this.state.currentCircle) {
      const current = this.context.canvas.getObject(this.state.currentCircle.id) as Circle;
      
      if (current) {
        // Check if circle has meaningful size
        if (current.properties.radius < 0.1) {
          // Too small, remove it
          this.context.canvas.removeObject(this.state.currentCircle.id);
        } else {
          // Finalize the circle
          this.context.events.emit('circle:created', {
            circleId: this.state.currentCircle.id,
            circle: current
          });
          
          // Emit event to return to pan mode after successful creation
          this.context.events.emit('tool:creation-complete', {
            toolId: this.id,
            objectId: this.state.currentCircle.id
          });
        }
      }
    }

    // Reset state
    this.state = {
      isCreating: false,
      center: null,
      currentCircle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}

// Export factory function for easy instantiation
export function createCircleTool(): Plugin {
  return new CircleTool();
}