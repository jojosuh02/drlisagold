import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-wide flex flex-col items-center py-32 text-center">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-600">Lost?</p>
      <h1 className="mt-4">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-700">
        The page you&rsquo;re looking for may have moved. Return home to find your way.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
