import i18n from "i18next";
import { initReactI18next } from "next-i18next";
import commonRu from "../public/locales/ru/common.json";
import commonEn from "../public/locales/en/common.json";
import commonKa from "../public/locales/ka/common.json";
import rentRu from "../public/locales/ru/rent.json";
import rentEn from "../public/locales/en/rent.json";
import rentKa from "../public/locales/ka/rent.json";
import headerRu from "../public/locales/ru/header.json";
import headerEn from "../public/locales/en/header.json";
import headerKa from "../public/locales/ka/header.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      common: commonRu,
      rent: rentRu,
      header: headerRu,
    },
    en: {
      common: commonEn,
      rent: rentEn,
      header: headerEn,
    },
    ka: {
      common: commonKa,
      rent: rentKa,
      header: headerKa,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  debug: true,
  ns: ["common", "rent", "sale", "header"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
