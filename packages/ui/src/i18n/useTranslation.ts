import { useState, useEffect, useCallback } from 'react';
import { translationManager } from './translationManager.js';
import type { LanguageInfo } from './translations.js';

export function useTranslation() {
  const [language, setLanguage] = useState(translationManager.getCurrentLanguage());
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
      forceUpdate({}); // Force re-render
    };

    window.addEventListener('languageChanged' as any, handleLanguageChange);
    return () => {
      window.removeEventListener('languageChanged' as any, handleLanguageChange);
    };
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>) => {
    return translationManager.t(key, params);
  }, [language]); // Re-create when language changes

  const changeLanguage = useCallback(async (languageCode: string) => {
    const success = await translationManager.setLanguage(languageCode);
    return success;
  }, []);

  const getAvailableLanguages = useCallback((): LanguageInfo[] => {
    return translationManager.getAvailableLanguages();
  }, []);

  return {
    t,
    language,
    changeLanguage,
    availableLanguages: getAvailableLanguages()
  };
}