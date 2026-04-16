#!/usr/bin/env tsx
/**
 * extract-assets.ts
 *
 * Reads asset-manifest.json, finds matching files inside
 * _wp-backup/backup_..._-uploads/, copies the largest original into
 * public/img|doc|video/, and emits optimized webp variants at
 * configured widths. Writes a typed manifest to src/lib/images.generated.ts.
 *
 * Run: pnpm extract-assets
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);

type Manifest = {
  assets: Array<{ key: string; match: string; type: 'svg' | 'image' | 'pdf' | 'video' }>;
  imageWidths: number[];
  outputs: {
    imagesDir: string;
    docsDir: string;
    videoDir: string;
    manifestOutput: string;
  };
};

const ROOT = path.resolve(__dirname, '..');
const BACKUP_UPLOADS = path.join(
  ROOT,
  '_wp-backup',
  'backup_2026_04_16_18_46_15-8b975cac-uploads',
);

async function main() {
  const manifestPath = path.join(__dirname, 'asset-manifest.json');
  const manifest: Manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

  const imagesDir = path.join(ROOT, manifest.outputs.imagesDir);
  const docsDir = path.join(ROOT, manifest.outputs.docsDir);
  const videoDir = path.join(ROOT, manifest.outputs.videoDir);
  await fs.mkdir(imagesDir, { recursive: true });
  await fs.mkdir(docsDir, { recursive: true });
  await fs.mkdir(videoDir, { recursive: true });

  const allFiles = await walk(BACKUP_UPLOADS);
  const results: Record<string, { original: string; widths?: Record<number, string> }> = {};

  for (const asset of manifest.assets) {
    const candidates = matchGlob(allFiles, asset.match);
    if (candidates.length === 0) {
      console.warn(`[miss] ${asset.key}: no match for ${asset.match}`);
      continue;
    }
    const best = pickBest(candidates);
    console.log(`[pick] ${asset.key} <- ${path.relative(BACKUP_UPLOADS, best)}`);

    if (asset.type === 'svg') {
      const outName = `${asset.key}.svg`;
      await fs.copyFile(best, path.join(imagesDir, outName));
      results[asset.key] = { original: `/img/${outName}` };
    } else if (asset.type === 'image') {
      const outName = `${asset.key}.webp`;
      const buffer = await fs.readFile(best);
      const metadata = await sharp(buffer).metadata();
      const widths: Record<number, string> = {};
      for (const w of manifest.imageWidths) {
        if (metadata.width && w > metadata.width) continue;
        const variant = `${asset.key}-${w}.webp`;
        await sharp(buffer).resize({ width: w }).webp({ quality: 82 }).toFile(path.join(imagesDir, variant));
        widths[w] = `/img/${variant}`;
      }
      await sharp(buffer).webp({ quality: 90 }).toFile(path.join(imagesDir, outName));
      results[asset.key] = { original: `/img/${outName}`, widths };
    } else if (asset.type === 'pdf') {
      const outName = path.basename(best);
      await fs.copyFile(best, path.join(docsDir, outName));
      results[asset.key] = { original: `/doc/${outName}` };
    } else if (asset.type === 'video') {
      const outName = path.basename(best);
      await fs.copyFile(best, path.join(videoDir, outName));
      results[asset.key] = { original: `/video/${outName}` };
    }
  }

  const generated = buildGenerated(results);
  const manifestOut = path.join(ROOT, manifest.outputs.manifestOutput);
  await fs.mkdir(path.dirname(manifestOut), { recursive: true });
  await fs.writeFile(manifestOut, generated);
  console.log(`\nWrote ${manifestOut} with ${Object.keys(results).length} entries.`);
}

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  async function rec(current: string) {
    let entries;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) await rec(full);
      else out.push(full);
    }
  }
  await rec(dir);
  return out;
}

function matchGlob(files: string[], pattern: string): string[] {
  const re = globToRegExp(pattern);
  return files.filter((f) => re.test(path.basename(f)));
}

function globToRegExp(pattern: string): RegExp {
  let re = '';
  let i = 0;
  while (i < pattern.length) {
    const c = pattern[i];
    if (c === '*') {
      re += '.*';
    } else if (c === '?') {
      re += '.';
    } else if (c === '.') {
      re += '\\.';
    } else if (c === '{') {
      const end = pattern.indexOf('}', i);
      const options = pattern
        .slice(i + 1, end)
        .split(',')
        .map((s) => s.trim());
      re += `(?:${options.map((o) => o.replace(/\./g, '\\.')).join('|')})`;
      i = end;
    } else {
      re += c;
    }
    i++;
  }
  return new RegExp(`^${re}$`, 'i');
}

function pickBest(files: string[]): string {
  const unscaled = files.filter((f) => !/-\d+x\d+\./.test(path.basename(f)));
  const pool = unscaled.length > 0 ? unscaled : files;
  pool.sort((a, b) => b.length - a.length);
  return pool[0];
}

function buildGenerated(results: Record<string, { original: string; widths?: Record<number, string> }>): string {
  const lines = [
    '// Generated by scripts/extract-assets.ts. Do not edit.',
    "import type { StaticImageData } from 'next/image';",
    '',
    'export type ImageVariants = { src: string; widths?: Record<number, string> };',
    '',
    'export const assets = {',
  ];
  for (const [key, val] of Object.entries(results)) {
    const w = val.widths ? `, widths: ${JSON.stringify(val.widths)}` : '';
    lines.push(`  "${key}": { src: "${val.original}"${w} } as ImageVariants,`);
  }
  lines.push('} as const;');
  lines.push('');
  lines.push('export type AssetKey = keyof typeof assets;');
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
