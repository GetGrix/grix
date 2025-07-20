import { useEffect, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore.js';
import { useVisualizationStore } from '../store/visualizationStore.js';
import { storageManager } from '../utils/storageManager.js';

interface PWAManagerProps {
  children: React.ReactNode;
}

export function PWAManager({ children }: PWAManagerProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  
  const { loadState: loadCanvasState, saveState: saveCanvasState } = useCanvasStore();
  const visualizationStore = useVisualizationStore();

  // Register service worker for PWA functionality
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
    
    // Load saved state on app initialization
    loadSavedState();
    
    // Set up auto-save listener
    setupAutoSaveListener();
    
    // Set up online/offline detection
    setupOnlineDetection();
    
    // Set up PWA installation prompt
    setupInstallPrompt();
    
    setIsInitialized(true);
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('🎯 Grix PWA: Service Worker registered successfully:', registration.scope);
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              console.log('🔄 Grix PWA: New version available');
              showUpdateNotification();
            }
          });
        }
      });
      
    } catch (error) {
      console.error('❌ Grix PWA: Service Worker registration failed:', error);
    }
  };

  const loadSavedState = () => {
    try {
      const savedState = storageManager.loadState();
      if (savedState) {
        // Load canvas state
        if (savedState.objects || savedState.viewport) {
          loadCanvasState();
        }
        
        // Load visualization settings
        if (savedState.visualizationSettings) {
          Object.entries(savedState.visualizationSettings).forEach(([key, value]) => {
            if (key in visualizationStore && typeof visualizationStore[key as keyof typeof visualizationStore] === typeof value) {
              // Use a direct set to avoid triggering auto-save during load
              visualizationStore[key as keyof typeof visualizationStore] = value as any;
            }
          });
        }
        
        console.log('📂 Grix PWA: Restored saved state from previous session');
      }
    } catch (error) {
      console.error('❌ Grix PWA: Failed to load saved state:', error);
    }
  };

  const setupAutoSaveListener = () => {
    // Listen for auto-save requests from storage manager
    window.addEventListener('grix:auto-save-requested', () => {
      const canvasState = useCanvasStore.getState();
      const visualizationState = useVisualizationStore.getState();
      
      storageManager.saveState({
        objects: canvasState.objects,
        selectedObjects: canvasState.selectedObjects,
        viewport: canvasState.viewport,
        visualizationSettings: {
          showEquivalentFractions: visualizationState.showEquivalentFractions,
          showLengthMultiples: visualizationState.showLengthMultiples,
          showAreaRectangle: visualizationState.showAreaRectangle,
          showDivisionMultiples: visualizationState.showDivisionMultiples,
          showRiseRunTriangle: visualizationState.showRiseRunTriangle,
          showDistanceMarkers: visualizationState.showDistanceMarkers,
          showAngleArc: visualizationState.showAngleArc,
          showCoordinateProjections: visualizationState.showCoordinateProjections,
          showDivisionAnswer: visualizationState.showDivisionAnswer,
          showLatticePoints: visualizationState.showLatticePoints,
          showReferenceLineY_equals_X: visualizationState.showReferenceLineY_equals_X,
          showTangentLines: visualizationState.showTangentLines,
          showFunctionExtensions: visualizationState.showFunctionExtensions,
          showTriangleAngles: visualizationState.showTriangleAngles,
          showTriangleClassification: visualizationState.showTriangleClassification,
          showSpecialTriangles: visualizationState.showSpecialTriangles,
          showSOHCAHTOA: visualizationState.showSOHCAHTOA,
          showTrigValues: visualizationState.showTrigValues,
          showTriangleAltitudes: visualizationState.showTriangleAltitudes,
          showPythagoreanSquares: visualizationState.showPythagoreanSquares,
          fontScale: visualizationState.fontScale,
          gridScale: visualizationState.gridScale,
          snapPrecision: visualizationState.snapPrecision,
          coordinateSystem: visualizationState.coordinateSystem
        }
      });
    });
  };

  const setupOnlineDetection = () => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('🌐 Grix PWA: Back online');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log('📱 Grix PWA: Now offline');
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  };

  const setupInstallPrompt = () => {
    const handleBeforeInstallPrompt = (event: any) => {
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      // Save the event for later use
      setInstallPrompt(event);
      console.log('📱 Grix PWA: Install prompt available');
    };
    
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  };

  const showUpdateNotification = () => {
    // Could show a toast notification here
    console.log('🔄 Grix PWA: New version available - refresh to update');
  };

  const handleInstallApp = async () => {
    if (!installPrompt) return;
    
    try {
      const result = await installPrompt.prompt();
      console.log('📱 Grix PWA: Install prompt result:', result.outcome);
      setInstallPrompt(null);
    } catch (error) {
      console.error('❌ Grix PWA: Install failed:', error);
    }
  };

  // Show loading screen until PWA is initialized
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Loading Grix</h2>
          <p className="text-sm text-gray-600">Preparing your mathematical playground...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {children}
      
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50">
          <span className="text-sm font-medium">
            📱 You're offline - Grix continues to work with saved data
          </span>
        </div>
      )}
      
      {/* Install prompt (for PWA) */}
      {installPrompt && (
        <div className="fixed bottom-20 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-40 max-w-sm">
          <h3 className="font-semibold mb-2">Install Grix App</h3>
          <p className="text-sm mb-3">
            Add Grix to your home screen for quick access and offline use.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setInstallPrompt(null)}
              className="px-3 py-1 text-sm bg-blue-500 rounded hover:bg-blue-400"
            >
              Later
            </button>
            <button
              onClick={handleInstallApp}
              className="px-3 py-1 text-sm bg-white text-blue-600 rounded hover:bg-gray-100"
            >
              Install
            </button>
          </div>
        </div>
      )}
    </div>
  );
}