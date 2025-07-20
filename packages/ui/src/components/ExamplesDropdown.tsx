import React, { useState, useEffect, useRef } from 'react';
import { examplesManager, type Example, type ExampleCategory } from '../utils/examplesManager.js';

export function ExamplesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [examples, setExamples] = useState<Example[]>([]);
  const [categories, setCategories] = useState<ExampleCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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

  // Load examples and categories on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const [examplesData, categoriesData] = await Promise.all([
          examplesManager.getExamples(),
          examplesManager.getCategories()
        ]);
        
        setExamples(examplesData);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Failed to load examples:', err);
        setError('Failed to load examples');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleExampleSelect = async (example: Example) => {
    try {
      setIsLoading(true);
      setError(null);
      await examplesManager.applyExample(example.id);
      setIsOpen(false);
    } catch (err) {
      console.error('Failed to apply example:', err);
      setError(`Failed to load "${example.title}"`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearCanvas = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await examplesManager.clearCanvas();
      setIsOpen(false);
    } catch (err) {
      console.error('Failed to clear canvas:', err);
      setError('Failed to clear canvas');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredExamples = selectedCategory === 'all' 
    ? examples 
    : examples.filter(example => example.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '●';
      case 'intermediate': return '●●';
      case 'advanced': return '●●●';
      default: return '?';
    }
  };

  return (
    <div ref={dropdownRef} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        title="Mathematical Examples"
        disabled={isLoading}
      >
        <span className="text-lg">📚</span>
        <span className="text-sm font-medium text-gray-700">Examples</span>
        <span className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-[32rem] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">Mathematical Examples</h3>
              <button
                onClick={handleClearCanvas}
                className="text-xs text-red-600 hover:text-red-800 font-medium"
                disabled={isLoading}
              >
                Clear All
              </button>
            </div>
            
            {/* Category Filter */}
            <div className="mt-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded px-2 py-1 bg-white"
                disabled={isLoading}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="px-4 py-2 bg-red-50 border-b border-red-100">
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          {/* Examples List */}
          <div className="overflow-y-auto max-h-80">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-sm text-gray-500">Loading examples...</div>
              </div>
            ) : filteredExamples.length === 0 ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-sm text-gray-500">No examples available</div>
              </div>
            ) : (
              <div className="p-2 space-y-1">
                {filteredExamples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => handleExampleSelect(example)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    disabled={isLoading}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                            {example.title}
                          </h4>
                          <span 
                            className={`text-xs px-1.5 py-0.5 rounded font-medium ${getDifficultyColor(example.difficulty)}`}
                            title={`${example.difficulty} difficulty`}
                          >
                            {getDifficultyLabel(example.difficulty)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {example.description}
                        </p>
                        {categories.find(cat => cat.id === example.category) && (
                          <div className="flex items-center gap-1 mt-2">
                            <span className="text-xs text-gray-400">
                              {categories.find(cat => cat.id === example.category)?.name}
                            </span>
                            <span className="text-xs text-gray-300">•</span>
                            <span className="text-xs text-gray-400">
                              {example.objects.length} object{example.objects.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 px-4 py-2 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Click an example to explore mathematical concepts
            </p>
          </div>
        </div>
      )}
    </div>
  );
}