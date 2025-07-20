import React, { useState, useEffect } from 'react';
import { examplesManager } from '../utils/examplesManager.js';

const TUTORIAL_STORAGE_KEY = 'grix-tutorial-completed';

export function TutorialOverlay() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has seen the tutorial before
    const hasSeenTutorial = localStorage.getItem(TUTORIAL_STORAGE_KEY);
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

  const tutorialSteps = [
    {
      title: "Welcome to Grix! 🎯",
      content: "Grix is a mathematical visualization platform where you can explore concepts like slopes, fractions, multiplication, and more through interactive graphics.",
      highlight: null
    },
    {
      title: "Explore Examples 📚",
      content: "Click the 'Examples' button in the toolbar to load pre-made mathematical demonstrations. Perfect for getting started!",
      highlight: "examples"
    },
    {
      title: "Customize Visualizations ⚙️",
      content: "Use the 'Settings' button in the bottom-left to enable different mathematical features like equivalent fractions, area calculations, and more.",
      highlight: "settings"
    },
    {
      title: "Interactive Tools 🛠️",
      content: "Use the toolbar to draw lines and rectangles. Zoom with Ctrl+scroll wheel, and pan by scrolling. On mobile, use pinch gestures.",
      highlight: "toolbar"
    }
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
    setShowTutorial(false);
  };

  const handleTryExample = async () => {
    try {
      setIsLoading(true);
      // Load a beginner-friendly example
      const beginnerExamples = await examplesManager.getBeginnerExamples();
      if (beginnerExamples.length > 0) {
        await examplesManager.applyExample(beginnerExamples[0].id);
      }
      handleComplete();
    } catch (error) {
      console.error('Failed to load example:', error);
      handleComplete();
    } finally {
      setIsLoading(false);
    }
  };

  if (!showTutorial) return null;

  const currentStepData = tutorialSteps[currentStep];
  const isLastStep = currentStep === tutorialSteps.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-2xl max-w-md mx-4 p-6 relative">
        {/* Progress indicator */}
        <div className="flex gap-2 mb-4">
          {tutorialSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Step content */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {currentStepData.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {currentStepData.content}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSkip}
            className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            disabled={isLoading}
          >
            Skip Tutorial
          </button>
          
          {isLastStep ? (
            <button
              onClick={handleTryExample}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Try an Example!'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Next
            </button>
          )}
        </div>

        {/* Step counter */}
        <div className="text-center mt-4 text-sm text-gray-500">
          Step {currentStep + 1} of {tutorialSteps.length}
        </div>

        {/* Close button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          title="Close tutorial"
        >
          ×
        </button>
      </div>

      {/* Highlight overlays */}
      {currentStepData.highlight && (
        <>
          {currentStepData.highlight === 'examples' && (
            <div className="fixed top-0 right-0 z-[10000] pointer-events-none">
              <div className="absolute top-2 right-2 w-32 h-12 border-4 border-yellow-400 rounded-lg animate-pulse"></div>
            </div>
          )}
          {currentStepData.highlight === 'settings' && (
            <div className="fixed bottom-4 left-4 z-[10000] pointer-events-none">
              <div className="w-12 h-12 border-4 border-yellow-400 rounded-full animate-pulse"></div>
            </div>
          )}
          {currentStepData.highlight === 'toolbar' && (
            <div className="fixed top-0 left-0 z-[10000] pointer-events-none">
              <div className="absolute top-2 left-32 w-24 h-12 border-4 border-yellow-400 rounded-lg animate-pulse"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Hook to manually trigger tutorial (for testing or reset)
export const useTutorial = () => {
  const resetTutorial = () => {
    localStorage.removeItem(TUTORIAL_STORAGE_KEY);
  };

  const hasSeenTutorial = () => {
    return !!localStorage.getItem(TUTORIAL_STORAGE_KEY);
  };

  return {
    resetTutorial,
    hasSeenTutorial
  };
};