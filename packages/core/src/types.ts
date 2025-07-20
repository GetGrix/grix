// Core mathematical types for Grix

export interface Point {
  x: number;
  y: number;
}

export interface Vector extends Point {
  magnitude?: number;
  angle?: number;
}

export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Input system types for multi-device support
export type InputDevice = 'mouse' | 'touch' | 'pen';

export interface InputCapabilities {
  hasTouch: boolean;
  hasPencil: boolean;
  hasKeyboard: boolean;
  hasHover: boolean;
  maxTouchPoints: number;
  supportsPressure: boolean;
  supportsTilt: boolean;
}

export interface UnifiedPointerEvent {
  type: InputDevice;
  pressure: number;        // 0.0 - 1.0
  tiltX: number;          // -90 to 90 degrees
  tiltY: number;          // -90 to 90 degrees
  x: number;
  y: number;
  timestamp: number;
  isPrimary: boolean;
  pointerId: number;
}

// Mathematical objects
export interface MathObject {
  id: string;
  type: string;
  properties: Record<string, any>;
  bounds?: Bounds;
  visible: boolean;
  selected: boolean;
  zIndex: number;
}

export interface Ray extends MathObject {
  type: 'ray';
  properties: {
    startPoint: Point;
    endPoint: Point;
    slope?: number;
    yIntercept?: number;
  };
}

export interface Rectangle extends MathObject {
  type: 'rectangle';
  properties: {
    x: number;
    y: number;
    width: number;
    height: number;
    area: number;
  };
}

export interface Circle extends MathObject {
  type: 'circle';
  properties: {
    center: Point;
    radius: number;
    diameter: number;
    circumference: number;
    area: number;
  };
}

export interface Triangle extends MathObject {
  type: 'triangle';
  properties: {
    vertices: [Point, Point, Point];
    sideA: number;
    sideB: number;
    sideC: number;
    angleA: number; // in degrees
    angleB: number;
    angleC: number;
    area: number;
    perimeter: number;
    type: 'scalene' | 'isosceles' | 'equilateral' | 'right' | 'obtuse' | 'acute';
  };
}

export interface Function extends MathObject {
  type: 'function';
  properties: {
    equation: string; // e.g., "x^2", "sin(x)", "2*x + 1"
    functionType: 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom';
    domain: { min: number; max: number };
    range?: { min: number; max: number };
    points: Point[]; // computed points for rendering
    resolution: number; // number of points per unit
    color: string;
    strokeWidth: number;
  };
}

// Canvas and viewport
export interface Viewport {
  center: Point;
  zoom: number;
  bounds: Bounds;
}

export interface CanvasState {
  viewport: Viewport;
  objects: MathObject[];
  selectedObjects: string[];
  snapToGrid: boolean;
  gridDensity: 'fine' | 'coarse';
}

// Plugin system
export interface PluginContext {
  canvas: CanvasAPI;
  events: IEventBus;
  state: StateManager;
  math: MathAPI;
}

export interface Plugin {
  id: string;
  name: string;
  init(context: PluginContext): void;
  destroy?(): void;
  onPointerDown?(event: UnifiedPointerEvent): void;
  onPointerMove?(event: UnifiedPointerEvent): void;
  onPointerUp?(event: UnifiedPointerEvent): void;
}

// API interfaces (will be implemented in ui package)
export interface CanvasAPI {
  addObject(object: MathObject): void;
  removeObject(id: string): void;
  updateObject(id: string, updates: Partial<MathObject>): void;
  getObject(id: string): MathObject | undefined;
  getAllObjects(): MathObject[];
  screenToWorld(point: Point): Point;
  worldToScreen(point: Point): Point;
}

export interface IEventBus {
  on(event: string, handler: Function): void;
  off(event: string, handler: Function): void;
  emit(event: string, data?: any): void;
}

export interface StateManager {
  getState(): CanvasState;
  setState(updates: Partial<CanvasState>): void;
  subscribe(callback: (state: CanvasState) => void): () => void;
}

export interface MathAPI {
  distance(p1: Point, p2: Point): number;
  slope(p1: Point, p2: Point): number;
  snapToGrid(point: Point, gridSize: number): Point;
  calculateArea(rect: Rectangle): number;
}