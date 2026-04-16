type FeatureCardProps = {
  title: string;
  body: string;
};

export function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gold-100 bg-white p-6">
      <h4 className="mt-0 font-display text-lg text-gold-800">{title}</h4>
      <p className="mt-2 text-sm text-ink-700">{body}</p>
    </div>
  );
}
