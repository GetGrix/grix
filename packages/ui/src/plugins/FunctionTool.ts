import type { Plugin, PluginContext, UnifiedPointerEvent, Function, Point } from '@getgrix/core';
import { calculateSnapSize } from '../utils/gridUtils.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

interface FunctionState {
  isCreating: boolean;
  currentFunction: Function | null;
  dragTarget: 'domain-start' | 'domain-end' | 'move' | null;
  dragOffset: Point | null;
  equation: string;
  functionType: 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom';
}

export class FunctionTool implements Plugin {
  id = 'function-tool';
  name = 'Function Grapher';
  
  private context!: PluginContext;
  private state: FunctionState = {
    isCreating: false,
    currentFunction: null,
    dragTarget: null,
    dragOffset: null,
    equation: 'x^2',
    functionType: 'polynomial'
  };

  init(context: PluginContext): void {
    this.context = context;
    
    // Listen for tool activation and cancellation
    context.events.on('tool:changed', this.handleToolChange.bind(this) as any);
    context.events.on('tool:cancel', this.handleToolCancel.bind(this) as any);
  }

  destroy(): void {
    this.context.events.off('tool:changed', this.handleToolChange.bind(this) as any);
    this.context.events.off('tool:cancel', this.handleToolCancel.bind(this) as any);
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
    if (this.state.currentFunction && this.state.isCreating) {
      this.context.canvas.removeObject(this.state.currentFunction.id);
    }
    this.state = {
      isCreating: false,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null,
      equation: 'x^2',
      functionType: 'polynomial'
    };
  }

