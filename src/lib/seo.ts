import type { Metadata } from 'next';
import { site } from './site';

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
}: BuildMetadataArgs = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const ogImage = image ?? `${site.url}/opengraph-image`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}
