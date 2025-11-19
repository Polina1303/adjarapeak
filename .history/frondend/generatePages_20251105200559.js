import fs from "fs";
import path from "path";

const componentsDir = path.join("src", "components");

function processDir(dir) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (stat.isFile() && item.endsWith(".css")) {
      const moduleName = item.replace(".css", ".module.css");
      const newPath = path.join(dir, moduleName);

      fs.renameSync(fullPath, newPath);
      console.log(`✅ Renamed: ${fullPath} → ${newPath}`);

      // ищем соответствующий JS/TS файл и исправляем импорт
      const jsFiles = items.filter(
        (f) =>
          f.endsWith(".js") ||
          f.endsWith(".jsx") ||
          f.endsWith(".ts") ||
          f.endsWith(".tsx")
      );
      jsFiles.forEach((jsFile) => {
        const jsPath = path.join(dir, jsFile);
        let content = fs.readFileSync(jsPath, "utf-8");
        const regex = new RegExp(`import\\s+(['"])?\\.\\/${item}\\1`);
        if (regex.test(content)) {
          content = content.replace(
            regex,
            `import styles from './${moduleName}'`
          );
          fs.writeFileSync(jsPath, content);
          console.log(`   🔧 Updated import in ${jsFile}`);
        }
      });
    }
  });
}

processDir(componentsDir);
console.log("✅ CSS Modules conversion done.");
