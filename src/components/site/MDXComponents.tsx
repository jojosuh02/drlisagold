import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import { Hero } from '@/components/mdx/Hero';
import { CTA } from '@/components/mdx/CTA';
import { LeadCapture } from '@/components/mdx/LeadCapture';
import { Testimonial } from '@/components/mdx/Testimonial';
import { PartnerCard } from '@/components/mdx/PartnerCard';
import { FeatureCard } from '@/components/mdx/FeatureCard';
import { Section } from '@/components/mdx/Section';
import { List } from '@/components/mdx/List';
import { Stat } from '@/components/mdx/Stat';
import { Callout } from '@/components/mdx/Callout';
import { ContactForm } from '@/components/ContactForm';

export const mdxComponents: MDXComponents = {
  Hero,
  CTA,
  LeadCapture,
  Testimonial,
  PartnerCard,
  FeatureCard,
  Section,
  List,
  Stat,
  Callout,
  ContactForm,
  a: ({ href, children, ...rest }) => {
    const isInternal = href?.startsWith('/') ?? false;
    if (isInternal && href) {
      return (
        <Link href={href} className="text-gold-700 underline underline-offset-4 hover:text-gold-800">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gold-700 underline underline-offset-4 hover:text-gold-800"
        {...rest}
      >
        {children}
      </a>
    );
  },
  h1: ({ children }) => (
    <h1 className="mt-0 font-display text-3xl text-gold-500 md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 font-display text-2xl text-gold-500 md:text-[30px]">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-xl text-gold-500 md:text-[28px]">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-4 text-base leading-relaxed text-ink-800">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-ink-700">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-gold-400 bg-gold-50 py-4 pl-6 text-ink-700 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-gold-100" />,
};
