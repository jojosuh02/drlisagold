type ListProps = {
  items: string[];
  columns?: 1 | 2 | 3;
};

export function List({ items, columns = 2 }: ListProps) {
  const colClass = columns === 3 ? 'md:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : '';
  return (
    <ul className={`mt-6 grid gap-3 ${colClass}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-gold-100 bg-white px-4 py-3 text-ink-700"
        >
          <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gold-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
