import type { MathObject, Viewport } from '@getgrix/core';
import { useCanvasStore } from '../store/canvasStore.js';
import { useVisualizationStore } from '../store/visualizationStore.js';

export interface ExampleObject {
  type: 'ray' | 'rectangle';
  properties: any;
}

export interface ExampleSettings {
  [key: string]: boolean | number | string;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  objects: ExampleObject[];
  settings: ExampleSettings;
  viewport?: Partial<Viewport>;
}

export interface ExampleCategory {
  id: string;
  name: string;
  description: string;
}

export interface ExamplesData {
  examples: Example[];
  categories: ExampleCategory[];
}

class ExamplesManager {
  private static instance: ExamplesManager;
  private examplesData: ExamplesData | null = null;
  private isLoading = false;

  static getInstance(): ExamplesManager {
    if (!ExamplesManager.instance) {
      ExamplesManager.instance = new ExamplesManager();
    }
    return ExamplesManager.instance;
  }

  async loadExamples(): Promise<ExamplesData> {
    if (this.examplesData) {
      return this.examplesData;
    }

    if (this.isLoading) {
      // Wait for existing load to complete
      await new Promise(resolve => {
        const checkLoaded = () => {
          if (!this.isLoading) {
            resolve(undefined);
          } else {
            setTimeout(checkLoaded, 50);
          }
        };
        checkLoaded();
      });
      return this.examplesData!;
    }

    this.isLoading = true;

    try {
      const response = await fetch('/examples.json');
      if (!response.ok) {
        throw new Error(`Failed to load examples: ${response.status}`);
      }

      const data = await response.json();
      
      // Validate the data structure
      if (!data.examples || !Array.isArray(data.examples)) {
        throw new Error('Invalid examples data: missing examples array');
      }

      if (!data.categories || !Array.isArray(data.categories)) {
        throw new Error('Invalid examples data: missing categories array');
      }

      // Validate each example
      for (const example of data.examples) {
        if (!example.id || !example.title || !example.objects || !Array.isArray(example.objects)) {
          throw new Error(`Invalid example: ${example.id || 'unknown'}`);
        }
      }

      this.examplesData = data;
      return this.examplesData;
    } catch (error) {
      console.error('Failed to load examples:', error);
      // Return minimal fallback data
      this.examplesData = {
        examples: [],
        categories: []
      };
      return this.examplesData;
    } finally {
      this.isLoading = false;
    }
  }

  async getExamples(): Promise<Example[]> {
    const data = await this.loadExamples();
    return data.examples;
  }

  async getCategories(): Promise<ExampleCategory[]> {
    const data = await this.loadExamples();
    return data.categories;
  }

  async getExampleById(id: string): Promise<Example | null> {
    const examples = await this.getExamples();
    return examples.find(example => example.id === id) || null;
  }

  async getExamplesByCategory(categoryId: string): Promise<Example[]> {
    const examples = await this.getExamples();
    return examples.filter(example => example.category === categoryId);
  }

  private generateObjectId(): string {
    return `example_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private convertExampleObjectToMathObject(exampleObj: ExampleObject): MathObject {
    const baseObject = {
      id: this.generateObjectId(),
      type: exampleObj.type,
      visible: true,
      selected: false
    };

    switch (exampleObj.type) {
      case 'ray':
        return {
          ...baseObject,
          type: 'ray',
          properties: {
            startPoint: exampleObj.properties.startPoint,
            endPoint: exampleObj.properties.endPoint,
            slope: (exampleObj.properties.endPoint.y - exampleObj.properties.startPoint.y) / 
                   (exampleObj.properties.endPoint.x - exampleObj.properties.startPoint.x)
          }
        } as MathObject;

      case 'rectangle':
        return {
          ...baseObject,
          type: 'rectangle',
          properties: {
            x: exampleObj.properties.x,
            y: exampleObj.properties.y,
            width: exampleObj.properties.width,
            height: exampleObj.properties.height,
            area: exampleObj.properties.width * exampleObj.properties.height
          }
        } as MathObject;

      default:
        throw new Error(`Unknown object type: ${exampleObj.type}`);
    }
  }

  async applyExample(exampleId: string): Promise<void> {
    const example = await this.getExampleById(exampleId);
    if (!example) {
      throw new Error(`Example not found: ${exampleId}`);
    }

    // Get store instances
    const canvasStore = useCanvasStore.getState();
    const visualizationStore = useVisualizationStore.getState();

    try {
      // Clear current canvas
      const currentObjects = canvasStore.getAllObjects();
      currentObjects.forEach(obj => {
        canvasStore.removeObject(obj.id);
      });

      // Clear selection
      canvasStore.clearSelection();

      // Apply viewport settings first
      if (example.viewport) {
        canvasStore.setViewport(example.viewport);
      }

      // Apply visualization settings
      Object.entries(example.settings).forEach(([key, value]) => {
        if (key in visualizationStore && typeof value === 'boolean') {
          visualizationStore.toggleSetting(key as any);
          // Ensure the setting matches the desired state
          const currentValue = (visualizationStore as any)[key];
          if (currentValue !== value) {
            visualizationStore.toggleSetting(key as any);
          }
        } else if (key === 'snapPrecision' && typeof value === 'string') {
          visualizationStore.setSnapPrecision(value as any);
        } else if (key === 'coordinateSystem' && typeof value === 'string') {
          visualizationStore.setCoordinateSystem(value as any);
        } else if (key === 'fontScale' && typeof value === 'number') {
          visualizationStore.setFontScale(value);
        } else if (key === 'gridScale' && typeof value === 'number') {
          visualizationStore.setGridScale(value);
        }
      });

      // Add objects to canvas
      example.objects.forEach(exampleObj => {
        const mathObject = this.convertExampleObjectToMathObject(exampleObj);
        canvasStore.addObject(mathObject);
      });

      console.log(`Applied example: ${example.title}`);
    } catch (error) {
      console.error('Failed to apply example:', error);
      throw new Error(`Failed to apply example "${example.title}": ${error.message}`);
    }
  }

  async clearCanvas(): Promise<void> {
    const canvasStore = useCanvasStore.getState();
    const visualizationStore = useVisualizationStore.getState();

    // Clear all objects
    const currentObjects = canvasStore.getAllObjects();
    currentObjects.forEach(obj => {
      canvasStore.removeObject(obj.id);
    });

    // Clear selection
    canvasStore.clearSelection();

    // Reset viewport
    canvasStore.setViewport({ 
      zoom: 20, 
      center: { x: 0, y: 0 } 
    });

    // Reset visualization settings to defaults
    visualizationStore.resetToDefaults();

    console.log('Canvas cleared and reset to defaults');
  }

  // Get examples suitable for first-time users
  async getBeginnerExamples(): Promise<Example[]> {
    const examples = await this.getExamples();
    return examples.filter(example => example.difficulty === 'beginner');
  }

  // Get a random example from a specific category
  async getRandomExampleFromCategory(categoryId: string): Promise<Example | null> {
    const examples = await this.getExamplesByCategory(categoryId);
    if (examples.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * examples.length);
    return examples[randomIndex];
  }
}

// Export singleton instance
export const examplesManager = ExamplesManager.getInstance();