import type { Point, Vector, Bounds, Rectangle } from './types.js';
export declare const MathUtils: {
    distance(p1: Point, p2: Point): number;
    slope(p1: Point, p2: Point): number;
    angle(p1: Point, p2: Point): number;
    magnitude(vector: Vector): number;
    normalize(vector: Vector): Vector;
    snapToGrid(point: Point, gridSize: number): Point;
    calculateArea(rect: Rectangle): number;
    boundsContainPoint(bounds: Bounds, point: Point): boolean;
    boundsIntersect(a: Bounds, b: Bounds): boolean;
    gcd(a: number, b: number): number;
    simplifyFraction(numerator: number, denominator: number): [number, number];
    worldToScreen(worldPoint: Point, viewport: {
        center: Point;
        zoom: number;
    }, canvasSize: {
        width: number;
        height: number;
    }): Point;
    screenToWorld(screenPoint: Point, viewport: {
        center: Point;
        zoom: number;
    }, canvasSize: {
        width: number;
        height: number;
    }): Point;
};
export declare const InputUtils: {
    detectCapabilities(): import("./types.js").InputCapabilities;
    normalizePointerEvent(event: PointerEvent): import("./types.js").UnifiedPointerEvent;
    getTouchTargetSize(inputType: import("./types.js").InputDevice): number;
};
