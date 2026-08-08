import Image from "next/image";

type LifestyleBandProps = {
  src: string;
  alt: string;
  caption?: string;
  imgClassName?: string;
  objectPosition?: string;
  /** Imagen alternativa (vertical) para móvil; si no se indica, usa src. */
  mobileSrc?: string;
  /** Aplica el velo "ai-veil" (grano/viñeta/blur) para disimular imágenes IA. */
  veil?: boolean;
  /** Clases del degradado sobre la imagen (para legibilidad del caption). */
  overlayClassName?: string;
};

export function LifestyleBand({
  src,
  alt,
  caption,
  imgClassName,
  objectPosition,
  mobileSrc,
  veil = true,
  overlayClassName = "bg-gradient-to-t from-black/60 via-black/25 to-black/30",
}: LifestyleBandProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[600px] w-full overflow-hidden">
      <div className={`${veil ? "ai-veil " : ""}absolute inset-0`}>
        {mobileSrc ? (
          <>
            <Image
              src={mobileSrc}
              alt={alt}
              fill
              className={`object-cover object-center sm:hidden ${imgClassName ?? ""}`}
              sizes="100vw"
            />
            <Image
              src={src}
              alt={alt}
              fill
              className={`hidden object-cover sm:block ${imgClassName ?? ""}`}
              style={objectPosition ? { objectPosition } : undefined}
              sizes="100vw"
            />
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${imgClassName ?? ""}`}
            style={objectPosition ? { objectPosition } : undefined}
            sizes="100vw"
          />
        )}
      </div>
      <div className={`absolute inset-0 ${overlayClassName}`} />
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
