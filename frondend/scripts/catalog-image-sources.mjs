import { createHash } from "node:crypto";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { loadEnv } from "vite";

export async function catalogImageSources(root) {
  const env = { ...loadEnv("production", root, ""), ...process.env };
  const base = env.VITE_SUPABASE_URL || env.SUPABASE_URL;
  const key = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_PUBLISHABLE_KEY;
  if (!base || !key) return [];
  const urls = new Set();
  let refreshFailed = false;
  const add = (value) => {
    if (typeof value !== "string") return;
    try {
      const url = new URL(value);
      if (url.origin === new URL(base).origin && url.pathname.startsWith("/storage/v1/object/public/catalog-images/")) urls.add(url.href);
    } catch { /* Local filenames use the local image pipeline. */ }
  };
  await Promise.all([
    ["shop_products", "image,colors"], ["rental_items", "image"],
    ["shop_groups", "image"], ["rental_groups", "image"],
    ["shop_categories", "image"], ["rental_categories", "image"],
  ].map(async ([table, columns]) => {
    try {
      for (let offset = 0;; offset += 1000) {
        const url = new URL(`/rest/v1/${table}`, base);
        url.searchParams.set("select", columns);
        url.searchParams.set("order", "id");
        url.searchParams.set("offset", String(offset));
        url.searchParams.set("limit", "1000");
        const response = await fetch(url, { headers: { apikey: key, Authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(10_000) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const rows = await response.json();
        for (const row of rows) {
          add(row.image);
          if (Array.isArray(row.colors)) for (const color of row.colors) add(color?.image);
        }
        if (rows.length < 1000) break;
      }
    } catch {
      refreshFailed = true;
      console.warn(`Could not refresh ${table} images; original URLs remain available`);
    }
  }));
  if (refreshFailed) {
    const previous = JSON.parse(await readFile(join(root, "src/lib/image-variants.generated.json"), "utf8").catch(() => "{}"));
    for (const url of Object.keys(previous)) add(url);
  }
  const cache = join(root, ".cache/catalog-image-sources");
  await mkdir(cache, { recursive: true });
  return [...urls].map((url) => ({
    key: url,
    path: join(cache, createHash("sha256").update(url).digest("hex")),
    widths: [160, 480, 960],
    async readSource() {
      const cached = await stat(this.path).catch(() => null);
      if (cached && Date.now() - cached.mtimeMs < 86_400_000) return readFile(this.path);
      try {
        const response = await fetch(url, { signal: AbortSignal.timeout(15_000) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        if (Number(response.headers.get("content-length")) > 20_000_000) throw new Error("Image exceeds 20 MB");
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length > 20_000_000) throw new Error("Image exceeds 20 MB");
        await writeFile(`${this.path}.tmp`, bytes);
        await rename(`${this.path}.tmp`, this.path);
        return bytes;
      } catch (error) {
        if (cached) return readFile(this.path);
        throw error;
      }
    },
  }));
}
