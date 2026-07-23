import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { hero } from "@/lib/content";

export function Hero() {
  const hasVideo = fs.existsSync(path.join(process.cwd(), "public", hero.video));
  return (
    <section className="relative flex min-h-[92vh] overflow-hidden bg-neutral-200 md:min-h-[88vh]">
      {/* Background: image (always visible) + video overlay when present + slow zoom */}
      <div className="absolute inset-0 z-0">
        <div
          className="hero-media absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.poster})` }}
        />
        {/* Drop your file at public/hero/hero.mp4 to show a real background video */}
        {hasVideo && (
          <video
            className="hero-media absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}
        {/* Scrims for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/25 to-transparent" />
      </div>

      <div className="container-page relative z-10 flex w-full flex-col justify-between gap-5 pb-12 pt-6 sm:pb-16 sm:pt-10 md:pb-20 md:pt-14">
        {/* Top corner: slogan only */}
        <div className="hero-enter">
          <h1 className="font-serif text-4xl font-normal uppercase leading-[0.98] tracking-tight text-neutral-900 sm:text-5xl lg:text-7xl">
            {hero.display}
          </h1>
        </div>

        {/* Bottom: text lines above the card, then the card */}
        <div className="hero-enter mt-auto flex w-full max-w-xl flex-col items-start gap-4 sm:max-w-2xl">
          {/* Text lines (outside the box, just above it) */}
          <div className="flex flex-col gap-2.5 [text-shadow:0_1px_12px_rgba(255,255,255,0.85)]">
            <p className="max-w-xl font-serif text-lg font-normal leading-snug text-neutral-900 sm:text-xl">
              {hero.eyebrow}
            </p>

            <p className="font-serif text-xl font-bold leading-snug text-neutral-900 sm:text-2xl">
              {hero.title}
            </p>
          </div>

          {/* Card: badges + CTAs */}
          <div className="flex w-full flex-col items-start gap-5 rounded-3xl bg-white/80 p-5 backdrop-blur-sm ring-1 ring-white/60 shadow-md sm:p-6 md:gap-6 md:bg-white/60">
          <ul className="flex flex-wrap gap-2">
            {hero.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-neutral-900/25 bg-white/80 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-800 backdrop-blur"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row md:pt-2">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-neutral-900/20 bg-white/80 px-8 py-3.5 text-base font-semibold text-neutral-900 backdrop-blur transition hover:border-neutral-900"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
