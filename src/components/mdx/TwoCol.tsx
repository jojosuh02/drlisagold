import Image from 'next/image';

type TwoColProps = {
  image: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  tone?: 'light' | 'cream';
  children: React.ReactNode;
};

const toneMap = {
  light: 'bg-white',
  cream: 'bg-cream-100',
};

export function TwoCol({
  image,
  imageAlt = '',
  imagePosition = 'left',
  tone = 'light',
  children,
}: TwoColProps) {
  const imageClass = imagePosition === 'right' ? 'md:order-2' : '';
  return (
    <section className={`${toneMap[tone]} py-16`}>
      <div className="container-wide grid items-center gap-12 md:grid-cols-2">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${imageClass}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
