import { create } from 'zustand';
import type { MathObject } from '@getgrix/core';

interface TransformationState {
  isTransforming: boolean;
  activeTransform: 'rotate' | 'scale' | 'reflect' | null;
  selectedObject: string | null;
  
  // Transform operations (will be connected to canvas store)
  rotateObject: (objectId: string, angle: number, canvasAPI?: any) => void;
  scaleObject: (objectId: string, factor: number, canvasAPI?: any) => void;
  reflectObject: (objectId: string, axis: 'x' | 'y' | 'origin', canvasAPI?: any) => void;
  
  // Quick transforms
  rotate90: (objectId: string, canvasAPI?: any) => void;
  rotate180: (objectId: string, canvasAPI?: any) => void;
  rotate270: (objectId: string, canvasAPI?: any) => void;
  
  // State management
  setActiveTransform: (transform: 'rotate' | 'scale' | 'reflect' | null) => void;
  setSelectedObject: (objectId: string | null) => void;
  clearTransform: () => void;
}

// Transformation helper functions
const rotatePoint = (point: { x: number; y: number }, angleDegrees: number): { x: number; y: number } => {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const cos = Math.cos(angleRadians);
  const sin = Math.sin(angleRadians);
  
  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos
  };
};

const scalePoint = (point: { x: number; y: number }, factor: number): { x: number; y: number } => {
  return {
    x: point.x * factor,
    y: point.y * factor
  };
};

const reflectPoint = (point: { x: number; y: number }, axis: 'x' | 'y' | 'origin'): { x: number; y: number } => {
  switch (axis) {
    case 'x':
      return { x: point.x, y: -point.y };
    case 'y':
      return { x: -point.x, y: point.y };
    case 'origin':
      return { x: -point.x, y: -point.y };
    default:
      return point;
  }
};

export const useTransformationStore = create<TransformationState>((set, get) => ({
  isTransforming: false,
  activeTransform: null,
  selectedObject: null,

  rotateObject: (objectId: string, angle: number, canvasAPI?: any) => {
    if (!canvasAPI) {
      console.log(`No canvas API provided for rotation of ${objectId}`);
      return;
    }
    
    const object = canvasAPI.getObject(objectId);
    if (!object) return;
    
    if (object.type === 'ray') {
      // For rays from origin, rotate the endpoint
      const isFromOrigin = Math.abs(object.properties.startPoint.x) < 0.001 && 
                          Math.abs(object.properties.startPoint.y) < 0.001;
      
      if (isFromOrigin) {
        const rotatedEndPoint = rotatePoint(object.properties.endPoint, angle);
        canvasAPI.updateObject(objectId, {
          properties: {
            ...object.properties,
            endPoint: rotatedEndPoint
          }
        });
      }
    } else if (object.type === 'rectangle') {
      // For rectangles, rotate around center (simplified - just update corner positions)
      const centerX = object.properties.x + object.properties.width / 2;
      const centerY = object.properties.y + object.properties.height / 2;
      
      // Translate to origin, rotate, translate back
      const corner = { 
        x: object.properties.x - centerX, 
        y: object.properties.y - centerY 
      };
      const rotatedCorner = rotatePoint(corner, angle);
      
      canvasAPI.updateObject(objectId, {
        properties: {
          ...object.properties,
          x: rotatedCorner.x + centerX,
          y: rotatedCorner.y + centerY
        }
      });
    }
  },

  scaleObject: (objectId: string, factor: number, canvasAPI?: any) => {
    if (!canvasAPI) {
      console.log(`No canvas API provided for scaling of ${objectId}`);
      return;
    }
    
    const object = canvasAPI.getObject(objectId);
    if (!object) return;
    
    if (object.type === 'ray') {
      // For rays from origin, scale the endpoint
      const isFromOrigin = Math.abs(object.properties.startPoint.x) < 0.001 && 
                          Math.abs(object.properties.startPoint.y) < 0.001;
      
      if (isFromOrigin) {
        const scaledEndPoint = scalePoint(object.properties.endPoint, factor);
        canvasAPI.updateObject(objectId, {
          properties: {
            ...object.properties,
            endPoint: scaledEndPoint
          }
        });
      }
    } else if (object.type === 'rectangle') {
      // For rectangles, scale dimensions
      canvasAPI.updateObject(objectId, {
        properties: {
          ...object.properties,
          width: object.properties.width * factor,
          height: object.properties.height * factor,
          area: object.properties.width * factor * object.properties.height * factor
        }
      });
    }
  },

  reflectObject: (objectId: string, axis: 'x' | 'y' | 'origin', canvasAPI?: any) => {
    if (!canvasAPI) {
      console.log(`No canvas API provided for reflection of ${objectId}`);
      return;
    }
    
    const object = canvasAPI.getObject(objectId);
    if (!object) return;
    
    if (object.type === 'ray') {
      // For rays from origin, reflect the endpoint
      const isFromOrigin = Math.abs(object.properties.startPoint.x) < 0.001 && 
                          Math.abs(object.properties.startPoint.y) < 0.001;
      
      if (isFromOrigin) {
        const reflectedEndPoint = reflectPoint(object.properties.endPoint, axis);
        canvasAPI.updateObject(objectId, {
          properties: {
            ...object.properties,
            endPoint: reflectedEndPoint
          }
        });
      }
    } else if (object.type === 'rectangle') {
      // For rectangles, reflect position
      const reflectedPos = reflectPoint({ x: object.properties.x, y: object.properties.y }, axis);
      canvasAPI.updateObject(objectId, {
        properties: {
          ...object.properties,
          x: reflectedPos.x,
          y: reflectedPos.y
        }
      });
    }
  },

  rotate90: (objectId: string, canvasAPI?: any) => {
    get().rotateObject(objectId, 90, canvasAPI);
  },

  rotate180: (objectId: string, canvasAPI?: any) => {
    get().rotateObject(objectId, 180, canvasAPI);
  },

  rotate270: (objectId: string, canvasAPI?: any) => {
    get().rotateObject(objectId, 270, canvasAPI);
  },

  setActiveTransform: (transform) => {
    set({ 
      activeTransform: transform,
      isTransforming: transform !== null
    });
  },

  setSelectedObject: (objectId) => {
    set({ selectedObject: objectId });
  },

  clearTransform: () => {
    set({
      isTransforming: false,
      activeTransform: null,
      selectedObject: null
    });
  },
}));