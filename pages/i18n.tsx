// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

export default i18n;
