module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "ka"],
    localeDetection: false,
  },
  ns: ["common", "sale", "rock-climbing", "service"],
  defaultNS: "common",
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
