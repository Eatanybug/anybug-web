import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section id={benefits.id} className="section bg-white">
      <div className="container-page flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          subtitle={benefits.subtitle}
        />

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {benefits.items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-cream px-3 py-7 text-center ring-1 ring-neutral-100 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-brand"
            >
              <span className="font-serif text-4xl font-bold leading-none text-neutral-900">
                {item.factor}
                <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-brand align-super" />
              </span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-neutral-900">
                {item.name}
              </span>
              <span className="text-xs leading-snug text-neutral-500">{item.vs}</span>
            </div>
          ))}
        </div>

        {benefits.footnote && (
          <p className="max-w-3xl text-center text-xs text-neutral-400">{benefits.footnote}</p>
        )}
      </div>
    </section>
  );
}
