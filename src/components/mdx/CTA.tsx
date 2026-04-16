import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type CTAProps = {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: 'light' | 'dark' | 'gold';
};

const toneMap = {
  light: 'bg-cream-100 text-ink-900',
  dark: 'bg-ink-900 text-cream-100',
  gold: 'bg-gradient-to-br from-gold-500 to-gold-600 text-white',
};

export function CTA({ title, body, primary, secondary, tone = 'gold' }: CTAProps) {
  return (
    <section className={`${toneMap[tone]} my-16 rounded-3xl px-8 py-16 text-center`}>
      <h2 className={tone === 'gold' ? 'text-white' : undefined}>{title}</h2>
      {body && <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">{body}</p>}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={primary.href}
          className={
            tone === 'gold'
              ? 'rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold-700 hover:bg-cream-50'
              : 'btn-primary'
          }
        >
          {primary.label}
          <ArrowRight size={16} className="ml-2" />
        </Link>
        {secondary && (
          <Link
            href={secondary.href}
            className={
              tone === 'gold'
                ? 'rounded-full border border-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-white hover:text-gold-700'
                : 'btn-outline'
            }
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
}
