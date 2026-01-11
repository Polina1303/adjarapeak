// /** @type {import('next-i18next').UserConfig} */
// module.exports = {
//   i18n: {
//     defaultLocale: "ru",
//     locales: ["ru", "en"],
//   },
//   localePath:
//     typeof window === "undefined"
//       ? require("path").resolve("./public/locales")
//       : "/public/locales",
// };

// next-i18next.config.js
// const path = require("path");

// module.exports = {
//   i18n: {
//     defaultLocale: "ru",
//     locales: ["ru", "en", "ka"],
//     localeDetection: false, // если у вас есть своя логика определения языка
//   },
//   localePath: path.resolve("./public/locales"), // путь к файлам перевода
//   reloadOnPrerender: process.env.NODE_ENV === "development",
//   // дополнительные настройки
//   debug: process.env.NODE_ENV === "development",
//   ns: ["common", "rent", "sale", "header"],
//   defaultNS: "common",
//   fallbackLng: "ru",
//   returnEmptyString: true,
//   interpolation: {
//     escapeValue: false,
//   },
// };

// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "ka"],
  },
  // Дополнительные настройки если нужно
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
