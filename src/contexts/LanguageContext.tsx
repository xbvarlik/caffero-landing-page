import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { tr } from '../translations/tr';

type Language = 'en' | 'tr';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  const [translations, setTranslations] = useState<Translations>(tr);

  useEffect(() => {
    // Get language from URL path
    const path = window.location.pathname;
    const lang = path.split('/')[1] as Language;
    if (lang === 'tr' || lang === 'en') {
      setLanguage(lang);
    } else {
      // Redirect to Turkish version if no language specified
      window.history.replaceState({}, '', '/tr' + path);
      setLanguage('tr');
    }
  }, []);

  useEffect(() => {
    setTranslations(language === 'en' ? en : tr);
    
    // Update URL when language changes
    const currentPath = window.location.pathname;
    const currentLang = currentPath.split('/')[1];
    if (currentLang !== language) {
      const newPath = currentPath.replace(/^\/(?:en|tr|)/, '/' + language);
      window.history.replaceState({}, '', newPath);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 