import { useEffect, useState, useCallback } from 'react';
import { InputUtils, type InputCapabilities, type UnifiedPointerEvent } from '@getgrix/core';

export interface InputSystemConfig {
  enableGestures: boolean;
  touchTargetSize: number;
  preventScrolling: boolean;
}

export interface InputHandlers {
  onPointerDown?: (event: UnifiedPointerEvent) => void;
  onPointerMove?: (event: UnifiedPointerEvent) => void;
  onPointerUp?: (event: UnifiedPointerEvent) => void;
  onPointerCancel?: (event: UnifiedPointerEvent) => void;
  onGesture?: (gesture: GestureEvent) => void;
}

export interface GestureEvent {
  type: 'pinch' | 'pan' | 'tap' | 'longpress';
  center: { x: number; y: number };
  scale?: number;
  deltaX?: number;
  deltaY?: number;
  touches?: number;
}

export function useInputSystem(
  elementRef: React.RefObject<HTMLElement | SVGSVGElement>,
  handlers: InputHandlers,
  config: Partial<InputSystemConfig> = {}
) {
  const [capabilities, setCapabilities] = useState<InputCapabilities | null>(null);
  const [activePointers, setActivePointers] = useState<Map<number, UnifiedPointerEvent>>(new Map());
  
  const defaultConfig: InputSystemConfig = {
    enableGestures: true,
    touchTargetSize: 44,
    preventScrolling: true,
    ...config
  };

  // Initialize capabilities on mount
  useEffect(() => {
    const caps = InputUtils.detectCapabilities();
    setCapabilities(caps);
  }, []);

  // Gesture detection state
  const [gestureState, setGestureState] = useState<{
    isGesturing: boolean;
    startTime: number;
    startDistance: number;
    lastTapTime: number;
    tapCount: number;
  }>({
    isGesturing: false,
    startTime: 0,
    startDistance: 0,
    lastTapTime: 0,
    tapCount: 0
  });

  // Calculate distance between two touches
  const getTouchDistance = useCallback((pointers: Map<number, UnifiedPointerEvent>) => {
    const points = Array.from(pointers.values());
    if (points.length < 2) return 0;
    
    const p1 = points[0];
    const p2 = points[1];
    if (!p1 || !p2) return 0;
    
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  // Get center point of all touches
  const getTouchCenter = useCallback((pointers: Map<number, UnifiedPointerEvent>) => {
    const points = Array.from(pointers.values());
    if (points.length === 0) return { x: 0, y: 0 };
    
    const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
    return { x: sum.x / points.length, y: sum.y / points.length };
  }, []);

  // Handle pointer down
  const handlePointerDown = useCallback((event: PointerEvent) => {
    if (!elementRef.current) return;
    
    // Prevent default behaviors that interfere with our input handling
    if (defaultConfig.preventScrolling) {
      event.preventDefault();
    }
    
    // Get coordinates relative to the element
    const rect = elementRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    
    const unifiedEvent = InputUtils.normalizePointerEvent(event);
    // Override coordinates with element-relative values
    unifiedEvent.x = relativeX;
    unifiedEvent.y = relativeY;
    
    setActivePointers(prev => {
      const newPointers = new Map(prev);
      newPointers.set(event.pointerId, unifiedEvent);
      
      // Handle gesture detection
      if (defaultConfig.enableGestures && newPointers.size >= 2) {
        const distance = getTouchDistance(newPointers);
        setGestureState(prevState => ({
          ...prevState,
          isGesturing: true,
          startTime: event.timeStamp,
          startDistance: distance
        }));
      }
      
      return newPointers;
    });
    
    // Capture pointer for consistent tracking
    elementRef.current.setPointerCapture(event.pointerId);
    
    handlers.onPointerDown?.(unifiedEvent);
  }, [elementRef, handlers, defaultConfig, getTouchDistance]);

  // Handle pointer move
  const handlePointerMove = useCallback((event: PointerEvent) => {
    if (!elementRef.current) return;
    
    // Get coordinates relative to the element
    const rect = elementRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    
    const unifiedEvent = InputUtils.normalizePointerEvent(event);
    // Override coordinates with element-relative values
    unifiedEvent.x = relativeX;
    unifiedEvent.y = relativeY;
    
    setActivePointers(prev => {
      const newPointers = new Map(prev);
      newPointers.set(event.pointerId, unifiedEvent);
      
      // Handle gesture detection during move
      if (defaultConfig.enableGestures && newPointers.size >= 2) {
        const currentDistance = getTouchDistance(newPointers);
        const center = getTouchCenter(newPointers);
        
        if (gestureState.isGesturing && gestureState.startDistance > 0) {
          const scale = currentDistance / gestureState.startDistance;
          
          handlers.onGesture?.({
            type: 'pinch',
            center,
            scale,
            touches: newPointers.size
          });
        }
      } else if (newPointers.size === 1 && gestureState.isGesturing) {
        // Single finger pan during gesture
        const center = getTouchCenter(newPointers);
        handlers.onGesture?.({
          type: 'pan',
          center,
          touches: newPointers.size
        });
      }
      
      return newPointers;
    });
    
    handlers.onPointerMove?.(unifiedEvent);
  }, [handlers, defaultConfig, getTouchDistance, getTouchCenter, gestureState]);

  // Handle pointer up
  const handlePointerUp = useCallback((event: PointerEvent) => {
    if (!elementRef.current) return;
    
    // Get coordinates relative to the element
    const rect = elementRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    
    const unifiedEvent = InputUtils.normalizePointerEvent(event);
    // Override coordinates with element-relative values
    unifiedEvent.x = relativeX;
    unifiedEvent.y = relativeY;
    
    setActivePointers(prev => {
      const newPointers = new Map(prev);
      newPointers.delete(event.pointerId);
      
      // Handle tap detection
      if (defaultConfig.enableGestures && newPointers.size === 0) {
        const timeDiff = event.timeStamp - gestureState.startTime;
        const isQuickTap = timeDiff < 200;
        const timeSinceLastTap = event.timeStamp - gestureState.lastTapTime;
        
        if (isQuickTap && !gestureState.isGesturing) {
          if (timeSinceLastTap < 300) {
            // Double tap
            setGestureState(prevState => ({ ...prevState, tapCount: prevState.tapCount + 1 }));
          } else {
            // Single tap
            handlers.onGesture?.({
              type: 'tap',
              center: { x: unifiedEvent.x, y: unifiedEvent.y },
              touches: 1
            });
            setGestureState(prevState => ({ 
              ...prevState, 
              tapCount: 1, 
              lastTapTime: event.timeStamp 
            }));
          }
        }
        
        setGestureState(prevState => ({ ...prevState, isGesturing: false }));
      }
      
      return newPointers;
    });
    
    // Release pointer capture
    if (elementRef.current) {
      elementRef.current.releasePointerCapture(event.pointerId);
    }
    
    handlers.onPointerUp?.(unifiedEvent);
  }, [elementRef, handlers, defaultConfig, gestureState]);

  // Handle pointer cancel
  const handlePointerCancel = useCallback((event: PointerEvent) => {
    if (!elementRef.current) return;
    
    // Get coordinates relative to the element
    const rect = elementRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    
    const unifiedEvent = InputUtils.normalizePointerEvent(event);
    // Override coordinates with element-relative values
    unifiedEvent.x = relativeX;
    unifiedEvent.y = relativeY;
    
    setActivePointers(prev => {
      const newPointers = new Map(prev);
      newPointers.delete(event.pointerId);
      return newPointers;
    });
    
    setGestureState(prevState => ({ ...prevState, isGesturing: false }));
    
    handlers.onPointerCancel?.(unifiedEvent);
  }, [handlers]);

  // Set up event listeners
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('pointerdown', handlePointerDown as EventListener);
    element.addEventListener('pointermove', handlePointerMove as EventListener);
    element.addEventListener('pointerup', handlePointerUp as EventListener);
    element.addEventListener('pointercancel', handlePointerCancel as EventListener);

    // Prevent context menu on long press (interferes with touch interactions)
    const preventContextMenu = (e: Event) => e.preventDefault();
    element.addEventListener('contextmenu', preventContextMenu);

    return () => {
      element.removeEventListener('pointerdown', handlePointerDown as EventListener);
      element.removeEventListener('pointermove', handlePointerMove as EventListener);
      element.removeEventListener('pointerup', handlePointerUp as EventListener);
      element.removeEventListener('pointercancel', handlePointerCancel as EventListener);
      element.removeEventListener('contextmenu', preventContextMenu);
    };
  }, [elementRef, handlePointerDown, handlePointerMove, handlePointerUp, handlePointerCancel]);

  return {
    capabilities,
    activePointers: Array.from(activePointers.values()),
    isGesturing: gestureState.isGesturing,
    touchTargetSize: capabilities 
      ? InputUtils.getTouchTargetSize(capabilities.hasTouch ? 'touch' : 'mouse')
      : defaultConfig.touchTargetSize
  };
}