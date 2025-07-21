import { Translation, defaultLanguage, languages, translationKeys } from './translations.js';

export class TranslationManager {
  private currentLanguage: string = defaultLanguage;
  private translations: Map<string, Translation> = new Map();
  private fallbackTranslations: Translation = translationKeys;
  private isInitialized: boolean = false;
  
  constructor() {
    // Initialize asynchronously 
    this.initialize();
  }

  private async initialize() {
    try {
      // Load default language first
      await this.loadLanguage(defaultLanguage);
      
      // Try to load user's preferred language from storage
      const savedLanguage = localStorage.getItem('grix-language');
      if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
        await this.setLanguage(savedLanguage);
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (languages.some(lang => lang.code === browserLang)) {
          await this.setLanguage(browserLang);
        }
      }
      
      this.isInitialized = true;
      
      // Notify components that translations are ready
      window.dispatchEvent(new CustomEvent('translationsReady'));
    } catch (error) {
      console.error('Failed to initialize translations:', error);
      this.isInitialized = true; // Still set to true to prevent hanging
      window.dispatchEvent(new CustomEvent('translationsReady'));
    }
  }

  async loadLanguage(languageCode: string): Promise<boolean> {
    try {
      // Check if already loaded
      if (this.translations.has(languageCode)) {
        return true;
      }

      // Dynamic import of language file
      const response = await fetch(`/locales/${languageCode}.json`);
      if (!response.ok) {
        console.warn(`Translation file for ${languageCode} not found`);
        return false;
      }

      const translations = await response.json();
      this.translations.set(languageCode, translations);
      return true;
    } catch (error) {
      console.error(`Failed to load language ${languageCode}:`, error);
      return false;
    }
  }

  async setLanguage(languageCode: string): Promise<boolean> {
    const loaded = await this.loadLanguage(languageCode);
    if (loaded) {
      this.currentLanguage = languageCode;
      localStorage.setItem('grix-language', languageCode);
      
      // Update document direction for RTL languages
      const language = languages.find(lang => lang.code === languageCode);
      if (language) {
        document.documentElement.dir = language.direction;
      }
      
      // Dispatch event for components to re-render
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: languageCode } 
      }));
      
      return true;
    }
    return false;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  getAvailableLanguages() {
    return languages;
  }

  translate(key: string, params?: Record<string, string | number>): string {
    // Get translation from current language
    const currentTranslations = this.translations.get(this.currentLanguage);
    let translation = currentTranslations?.[key];
    
    // Fallback to English if not found
    if (!translation) {
      translation = this.fallbackTranslations[key];
    }
    
    // If still not found, show the key with a warning
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation!.replace(`{${param}}`, String(value));
      });
    }
    
    return translation;
  }

  // Shorthand method
  t(key: string, params?: Record<string, string | number>): string {
    return this.translate(key, params);
  }

  // Check if a translation exists
  hasTranslation(key: string): boolean {
    const currentTranslations = this.translations.get(this.currentLanguage);
    return !!(currentTranslations?.[key] || this.fallbackTranslations[key]);
  }

  // Get all translations for current language (useful for debugging)
  getAllTranslations(): Translation {
    return this.translations.get(this.currentLanguage) || this.fallbackTranslations;
  }
}

// Singleton instance
export const translationManager = new TranslationManager();