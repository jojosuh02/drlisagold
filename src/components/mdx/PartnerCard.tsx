import { ArrowRight } from 'lucide-react';

type PartnerCardProps = {
  name: string;
  description: string;
  url: string;
};

export function PartnerCard({ name, description, url }: PartnerCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="not-prose group my-6 block rounded-2xl border border-gold-100 bg-white p-8 transition-shadow hover:shadow-lg"
    >
      <h3 className="mt-0 text-gold-800">{name}</h3>
      <p className="mt-3 text-ink-700">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 group-hover:text-gold-800">
        Visit Website
        <ArrowRight size={14} />
      </span>
    </a>
  );
}
