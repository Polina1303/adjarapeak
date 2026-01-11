const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "ka"],
    // returnNull: false,
  },
  localePath: path.resolve("./public/locales"),
};
