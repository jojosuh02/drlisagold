'use client';

import { useState } from 'react';

type LeadCaptureProps = {
  title: string;
  body?: string;
  listId: string;
  buttonLabel?: string;
  successMessage?: string;
};

export function LeadCapture({
  title,
  body,
  listId,
  buttonLabel = 'Get Access',
  successMessage = "Thanks! Check your inbox — your resource is on the way.",
}: LeadCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, listId }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <section className="my-16 rounded-3xl bg-gradient-to-br from-gold-50 to-cream-100 p-8 md:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mt-0 text-gold-800">{title}</h3>
        {body && <p className="mt-4 text-ink-700">{body}</p>}
        {status === 'success' ? (
          <p className="mt-6 font-medium text-turquoise-700">{successMessage}</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor={`email-${listId}`}>
              Email address
            </label>
            <input
              id={`email-${listId}`}
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-gold-200 bg-white px-5 py-3 text-sm outline-none ring-gold-400 focus:ring-2"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-gold-600 disabled:opacity-60"
            >
              {status === 'submitting' ? '...' : buttonLabel}
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
    </section>
  );
}
