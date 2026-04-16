import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

type Product = {
  slug: string;
  name: string;
  blurb: string;
  longDescription: string;
  price: string;
  comparePrice?: string;
  badge?: string;
};

const products: Product[] = [
  {
    slug: 'ketamine-curious-ebook',
    name: 'Ketamine Curious',
    blurb: 'The definitive guide to ketamine-assisted psychotherapy for clients and practitioners.',
    longDescription:
      "Dr. Gold's ebook covers the science, the clinical frameworks, and the integration practices that separate a transformative KAP journey from an unsupported experience. Pre-order at $15 (reg. $25).",
    price: '$15',
    comparePrice: '$25',
    badge: 'Pre-order',
  },
  {
    slug: 'soul-surfing-foundational-training',
    name: 'Soul Surfing Foundational KAP Training',
    blurb: '5-day experiential training for licensed practitioners.',
    longDescription:
      'Dyad-based training in Ketamine-Assisted Psychotherapy. Arizona (Nov 2–6, 2026) and Barcelona (April 2027) cohorts. Includes online prep, live instruction, semi-private consultation, and the in-person retreat. Cohorts cap at 16 practitioners.',
    price: '$6,500',
    badge: 'Practitioners',
  },
  {
    slug: 'soul-surfing-workbook-preorder',
    name: 'Soul Surfing Workbook',
    blurb: 'Companion workbook for KAP clients and practitioners.',
    longDescription: 'Structured prompts, integration exercises, and somatic practices. Pre-order at $25 (reg. $35).',
    price: '$25',
    comparePrice: '$35',
    badge: 'Pre-order',
  },
  {
    slug: 'soul-surfing',
    name: 'Soul Surfing',
    blurb: 'Our signature methodology for optimizing KAP outcomes.',
    longDescription:
      'A guided program for clients preparing for and integrating ketamine-assisted psychotherapy sessions. Combines somatic practice, relational inquiry, and structured integration.',
    price: 'Starting at $250',
  },
  {
    slug: 'ceus',
    name: 'CEUs',
    blurb: 'Continuing education hours for licensed practitioners.',
    longDescription:
      'Earn CEU hours through live consultation groups and self-study courses. Approval varies by state and discipline — please confirm with your licensing board.',
    price: 'From $75',
  },
  {
    slug: 'soul-surfing-optimizing-outcomes',
    name: 'Optimizing KAP Outcomes',
    blurb: 'A short course for clients preparing for their first ketamine journey.',
    longDescription: 'Video modules and written resources to help you arrive prepared, supported, and intentional.',
    price: '$99',
  },
];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return buildMetadata();
  return buildMetadata({ title: p.name, description: p.blurb, path: `/shop/${slug}` });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <article className="container-wide grid gap-12 py-16 md:grid-cols-[1fr_1fr] md:py-24">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-gold-100">
        <div className="flex h-full w-full items-center justify-center text-center">
          <p className="px-6 font-display text-2xl text-gold-700">{product.name}</p>
        </div>
      </div>

      <div>
        {product.badge && (
          <span className="inline-flex rounded-full bg-turquoise-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-turquoise-700">
            {product.badge}
          </span>
        )}
        <h1 className="mt-4 font-display text-3xl md:text-4xl">{product.name}</h1>
        <p className="mt-4 text-lg text-ink-700">{product.blurb}</p>
        <div className="mt-8 flex items-baseline gap-3">
          <span className="font-display text-3xl text-gold-700">{product.price}</span>
          {product.comparePrice && (
            <span className="text-base text-ink-600 line-through">{product.comparePrice}</span>
          )}
        </div>
        <p className="mt-6 text-ink-700">{product.longDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Contact to Purchase
          </Link>
          <Link href="/shop" className="btn-ghost">
            Back to Shop
          </Link>
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Direct Stripe checkout launches in Phase 2. For now, contact us to register or order.
        </p>
      </div>
    </article>
  );
}
