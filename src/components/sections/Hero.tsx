import { hero } from "@/lib/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

const heroSlides = [
  {
    src: "/hero/hero-hand-wide.png",
    mobileSrc: "/lifestyle/aes-run-hand.png",
    alt: "Mano sujetando una barrita AnyBug Brownie & Dates tras salir a correr",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[72vh] flex-col overflow-hidden bg-neutral-200 md:min-h-[68vh]">
      {/* Fondo: carrusel de imágenes (deporte + producto) con velo difuminado */}
      <HeroCarousel slides={heroSlides} />

      <div className="container-page relative z-10 flex w-full flex-1 flex-col justify-between gap-5 pb-8 pt-6 sm:pb-10 sm:pt-10 md:pb-14 md:pt-14">
        {/* Top corner: slogan only */}
        <div className="hero-enter">
          <h1 className="font-serif text-4xl font-normal uppercase leading-[0.98] tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-7xl">
            {hero.display}
          </h1>
        </div>

        {/* Bottom: text lines above the card, then the card */}
        <div className="hero-enter mt-auto flex w-full max-w-xl flex-col items-start gap-4 sm:max-w-2xl">
          {/* Text lines (outside the box, just above it) */}
          <div className="flex flex-col gap-2.5 [text-shadow:0_1px_16px_rgba(0,0,0,0.6)]">
            <p className="max-w-xl font-serif text-lg font-normal leading-snug text-white/90 sm:text-xl">
              {hero.eyebrow}
            </p>

            <p className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
              {hero.title}
            </p>
          </div>

          {/* CTAs (clean over the image, no card) */}
          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
            <CtaButton href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Full-width ribbon strip with the badges, dot-separated */}
      <div className="relative z-10 w-full border-t border-neutral-900/10 bg-brand">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 sm:gap-x-6 sm:text-xs">
          {hero.badges.map((badge, i) => (
            <li key={badge} className="flex items-center gap-x-4 sm:gap-x-6">
              {i > 0 && (
                <span aria-hidden className="text-neutral-900/40">
                  &middot;
                </span>
              )}
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
