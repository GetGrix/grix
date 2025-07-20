import React, { useState, useEffect, useRef } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useVisualizationStore } from '../store/visualizationStore.js';
import { storageManager } from '../utils/storageManager.js';

interface ActionMenuProps {
  onClearBoard?: () => void;
  onExportImage?: () => void;
  onImportState?: (file: File) => void;
}

export function ActionMenu({ onClearBoard, onExportImage, onImportState }: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [storageInfo, setStorageInfo] = useState<any>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { objects, clearObjects, clearSelection } = useCanvasStore();
  const { resetToDefaults } = useVisualizationStore();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowClearConfirmation(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [isOpen]);

  // Load storage info when menu opens
  useEffect(() => {
    if (isOpen) {
      const info = storageManager.getStorageInfo();
      setStorageInfo(info);
    }
  }, [isOpen]);

  const handleClearBoard = () => {
    clearObjects();
    clearSelection();
    onClearBoard?.();
    setShowClearConfirmation(false);
    setIsOpen(false);
  };

  const handleResetAll = () => {
    clearObjects();
    clearSelection();
    resetToDefaults();
    storageManager.clearState();
    setShowClearConfirmation(false);
    setIsOpen(false);
  };

  const handleExportState = () => {
    const exportData = storageManager.exportState();
    if (exportData) {
      const blob = new Blob([exportData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `grix-session-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
    setIsOpen(false);
  };

  const handleImportState = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const success = await storageManager.importState(text);
      if (success) {
        // Reload the page to apply imported state
        window.location.reload();
      } else {
        alert('Failed to import state. Please check the file format.');
      }
    } catch (error) {
      alert('Failed to read file. Please select a valid Grix export file.');
    }
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    setIsOpen(false);
  };

  const handleExportImage = () => {
    onExportImage?.();
    setIsOpen(false);
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  if (showClearConfirmation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div 
          ref={menuRef}
          className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Clear Everything?</h3>
          <p className="text-gray-600 mb-6">
            This will remove all shapes, reset settings, and clear your saved work. This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setShowClearConfirmation(false)}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleResetAll}
              className="flex-1 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Action Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-40 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center justify-center"
        title="Actions & Tools"
      >
        <span className="text-lg">⚡</span>
      </button>

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Action Menu Dropdown */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 bg-white border border-gray-200 rounded-lg shadow-xl min-w-64 max-w-80">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">Actions & Tools</h3>
            <p className="text-xs text-gray-500 mt-1">
              {objects.length} shape{objects.length !== 1 ? 's' : ''} on canvas
            </p>
          </div>

          {/* Actions */}
          <div className="p-2">
            {/* Clear Board */}
            <button
              onClick={() => setShowClearConfirmation(true)}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
              disabled={objects.length === 0}
            >
              <span className="text-lg">🗑️</span>
              <div>
                <div className="text-sm font-medium">Clear Board</div>
                <div className="text-xs text-gray-500">Remove all shapes and reset settings</div>
              </div>
            </button>

            <div className="border-t border-gray-100 my-2"></div>

            {/* Export Session */}
            <button
              onClick={handleExportState}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-700"
            >
              <span className="text-lg">📤</span>
              <div>
                <div className="text-sm font-medium">Export Session</div>
                <div className="text-xs text-gray-500">Save your work as a file</div>
              </div>
            </button>

            {/* Import Session */}
            <button
              onClick={handleImportState}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-700"
            >
              <span className="text-lg">📥</span>
              <div>
                <div className="text-sm font-medium">Import Session</div>
                <div className="text-xs text-gray-500">Load saved work from file</div>
              </div>
            </button>

            {/* Export Image - Future Feature */}
            <button
              onClick={handleExportImage}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors text-gray-400"
              disabled
            >
              <span className="text-lg">🖼️</span>
              <div>
                <div className="text-sm font-medium">Export Image</div>
                <div className="text-xs text-gray-400">Save as PNG (coming soon)</div>
              </div>
            </button>

            <div className="border-t border-gray-100 my-2"></div>

            {/* Storage Info */}
            {storageInfo && (
              <div className="px-3 py-2">
                <div className="text-xs font-medium text-gray-700 mb-2">Storage Status</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Session size:</span>
                    <span>{formatBytes(storageInfo.stateSize)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total used:</span>
                    <span>{formatBytes(storageInfo.usedSpace)}</span>
                  </div>
                  {storageInfo.lastSaved && (
                    <div className="flex justify-between">
                      <span>Last saved:</span>
                      <span>{formatDate(storageInfo.lastSaved)}</span>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                  <span>●</span>
                  <span>Auto-save enabled</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Works offline • Auto-saves your progress
            </p>
          </div>
        </div>
      )}
    </>
  );
}