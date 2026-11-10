#!/usr/bin/env node
/**
 * Generates responsive AVIF + WebP variants for every local image that is
 * actually referenced from src/ and writes a manifest consumed by
 * <OptimizedImage />.
 *
 * Run with: npm run optimize:images
 *
 * Requires ImageMagick 7 (`magick`) to be available on PATH. The generated
 * files are committed to the repo, so production builds never need
 * ImageMagick.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicAssets = path.join(root, 'public', 'assets');
const outDir = path.join(publicAssets, 'optimized');
const srcDir = path.join(root, 'src');
const manifestPath = path.join(srcDir, 'data', 'image-manifest.json');

const WIDTHS = [240, 320, 400, 480, 640, 800, 1000, 1200, 1600];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function referencedAssets() {
  const refs = new Set();
  const re = /\/assets\/[A-Za-z0-9._@-]+\.(?:jpe?g|png|webp)/g;
  for (const file of walk(srcDir)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(re)) refs.add(match[0]);
  }
  return [...refs].sort();
}

function identify(file) {
  const out = execFileSync('magick', ['identify', '-format', '%w %h', file]);
  const [width, height] = out.toString().trim().split(/\s+/).map(Number);
  return { width, height };
}

function encode(input, output, width, format) {
  const args = [input, '-auto-orient', '-strip', '-resize', `${width}x>`];
  if (format === 'avif') args.push('-quality', '55');
  if (format === 'webp') args.push('-quality', '80', '-define', 'webp:method=6');
  args.push(output);
  execFileSync('magick', args);
  return fs.statSync(output).size;
}

fs.mkdirSync(outDir, { recursive: true });
const manifest = {};
let generated = 0;

for (const ref of referencedAssets()) {
  const input = path.join(root, 'public', ref);
  if (!fs.existsSync(input)) {
    console.warn(`! missing referenced asset: ${ref}`);
    continue;
  }

  const { width: originalWidth, height } = identify(input);
  // Never upscale. Skip breakpoints that are basically the native width.
  const widths = [...new Set([...WIDTHS.filter((w) => w < originalWidth * 0.95), originalWidth])]
    .filter((w) => w > 0)
    .sort((a, b) => a - b);

  const originalSize = fs.statSync(input).size;
  const stem = path.basename(ref, path.extname(ref));
  const entry = { width: originalWidth, height, avif: [], webp: [] };

  for (const format of ['avif', 'webp']) {
    for (const w of widths) {
      const outName = `${stem}-${w}.${format}`;
      const outPath = path.join(outDir, outName);
      const relative = `/assets/optimized/${outName}`;

      let size;
      if (fs.existsSync(outPath) && fs.statSync(outPath).mtimeMs > fs.statSync(input).mtimeMs) {
        size = fs.statSync(outPath).size;
      } else {
        size = encode(input, outPath, w, format);
        generated += 1;
      }

      // Drop variants that are not actually smaller than the JPEG/PNG source.
      if (size < originalSize * 0.98) {
        entry[format].push({ src: relative, w });
      } else if (fs.existsSync(outPath)) {
        fs.rmSync(outPath);
      }
    }
    if (entry[format].length === 0) delete entry[format];
  }

  if (entry.avif || entry.webp) manifest[ref] = entry;
  console.log(
    `${ref} (${originalWidth}px, ${(originalSize / 1024).toFixed(0)}KB) -> ` +
      `${(entry.avif?.length ?? 0)} avif / ${(entry.webp?.length ?? 0)} webp`
  );
}

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

// Remove stale variants left over from earlier runs so the directory only
// contains files the manifest actually references.
const used = new Set();
for (const entry of Object.values(manifest)) {
  for (const format of ['avif', 'webp']) {
    for (const variant of entry[format] || []) used.add(path.basename(variant.src));
  }
}
let removed = 0;
for (const file of fs.readdirSync(outDir)) {
  if (!used.has(file) && /\.(avif|webp)$/i.test(file)) {
    fs.rmSync(path.join(outDir, file));
    removed += 1;
  }
}

console.log(`\nWrote ${Object.keys(manifest).length} entries to ${path.relative(root, manifestPath)}`);
console.log(`Generated ${generated} new variant files, removed ${removed} stale files.`);
