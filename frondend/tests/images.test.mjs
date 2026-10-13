import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import sharp from "sharp";

test("every generated responsive variant exists and has the advertised width", async () => {
  const manifest = JSON.parse(await readFile(new URL("../src/lib/image-variants.generated.json", import.meta.url), "utf8"));
  assert.ok(Object.keys(manifest).length > 0, "Run npm run images:optimize first");
  const jobs = [];
  const seen = new Set();
  for (const [key, [hash, width, height]] of Object.entries(manifest)) {
    assert.ok(width > 0 && height > 0, key);
    const targets = key.startsWith("hero/") ? [640, 1280, 1920] : [160, 480, 960];
    for (const size of new Set(targets.map((target) => Math.min(target, width)))) {
      const file = `${hash}-${size}.webp`;
      if (seen.has(file)) continue;
      seen.add(file);
      jobs.push({ file, size });
    }
  }
  let cursor = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (cursor < jobs.length) {
      const { file, size } = jobs[cursor++];
      const url = new URL(`../public/media/optimized/${file}`, import.meta.url);
      const image = await sharp(await readFile(url)).metadata();
      assert.equal(image.format, "webp", file);
      assert.equal(image.width, size, file);
    }
  }));
});
