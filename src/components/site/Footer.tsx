import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

import { site } from '@/lib/site';
import { footerNav } from '@/lib/nav';

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-500 text-white">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Dr. Lisa Gold home">
              <Image
                src="/img/lg-logo.svg"
                alt=""
                width={72}
                height={72}
                className="h-16 w-16"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Integrative relationship, sex &amp; psychedelic-assisted psychotherapy.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-gold-400"
              >
                <Instagram size={20} />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-gold-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Navigate
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
              Partners
            </h5>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {site.partners.map((p) => {
                const logoSrc =
                  p.name === 'Clinica Synaptica'
                    ? '/img/partner-synaptica.png'
                    : '/img/partner-azrfi.png';
                return (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg bg-white/95 p-4 transition hover:bg-white"
                  >
                    <Image
                      src={logoSrc}
                      alt={p.name}
                      width={280}
                      height={80}
                      className="h-12 w-auto object-contain"
                    />
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-500">
                      Visit Website →
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dr. Lisa Gold. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/communication-preferences" className="hover:text-gold-400">
              Communication Preferences
            </Link>
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`} className="hover:text-gold-400">
                {site.contactEmail}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
