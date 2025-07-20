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
    pressure: number;
    tiltX: number;
    tiltY: number;
    x: number;
    y: number;
    timestamp: number;
    isPrimary: boolean;
    pointerId: number;
}
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
        angleA: number;
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
        equation: string;
        functionType: 'polynomial' | 'trigonometric' | 'exponential' | 'logarithmic' | 'custom';
        domain: {
            min: number;
            max: number;
        };
        range?: {
            min: number;
            max: number;
        };
        points: Point[];
        resolution: number;
        color: string;
        strokeWidth: number;
    };
}
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
