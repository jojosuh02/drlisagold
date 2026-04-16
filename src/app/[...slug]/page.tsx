import fs from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import { mdxComponents } from '@/components/site/MDXComponents';
import { buildMetadata } from '@/lib/seo';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'pages');

type Frontmatter = {
  title?: string;
  description?: string;
};

async function loadPage(slug: string[]): Promise<{ source: string; frontmatter: Frontmatter } | null> {
  const rel = slug.join('/');
  const candidates = [
    path.join(CONTENT_DIR, `${rel}.mdx`),
    path.join(CONTENT_DIR, rel, 'index.mdx'),
  ];
  for (const filePath of candidates) {
    try {
      const raw = await fs.readFile(filePath, 'utf8');
      return parseFrontmatter(raw);
    } catch {
      continue;
    }
  }
  return null;
}

function parseFrontmatter(raw: string): { source: string; frontmatter: Frontmatter } {
  if (!raw.startsWith('---')) return { source: raw, frontmatter: {} };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { source: raw, frontmatter: {} };
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, '');
  const frontmatter: Frontmatter = {};
  for (const line of fmBlock.split('\n')) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const [, key, value] = match;
      (frontmatter as Record<string, string>)[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { source: body, frontmatter };
}

export async function generateStaticParams() {
  async function walk(dir: string, base = ''): Promise<string[][]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const results: string[][] = [];
    for (const entry of entries) {
      if (entry.isDirectory()) {
        results.push(...(await walk(path.join(dir, entry.name), path.join(base, entry.name))));
      } else if (entry.name.endsWith('.mdx')) {
        const slug = path.join(base, entry.name.replace(/\.mdx$/, '')).split(path.sep);
        results.push(slug);
      }
    }
    return results;
  }
  try {
    const slugs = await walk(CONTENT_DIR);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await loadPage(slug);
  if (!page) return buildMetadata();
  return buildMetadata({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    path: '/' + slug.join('/'),
  });
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = await loadPage(slug);
  if (!page) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
      <MDXRemote source={page.source} components={mdxComponents} />
    </article>
  );
}
