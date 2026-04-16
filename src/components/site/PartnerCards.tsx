import { site } from '@/lib/site';

export function PartnerCards() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      {site.partners.map((p) => (
        <div key={p.url}>
          <h3 className="font-display text-xl font-semibold text-navy-500 md:text-2xl">
            {p.name}
          </h3>
          <p className="mt-4 text-sm text-ink-700">{p.description}</p>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-800 hover:text-gold-500"
          >
            Visit Website →
          </a>
        </div>
      ))}
    </div>
  );
}
