import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PartnerCards } from '@/components/site/PartnerCards';

export const metadata = buildMetadata({
  title: 'Coaching & Consulting',
  description: '1:1 coaching for clients navigating relationship, sexuality, grief, and spiritual transitions — available in all 50 states.',
  path: '/coaching',
});

export default function CoachingPage() {
  return (
    <>
      {/* TEAL HERO */}
      <section className="bg-teal-500 py-16 text-center text-white md:py-20">
        <div className="container-wide">
          <h1 className="font-display text-3xl font-semibold text-gold-400 md:text-5xl">
            Coaching &amp; Consulting
          </h1>
          <p className="mt-4 text-sm italic text-white/90 md:text-base">
            Available in all 50 states &amp; internationally
          </p>
        </div>
      </section>

      {/* HERO IMAGE BAND — surf teaching */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/img/hero-surfers.webp"
              alt="Learning to surf together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-500 md:text-3xl">
              Learning to Surf the Waves of Life
            </h2>
            <p className="mt-4 text-sm text-ink-800">
              Coaching with Dr. Gold is like learning to surf — we don&rsquo;t control the ocean,
              but we can build the skills, presence, and self-trust to ride whatever rolls in.
              Unlike psychotherapy, coaching is forward-looking and goal-oriented, and available
              beyond the states in which Dr. Gold holds a clinical license.
            </p>
            <p className="mt-4 text-sm text-ink-800">
              Coaching focuses on skill-building, mindset, relationship dynamics, and life
              transitions — rather than treating diagnosed mental health conditions.
            </p>
            <div className="mt-6">
              <Link href="/contact?subject=Coaching" className="btn-gold">
                Schedule a Consult
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE WORK ON */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <h2 className="text-center font-display text-2xl font-semibold text-teal-500 md:text-3xl">
            What We Work On
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              'Relationship clarity & communication skills',
              'Sexuality, desire & erotic self-knowledge',
              'Career transitions & mid-life reinvention',
              'Grief & the aftermath of loss',
              'Spiritual emergence & meaning-making',
              'Integration of past psychedelic or retreat experiences',
              'Parenting & blended-family dynamics',
              'Boundaries & self-worth work',
            ].map((item) => (
              <li
                key={item}
                className="icon-bullet-gold icon-bullet rounded-lg bg-cream-50 px-5 py-3 text-sm font-semibold text-navy-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {[
            { t: 'Weekly Calls', b: '50-minute Zoom sessions, weekly or biweekly.' },
            { t: 'Between-Session Support', b: 'Brief check-ins and reflections via secure messaging.' },
            { t: 'Custom Intensives', b: '1- and 2-day formats for focused breakthroughs.' },
          ].map((f) => (
            <div key={f.t} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="font-display text-xl font-semibold text-gold-500">{f.t}</h3>
              <p className="mt-3 text-sm text-ink-700">{f.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-teal-500 py-20 text-center text-white">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Begin with a Conversation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Every coaching engagement starts with a 20-minute consult to explore fit and goals.
          </p>
          <div className="mt-10">
            <Link href="/contact?subject=Coaching" className="btn-white">
              Schedule a Consult
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-wide">
          <PartnerCards />
        </div>
      </section>
    </>
  );
}
