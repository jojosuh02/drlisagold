import Image from 'next/image';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SignupForm } from './SignupForm';

export const metadata: Metadata = buildMetadata({
  title: 'Stay in touch',
  description:
    "Choose the topics you'd like updates on from Dr. Lisa Gold - retreats, therapist training, or general news.",
  path: '/qrSS',
});

export default function QrSignupPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream-100">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-lisa-gold.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[right_center] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-100/85 via-cream-100/70 to-cream-100/95" />
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
            Stay in touch
          </p>
          <h1 className="mt-3 font-display text-3xl text-gold-800 md:text-5xl">
            Choose what you'd like to hear about
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
            Welcome. Pick the topics you're interested in below and Dr. Gold will
            send you only the updates you asked for. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
          <SignupForm />
        </div>
      </section>
    </>
  );
}
