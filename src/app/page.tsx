import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed right-cropped headshot; wordmark + subtitle + single CTA */}
      <section className="relative isolate overflow-hidden bg-cream-100">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-lisa-gold.png"
            alt="Dr. Lisa Gold standing by the sea"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center]"
          />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cream-100 via-cream-100/85 to-transparent md:w-3/5" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-6 py-20">
          <div className="max-w-xl">
            <Image
              src="/img/dr-lisa-gold-wordmark.svg"
              alt="Dr. Lisa Gold"
              width={720}
              height={45}
              priority
              className="h-auto w-full max-w-[540px]"
            />
            <p className="mt-6 font-display text-lg font-light text-navy-500 md:text-xl">
              Integrative Relationship, Sex, and
              <br />
              Psychedelic-Assisted Psychotherapist
            </p>
            <div className="mt-10">
              <Link href="/for-practitioners/training" className="btn-gold">
                <ArrowRight size={18} />
                <span>Become a Certified Psychedelic-Assisted Practitioner — Register Here</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK PRE-ORDER — dark navy */}
      <section className="relative overflow-hidden bg-navy-500 text-white">
        <div className="container-wide relative grid items-center gap-10 py-14 md:grid-cols-[240px_1fr] md:gap-16 md:py-20">
          <div className="mx-auto w-full max-w-[220px] md:max-w-[240px]">
            <Image
              src="/img/book-cover-ketamine-curious.webp"
              alt="Ketamine Curious book cover"
              width={240}
              height={360}
              className="h-auto w-full rounded-sm shadow-2xl"
            />
          </div>
          <div>
            <p className="text-sm text-white/85">
              Pre-order your copy of the book: <strong className="text-white">"Ketamine Curious: How This Legal Psychedelic Medicine Can Transform Your Trauma Into Healing and Growth"</strong>
            </p>
            <p className="mt-4 text-sm text-white/85">
              Receive a limited-time pre-order discount of <strong className="text-white">$15</strong> (retail price $25).
            </p>
            <div className="mt-6">
              <Link href="/shop/ketamine-curious-ebook" className="btn-gold">
                Pre-Order with Discount
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOUL SURFING — giant wordmark left, teal panel right */}
      <section className="bg-cream-100">
        <div className="container-wide grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative">
            <Image
              src="/img/soul-surfing-logo.svg"
              alt="Soul Surfing"
              width={600}
              height={400}
              className="h-auto w-full max-w-[480px]"
            />
          </div>
          <div className="rounded-lg bg-teal-500 p-8 text-white md:p-10">
            <p className="font-display text-sm uppercase tracking-[0.15em] text-white/90">
              Integrative Emotionally Focused (EFT)
            </p>
            <ul className="mt-6 space-y-3">
              <li className="icon-bullet-gold icon-bullet font-semibold">
                Psychedelic-Assisted Psychotherapy
                <span className="block text-sm font-normal text-white/80">
                  Individuals, Couples, Families (18+), and Private Groups
                </span>
              </li>
              <li className="icon-bullet-gold icon-bullet font-semibold">
                Sex Therapy Individuals &amp; Couples
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-white/80">
              Specialized in Relationship Ketamine-Assisted Psychotherapy (KAP)
            </p>
            <div className="mt-8">
              <Link
                href="/psychotherapy"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-cream-100"
              >
                What is Soul Surfing?
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — image left, text right with gold bullets */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/img/img-slider.webp"
              alt="Dr. Lisa Gold walking on the beach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-ink-800">
              <strong>Soul Surfing</strong> is Dr. Gold&rsquo;s unique approach to both psychedelic-assisted
              psychotherapy and sex therapy. Certified in <strong>Emotionally Focused Therapy (EFT)</strong>
              as a therapist and supervisor, EFT serves as foundational model for Soul Surfing,
              guiding the integration of interventions and practices from other therapeutic models
              and holistic practices.
            </p>
            <p className="mt-4 text-sm text-ink-800">
              <strong>Soul Surfing</strong> integrates aspects of other trauma-informed and
              attachment-based models, with neuroscience, holistic treatment modalities, and
              transpersonal psychology.
            </p>
            <p className="mt-4 text-sm text-ink-800">
              <strong>Dr. Gold</strong> specializes in ketamine-assisted psychotherapy, pioneering effective
              protocols for working with individuals, couples, and families (18+). She has also
              developed innovative protocols for ketamine-assisted sex therapy.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS — plain text columns with giant teal heading */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-center font-display text-3xl font-semibold text-teal-500 md:text-5xl">
            Specializations:
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-10 text-center sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {[
              {
                title: 'Trauma',
                body: 'Developmental, generational, relational, sexual.',
              },
              {
                title: 'Couple Relationships',
                body: 'Repairing disconnection & rebuilding trust.',
              },
              {
                title: 'Healing from Loss',
                body: 'Grief work for death, divorce, and major transitions.',
              },
              {
                title: 'Sexuality & Emotional Intimacy',
                body: 'Desire discrepancy, sexual difficulties, sexual enhancement.',
              },
              {
                title: 'Spirituality',
                body: 'Existential crises, faith exploration, interfaith relationships.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-display text-base font-semibold text-gold-500">{item.title}</h4>
                <p className="mt-3 text-sm text-ink-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESET & RECONNECT — full teal bg, white text */}
      <section className="bg-teal-500 py-20 text-white md:py-24">
        <div className="container-wide max-w-4xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-white/85">
            Ketamine Integrative Emotionally Focused Therapy:
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
            Reset &amp; Reconnect with Yourself &amp; with Your Loved Ones
          </h2>

          <h3 className="mt-10 font-display text-xl font-semibold text-white md:text-2xl">
            Sometimes, therapy alone is not enough…
          </h3>
          <p className="mt-4 text-white/90">
            Ketamine Integrative EFT is ushering in a new era in psychotherapy for individuals,
            couples, and families (18+). Exiting the pain of PTSD, depression, and anxiety no
            longer has to be hard or take so long. Pivoting into lasting change is more possible
            now than ever before.
          </p>

          <p className="mt-4 text-white/90">
            Our survival instincts are incredibly powerful. They activate protective perceptions
            and responses to defend against what we do not want. They are designed to be powerful
            to keep us alive. However, there is so much more to life than merely being alive.
          </p>

          <p className="mt-4 text-white/90">
            Developing the ability to consciously exit reactive trauma responses can free you to
            reroute your energy — your time, attention, physical strength, etc. — to focus on
            creating what you want. Rather than remaining stuck in defending against what you
            don&rsquo;t want, with the support of ketamine-assisted psychotherapy, you can develop
            the ability to consciously choose new response patterns to help you feel good to be
            alive.
          </p>

          <h3 className="mt-10 font-display text-xl font-semibold text-white md:text-2xl">
            Most Ketamine Therapists Are Only Trained to Work with Individuals…
          </h3>
          <p className="mt-4 text-white/90">
            As a relationship therapist certified in Emotionally Focused Therapy, who is also
            certified psychedelic-assisted psychotherapy, Dr. Gold has developed effective
            protocols for working with individuals, couples, and families with adult children
            integrating psychedelic medicine with the most effective trauma-informed and
            relational therapies.
          </p>

          <h3 className="mt-10 font-display text-xl font-semibold text-white md:text-2xl">
            You Are Not Your Trauma
          </h3>
          <p className="mt-4 text-white/90">
            You are not your trauma. Your past does not have to define your future. With the
            right support, you can exit the old painful patterns and shift into creating the love
            and life you desire.
          </p>
          <p className="mt-4 text-white/90">
            It would be my honor to support you with this process.
          </p>

          <div className="mt-10">
            <Image
              src="/img/dr-lisa-gold-signature.svg"
              alt="Dr. Lisa Gold signature"
              width={180}
              height={90}
              className="h-auto w-[140px] brightness-0 invert"
            />
          </div>
        </div>
      </section>

      {/* HOW CAN I HELP YOU — CTA trio + dual tan/teal therapist blocks */}
      <section className="bg-cream-100 py-16 md:py-20">
        <div className="container-wide text-center">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-500">
            How can I help you?
          </p>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Schedule a Consult
            </Link>
            <Link href="/for-practitioners/training" className="btn-gold">
              Therapist Training
            </Link>
            <Link href="/psychotherapy" className="btn-gold">
              Psychotherapy for Clients
            </Link>
          </div>
        </div>

        <div className="container-wide mt-14 grid gap-0 md:grid-cols-2">
          <div className="rounded-l-lg bg-gold-400 p-10 text-white">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
              Do You Already Have a Therapist?
            </h3>
            <p className="mt-4 text-white/90">
              Dr. Gold will collaborate with your therapist to integrate the 6 foundational
              sessions of ketamine with your existing treatment plan — so your primary
              therapeutic relationship stays intact.
            </p>
          </div>
          <div className="rounded-r-lg bg-teal-500 p-10 text-white">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
              Are You a Therapist?
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Learn to effectively integrate ketamine-assisted psychotherapy with your client&rsquo;s
              treatment plan.
            </p>
            <p className="mt-4 font-semibold text-white">Collaborate with Dr. Gold:</p>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li className="icon-bullet-gold icon-bullet">
                Refer your client to her for 6 foundational sessions of ketamine
              </li>
              <li className="icon-bullet-gold icon-bullet">
                Co-create with her a plan for your client&rsquo;s KAP session preparation, facilitation,
                &amp; integration of KAP into your treatment with them
              </li>
              <li className="icon-bullet-gold icon-bullet">
                Continue working with your client after their two-week KAP treatment
              </li>
              <li className="icon-bullet-gold icon-bullet">
                Collaborate with Dr. Gold on your clients&rsquo; ongoing maintenance sessions (if
                needed)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-teal-500 md:text-2xl">
              Aspects of Other Models Integrated:
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Eye-Movement Desensitization Reprocessing (EMDR)',
                'Somatic Experiencing (SE)',
                'Internal Family Systems (IFS)',
                'Transpersonal',
              ].map((m) => (
                <li key={m} className="icon-bullet font-semibold text-navy-500">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-teal-500 md:text-2xl">
              Holistic Healing Modalities Integrated
              <span className="block text-sm font-normal text-ink-700">
                (according to clients&rsquo; needs and interests):
              </span>
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Meditation & Mindfulness',
                'Breath work',
                'Therapeutic Touch & Body work',
                'Muscle Activation and Movement',
                'Energy healing',
                'Guided Imagery',
                'Music',
                'Hypnotherapy',
              ].map((m) => (
                <li key={m} className="icon-bullet-gold icon-bullet text-navy-500">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
