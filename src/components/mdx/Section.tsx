type SectionProps = {
  tone?: 'light' | 'cream' | 'dark' | 'gold';
  children: React.ReactNode;
};

const toneMap = {
  light: 'bg-white',
  cream: 'bg-cream-100',
  dark: 'bg-ink-900 text-cream-100',
  gold: 'bg-gold-50',
};

export function Section({ tone = 'light', children }: SectionProps) {
  return (
    <section className={`${toneMap[tone]} py-16 md:py-20`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}
