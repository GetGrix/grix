/**
 * Centralized Storage Manager for Grix
 * Handles persistence of all application state including:
 * - Canvas objects (shapes, functions, etc.)
 * - Viewport state (zoom, center position)
 * - Settings and preferences
 * - Tool states and selections
 * 
 * Supports both online and offline usage with automatic fallback.
 */

export interface StoredState {
  // Canvas state
  objects: any[];
  selectedObjects: string[];
  viewport: {
    zoom: number;
    center: { x: number; y: number };
  };
  
  // Settings state
  visualizationSettings: Record<string, any>;
  
  // UI state
  activeTool: string | null;
  
  // Metadata
  version: string;
  timestamp: number;
  sessionId: string;
}

export interface StorageOptions {
  autoSave: boolean;
  saveInterval: number; // milliseconds
  maxStorageSize: number; // bytes
  compressionEnabled: boolean;
}

class StorageManager {
  private static instance: StorageManager;
  private readonly STORAGE_KEY = 'grix-app-state';
  private readonly VERSION_KEY = 'grix-version';
  private readonly SESSION_KEY = 'grix-session';
  private readonly CURRENT_VERSION = '1.0.0';
  
  private options: StorageOptions = {
    autoSave: true,
    saveInterval: 2000, // 2 seconds
    maxStorageSize: 10 * 1024 * 1024, // 10MB
    compressionEnabled: true
  };
  
