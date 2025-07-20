import React, { useEffect, useRef } from 'react';
import { PluginManagerProvider, usePluginManager } from '../plugins/PluginManager.js';
import { Canvas } from './Canvas.js';
import { ToolBar } from './ToolBar.js';
import { ErrorBoundary } from './ErrorBoundary.js';
import { createRayTool } from '../plugins/RayTool.js';
import { createRectangleTool } from '../plugins/RectangleTool.js';
import { createCircleTool } from '../plugins/CircleTool.js';
import { createTriangleTool } from '../plugins/TriangleTool.js';
import { createAreaCounter } from '../plugins/AreaCounter.js';

function GrixAppContent() {
  const { registerPlugin } = usePluginManager();
  const pluginsRegistered = useRef(false);

  // Register plugins on mount (prevent double registration in StrictMode)
  useEffect(() => {
    if (pluginsRegistered.current) return;
    
    const rayTool = createRayTool();
    const rectangleTool = createRectangleTool();
    const circleTool = createCircleTool();
    const triangleTool = createTriangleTool();
    const areaCounter = createAreaCounter();

    registerPlugin(rayTool);
    registerPlugin(rectangleTool);
    registerPlugin(circleTool);
    registerPlugin(triangleTool);
    registerPlugin(areaCounter);
    
    pluginsRegistered.current = true;

    return () => {
      // Cleanup is handled by PluginManager
    };
  }, [registerPlugin]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ToolBar />
      <div className="flex-1 relative" data-grix-canvas>
        <Canvas 
          width={window.innerWidth}
          height={window.innerHeight - 60} // Account for toolbar height
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}

export function GrixApp() {
  return (
    <ErrorBoundary>
      <PluginManagerProvider>
        <ErrorBoundary>
          <GrixAppContent />
        </ErrorBoundary>
      </PluginManagerProvider>
    </ErrorBoundary>
  );
}