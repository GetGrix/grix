// Main exports for @getgrix/ui

export { GrixApp } from './components/GrixApp.js';
export { Canvas } from './components/Canvas.js';
export { ToolBar } from './components/ToolBar.js';

// Plugin system exports
export { PluginManagerProvider, usePluginManager } from './plugins/PluginManager.js';

// Individual plugins
export { createRayTool } from './plugins/RayTool.js';
export { createRectangleTool } from './plugins/RectangleTool.js';
export { createAreaCounter } from './plugins/AreaCounter.js';

// Store exports
export { useCanvasStore } from './store/canvasStore.js';

// Hooks
export { useInputSystem } from './hooks/useInputSystem.js';

// Version info
export const version = '0.1.0';