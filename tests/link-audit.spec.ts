import { test, expect } from '@playwright/test';

const BASE = process.env.LOCAL_URL ?? 'http://localhost:4321';

// Pages to crawl
const PAGES = [
  '/',
  '/about',
  '/psychotherapy',
  '/retreats',
  '/coaching',
  '/ketamine-curious',
  '/contact',
  '/shop',
  '/for-practitioners',
  '/for-practitioners/training',
  '/for-practitioners/consultation',
  '/for-practitioners/ceus',
  '/get-on-my-list',
  '/soul-surfing-signup',
  '/communication-preferences',
];

test('every link on every page resolves with 2xx/3xx', async ({ request, page }) => {
  const brokenLinks: Array<{ from: string; href: string; status: number | string }> = [];
  const seenInternal = new Set<string>();

  for (const p of PAGES) {
    await page.goto(`${BASE}${p}`, { waitUntil: 'networkidle' });
    const hrefs = await page.$$eval('a[href]', (els) =>
      els
        .map((el) => (el as HTMLAnchorElement).getAttribute('href') ?? '')
        .filter((h) => h && !h.startsWith('#') && !h.startsWith('mailto:') && !h.startsWith('tel:')),
    );

    for (const href of hrefs) {
      const key = `${p}::${href}`;
      if (seenInternal.has(key)) continue;
      seenInternal.add(key);

      // Resolve relative
      const url = href.startsWith('http') ? href : `${BASE}${href.startsWith('/') ? href : '/' + href}`;

      // Skip external — we don't care if a partner site 404s, they own that
      if (!url.startsWith(BASE)) continue;

      try {
        const res = await request.get(url, { timeout: 10_000, maxRedirects: 3 });
        if (res.status() >= 400) {
          brokenLinks.push({ from: p, href, status: res.status() });
        }
      } catch (err) {
        brokenLinks.push({ from: p, href, status: err instanceof Error ? err.message : 'error' });
      }
    }
  }

  if (brokenLinks.length > 0) {
    console.log('\n=== BROKEN LINKS ===');
    for (const b of brokenLinks) {
      console.log(`  [${b.status}] ${b.from} → ${b.href}`);
    }
    console.log(`Total: ${brokenLinks.length}\n`);
  } else {
    console.log('All internal links OK.');
  }
  expect(brokenLinks, `${brokenLinks.length} broken links`).toEqual([]);
});
