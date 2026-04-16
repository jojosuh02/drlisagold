'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
      honeypot: String(formData.get('company') ?? ''),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json())?.error ?? 'Request failed');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="not-prose my-8 rounded-2xl border border-turquoise-500 bg-turquoise-500/10 p-8 text-center">
        <h3 className="mt-0 text-turquoise-700">Thank you!</h3>
        <p className="mt-3 text-ink-700">
          Your message is on its way to Dr. Gold. She&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="not-prose mt-8 space-y-4">
      <input
        type="text"
        name="company"
        aria-hidden
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-gold-200 bg-white px-4 py-2.5 outline-none ring-gold-400 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gold-200 bg-white px-4 py-2.5 outline-none ring-gold-400 focus:ring-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-800">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-1 w-full rounded-lg border border-gold-200 bg-white px-4 py-2.5 outline-none ring-gold-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-lg border border-gold-200 bg-white px-4 py-2.5 outline-none ring-gold-400 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
