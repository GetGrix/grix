import React, { useState, useEffect, useRef } from 'react';
import { usePluginManager } from '../plugins/PluginManager.js';

interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const buildTools: Tool[] = [
  {
    id: 'ray-tool',
    name: 'Line Builder',
    icon: '📏',
    description: 'Create and edit lines to explore slopes and fractions'
  },
  {
    id: 'rectangle-tool',
    name: 'Rectangle Builder',
    icon: '⬜',
    description: 'Create rectangles to explore area and multiplication'
  }
];

interface ToolBarProps {
  className?: string;
}

export function ToolBar({ className = '' }: ToolBarProps) {
  const { activeTool, setActiveTool } = usePluginManager();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
    setIsDropdownOpen(false);
  };

  const handleClearTool = () => {
    setActiveTool(null);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const activeToolInfo = buildTools.find(t => t.id === activeTool);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={`flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${className}`}>
      {/* Logo/Title */}
      <div className="flex items-center gap-2 mr-4">
        <div className="text-2xl">🟦</div>
        <h1 className="text-lg font-semibold text-gray-800">Grix</h1>
      </div>

      {/* Build Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
            ${activeTool
              ? 'bg-blue-100 border-blue-300 text-blue-700'
              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }
          `}
        >
          <span className="text-lg">🏗️</span>
          <span className="text-sm font-medium">
            {activeToolInfo ? activeToolInfo.name : 'Build'}
          </span>
          <span className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
            {buildTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolSelect(tool.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors
                  ${activeTool === tool.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                `}
                title={tool.description}
              >
                <span className="text-lg">{tool.icon}</span>
                <div>
                  <div className="text-sm font-medium">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.description}</div>
                </div>
              </button>
            ))}
            
            {/* Clear option */}
            {activeTool && (
              <>
                <div className="border-t border-gray-100"></div>
                <button
                  onClick={handleClearTool}
                  className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg transition-colors text-gray-600"
                >
                  <span className="text-lg">✕</span>
                  <span className="text-sm">Clear selection</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Status */}
      <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
        {activeTool ? (
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            {activeToolInfo?.name || 'Active Tool'}
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            Click Build to start creating
          </span>
        )}
      </div>
    </div>
  );
}