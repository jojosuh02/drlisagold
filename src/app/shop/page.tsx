import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Shop',
  description: 'Programs, trainings, books, and resources from Dr. Lisa Gold.',
  path: '/shop',
});

type PlaceholderProduct = {
  slug: string;
  name: string;
  blurb: string;
  price: string;
  comparePrice?: string;
  badge?: string;
};

const products: PlaceholderProduct[] = [
  {
    slug: 'ketamine-curious-ebook',
    name: 'Ketamine Curious (ebook)',
    blurb: 'Dr. Gold\u2019s guide to ketamine-assisted psychotherapy for clients and practitioners.',
    price: '$15',
    comparePrice: '$25',
    badge: 'Pre-order',
  },
  {
    slug: 'soul-surfing-foundational-training',
    name: 'Soul Surfing Foundational KAP Training',
    blurb: '5-day experiential training for licensed practitioners. Arizona & Barcelona cohorts.',
    price: '$6,500',
    badge: 'Practitioners',
  },
  {
    slug: 'soul-surfing-workbook-preorder',
    name: 'Soul Surfing Workbook',
    blurb: 'Companion workbook for KAP clients and practitioners. Pre-order discount.',
    price: '$25',
    comparePrice: '$35',
    badge: 'Pre-order',
  },
  {
    slug: 'soul-surfing',
    name: 'Soul Surfing',
    blurb: 'Our signature methodology for optimizing KAP outcomes.',
    price: 'Starting at $250',
  },
  {
    slug: 'ceus',
    name: 'CEUs',
    blurb: 'Continuing education hours for licensed therapists and medical practitioners.',
    price: 'From $75',
  },
  {
    slug: 'soul-surfing-optimizing-outcomes',
    name: 'Optimizing KAP Outcomes',
    blurb: 'A short-form course for clients preparing for their first ketamine journey.',
    price: '$99',
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cream-50 to-gold-50 py-20">
        <div className="container-wide text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">Shop</p>
          <h1 className="mt-3">Programs &amp; Trainings</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700">
            Books, workbooks, and trainings from Dr. Lisa Gold. Checkout opens in Stripe and
            receipts arrive by email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/shop/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-gold-100 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              {p.badge && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-turquoise-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-turquoise-700">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-xl text-gold-800">{p.name}</h3>
              <p className="mt-3 flex-1 text-ink-700">{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-2xl text-gold-700">{p.price}</span>
                {p.comparePrice && (
                  <span className="text-sm text-ink-600 line-through">{p.comparePrice}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
        <p className="container-wide mt-12 text-center text-sm text-ink-500">
          Checkout is being finalized in Phase 2. In the meantime,{' '}
          <Link href="/contact" className="text-gold-700 underline">
            contact us
          </Link>{' '}
          to register or order.
        </p>
      </section>
    </>
  );
}
