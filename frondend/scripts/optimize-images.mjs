import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { catalogImageSources } from "./catalog-image-sources.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "public/media/optimized");
const manifestPath = join(root, "src/lib/image-variants.generated.json");
const recipe = "webp-q78-v1";
const heroNames = ["hero-camping.jpg", "banner-bike.jpg", "climbing-promo.jpeg", "nikita-bike-service-1.jpg", "hero-hikes.jpg"];
const files = (await readdir(join(root, "public/img")))
  .filter((name) => /\.(png|jpe?g|webp|avif)$/i.test(name))
  .map((name) => ({ key: name, path: join(root, "public/img", name), widths: [160, 480, 960] }));
files.push(...heroNames.map((name) => ({ key: `hero/${name}`, path: join(root, "src/assets", name), widths: [640, 1280, 1920] })));
files.push(...await catalogImageSources(root));
files.sort((a, b) => a.key.localeCompare(b.key, "en"));
await mkdir(output, { recursive: true });
sharp.concurrency(1);
const manifest = {};
const writes = new Map();
let originalBytes = 0;
let optimizedBytes = 0;
let completed = 0;
let failures = 0;

async function optimize(file) {
  const source = file.readSource ? await file.readSource() : await readFile(file.path);
  originalBytes += source.length;
  const hash = createHash("sha256").update(recipe).update(source).digest("hex").slice(0, 20);
  const metadata = await sharp(source).metadata();
  if ((metadata.pages ?? 1) > 1) return; // Preserve animated originals.
  const portraitRotation = (metadata.orientation ?? 0) >= 5;
  const width = portraitRotation ? metadata.height : metadata.width;
  const height = portraitRotation ? metadata.width : metadata.height;
  const variants = [];
  for (const targetWidth of [...new Set(file.widths.map((size) => Math.min(size, width)))]) {
    const name = `${hash}-${targetWidth}.webp`;
    const path = join(output, name);
    if (!writes.has(path)) {
      writes.set(path, (async () => {
        try { await stat(path); }
        catch {
          const temporary = `${path}.tmp`;
          await sharp(source).rotate().resize({ width: targetWidth, withoutEnlargement: true })
            .webp({ quality: 78, effort: 4 }).toFile(temporary);
          await rename(temporary, path);
        }
      })());
    }
    await writes.get(path);
    variants.push({ src: `/media/optimized/${name}`, width: targetWidth });
  }
  manifest[file.key] = [hash, width, height];
  const mediumVariant = await stat(join(root, "public", variants[Math.min(1, variants.length - 1)].src));
  optimizedBytes += mediumVariant.size;
}

// Bound work to avoid exhausting memory on large uploaded photographs.
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < files.length) {
    const file = files[cursor++];
    try { await optimize(file); }
    catch (error) {
      failures++;
      console.warn(`Keeping original image ${file.key}: ${error.message}`);
    }
    completed++;
    if (completed % 200 === 0) console.log(`Prepared ${completed}/${files.length} images`);
  }
}));
const sortedManifest = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b, "en")));
const contents = JSON.stringify(sortedManifest, null, 2) + "\n";
await mkdir(dirname(manifestPath), { recursive: true });
const previous = await readFile(manifestPath, "utf8").catch(() => "");
if (previous !== contents) await writeFile(manifestPath, contents);
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(`Images: ${Object.keys(manifest).length} prepared, ${failures} originals retained; ${mb(originalBytes)} MB original → ${mb(optimizedBytes)} MB medium variants`);
