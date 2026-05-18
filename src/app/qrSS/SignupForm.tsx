'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type ListKey = 'retreats' | 'trainings' | 'general';

const LISTS: { key: ListKey; label: string; blurb: string }[] = [
  {
    key: 'retreats',
    label: 'Retreats',
    blurb: 'Upcoming retreats and immersive experiences led by Dr. Gold.',
  },
  {
    key: 'trainings',
    label: 'Therapist Training',
    blurb:
      'KAP foundational + advanced training, certification, and consultation opportunities for licensed clinicians.',
  },
  {
    key: 'general',
    label: 'General News',
    blurb:
      "Books, talks, and occasional updates from Dr. Gold's practice and writing.",
  },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [selected, setSelected] = useState<Set<ListKey>>(new Set());
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function toggle(key: ListKey) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (selected.size === 0) {
      setErrorMessage('Pick at least one topic so we know what to send you.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/qr-signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          lists: Array.from(selected),
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Request failed (${res.status})`);
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-gold-200 bg-gold-50 p-8 text-center md:p-12">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600" aria-hidden />
        <h2 className="mt-4 font-display text-2xl text-gold-800 md:text-3xl">
          You're on the list.
        </h2>
        <p className="mt-3 text-base text-ink-700">
          Thanks - we'll only email you about the topics you picked. You can
          unsubscribe any time from a link in the footer of any email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="font-display text-xl text-gold-800 md:text-2xl">
          Pick your topics (select all that apply)
        </legend>
        <div className="space-y-3">
          {LISTS.map((opt) => {
            const checked = selected.has(opt.key);
            return (
              <label
                key={opt.key}
                className={
                  'flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-4 transition md:p-5 ' +
                  (checked
                    ? 'border-gold-500 bg-gold-50 shadow-sm'
                    : 'border-gold-100 hover:border-gold-300')
                }
              >
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-gold-600"
                  checked={checked}
                  onChange={() => toggle(opt.key)}
                />
                <span>
                  <span className="block font-display text-lg font-semibold text-navy-500">
                    {opt.label}
                  </span>
                  <span className="mt-1 block text-sm text-ink-700">
                    {opt.blurb}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-700"
          >
            First name (optional)
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1.5 block w-full rounded-full border border-gold-200 bg-white px-5 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 block w-full rounded-full border border-gold-200 bg-white px-5 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
          />
        </div>
      </div>

      {errorMessage && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Adding you to the list...' : 'Subscribe'}
      </button>
    </form>
  );
}
