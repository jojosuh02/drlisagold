import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const PAGES = [
  { slug: 'home', path: '/' },
  { slug: 'about', path: '/about' },
  { slug: 'psychotherapy', path: '/psychotherapy' },
  { slug: 'retreats', path: '/retreats' },
  { slug: 'coaching', path: '/coaching' },
  { slug: 'for-practitioners', path: '/for-practitioners' },
  { slug: 'ketamine-curious', path: '/ketamine-curious' },
  { slug: 'contact', path: '/contact' },
  { slug: 'shop', path: '/shop' },
];

const LIVE = 'https://drlisagold.com';
const LOCAL = process.env.LOCAL_URL ?? 'http://localhost:4321';
const OUT = path.join(process.cwd(), 'tests', '__screenshots__');

test.beforeAll(async () => {
  await fs.mkdir(OUT, { recursive: true });
});

for (const page of PAGES) {
  test(`visual diff: ${page.slug}`, async ({ page: pw }) => {
    const vp = { width: 1440, height: 900 };
    await pw.setViewportSize(vp);

    const livePath = path.join(OUT, `${page.slug}-live.png`);
    const localPath = path.join(OUT, `${page.slug}-local.png`);
    const diffPath = path.join(OUT, `${page.slug}-diff.png`);

    await pw.goto(`${LIVE}${page.path}`, { waitUntil: 'networkidle', timeout: 30_000 });
    await pw.evaluate(() => (document as any).fonts?.ready);
    await scrollFullPage(pw);
    await pw.screenshot({ path: livePath, fullPage: true });

    await pw.goto(`${LOCAL}${page.path}`, { waitUntil: 'networkidle', timeout: 30_000 });
    await pw.evaluate(() => (document as any).fonts?.ready);
    await scrollFullPage(pw);
    await pw.screenshot({ path: localPath, fullPage: true });

    const [live, local] = await Promise.all([
      fs.readFile(livePath).then((b) => PNG.sync.read(b)),
      fs.readFile(localPath).then((b) => PNG.sync.read(b)),
    ]);

    const w = Math.min(live.width, local.width);
    const h = Math.min(live.height, local.height);
    const diff = new PNG({ width: w, height: h });

    const liveCrop = cropToSize(live, w, h);
    const localCrop = cropToSize(local, w, h);

    const pixels = pixelmatch(liveCrop.data, localCrop.data, diff.data, w, h, {
      threshold: 0.2,
    });
    await fs.writeFile(diffPath, PNG.sync.write(diff));

    const ratio = pixels / (w * h);
    console.log(`[${page.slug}] diff pixels: ${pixels}, ratio: ${(ratio * 100).toFixed(2)}%`);
    expect(ratio, `pixel diff too high for ${page.slug}`).toBeLessThan(0.25);
  });
}

async function scrollFullPage(page: import('@playwright/test').Page) {
  // Force every <img> out of lazy-loading and wait for all to complete
  await page.evaluate(() => {
    document.querySelectorAll('img').forEach((img) => {
      img.loading = 'eager';
    });
  });
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((r) => {
              img.addEventListener('load', r, { once: true });
              img.addEventListener('error', r, { once: true });
            }),
      ),
    );
  });
  // Scroll through so any CSS-background elements paint, then return to top
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let total = 0;
      const step = 500;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 600);
        }
      }, 50);
    });
  });
  await page.waitForLoadState('networkidle');
}

function cropToSize(png: PNG, w: number, h: number): PNG {
  if (png.width === w && png.height === h) return png;
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    const srcOff = y * png.width * 4;
    const dstOff = y * w * 4;
    png.data.copy(out.data, dstOff, srcOff, srcOff + w * 4);
  }
  return out;
}
