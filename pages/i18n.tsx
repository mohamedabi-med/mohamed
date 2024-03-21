// pages/i18n.js

// Import React from 'react' if you're using JSX syntax
import React from 'react';

// Import i18n and necessary functions
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          switchToFrench: 'Switch to French',
          switchToEnglish: 'Switch to English',
          // Add other translations here
        },
      },
      fr: {
        translation: {
          switchToFrench: 'Passer en français',
          switchToEnglish: 'Switch to English',
          // Add other translations here
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Since this page is for initializing i18n, you can just export an empty React component
const I18nPage = () => {
  return null;
};

export default I18nPage;
