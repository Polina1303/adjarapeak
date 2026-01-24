import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const loadResources = (lng) => {
  switch (lng) {
    case "en":
      return {
        common: require("../public/locales/en/common.json"),
        rent: require("../public/locales/en/rent.json"),
        sale: require("../public/locales/en/sale.json"),
        header: require("../public/locales/en/header.json"),
        "rock-climbing": require("../public/locales/en/rock-climbing.json"),
        service: require("../public/locales/en/service.json"),
      };
    case "ka":
      return {
        common: require("../public/locales/ka/common.json"),
        rent: require("../public/locales/ka/rent.json"),
        sale: require("../public/locales/ka/sale.json"),
        header: require("../public/locales/ka/header.json"),
        "rock-climbing": require("../public/locales/ka/rock-climbing.json"),
        service: require("../public/locales/ka/service.json"),
      };
    default:
      return {
        common: require("../public/locales/ru/common.json"),
        rent: require("../public/locales/ru/rent.json"),
        sale: require("../public/locales/ru/sale.json"),
        header: require("../public/locales/ru/header.json"),
        "rock-climbing": require("../public/locales/ru/rock-climbing.json"),
        service: require("../public/locales/ru/service.json"),
      };
  }
};

const resources = {
  ru: loadResources("ru"),
  en: loadResources("en"),
  ka: loadResources("ka"),
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    defaultNS: "common",
    ns: ["common", "rent", "sale", "header", "rock-climbing", "service"],

    react: {
      useSuspense: false,
    },

    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },

    parseMissingKeyHandler: (key) => {
      console.warn(`Missing translation: ${key}`);
      return key;
    },
  });

export default i18n;
