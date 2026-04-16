import Image from 'next/image';

const LOCATIONS = [
  { name: 'Sedona, Arizona', img: '/img/retreat-sedona.jpeg' },
  { name: 'Barcelona, Spain', img: '/img/retreat-barcelona.jpeg' },
  { name: 'Salt Lake City, Utah', img: '/img/retreat-salt-lake.jpeg' },
  { name: 'St. Augustine, Florida', img: '/img/retreat-st-augustine.jpeg' },
];

export function LocationGrid() {
  return (
    <div className="not-prose mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {LOCATIONS.map((loc) => (
        <div key={loc.name} className="group overflow-hidden rounded-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={loc.img}
              alt={loc.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-500/80 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-display text-sm font-semibold text-white">{loc.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
