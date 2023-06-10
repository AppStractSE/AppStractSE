import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { enTranslations } from "../locales/en";
import { svTranslations } from "../locales/sv";

interface LanguageContext {
  language: "sv" | "en";
  translations: Record<string, any>;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContext>({
  language: "sv",
  translations: svTranslations,
  toggleLanguage: () => console.warn("No language provider"),
});

interface Props {
  children: ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<"sv" | "en">("language", "sv");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "sv" ? "en" : "sv");
  };

  const translations = currentLanguage === "en" ? enTranslations : svTranslations;

  useEffect(() => {
    const userLanguage = navigator.languages;
    if (!userLanguage.includes("sv")) {
      setCurrentLanguage("en");
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
