import React from 'react';
import { usePluginManager } from '../plugins/PluginManager.js';

interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const availableTools: Tool[] = [
  {
    id: 'ray-tool',
    name: 'Ray Builder',
    icon: '📏',
    description: 'Create and edit rays to explore slopes and fractions'
  },
  {
    id: 'rectangle-tool',
    name: 'Rectangle Selector',
    icon: '⬜',
    description: 'Create rectangles to explore area and multiplication'
  }
];

interface ToolBarProps {
  className?: string;
}

export function ToolBar({ className = '' }: ToolBarProps) {
  const { activeTool, setActiveTool } = usePluginManager();

  const handleToolSelect = (toolId: string) => {
    if (activeTool === toolId) {
      // Deselect if clicking the same tool
      setActiveTool(null);
    } else {
      setActiveTool(toolId);
    }
  };

  const handleClearTool = () => {
    setActiveTool(null);
  };

  return (
    <div className={`flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${className}`}>
      {/* Logo/Title */}
      <div className="flex items-center gap-2 mr-4">
        <div className="text-2xl">🟦</div>
        <h1 className="text-lg font-semibold text-gray-800">Grix</h1>
      </div>

      {/* Tools */}
      <div className="flex items-center gap-1">
        {availableTools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleToolSelect(tool.id)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg border transition-all
              ${activeTool === tool.id
                ? 'bg-blue-100 border-blue-300 text-blue-700'
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }
            `}
            title={tool.description}
          >
            <span className="text-lg">{tool.icon}</span>
            <span className="text-sm font-medium">{tool.name}</span>
          </button>
        ))}
        
        {/* Clear tool button */}
        {activeTool && (
          <button
            onClick={handleClearTool}
            className="ml-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all"
            title="Clear tool selection"
          >
            <span className="text-sm">✕ Clear</span>
          </button>
        )}
      </div>

      {/* Status */}
      <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
        {activeTool ? (
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            {availableTools.find(t => t.id === activeTool)?.name || 'Active Tool'}
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            Select a tool to begin
          </span>
        )}
      </div>
    </div>
  );
}