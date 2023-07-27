import { createContext, ReactNode, useContext } from 'react';
import useCookie from '../hooks/useCookie';
import { enTranslations } from '../locales/en';
import { svTranslations } from '../locales/sv';

interface LanguageContext {
  language: 'sv' | 'en';
  translations: Record<string, any>;
  toggleLanguage: () => void;
  setLanguage: (language: 'sv' | 'en') => void;
}

const LanguageContext = createContext<LanguageContext>({
  language: 'sv',
  translations: svTranslations,
  toggleLanguage: () => console.warn('No language provider'),
  setLanguage: () => console.warn('No language provider'),
});

interface Props {
  children: ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useCookie<'sv' | 'en'>('selectedLanguage', 'sv');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'sv' ? 'en' : 'sv');
  };

  const setLanguage = (language: 'sv' | 'en') => {
    setCurrentLanguage(language);
  };

  const translations = currentLanguage === 'en' ? enTranslations : svTranslations;

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        translations,
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
