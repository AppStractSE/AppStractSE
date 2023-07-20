import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { enTranslations } from '../locales/en';
import { svTranslations } from '../locales/sv';

interface LanguageContext {
  language: 'sv' | 'en';
  translations: Record<string, any>;
  toggleLanguage: () => void;
  setLanguage: (language: 'sv' | 'en') => void;
  hasUserSelectedLanguage: boolean;
}

const LanguageContext = createContext<LanguageContext>({
  language: 'sv',
  translations: svTranslations,
  toggleLanguage: () => console.warn('No language provider'),
  setLanguage: () => console.warn('No language provider'),
  hasUserSelectedLanguage: false,
});

interface Props {
  children: ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<'sv' | 'en'>('language', 'sv');
  const [hasUserSelectedLanguage, setHasUserSelectedLanguage] = useLocalStorage<boolean>(
    'hasUserSelectedLanguage',
    false,
  );

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'sv' ? 'en' : 'sv');
    setHasUserSelectedLanguage(true);
  };

  const setLanguage = (language: 'sv' | 'en') => {
    setCurrentLanguage(language);
  };

  const translations = currentLanguage === 'en' ? enTranslations : svTranslations;

  useEffect(() => {
    const userLanguages = navigator.languages || [navigator.language];
    const preferredLanguage = userLanguages.find((lang) => lang === 'sv' || lang === 'sv-SE');

    if (!preferredLanguage && !hasUserSelectedLanguage) {
      setCurrentLanguage('en');
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        translations,
        toggleLanguage,
        setLanguage,
        hasUserSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
