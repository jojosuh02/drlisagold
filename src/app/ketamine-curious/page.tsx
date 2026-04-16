import { buildMetadata } from '@/lib/seo';
import { KetamineCuriousForm } from './form';
import { PartnerCards } from '@/components/site/PartnerCards';

export const metadata = buildMetadata({
  title: 'Ketamine Curious',
  description: 'Sign up and get a $15 OFF coupon delivered to your inbox for the Ketamine Curious online course.',
  path: '/ketamine-curious',
});

export default function KetamineCuriousPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-teal-500 py-20 text-white md:py-28">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10"
          aria-hidden
        >
          <div className="aspect-square h-[140%] rounded-full border-[24px] border-white" />
        </div>
        <div className="container-wide relative text-center">
          <h1 className="font-display text-3xl font-semibold text-gold-400 md:text-5xl">
            Ketamine Curious Online Course
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/95 md:text-lg">
            Sign up and get a $15 OFF COUPON delivered right to your email inbox.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <KetamineCuriousForm />
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
