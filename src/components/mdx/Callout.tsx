type CalloutProps = {
  title?: string;
  tone?: 'note' | 'warn' | 'highlight';
  children: React.ReactNode;
};

const toneMap = {
  note: 'border-gold-200 bg-gold-50 text-ink-800',
  warn: 'border-amber-300 bg-amber-50 text-amber-900',
  highlight: 'border-turquoise-500 bg-turquoise-500/10 text-ink-800',
};

export function Callout({ title, tone = 'note', children }: CalloutProps) {
  return (
    <aside className={`my-8 rounded-xl border-l-4 px-6 py-4 ${toneMap[tone]}`}>
      {title && <p className="mb-1 font-display text-lg">{title}</p>}
      <div className="text-base leading-relaxed">{children}</div>
    </aside>
  );
}
