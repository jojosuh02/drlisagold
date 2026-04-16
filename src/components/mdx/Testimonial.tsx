type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <figure className="my-12 rounded-2xl border border-gold-100 bg-white p-8 md:p-10">
      <blockquote className="font-display text-xl italic leading-relaxed text-ink-800 md:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm text-ink-600">
        <span className="font-semibold text-gold-700">{author}</span>
        {role && <span className="text-ink-500"> · {role}</span>}
      </figcaption>
    </figure>
  );
}
