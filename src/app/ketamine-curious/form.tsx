'use client';

import { useState } from 'react';

export function KetamineCuriousForm() {
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
        body: JSON.stringify({ email, listId: 'ketamine-curious-$15' }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <p className="rounded-full bg-white/95 px-6 py-4 text-center font-semibold text-teal-700">
        Check your inbox — your $15 off code is on the way.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="kc-email">
        Email
      </label>
      <input
        id="kc-email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-md border-0 bg-white px-5 py-4 text-base text-ink-900 placeholder-ink-500 outline-none ring-2 ring-white focus:ring-gold-400"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-md bg-gold-400 px-8 py-4 text-base font-semibold text-white transition hover:bg-gold-500 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Get The CODE'}
      </button>
      {error && <p className="text-sm text-white/90">{error}</p>}
    </form>
  );
}
