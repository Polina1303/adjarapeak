export function buildSitemap(
  paths: string[],
  origin = "https://www.adjarapeak.ge",
) {
  const escape = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  const unique = [...new Set(paths)].filter(
    (path) =>
      path.startsWith("/") &&
      !path.startsWith("//") &&
      !/^\/(admin|checkout|search)(\/|$)/.test(path) &&
      !path.startsWith("/sale/search"),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique.map((path) => `  <url><loc>${escape(origin + path)}</loc></url>`).join("\n")}\n</urlset>\n`;
}
