import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { site } from '@/lib/site';
import { footerNav } from '@/lib/nav';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-gold-100 bg-ink-900 text-cream-100">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-2xl text-gold-300">
              Dr. Lisa Gold
            </Link>
            <p className="mt-3 max-w-xs text-sm text-cream-100/70">
              Integrative relationship, sex, and psychedelic-assisted psychotherapy.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="text-cream-100/70 hover:text-gold-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="text-cream-100/70 hover:text-gold-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-display text-lg text-gold-300">Navigate</h5>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream-100/70 hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-lg text-gold-300">Partners</h5>
            <ul className="mt-4 space-y-4 text-sm">
              {site.partners.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-cream-100/70 hover:text-gold-300"
                  >
                    <span className="block font-medium text-cream-100">{p.name}</span>
                    <span className="mt-1 block text-xs text-cream-100/60">{p.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-cream-100/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dr. Lisa Gold. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/communication-preferences" className="hover:text-gold-300">
              Communication Preferences
            </Link>
            <a
              href={`mailto:${site.contactEmail}`}
              className="hover:text-gold-300"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
