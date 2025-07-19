import React from 'react';
import { EventBus } from '@getgrix/core';
import type { Plugin } from '@getgrix/core';
interface PluginManagerContextType {
    eventBus: EventBus;
    registerPlugin: (plugin: Plugin) => void;
    unregisterPlugin: (pluginId: string) => void;
    getActivePlugins: () => Plugin[];
    activeTool: string | null;
    setActiveTool: (toolId: string | null) => void;
}
export declare function usePluginManager(): PluginManagerContextType;
interface PluginManagerProviderProps {
    children: React.ReactNode;
}
export declare function PluginManagerProvider({ children }: PluginManagerProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useCanvasPluginIntegration(): {
    handlePointerDown: (event: any) => void;
    handlePointerMove: (event: any) => void;
    handlePointerUp: (event: any) => void;
};
export {};
