import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { MathUtils } from '@getgrix/core';
import { EventBus } from '@getgrix/core';
import type { Plugin, PluginContext, MathAPI } from '@getgrix/core';
import { createCanvasAPI, createStateManager } from '../store/canvasStore.js';

interface PluginManagerContextType {
  eventBus: EventBus;
  registerPlugin: (plugin: Plugin) => void;
  unregisterPlugin: (pluginId: string) => void;
  getActivePlugins: () => Plugin[];
  activeTool: string | null;
  setActiveTool: (toolId: string | null) => void;
}

const PluginManagerContext = createContext<PluginManagerContextType | null>(null);

export function usePluginManager() {
  const context = useContext(PluginManagerContext);
  if (!context) {
    throw new Error('usePluginManager must be used within PluginManagerProvider');
  }
  return context;
}

interface PluginManagerProviderProps {
  children: React.ReactNode;
}

export function PluginManagerProvider({ children }: PluginManagerProviderProps) {
  const [eventBus] = useState(() => new EventBus());
  const [plugins] = useState(() => new Map<string, Plugin>());
  const [pluginContexts] = useState(() => new Map<string, PluginContext>());
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Create shared API instances using useRef to avoid re-creation
  const canvasAPIRef = useRef<ReturnType<typeof createCanvasAPI>>();
  const stateManagerRef = useRef<ReturnType<typeof createStateManager>>();
  const mathAPIRef = useRef<MathAPI>();
  
  if (!canvasAPIRef.current) {
    canvasAPIRef.current = createCanvasAPI();
  }
  if (!stateManagerRef.current) {
    stateManagerRef.current = createStateManager();
  }
  if (!mathAPIRef.current) {
    mathAPIRef.current = {
      distance: MathUtils.distance,
      slope: MathUtils.slope,
      snapToGrid: MathUtils.snapToGrid,
      calculateArea: MathUtils.calculateArea
    };
  }
  
  const canvasAPI = canvasAPIRef.current;
  const stateManager = stateManagerRef.current;
  const mathAPI = mathAPIRef.current;

  const registerPlugin = (plugin: Plugin) => {
    if (plugins.has(plugin.id)) {
      console.warn(`Plugin ${plugin.id} is already registered`);
      return;
    }

    // Create plugin context
    const context: PluginContext = {
      canvas: canvasAPI,
      events: eventBus,
      state: stateManager,
      math: mathAPI
    };

    plugins.set(plugin.id, plugin);
    pluginContexts.set(plugin.id, context);

    // Initialize plugin
    try {
      plugin.init(context);
      console.log(`Plugin ${plugin.id} initialized successfully`);
    } catch (error) {
      console.error(`Failed to initialize plugin ${plugin.id}:`, error);
      plugins.delete(plugin.id);
      pluginContexts.delete(plugin.id);
    }
  };

  const unregisterPlugin = (pluginId: string) => {
    const plugin = plugins.get(pluginId);
    if (plugin) {
      try {
        plugin.destroy?.();
      } catch (error) {
        console.error(`Error destroying plugin ${pluginId}:`, error);
      }
      plugins.delete(pluginId);
      pluginContexts.delete(pluginId);
      
      if (activeTool === pluginId) {
        setActiveTool(null);
      }
    }
  };

  const getActivePlugins = () => {
    return Array.from(plugins.values());
  };

  // Handle tool activation/deactivation
  useEffect(() => {
    eventBus.emit('tool:changed', { previous: null, current: activeTool });
  }, [activeTool, eventBus]);

  // Global pointer event distribution to plugins
  useEffect(() => {
    const handlePointerEvent = (eventType: string) => (data: any) => {
      const activePlugin = activeTool ? plugins.get(activeTool) : null;
      
      // If we have an active tool, use it
      if (activePlugin) {
        try {
          switch (eventType) {
            case 'pointer:down':
              activePlugin.onPointerDown?.(data);
              break;
            case 'pointer:move':
              activePlugin.onPointerMove?.(data);
              break;
            case 'pointer:up':
              activePlugin.onPointerUp?.(data);
              break;
          }
        } catch (error) {
          console.error(`Error in plugin ${activeTool} handling ${eventType}:`, error);
        }
      } else {
        // If no active tool, check if we need tools for object manipulation
        // Only forward to the tool that owns the selected object
        const selectedObjects = stateManager.getState().selectedObjects;
        
        try {
          // Determine which tool should handle this based on selected objects
          let targetTool: Plugin | undefined;
          
          if (selectedObjects.length === 1) {
            const selectedObj = canvasAPI.getObject(selectedObjects[0]);
            if (selectedObj?.type === 'ray') {
              targetTool = plugins.get('ray-tool');
            } else if (selectedObj?.type === 'rectangle') {
              targetTool = plugins.get('rectangle-tool');
            }
          }
          
          // Only forward to the relevant tool
          if (targetTool) {
            switch (eventType) {
              case 'pointer:down':
                targetTool.onPointerDown?.(data);
                break;
              case 'pointer:move':
                targetTool.onPointerMove?.(data);
                break;
              case 'pointer:up':
                targetTool.onPointerUp?.(data);
                break;
            }
          }
        } catch (error) {
          console.error(`Error in tool handling ${eventType} for manipulation:`, error);
        }
      }
    };

    const pointerDownHandler = handlePointerEvent('pointer:down');
    const pointerMoveHandler = handlePointerEvent('pointer:move');
    const pointerUpHandler = handlePointerEvent('pointer:up');

    eventBus.on('pointer:down', pointerDownHandler);
    eventBus.on('pointer:move', pointerMoveHandler);
    eventBus.on('pointer:up', pointerUpHandler);

    return () => {
      eventBus.off('pointer:down', pointerDownHandler);
      eventBus.off('pointer:move', pointerMoveHandler);
      eventBus.off('pointer:up', pointerUpHandler);
    };
  }, [activeTool, plugins, eventBus]);

  const value: PluginManagerContextType = {
    eventBus,
    registerPlugin,
    unregisterPlugin,
    getActivePlugins,
    activeTool,
    setActiveTool
  };

  return (
    <PluginManagerContext.Provider value={value}>
      {children}
    </PluginManagerContext.Provider>
  );
}

// Hook to connect Canvas events to the plugin system
export function useCanvasPluginIntegration() {
  const { eventBus } = usePluginManager();

  const handlePointerDown = (event: any) => {
    eventBus.emit('pointer:down', event);
  };

  const handlePointerMove = (event: any) => {
    eventBus.emit('pointer:move', event);
  };

  const handlePointerUp = (event: any) => {
    eventBus.emit('pointer:up', event);
  };

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp
  };
}