// import i18n from "i18next";
// import { initReactI18next } from "next-i18next";
// import commonRu from "../public/locales/ru/common.json";
// import commonEn from "../public/locales/en/common.json";
// import commonKa from "../public/locales/ka/common.json";
// import rentRu from "../public/locales/ru/rent.json";
// import rentEn from "../public/locales/en/rent.json";
// import rentKa from "../public/locales/ka/rent.json";
// import headerRu from "../public/locales/ru/header.json";
// import headerEn from "../public/locales/en/header.json";
// import headerKa from "../public/locales/ka/header.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     ru: {
//       common: commonRu,
//       rent: rentRu,
//       header: headerRu,
//     },
//     en: {
//       common: commonEn,
//       rent: rentEn,
//       header: headerEn,
//     },
//     ka: {
//       common: commonKa,
//       rent: rentKa,
//       header: headerKa,
//     },
//   },
//   lng: "ru",
//   fallbackLng: "ru",
//   debug: true,
//   ns: ["common", "rent", "sale", "header"],
//   defaultNS: "common",
//   interpolation: { escapeValue: false },
//   react: { useSuspense: false },
// });

// export default i18n;

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
      };
    case "ka":
      return {
        common: require("../public/locales/ka/common.json"),
        rent: require("../public/locales/ka/rent.json"),
        sale: require("../public/locales/ka/sale.json"),
        header: require("../public/locales/ka/header.json"),
      };
    default:
      return {
        common: require("../public/locales/ru/common.json"),
        rent: require("../public/locales/ru/rent.json"),
        sale: require("../public/locales/ru/sale.json"),
        header: require("../public/locales/ru/header.json"),
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
    ns: ["common", "rent", "sale", "header"],

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
