import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Initialize i18n with backend, language detector, and react-i18next
i18n
    .use(Backend) // Load translations using HTTP
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        debug: true, // Enable debug mode
        fallbackLng: "en", // Fallback language
        returnObjects: true, // Return objects if the translation key is an object
    });

export default i18n;
