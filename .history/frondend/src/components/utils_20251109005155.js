// scripts/convert-css-modules.js
const fs = require("fs");
const path = require("path");

const pageDir = path.join(__dirname, "../src/pages/rules-page");
const jsFile = path.join(pageDir, "rules-page.js");
const cssFile = path.join(pageDir, "rules-page.css");
const cssModuleFile = path.join(pageDir, "rules-page.module.css");

// 1. Переименовываем CSS в CSS Module
if (fs.existsSync(cssFile)) {
  fs.renameSync(cssFile, cssModuleFile);
  console.log("CSS файл переименован в CSS Module.");
} else {
  console.log("CSS файл не найден.");
}

// 2. Меняем импорт в JS-файле
if (fs.existsSync(jsFile)) {
  let content = fs.readFileSync(jsFile, "utf-8");

  // Заменяем обычный импорт на модульный
  content = content.replace(
    /import\s+['"]\.\/rules-page\.css['"];?/,
    `import styles from './rules-page.module.css';`
  );

  fs.writeFileSync(jsFile, content, "utf-8");
  console.log("JS файл обновлён для использования CSS Module.");
} else {
  console.log("JS файл не найден.");
}
