import type { Plugin, PluginContext, UnifiedPointerEvent, Triangle, Point } from '@getgrix/core';
import { calculateSnapSize } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface TriangleState {
  isCreating: boolean;
  creationStep: 0 | 1 | 2; // 0: place first point, 1: place second point, 2: place third point
  vertices: [Point | null, Point | null, Point | null];
  currentTriangle: Triangle | null;
  dragTarget: 'vertex0' | 'vertex1' | 'vertex2' | 'move' | null;
  dragOffset: Point | null;
}

export class TriangleTool implements Plugin {
  id = 'triangle-tool';
  name = 'Triangle Builder';
  
  private context!: PluginContext;
  private state: TriangleState = {
    isCreating: false,
    creationStep: 0,
    vertices: [null, null, null],
    currentTriangle: null,
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
    if (this.state.currentTriangle && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentTriangle.id);
    }
    this.state = {
      isCreating: false,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }

  private generateId(): string {
    return `triangle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
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

  private calculateTriangleProperties(vertices: [Point, Point, Point]) {
    const [a, b, c] = vertices;
    
    // Calculate side lengths
    const sideA = this.context.math.distance(b, c); // opposite vertex a
    const sideB = this.context.math.distance(a, c); // opposite vertex b  
    const sideC = this.context.math.distance(a, b); // opposite vertex c
    
    // Calculate angles using law of cosines
    const angleA = Math.acos((sideB * sideB + sideC * sideC - sideA * sideA) / (2 * sideB * sideC)) * 180 / Math.PI;
    const angleB = Math.acos((sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA * sideC)) * 180 / Math.PI;
    const angleC = 180 - angleA - angleB;
    
    // Calculate area using cross product
    const area = Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;
    
    // Calculate perimeter
    const perimeter = sideA + sideB + sideC;
    
    // Determine triangle type
    let type: 'scalene' | 'isosceles' | 'equilateral' | 'right' | 'obtuse' | 'acute' = 'scalene';
    
    // Check for right triangle
    const tolerance = 0.1;
    if (Math.abs(angleA - 90) < tolerance || Math.abs(angleB - 90) < tolerance || Math.abs(angleC - 90) < tolerance) {
      type = 'right';
    }
    // Check for obtuse triangle
    else if (angleA > 90 || angleB > 90 || angleC > 90) {
      type = 'obtuse';
    }
    // Check for acute triangle
    else if (angleA < 90 && angleB < 90 && angleC < 90) {
      type = 'acute';
    }
    
    // Check for equilateral
    if (Math.abs(sideA - sideB) < tolerance && Math.abs(sideB - sideC) < tolerance) {
      type = 'equilateral';
    }
    // Check for isosceles
    else if (Math.abs(sideA - sideB) < tolerance || Math.abs(sideB - sideC) < tolerance || Math.abs(sideA - sideC) < tolerance) {
      type = 'isosceles';
    }
    
    return {
      sideA, sideB, sideC,
      angleA, angleB, angleC,
      area, perimeter, type
    };
  }

  private findTriangleAtPoint(worldPoint: Point): Triangle | null {
    const objects = this.context.canvas.getAllObjects();
    
    for (const obj of objects) {
      if (obj.type === 'triangle') {
        const triangle = obj as Triangle;
        const [a, b, c] = triangle.properties.vertices;
        
        // Check if point is inside triangle using barycentric coordinates
        const denominator = (b.y - c.y) * (a.x - c.x) + (c.x - b.x) * (a.y - c.y);
        const alpha = ((b.y - c.y) * (worldPoint.x - c.x) + (c.x - b.x) * (worldPoint.y - c.y)) / denominator;
        const beta = ((c.y - a.y) * (worldPoint.x - c.x) + (a.x - c.x) * (worldPoint.y - c.y)) / denominator;
        const gamma = 1 - alpha - beta;
        
        if (alpha >= 0 && beta >= 0 && gamma >= 0) {
          return triangle;
        }
      }
    }
    
    return null;
  }

  private findNearestVertex(worldPoint: Point, triangle: Triangle, tolerance: number = 0.5): 'vertex0' | 'vertex1' | 'vertex2' | null {
    const vertices = triangle.properties.vertices;
    
    for (let i = 0; i < vertices.length; i++) {
      if (this.context.math.distance(worldPoint, vertices[i]) <= tolerance) {
        return `vertex${i}` as 'vertex0' | 'vertex1' | 'vertex2';
      }
    }
    
    return null;
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing triangle
    const existingTriangle = this.findTriangleAtPoint(worldPoint);
    
    if (existingTriangle) {
      const selectedObjects = this.context.state.getState().selectedObjects;
      
      if (selectedObjects.includes(existingTriangle.id)) {
        // Check if we're near a vertex for manipulation
        const vertexType = this.findNearestVertex(worldPoint, existingTriangle);
        if (vertexType) {
          this.state.currentTriangle = existingTriangle;
          this.state.dragTarget = vertexType;
          this.state.isCreating = false;
          return;
        } else {
          // Start moving the triangle
          this.state.currentTriangle = existingTriangle;
          this.state.dragTarget = 'move';
          const centroid = {
            x: (existingTriangle.properties.vertices[0].x + existingTriangle.properties.vertices[1].x + existingTriangle.properties.vertices[2].x) / 3,
            y: (existingTriangle.properties.vertices[0].y + existingTriangle.properties.vertices[1].y + existingTriangle.properties.vertices[2].y) / 3
          };
          this.state.dragOffset = {
            x: worldPoint.x - centroid.x,
            y: worldPoint.y - centroid.y
          };
          this.state.isCreating = false;
          return;
        }
      }
    }

    // Only create new triangle if we're in creation mode (tool is active)
    // If we're here from pan mode (object manipulation), don't create new objects
    if (!this.state.isCreating) {
      const selectedObjects = this.context.state.getState().selectedObjects;
      const hasSelectedTriangle = selectedObjects.some(id => {
        const obj = this.context.canvas.getObject(id);
        return obj?.type === 'triangle';
      });
      
      // If we have a selected triangle but no handle, we're in pan mode - don't create
      if (hasSelectedTriangle) {
        return;
      }
      
      // Start creating new triangle
      this.state.isCreating = true;
      this.state.creationStep = 0;
      this.state.vertices = [worldPoint, null, null];
      
      // For right triangle mode, immediately set up the second point horizontally
      const rightTriangleBase = { x: worldPoint.x + 3, y: worldPoint.y };
      this.state.vertices[1] = rightTriangleBase;
      this.state.creationStep = 1;
      
      const newTriangle: Triangle = {
        id: this.generateId(),
        type: 'triangle',
        properties: {
          vertices: [worldPoint, rightTriangleBase, worldPoint] as [Point, Point, Point],
          sideA: 0, sideB: 0, sideC: 0,
          angleA: 0, angleB: 0, angleC: 0,
          area: 0, perimeter: 0, type: 'scalene'
        },
        visible: true,
        selected: false,
        zIndex: 0
      };
      
      this.state.currentTriangle = newTriangle;
      this.context.canvas.addObject(newTriangle);
    }
  }

  onPointerMove(event: UnifiedPointerEvent): void {
    if (!this.state.currentTriangle) return;

    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    if (this.state.isCreating && this.state.creationStep === 1) {
      // Creating right triangle - update third vertex to maintain right angle
      const [first, second] = this.state.vertices;
      if (first && second) {
        // Create right triangle with the third point making a right angle
        const third = { x: second.x, y: worldPoint.y };
        const vertices: [Point, Point, Point] = [first, second, third];
        const properties = this.calculateTriangleProperties(vertices);
        
        this.context.canvas.updateObject(this.state.currentTriangle.id, {
          properties: {
            vertices,
            ...properties
          }
        });
      }
    } else if (this.state.dragTarget && this.state.dragTarget.startsWith('vertex')) {
      // Dragging a specific vertex
      const vertexIndex = parseInt(this.state.dragTarget.replace('vertex', ''));
      const newVertices = [...this.state.currentTriangle.properties.vertices] as [Point, Point, Point];
      newVertices[vertexIndex] = worldPoint;
      
      const properties = this.calculateTriangleProperties(newVertices);
      
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          vertices: newVertices,
          ...properties
        }
      });
    } else if (this.state.dragTarget === 'move' && this.state.dragOffset) {
      // Move entire triangle
      const centroid = {
        x: worldPoint.x - this.state.dragOffset.x,
        y: worldPoint.y - this.state.dragOffset.y
      };
      
      const currentCentroid = {
        x: (this.state.currentTriangle.properties.vertices[0].x + this.state.currentTriangle.properties.vertices[1].x + this.state.currentTriangle.properties.vertices[2].x) / 3,
        y: (this.state.currentTriangle.properties.vertices[0].y + this.state.currentTriangle.properties.vertices[1].y + this.state.currentTriangle.properties.vertices[2].y) / 3
      };
      
      const offset = {
        x: centroid.x - currentCentroid.x,
        y: centroid.y - currentCentroid.y
      };
      
      const newVertices: [Point, Point, Point] = [
        { x: this.state.currentTriangle.properties.vertices[0].x + offset.x, y: this.state.currentTriangle.properties.vertices[0].y + offset.y },
        { x: this.state.currentTriangle.properties.vertices[1].x + offset.x, y: this.state.currentTriangle.properties.vertices[1].y + offset.y },
        { x: this.state.currentTriangle.properties.vertices[2].x + offset.x, y: this.state.currentTriangle.properties.vertices[2].y + offset.y }
      ];
      
      this.context.canvas.updateObject(this.state.currentTriangle.id, {
        properties: {
          ...this.state.currentTriangle.properties,
          vertices: newVertices
        }
      });
    }

    // Emit triangle update event
    this.context.events.emit('triangle:update', {
      triangleId: this.state.currentTriangle.id,
      triangle: this.context.canvas.getObject(this.state.currentTriangle.id)
    });
  }

  onPointerUp(event: UnifiedPointerEvent): void {
    if (this.state.isCreating && this.state.currentTriangle && this.state.creationStep === 1) {
      const current = this.context.canvas.getObject(this.state.currentTriangle.id) as Triangle;
      
      if (current) {
        // Check if triangle has meaningful area
        if (current.properties.area < 0.1) {
          // Too small, remove it
          this.context.canvas.removeObject(this.state.currentTriangle.id);
        } else {
          // Finalize the triangle
          this.context.events.emit('triangle:created', {
            triangleId: this.state.currentTriangle.id,
            triangle: current
          });
          
          // Emit event to return to pan mode after successful creation
          this.context.events.emit('tool:creation-complete', {
            toolId: this.id,
            objectId: this.state.currentTriangle.id
          });
        }
      }
    }

    // Reset state
    this.state = {
      isCreating: false,
      creationStep: 0,
      vertices: [null, null, null],
      currentTriangle: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}

// Export factory function for easy instantiation
export function createTriangleTool(): Plugin {
  return new TriangleTool();
}