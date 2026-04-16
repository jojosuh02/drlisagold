import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  align?: 'left' | 'center';
  tone?: 'light' | 'dark' | 'gold' | 'teal';
  image?: string;
  imageAlt?: string;
};

const toneMap = {
  light: 'bg-cream-100 text-ink-900',
  dark: 'bg-navy-500 text-white',
  gold: 'bg-gradient-to-br from-gold-400 to-gold-500 text-white',
  teal: 'bg-teal-500 text-white',
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  align = 'center',
  tone = 'teal',
  image,
  imageAlt = '',
}: HeroProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : '';
  const headingColor = tone === 'light' ? 'text-gold-500' : 'text-gold-400';
  return (
    <section className={`${toneMap[tone]} py-16 md:py-20`}>
      <div className={`container-wide flex flex-col gap-6 ${alignClass}`}>
        {eyebrow && (
          <p className={`font-display text-xs uppercase tracking-[0.25em] ${tone === 'light' ? 'text-gold-500' : 'text-white/90'}`}>
            {eyebrow}
          </p>
        )}
        <h1 className={`max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl ${headingColor}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`max-w-2xl text-base md:text-lg ${tone === 'light' ? 'text-ink-800' : 'text-white/90'}`}>
            {subtitle}
          </p>
        )}
        {image && (
          <div className="relative mt-6 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-lg">
            <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
          </div>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className={
                  tone === 'light'
                    ? 'btn-gold'
                    : 'inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-700 transition hover:bg-cream-100'
                }
              >
                {primaryCTA.label}
                <ArrowRight size={14} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={
                  tone === 'light'
                    ? 'btn-gold-outline'
                    : 'inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-teal-700'
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
