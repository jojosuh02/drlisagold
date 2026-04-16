import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  align?: 'left' | 'center';
  tone?: 'light' | 'dark' | 'gold';
};

const toneMap = {
  light: 'bg-gradient-to-br from-cream-50 via-cream-100 to-gold-50 text-ink-900',
  dark: 'bg-ink-900 text-cream-100',
  gold: 'bg-gradient-to-br from-gold-500 to-gold-600 text-white',
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  align = 'left',
  tone = 'light',
}: HeroProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : '';
  return (
    <section className={`${toneMap[tone]} py-20 md:py-28`}>
      <div className={`container-wide flex flex-col gap-6 ${alignClass}`}>
        {eyebrow && (
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="max-w-2xl text-lg md:text-xl">{subtitle}</p>}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className={
                  tone === 'gold'
                    ? 'rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold-700 hover:bg-cream-50'
                    : 'btn-primary'
                }
              >
                {primaryCTA.label}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={
                  tone === 'gold'
                    ? 'rounded-full border border-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-white hover:text-gold-700'
                    : 'btn-outline'
                }
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
