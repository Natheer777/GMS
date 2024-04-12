import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locale/en.json";
import translationAr from "./locale/ar.json";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "ar"],
    fallbackLng: "ar",
    debug: true,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    detection: {
      order: ["cookie", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

export default i18n;