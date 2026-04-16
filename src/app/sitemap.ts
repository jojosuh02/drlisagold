import fs from 'node:fs/promises';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

async function listPages(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'src', 'content', 'pages');
  const results: string[] = [];
  async function walk(current: string, base = '') {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) await walk(path.join(current, e.name), path.join(base, e.name));
      else if (e.name.endsWith('.mdx')) {
        results.push(path.join(base, e.name.replace(/\.mdx$/, '')));
      }
    }
  }
  try {
    await walk(dir);
  } catch {}
  return results;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const dynamic = await listPages();
  const routes = ['', ...dynamic.map((p) => p.replaceAll('\\', '/'))];
  return routes.map((route) => ({
    url: `${site.url}/${route}`.replace(/\/$/, '') || site.url,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
