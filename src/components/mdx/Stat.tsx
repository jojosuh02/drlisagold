type StatProps = {
  value: string;
  label: string;
};

export function Stat({ value, label }: StatProps) {
  return (
    <div className="rounded-2xl bg-gold-50 p-6 text-center">
      <div className="font-display text-4xl text-gold-700">{value}</div>
      <div className="mt-2 text-sm uppercase tracking-wide text-ink-600">{label}</div>
    </div>
  );
}
