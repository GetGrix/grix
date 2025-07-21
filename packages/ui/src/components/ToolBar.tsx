import React, { useState, useEffect, useRef } from 'react';
import { usePluginManager } from '../plugins/PluginManager.js';
import { ExamplesDropdown } from './ExamplesDropdown.js';
import { useMenuState } from '../context/MenuStateContext.js';
import { useTranslation } from '../i18n/useTranslation.js';

interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Move buildTools inside component to access translations

interface ToolBarProps {
  className?: string;
}

export function ToolBar({ className = '' }: ToolBarProps) {
  const { activeTool, setActiveTool } = usePluginManager();
  const { openMenu, setOpenMenu } = useMenuState();
  const { t } = useTranslation();
  const isDropdownOpen = openMenu === 'build';
  const dropdownRef = useRef<HTMLDivElement>(null);

  const buildTools: Tool[] = [
    {
      id: 'ray-tool',
      name: t('tools.line'),
      icon: '📏',
      description: t('tools.line.description')
    },
    {
      id: 'rectangle-tool',
      name: t('tools.rectangle'),
      icon: '⬜',
      description: t('tools.rectangle.description')
    },
    {
      id: 'circle-tool',
      name: t('tools.circle'),
      icon: '⭕',
      description: t('tools.circle.description')
    },
    {
      id: 'triangle-tool',
      name: t('tools.triangle'),
      icon: '🔺',
      description: t('tools.triangle.description')
    },
    {
      id: 'function-tool',
      name: t('tools.function'),
      icon: '📈',
      description: t('tools.function.description')
    }
  ];

  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
    setOpenMenu(null);
  };

  const handleClearTool = () => {
    setActiveTool(null);
    setOpenMenu(null);
  };

  const toggleDropdown = () => {
    setOpenMenu(openMenu === 'build' ? null : 'build');
  };

  const activeToolInfo = buildTools.find(t => t.id === activeTool);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    if (isDropdownOpen) {
      // Use capture phase to ensure we get the event before canvas handlers
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('touchstart', handleClickOutside, true);
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [isDropdownOpen, setOpenMenu]);

  return (
    <div className={`flex items-center gap-2 p-2 bg-white border-b border-gray-200 ${className}`}>
      {/* Logo/Title */}
      <div className="flex items-center gap-2 mr-4">
        <svg width="24" height="24" viewBox="0 0 32 32" className="flex-shrink-0">
          {/* Background */}
          <rect width="32" height="32" fill="#2563eb" rx="6"/>
          
          {/* Grid lines */}
          <g stroke="#60A5FA" strokeWidth="0.5" opacity="0.6">
            {/* Vertical lines */}
            <line x1="8" y1="4" x2="8" y2="28"/>
            <line x1="16" y1="4" x2="16" y2="28"/>
            <line x1="24" y1="4" x2="24" y2="28"/>
            {/* Horizontal lines */}
            <line x1="4" y1="8" x2="28" y2="8"/>
            <line x1="4" y1="16" x2="28" y2="16"/>
            <line x1="4" y1="24" x2="28" y2="24"/>
          </g>
          
          {/* Axes (highlighted) */}
          <g stroke="#FFFFFF" strokeWidth="1">
            <line x1="16" y1="4" x2="16" y2="28"/>
            <line x1="4" y1="16" x2="28" y2="16"/>
          </g>
          
          {/* Mathematical line from origin */}
          <line x1="16" y1="16" x2="24" y2="8" stroke="#22C55E" strokeWidth="2"/>
          
          {/* Origin point */}
          <circle cx="16" cy="16" r="2" fill="#FFFFFF"/>
          
          {/* Endpoint */}
          <circle cx="24" cy="8" r="1.5" fill="#22C55E"/>
        </svg>
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
            {activeToolInfo ? activeToolInfo.name : t('toolbar.build')}
          </span>
          <span className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="build-dropdown absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48 max-h-80 overflow-y-auto">
            <div className="build-dropdown-scrollable">
              {buildTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleToolSelect(tool.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg transition-colors
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
                    <span className="text-sm">{t('toolbar.panMode')}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right side - Examples */}
      <div className="ml-auto">
        <ExamplesDropdown />
      </div>

    </div>
  );
}