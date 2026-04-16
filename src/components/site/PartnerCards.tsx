import Image from 'next/image';
import { site } from '@/lib/site';

const PARTNER_LOGOS: Record<string, { src: string; alt: string; width: number; height: number }> = {
  'Clinica Synaptica': {
    src: '/img/partner-synaptica.png',
    alt: 'Clinica Synaptica',
    width: 512,
    height: 134,
  },
  'Arizona Relationship & Family Institute': {
    src: '/img/partner-azrfi.png',
    alt: 'Arizona Relationship & Family Institute',
    width: 400,
    height: 111,
  },
};

export function PartnerCards() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      {site.partners.map((p) => {
        const logo = PARTNER_LOGOS[p.name];
        return (
          <div key={p.url}>
            {logo && (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-full max-w-[280px]"
              />
            )}
            <p className="mt-5 text-sm text-ink-700">{p.description}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-800 hover:text-gold-500"
            >
              Visit Website →
            </a>
          </div>
        );
      })}
    </div>
  );
}
