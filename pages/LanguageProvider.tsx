"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

const defaultLanguageValue = {
  isEnglish: true,
  toggleLanguage: () => {},
};

interface LanguageContextType {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>(defaultLanguageValue);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const value = {
    isEnglish,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
