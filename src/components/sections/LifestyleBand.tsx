import Image from "next/image";

type LifestyleBandProps = {
  src: string;
  alt: string;
  caption?: string;
  imgClassName?: string;
  objectPosition?: string;
};

export function LifestyleBand({
  src,
  alt,
  caption,
  imgClassName,
  objectPosition,
}: LifestyleBandProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[600px] w-full overflow-hidden">
      <div className="ai-veil absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imgClassName ?? ""}`}
          style={objectPosition ? { objectPosition } : undefined}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
      {caption && (
        <div className="container-page relative z-10 flex h-full items-end pb-12">
          <p className="max-w-xl font-serif text-2xl font-normal uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {caption}
          </p>
        </div>
      )}
    </section>
  );
}
