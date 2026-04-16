import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Users, Compass, Flower2, Waves } from 'lucide-react';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-gold-50">
        <div className="container-wide relative z-10 grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
              Dr. Lisa Gold, PhD
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-ink-900 md:text-5xl lg:text-6xl">
              Integrative Relationship, Sex &amp; Psychedelic-Assisted Psychotherapist
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-700">
              Blending evidence-based psychotherapy with ketamine-assisted and somatic modalities
              to help individuals, couples, and practitioners heal, grow, and reconnect.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/psychotherapy" className="btn-primary">
                Are You a Client?
              </Link>
              <Link href="/for-practitioners" className="btn-outline">
                Are You a Practitioner?
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-600">
              <Link href="/for-practitioners/training" className="font-medium text-gold-700 underline underline-offset-4 hover:text-gold-800">
                Become a Certified Psychedelic-Assisted Practitioner — Register Here
              </Link>
            </p>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gold-100" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gold-200">
              <div className="flex h-full w-full items-center justify-center text-gold-700/60">
                <span className="font-display text-2xl">Dr. Lisa Gold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-cream-50">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
              How I Can Help
            </p>
            <h2 className="mt-3">Integrative care for body, mind &amp; relationships</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Heart size={24} />}
              title="Psychotherapy"
              body="Psychedelic-assisted, sex, and couples therapy grounded in EFT, IFS, EMDR, and somatic modalities."
              href="/psychotherapy"
            />
            <ServiceCard
              icon={<Users size={24} />}
              title="For Practitioners"
              body="KAP foundational training, live consultation, and CEUs for licensed therapists and coaches."
              href="/for-practitioners"
            />
            <ServiceCard
              icon={<Waves size={24} />}
              title="Retreats"
              body="Immersive intimacy and psychedelic healing retreats in Sedona, Portugal, Switzerland, and more."
              href="/retreats"
            />
            <ServiceCard
              icon={<Compass size={24} />}
              title="Coaching"
              body="One-on-one guidance for clients navigating major life, relationship, and spiritual transitions."
              href="/coaching"
            />
            <ServiceCard
              icon={<Sparkles size={24} />}
              title="Ketamine Curious"
              body="New to KAP? Get the ebook and free resource to understand the basics of ketamine-assisted therapy."
              href="/ketamine-curious"
            />
            <ServiceCard
              icon={<Flower2 size={24} />}
              title="Soul Surfing"
              body="Optimize the outcomes of your ketamine-assisted psychotherapy with our signature methodology."
              href="/shop/soul-surfing"
            />
          </div>
        </div>
      </section>

      {/* Book pre-order */}
      <section className="section bg-gradient-to-br from-gold-50 to-cream-100">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="absolute inset-0 -rotate-3 rounded-2xl bg-gold-200" aria-hidden />
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gold-100 text-center">
              <div className="px-6">
                <p className="font-display text-2xl text-gold-800">Ketamine Curious</p>
                <p className="mt-3 text-sm text-gold-700">
                  How This Legal Psychedelic Medicine Can Transform Your Trauma Into Healing and Growth
                </p>
                <p className="mt-4 font-display text-lg text-gold-600">Book cover</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
              New Book — Pre-Order
            </p>
            <h2 className="mt-3">Ketamine Curious</h2>
            <p className="mt-4 text-lg text-ink-700">
              Dr. Gold&rsquo;s definitive guide to ketamine-assisted psychotherapy — for clients
              curious about psychedelic medicine and practitioners building a safe, effective
              practice.
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-3xl text-gold-700">$15</span>
              <span className="text-sm text-ink-600 line-through">$25</span>
              <span className="rounded-full bg-turquoise-500 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                Pre-order discount
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop/ketamine-curious-ebook" className="btn-primary">
                Pre-Order with Discount
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link href="/ketamine-curious" className="btn-ghost">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section bg-cream-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
                Specializations
              </p>
              <h2 className="mt-3">A holistic approach</h2>
              <p className="mt-4 text-ink-700">
                Twenty-nine years of clinical practice integrating relationship science, sex therapy,
                and psychedelic medicine.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                'Trauma & complex PTSD',
                'Couples & relationship therapy',
                'Healing from loss & grief',
                'Sexuality & emotional intimacy',
                'Spirituality & existential transitions',
                'Ketamine-assisted integration',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gold-100 bg-white/60 p-6"
                >
                  <p className="font-display text-lg text-gold-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="section bg-ink-900 text-cream-100">
        <div className="container-wide text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-300">
            Evidence-based &amp; Holistic
          </p>
          <h2 className="mt-3 text-cream-100">Therapeutic models &amp; modalities</h2>
          <div className="mt-12 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-4">
            {[
              'EMDR',
              'Somatic Experiencing',
              'Internal Family Systems',
              'Transpersonal',
              'EFT (Emotionally Focused Therapy)',
              'Meditation & breathwork',
              'Body work & movement',
              'Hypnotherapy & guided imagery',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-cream-100/90"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="text-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">
              Clinical Partners
            </p>
            <h2 className="mt-3">In collaboration with</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {site.partners.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-gold-100 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-gold-800">{p.name}</h3>
                <p className="mt-3 text-ink-700">{p.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 group-hover:text-gold-800">
                  Visit Website
                  <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="container-wide text-center">
          <h2 className="text-white">Begin your journey</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Schedule a consult to explore how Dr. Gold can support you as a client, or train
            with her as a practitioner.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold-700 hover:bg-cream-50"
            >
              Schedule a Consult
            </Link>
            <Link
              href="/for-practitioners/training"
              className="rounded-full border border-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-white hover:text-gold-700"
            >
              Therapist Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  body,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-gold-100 bg-white p-8 transition-shadow hover:shadow-lg"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-700">
        {icon}
      </span>
      <h3 className="mt-6 text-gold-800">{title}</h3>
      <p className="mt-3 flex-1 text-ink-700">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 group-hover:text-gold-800">
        Learn more
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}
