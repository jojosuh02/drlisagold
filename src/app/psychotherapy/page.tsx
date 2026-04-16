import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PartnerCards } from '@/components/site/PartnerCards';

export const metadata = buildMetadata({
  title: 'Psychotherapy',
  description: 'Emotionally Focused Therapy, Integrative Ketamine-Assisted Psychotherapy, and Sex Therapy with Dr. Lisa Gold.',
  path: '/psychotherapy',
});

export default function PsychotherapyPage() {
  return (
    <>
      {/* TEAL HERO */}
      <section className="bg-teal-500 py-16 text-center text-white md:py-20">
        <div className="container-wide">
          <h1 className="font-display text-3xl font-semibold text-gold-400 md:text-5xl">
            Psychotherapy
          </h1>
          <p className="mt-4 text-sm italic text-white/90 md:text-base">
            *Only Provided in States Where Dr. Gold is Licensed
          </p>
          <p className="mt-2 text-sm text-white/90 md:text-base">
            Hawaii · Colorado · Arizona · Utah
          </p>
        </div>
      </section>

      {/* EFT HEADER */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl font-semibold text-teal-500 md:text-4xl">
            Emotionally Focused Therapy (EFT)
            <br />
            Integrative Ketamine-Assisted
            <br />
            Psychotherapy &amp; Sex Therapy
          </h2>
          <p className="mt-8 font-semibold text-navy-500">6 Session Foundational Protocol</p>
          <p className="text-sm text-ink-700">All Phases: Preparation, Facilitation &amp; Integration.</p>
          <p className="mt-6 font-semibold text-navy-500">Maintenance Sessions</p>
          <p className="text-sm text-ink-700">
            For anyone who has completed the 6-session foundational protocol with Dr. Gold or
            another therapist.
          </p>
        </div>
      </section>

      {/* INTEGRATING KETAMINE WITH EFT */}
      <section className="bg-white py-16">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/img/hero-beach-couple.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-500 md:text-3xl">
              Integrating Ketamine with Emotionally Focused Therapy
            </h2>
            <h3 className="mt-8 font-display text-lg font-semibold text-navy-500">
              Why EFT &amp; Ketamine?
            </h3>
            <p className="mt-4 text-sm text-ink-800">
              Both ketamine and EFT soften the negative neurophysiological patterns and reactive
              emotional defenses that result from insecure attachment and trauma. EFT accomplishes
              this through choreographed interventions employed by a skillful EFT therapist.
              Ketamine accomplishes this through the medical effect it has on the brain and nervous
              system. Integrating EFT and ketamine offers a synergistic effect that optimizes
              clients&rsquo; ability to exit the grip of negative patterns, far beyond what is
              possible with any model of therapy alone — including EFT.
            </p>
            <h3 className="mt-8 font-display text-lg font-semibold text-navy-500">
              How Does Ketamine Work?
            </h3>
            <p className="mt-4 text-sm text-ink-800">
              <strong>CLICK HERE</strong> to receive your free information guide: <em>Ketamine
              Curious: Understanding the Basics About Ketamine-Assisted Psychotherapy (KAP).</em>
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                required
                className="flex-1 rounded border border-gold-200 px-4 py-3 text-sm outline-none focus:border-gold-400"
              />
              <button type="submit" className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600">
                Get the Free Resource!
              </button>
            </form>
            <div className="mt-6">
              <Link href="/contact" className="btn-gold">
                Schedule a Consult
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK PRE-ORDER */}
      <section className="bg-navy-500 py-16 text-white">
        <div className="container-wide grid items-center gap-10 md:grid-cols-[220px_1fr] md:gap-14">
          <div className="mx-auto w-full max-w-[200px]">
            <Image
              src="/img/book-cover-ketamine-curious.webp"
              alt="Ketamine Curious"
              width={240}
              height={360}
              className="h-auto w-full rounded-sm shadow-2xl"
            />
          </div>
          <div>
            <p className="text-sm text-white/90">
              Pre-order your copy of the book: <strong>"Ketamine Curious: Your Ultimate Guide to Understanding Ketamine-Assisted Psychotherapy."</strong>
            </p>
            <p className="mt-4 text-sm text-white/90">
              Receive a limited-time pre-order discount of <strong>$15</strong> (retail price $25).
            </p>
            <div className="mt-6">
              <Link href="/shop/ketamine-curious-ebook" className="btn-gold">
                Pre-Order with Discount
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PSYCHEDELIC-ASSISTED PSYCHOTHERAPY */}
      <section className="bg-white py-16">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-500 md:text-3xl">
              Psychedelic-Assisted Psychotherapy
            </h2>
            <h3 className="mt-6 font-display text-xl font-semibold text-navy-500">
              A New Era in Psychotherapy
            </h3>
            <p className="mt-4 text-sm text-ink-800">
              We have officially entered a new era where mental and emotional health is more easily
              attainable than ever before. Psychedelic-assisted therapy is a game changer. It is
              the new generation of mental health treatment. It provides profound positive change
              more quickly and easily than established treatment models. It far exceeds what is
              possible with psychotherapy alone or commonly prescribed medications. Finally, people
              who have been unable to find relief from conventional treatment now have a highly
              effective treatment option.
            </p>
            <p className="mt-4 text-sm text-ink-800">
              Answers to FAQ about ketamine-assisted psychotherapy are shared in the free resource
              on which you clicked above.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/img/img-slider.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-wide mt-10">
          <h3 className="font-display text-xl font-semibold text-navy-500">
            Ketamine: The Foundational 6 Sessions &amp; Maintenance Sessions
          </h3>

          <h4 className="mt-6 font-display text-base font-semibold text-teal-500">
            All Phases of Treatment
          </h4>
          <ul className="mt-3 space-y-2">
            {['Preparation', 'Facilitation', 'Integration'].map((s) => (
              <li key={s} className="icon-bullet text-sm font-semibold text-navy-500">{s}</li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-base font-semibold text-teal-500">
            MDMA &amp; Psilocybin
          </h4>
          <ul className="mt-3 space-y-2">
            <li className="icon-bullet text-sm font-semibold text-navy-500">Preparation</li>
            <li className="icon-bullet text-sm font-semibold text-navy-500">
              Facilitation (*Only in Locations Where it is Legal)
            </li>
            <li className="icon-bullet text-sm font-semibold text-navy-500">Integration</li>
          </ul>

          <h4 className="mt-6 font-display text-base font-semibold text-teal-500">
            Ayahuasca, DMO, &amp; Other Plant Medicines
          </h4>
          <ul className="mt-3 space-y-2">
            <li className="icon-bullet text-sm font-semibold text-navy-500">Preparation Only</li>
            <li className="icon-bullet text-sm font-semibold text-navy-500">Integration Only</li>
          </ul>

          <h4 className="mt-6 font-display text-base font-semibold text-teal-500">
            Integrate KAP Into Your Work with Your Current Therapist
          </h4>
          <ul className="mt-3 space-y-2">
            {[
              'Benefit From Continuity Of Care With Your Current Therapist & Dr. Gold\u2019s KAP Expertise',
              'Complete KAP Preparation & Integration With Your Current Therapist In Collaboration With Dr. Gold',
              'Receive KAP Facilitation From Dr. Gold With The Support Of Your Current Therapist',
            ].map((item) => (
              <li key={item} className="icon-bullet-gold icon-bullet text-sm text-ink-800">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/contact" className="btn-gold">
              Click Here For More Information
            </Link>
          </div>
        </div>
      </section>

      {/* SEX THERAPY */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/img/hero-beach-couple.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-teal-500 md:text-3xl">
              Integrative Psychedelic-Assisted EFT Sex Therapy
            </h2>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy-500">
              Create, Heal, &amp; Enhance Sexual Intimacy.
            </h3>
            <h4 className="mt-6 font-display text-base font-semibold text-teal-500">
              Develop Secure Attachment as the Foundation for Pleasure and Sexual Connection.
            </h4>
            <p className="mt-3 text-sm text-ink-800">
              The quality of the attachment effects of ketamine uniquely serve to create an
              embodied sense of safety, creating a new baseline as a somatic safe haven. This safe
              haven then serves as a secure base from which to explore and fulfill what you are
              needing in order to create the intimate connection you desire with yourself and your
              partner.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { t: 'Sexual Dysfunction', b: 'erectile dysfunction, arousal and desire disorders, desire discrepancy, dyspareunia, vaginismus, anorgasmia.' },
                { t: 'Rebuilding Trust', b: 'infidelity, other betrayals or breaches of trust.' },
                { t: 'Integrated Intimacy', b: 'Effectively Using Touch to Create Safety, Express Love & Desire, Experience Pleasure, Enhance Playfulness, and Co-Creating Meaningful Connection.' },
                { t: 'Sexuality & Spirituality', b: 'Integrating spirituality as an important dimension of sexuality. Respectfully honoring & working with clients\u2019 belief systems, traditions, and meaning making.' },
              ].map((item) => (
                <li key={item.t} className="icon-bullet-gold icon-bullet">
                  <strong className="text-navy-500">{item.t}:</strong>{' '}
                  <span className="text-sm text-ink-800">{item.b}</span>
                </li>
              ))}
            </ul>
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
