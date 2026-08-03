import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/lib/content";
import { renderInline } from "@/lib/richText";
import { CtaButton } from "@/components/ui/CtaButton";
import { LifestyleBand } from "@/components/sections/LifestyleBand";

export const metadata: Metadata = {
  title: "Nosotros",
  description: about.intro,
};

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-page flex flex-col gap-5 py-20 md:py-28">
          <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            {about.eyebrow}
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-normal uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {about.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {about.intro}
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section bg-white">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {about.story.title}
            </h2>
            <div className="ai-veil relative aspect-[4/5] w-full max-w-[280px] mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <Image
                src="/lifestyle/lifestyle-tote.png"
                alt="Barrita AnyBug en un tote bag de pádel"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {about.story.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {renderInline(p, `story-${i}`)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Quién está detrás */}
      <section className="section bg-cream">
        <div className="container-page flex flex-col gap-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {about.founder.title}
          </h2>
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              {about.founder.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {renderInline(p, `founder-${i}`)}
                </p>
              ))}
            </div>
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="ai-veil relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl">
                <Image
                  src="/lifestyle/anybug-founder-gym.png"
                  alt="Fundadora de AnyBug con una barrita en el gimnasio"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
                <div className="pointer-events-none absolute inset-0 z-[3] bg-cream/45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo se fabrica */}
      <section className="section bg-white">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {about.making.title}
            </h2>
            <div className="ai-veil relative aspect-[4/5] w-full max-w-[280px] mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <Image
                src="/lifestyle/lifestyle-bag.png"
                alt="Barrita AnyBug en un tote con pelotas de pádel"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {about.making.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {renderInline(p, `making-${i}`)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream">
        <div className="container-page grid grid-cols-2 gap-4 py-14 sm:gap-6 lg:grid-cols-4">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 rounded-2xl bg-white px-6 py-8 text-center ring-1 ring-neutral-100"
            >
              <span className="font-serif text-4xl font-bold text-neutral-900">{s.value}</span>
              <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-white">
        <div className="container-page flex flex-col gap-10">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Lo que defendemos
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-cream p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-wide text-neutral-900">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle band */}
      <LifestyleBand
        src="/lifestyle/gym-stack.png"
        alt="Barrita AnyBug apilada en un banco de gimnasio"
        caption="Comida real que aguanta el ritmo. Dentro y fuera del gym."
        imgClassName="scale-105 blur-[3px]"
        objectPosition="center 60%"
      />

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="container-page flex flex-col items-center gap-5 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.cta.title}
          </h2>
          <p className="max-w-xl text-neutral-300">{about.cta.text}</p>
          <CtaButton href={about.cta.primary.href} variant="primary">
            {about.cta.primary.label}
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
