import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-page flex flex-col items-center gap-10">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />

        <div className="grid w-full gap-5 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl bg-cream p-6 ring-1 ring-neutral-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-0.5 text-brand" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.9 6.26 6.85.72-5.1 4.62 1.44 6.72L12 17.9 5.9 20.34l1.44-6.72-5.1-4.62 6.85-.72L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-neutral-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-700 ring-1 ring-neutral-100">
                {t.result}
              </div>
              <figcaption className="text-sm">
                <span className="font-semibold text-neutral-900">{t.name}</span>
                <span className="text-neutral-500"> &mdash; {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
