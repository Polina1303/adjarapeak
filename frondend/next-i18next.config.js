const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "ka"],
  },
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",

  defaultNS: "common",
  ns: ["common"],
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
};
