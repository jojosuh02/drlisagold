import { buildMetadata } from '@/lib/seo';
import { ContactForm } from '@/components/ContactForm';
import { PartnerCards } from '@/components/site/PartnerCards';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Reach out to Dr. Lisa Gold — schedule a consult, ask about training, or inquire about retreats.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide max-w-3xl text-center">
          <h1 className="font-display text-3xl font-semibold text-gold-500 md:text-4xl">
            Contact
          </h1>
          <p className="mt-6 text-lg text-ink-800">Get in touch today!</p>
          <p className="mt-2 text-ink-700">
            Connect with me! I&rsquo;m here to support you!
          </p>
          <div className="mt-10 text-left">
            <ContactForm />
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
