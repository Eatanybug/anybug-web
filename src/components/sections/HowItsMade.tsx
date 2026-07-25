import { howItsMade } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItsMade() {
  return (
    <section className="section bg-white">
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow={howItsMade.eyebrow}
          title={howItsMade.title}
          subtitle={howItsMade.subtitle}
        />

        <div className="grid w-full gap-5 md:grid-cols-3">
          {howItsMade.steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand font-serif text-xl font-bold text-black">
                  {step.n}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-neutral-900">
                  {step.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                {step.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-none text-brand"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {step.chips && step.chips.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {step.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-neutral-900/15 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
