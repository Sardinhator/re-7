import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations using http
  .use(LanguageDetector) // Detect the user’s language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    lng: 'fr', // Default language
    fallbackLng: 'fr', // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // Path to translation files
    }
  });

export default i18n;