  private generateId(): string {
    return `function_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private snapPoint(point: Point): Point {
    const canvasState = this.context.state.getState();
    if (canvasState.snapToGrid) {
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

  private evaluateFunction(equation: string, x: number): number | null {
    try {
      // Create a safe evaluation environment
      const safeEquation = equation
        .replace(/\bx\b/g, `(${x})`)
        .replace(/\^/g, '**')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log')
        .replace(/ln/g, 'Math.log')
        .replace(/exp/g, 'Math.exp')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/abs/g, 'Math.abs')
        .replace(/pi/g, 'Math.PI')
        .replace(/e\b/g, 'Math.E');

      // Use Function constructor for safe evaluation
      const func = new Function('x', `return ${safeEquation}`);
      const result = func(x);
      
      // Check for valid number
      if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
        return result;
      }
    } catch (error) {
      // Silent fail for invalid equations
    }
    return null;
  }

  private generateFunctionPoints(equation: string, domain: { min: number; max: number }, resolution: number): Point[] {
    const points: Point[] = [];
    const step = (domain.max - domain.min) / (resolution * (domain.max - domain.min));
    
    for (let x = domain.min; x <= domain.max; x += step) {
      const y = this.evaluateFunction(equation, x);
      if (y !== null) {
        points.push({ x, y });
      }
    }
    
    return points;
  }

  private detectFunctionType(equation: string): 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom' {
    if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) {
      return 'trigonometric';
    }
    if (equation.includes('exp') || equation.includes('e^')) {
      return 'exponential';
    }
    if (equation.includes('log') || equation.includes('ln')) {
      return 'logarithmic';
    }
    if (/x\^\d+|x\*\*\d+/.test(equation)) {
      return 'polynomial';
    }
    return 'custom';
  }

  private getDefaultEquation(functionType: 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom'): string {
    switch (functionType) {
      case 'polynomial': return 'x^2';
      case 'trigonometric': return 'sin(x)';
      case 'exponential': return 'exp(x)';
      case 'logarithmic': return 'log(x)';
      default: return 'x^2';
    }
  }

  private findFunctionAtPoint(worldPoint: Point): Function | null {
    const objects = this.context.canvas.getAllObjects();
    const tolerance = 0.3;
    
    for (const obj of objects) {
      if (obj.type === 'function') {
        const func = obj as Function;
        
        // Check if point is near the curve
        for (let i = 0; i < func.properties.points.length - 1; i++) {
          const p1 = func.properties.points[i];
          const p2 = func.properties.points[i + 1];
          
          if (!p1 || !p2) continue;
          
          // Simple distance to line segment check
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          if (length === 0) continue;
          
          const t = Math.max(0, Math.min(1, ((worldPoint.x - p1.x) * dx + (worldPoint.y - p1.y) * dy) / (length * length)));
          const projection = {
            x: p1.x + t * dx,
            y: p1.y + t * dy
          };
          
          const distance = Math.sqrt(
            (worldPoint.x - projection.x) ** 2 + (worldPoint.y - projection.y) ** 2
          );
          
          if (distance <= tolerance) {
            return func;
          }
        }
      }
    }
    
    return null;
  }

  onPointerDown(event: UnifiedPointerEvent): void {
    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    // Check if we're clicking on an existing function
    const existingFunction = this.findFunctionAtPoint(worldPoint);
    
    if (existingFunction) {
      const selectedObjects = this.context.state.getState().selectedObjects;
      
      if (selectedObjects.includes(existingFunction.id)) {
        // Check if we're near domain boundaries for manipulation
        const domain = existingFunction.properties.domain;
        const domainStartY = this.evaluateFunction(existingFunction.properties.equation, domain.min);
        const domainEndY = this.evaluateFunction(existingFunction.properties.equation, domain.max);
        
        if (domainStartY !== null && Math.abs(worldPoint.x - domain.min) < 0.5 && Math.abs(worldPoint.y - domainStartY) < 0.5) {
          this.state.currentFunction = existingFunction;
          this.state.dragTarget = 'domain-start';
          this.state.isCreating = false;
          return;
        } else if (domainEndY !== null && Math.abs(worldPoint.x - domain.max) < 0.5 && Math.abs(worldPoint.y - domainEndY) < 0.5) {
          this.state.currentFunction = existingFunction;
          this.state.dragTarget = 'domain-end';
          this.state.isCreating = false;
          return;
        } else {
          // Start moving the function
          this.state.currentFunction = existingFunction;
          this.state.dragTarget = 'move';
          this.state.dragOffset = { x: 0, y: 0 }; // Will be calculated during move
          this.state.isCreating = false;
          return;
        }
      }
    }

    // Only create new function if we're in creation mode
    if (!this.state.isCreating) {
      const selectedObjects = this.context.state.getState().selectedObjects;
      const hasSelectedFunction = selectedObjects.some(id => {
        const obj = this.context.canvas.getObject(id);
        return obj?.type === 'function';
      });
      
      // If we have a selected function but no handle, we're in pan mode - don't create
      if (hasSelectedFunction) {
        return;
      }
      
      // Start creating new function
      this.state.isCreating = true;
      this.state.equation = this.getDefaultEquation(this.state.functionType);
      
      // Create initial domain around the click point
      const domainWidth = 8;
      const domain = {
        min: worldPoint.x - domainWidth / 2,
        max: worldPoint.x + domainWidth / 2
      };
      
      const points = this.generateFunctionPoints(this.state.equation, domain, 20);
      
      const newFunction: Function = {
        id: this.generateId(),
        type: 'function',
        properties: {
          equation: this.state.equation,
          functionType: this.detectFunctionType(this.state.equation),
          domain,
          points,
          resolution: 20,
          color: '#2563eb',
          strokeWidth: 2
        },
        visible: true,
        selected: false,
        zIndex: 0
      };
      
      this.state.currentFunction = newFunction;
      this.context.canvas.addObject(newFunction);
    }
  }

  onPointerMove(event: UnifiedPointerEvent): void {
    if (!this.state.currentFunction) return;

    const screenPoint = { x: event.x, y: event.y };
    const worldPoint = this.snapPoint(this.context.canvas.screenToWorld(screenPoint));

    if (this.state.dragTarget === 'domain-start') {
      // Adjust start of domain
      const newDomain = {
        min: Math.min(worldPoint.x, this.state.currentFunction.properties.domain.max - 0.1),
        max: this.state.currentFunction.properties.domain.max
      };
      
      const points = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        newDomain,
        this.state.currentFunction.properties.resolution
      );
      
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: newDomain,
          points
        }
      });
    } else if (this.state.dragTarget === 'domain-end') {
      // Adjust end of domain
      const newDomain = {
        min: this.state.currentFunction.properties.domain.min,
        max: Math.max(worldPoint.x, this.state.currentFunction.properties.domain.min + 0.1)
      };
      
      const points = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        newDomain,
        this.state.currentFunction.properties.resolution
      );
      
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: newDomain,
          points
        }
      });
    } else if (this.state.dragTarget === 'move') {
      // Move entire function by translating the domain
      if (!this.state.dragOffset) {
        // Calculate initial offset
        const domainCenter = (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
        this.state.dragOffset = { x: worldPoint.x - domainCenter, y: 0 };
      }
      
      const domainCenter = (this.state.currentFunction.properties.domain.min + this.state.currentFunction.properties.domain.max) / 2;
      const newCenter = worldPoint.x - this.state.dragOffset.x;
      const domainWidth = this.state.currentFunction.properties.domain.max - this.state.currentFunction.properties.domain.min;
      
      const newDomain = {
        min: newCenter - domainWidth / 2,
        max: newCenter + domainWidth / 2
      };
      
      const points = this.generateFunctionPoints(
        this.state.currentFunction.properties.equation,
        newDomain,
        this.state.currentFunction.properties.resolution
      );
      
      this.context.canvas.updateObject(this.state.currentFunction.id, {
        properties: {
          ...this.state.currentFunction.properties,
          domain: newDomain,
          points
        }
      });
    }

    // Emit function update event
    this.context.events.emit('function:update', {
      functionId: this.state.currentFunction.id,
      function: this.context.canvas.getObject(this.state.currentFunction.id)
    });
  }

  onPointerUp(event: UnifiedPointerEvent): void {
    if (this.state.isCreating && this.state.currentFunction) {
      // Finalize the function
      this.context.events.emit('function:created', {
        functionId: this.state.currentFunction.id,
        function: this.context.canvas.getObject(this.state.currentFunction.id)
      });
      
      // Emit event to return to pan mode after successful creation
      this.context.events.emit('tool:creation-complete', {
        toolId: this.id,
        objectId: this.state.currentFunction.id
      });
    }

    // Reset state
    this.state = {
      ...this.state,
      isCreating: false,
      currentFunction: null,
      dragTarget: null,
      dragOffset: null
    };
  }
}

// Export factory function for easy instantiation
export function createFunctionTool(): Plugin {
  return new FunctionTool();
}