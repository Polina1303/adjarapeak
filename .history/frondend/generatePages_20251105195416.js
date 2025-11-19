import fs from "fs";
import path from "path";

const srcDir = path.join("src", "pages"); // <-- от корня frondend
const destDir = path.join("pages"); // <-- от корня frondend

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true }); // добавили recursive

const dirs = fs.readdirSync(srcDir).filter((name) => name.endsWith("-page"));

for (const dir of dirs) {
  const pageName = dir.replace("-page", "").replace(/_/g, "-");
  const destFile = path.join(destDir, `${pageName}.js`);
  const importPath = `../src/pages/${dir}`;

  const content = `import { ${capitalize(pageName)}Page } from "${importPath}";
export default ${capitalize(pageName)}Page;
`;
  fs.writeFileSync(destFile, content);
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log("✅ Next.js pages created successfully.");
