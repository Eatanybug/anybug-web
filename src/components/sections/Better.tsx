import { better } from "@/lib/content";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  // Sin pesadez estomacal (digestion / leaf)
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>,
  // Alimento del futuro (sostenible / globo)
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>,
  // Altas en proteina (energia / rayo)
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  </svg>,
  // Harina de grillo (chispa / natural)
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>,
];

export function Better() {
  return (
    <section id={better.id} className="section bg-white">
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading
          title={
            <>
              {better.headingPre}
              <Highlight>{better.headingHighlight}</Highlight>
              {better.headingPost}
            </>
          }
        >
          <div className="mt-2 flex flex-col gap-3">
            {better.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg font-semibold text-neutral-900"
                    : "text-base leading-relaxed text-neutral-600"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </SectionHeading>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {better.features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-neutral-900 [&>svg]:h-6 [&>svg]:w-6">
                {icons[i % icons.length]}
              </span>
              <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-neutral-800">{feature.lead}</p>
              <p className="text-sm text-neutral-500">{feature.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