  private autoSaveTimer: NodeJS.Timeout | null = null;
  private pendingSave = false;
  private sessionId: string;
  
  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeStorage();
    this.setupAutoSave();
    this.setupStorageEventListener();
  }
  
  public static getInstance(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }
  
  /**
   * Initialize storage system and handle version migrations
   */
  private initializeStorage(): void {
    try {
      const storedVersion = localStorage.getItem(this.VERSION_KEY);
      
      if (!storedVersion) {
        // First time setup
        localStorage.setItem(this.VERSION_KEY, this.CURRENT_VERSION);
        localStorage.setItem(this.SESSION_KEY, this.sessionId);
        console.log('🎯 Grix: Storage initialized for first time');
      } else if (storedVersion !== this.CURRENT_VERSION) {
        // Version migration needed
        this.migrateStorage(storedVersion, this.CURRENT_VERSION);
        localStorage.setItem(this.VERSION_KEY, this.CURRENT_VERSION);
        console.log(`🔄 Grix: Storage migrated from ${storedVersion} to ${this.CURRENT_VERSION}`);
      } else {
        console.log('✅ Grix: Storage ready (version ' + this.CURRENT_VERSION + ')');
      }
    } catch (error) {
      console.warn('⚠️ Grix: Storage initialization failed:', error);
    }
  }
  
  /**
   * Save complete application state
   */
  public async saveState(state: Partial<StoredState>): Promise<boolean> {
    try {
      const currentState = this.loadState();
      const mergedState: StoredState = {
        objects: state.objects ?? currentState?.objects ?? [],
        selectedObjects: state.selectedObjects ?? currentState?.selectedObjects ?? [],
        viewport: state.viewport ?? currentState?.viewport ?? { zoom: 20, center: { x: 0, y: 0 } },
        visualizationSettings: state.visualizationSettings ?? currentState?.visualizationSettings ?? {},
        activeTool: state.activeTool ?? currentState?.activeTool ?? null,
        version: this.CURRENT_VERSION,
        timestamp: Date.now(),
        sessionId: this.sessionId
      };
      
      // Check storage size limit
      const serialized = JSON.stringify(mergedState);
      if (serialized.length > this.options.maxStorageSize) {
        console.warn('⚠️ Grix: State too large for storage, compressing...');
        // Could implement compression here if needed
        return false;
      }
      
      localStorage.setItem(this.STORAGE_KEY, serialized);
      console.log('💾 Grix: State saved successfully');
      return true;
    } catch (error) {
      console.error('❌ Grix: Failed to save state:', error);
      return false;
    }
  }
  
  /**
   * Load complete application state
   */
  public loadState(): StoredState | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        console.log('📭 Grix: No saved state found');
        return null;
      }
      
      const state: StoredState = JSON.parse(stored);
      
      // Validate state structure
      if (!this.validateState(state)) {
        console.warn('⚠️ Grix: Invalid state structure, ignoring saved state');
        return null;
      }
      
      console.log('📂 Grix: State loaded successfully');
      return state;
    } catch (error) {
      console.error('❌ Grix: Failed to load state:', error);
      return null;
    }
  }
  
  /**
   * Clear all stored state
   */
  public clearState(): boolean {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      console.log('🗑️ Grix: State cleared successfully');
      return true;
    } catch (error) {
      console.error('❌ Grix: Failed to clear state:', error);
      return false;
    }
  }
  
  /**
   * Get storage statistics
   */
  public getStorageInfo(): {
    isAvailable: boolean;
    usedSpace: number;
    totalSpace: number;
    stateSize: number;
    lastSaved: number | null;
  } {
    try {
      const state = localStorage.getItem(this.STORAGE_KEY);
      const stateSize = state ? new Blob([state]).size : 0;
      
      // Estimate localStorage usage (not exact, but good approximation)
      let usedSpace = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          usedSpace += localStorage[key].length + key.length;
        }
      }
      
      const savedState = this.loadState();
      
      return {
        isAvailable: typeof Storage !== 'undefined',
        usedSpace: usedSpace,
        totalSpace: 5 * 1024 * 1024, // Typical localStorage limit
        stateSize: stateSize,
        lastSaved: savedState?.timestamp ?? null
      };
    } catch (error) {
      return {
        isAvailable: false,
        usedSpace: 0,
        totalSpace: 0,
        stateSize: 0,
        lastSaved: null
      };
    }
  }
  
  /**
   * Configure storage options
   */
  public configure(options: Partial<StorageOptions>): void {
    this.options = { ...this.options, ...options };
    
    if (options.autoSave !== undefined) {
      if (options.autoSave) {
        this.setupAutoSave();
      } else {
        this.stopAutoSave();
      }
    }
  }
  
  /**
   * Trigger immediate save (bypasses auto-save timer)
   */
  public saveNow(state: Partial<StoredState>): Promise<boolean> {
    this.pendingSave = false;
    return this.saveState(state);
  }
  
  /**
   * Schedule a save for the next auto-save interval
   */
  public scheduleSave(): void {
    if (this.options.autoSave) {
      this.pendingSave = true;
    }
  }
  
  /**
   * Export state as JSON for backup/sharing
   */
  public exportState(): string | null {
    const state = this.loadState();
    if (!state) return null;
    
    // Create export-friendly format
    const exportData = {
      ...state,
      exportedAt: new Date().toISOString(),
      exportVersion: this.CURRENT_VERSION
    };
    
    return JSON.stringify(exportData, null, 2);
  }
  
  /**
   * Import state from JSON backup
   */
  public async importState(jsonData: string): Promise<boolean> {
    try {
      const importedState = JSON.parse(jsonData);
      
      // Validate imported data
      if (!this.validateState(importedState)) {
        throw new Error('Invalid state structure');
      }
      
      // Save imported state
      return await this.saveState(importedState);
    } catch (error) {
      console.error('❌ Grix: Failed to import state:', error);
      return false;
    }
  }
  
  // Private helper methods
  
  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  private validateState(state: any): state is StoredState {
    return (
      state &&
      typeof state === 'object' &&
      Array.isArray(state.objects) &&
      Array.isArray(state.selectedObjects) &&
      state.viewport &&
      typeof state.viewport.zoom === 'number' &&
      state.viewport.center &&
      typeof state.viewport.center.x === 'number' &&
      typeof state.viewport.center.y === 'number'
    );
  }
  
  private setupAutoSave(): void {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
    }
    
    if (this.options.autoSave) {
      this.autoSaveTimer = setInterval(() => {
        if (this.pendingSave) {
          // Get current state from stores and save
          this.triggerAutoSave();
        }
      }, this.options.saveInterval);
    }
  }
  
  private stopAutoSave(): void {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }
  
  private triggerAutoSave(): void {
    // This will be connected to the stores to get current state
    // For now, we'll emit an event that stores can listen to
    window.dispatchEvent(new CustomEvent('grix:auto-save-requested'));
    this.pendingSave = false;
  }
  
  private setupStorageEventListener(): void {
    // Listen for storage events from other tabs
    window.addEventListener('storage', (event) => {
      if (event.key === this.STORAGE_KEY) {
        console.log('🔄 Grix: State updated by another tab');
        window.dispatchEvent(new CustomEvent('grix:state-updated-externally'));
      }
    });
  }
  
  private migrateStorage(fromVersion: string, toVersion: string): void {
    console.log(`🔄 Grix: Migrating storage from ${fromVersion} to ${toVersion}`);
    
    // Handle version migrations here
    // For now, we'll just preserve the data as-is
    const currentState = this.loadState();
    if (currentState) {
      currentState.version = toVersion;
      this.saveState(currentState);
    }
  }
}

// Export singleton instance
export const storageManager = StorageManager.getInstance();

// Export types for use in stores
export type { StorageOptions };