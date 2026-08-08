import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const TARGET_DIRS = ["src/assets", "public/uploads"];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const HERO_MAX_WIDTH = 2000;
const CONTENT_MAX_WIDTH = 1600;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

const isHero = (filePath) => /hero|office/i.test(path.basename(filePath));

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  const files = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;
    const base = entry.parentPath ?? entry.path;
    files.push(path.join(base, entry.name));
  }
  return files;
}

async function optimize(filePath) {
  const before = (await stat(filePath)).size;
  const ext = path.extname(filePath).toLowerCase();
  const maxWidth = isHero(filePath) ? HERO_MAX_WIDTH : CONTENT_MAX_WIDTH;

  const image = sharp(filePath).resize({ width: maxWidth, withoutEnlargement: true });
  const buffer =
    ext === ".png"
      ? await image.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
      : await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

  if (buffer.length < before) {
    // Write the already-encoded buffer directly — piping it back through another
    // sharp().toFile() call requires a real extension to infer the output format,
    // and re-encodes with default (non-matching) settings otherwise.
    await writeFile(filePath, buffer);
    return { filePath, before, after: buffer.length };
  }
  return { filePath, before, after: before, skipped: true };
}

async function main() {
  const allFiles = (await Promise.all(TARGET_DIRS.map(collectImages))).flat();
  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of allFiles) {
    const result = await optimize(filePath);
    totalBefore += result.before;
    totalAfter += result.after;
    const pct = result.before ? (100 * (1 - result.after / result.before)).toFixed(0) : 0;
    console.log(
      `${result.skipped ? "skip " : "opt  "}${path.relative(process.cwd(), filePath)}  ${(result.before / 1024).toFixed(0)}KB -> ${(result.after / 1024).toFixed(0)}KB (${pct}%)`
    );
  }

  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}

main();
