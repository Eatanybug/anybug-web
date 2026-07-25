import { nutritionHighlights } from "@/lib/content";

export function NutritionHighlights() {
  return (
    <section className="border-y border-neutral-200 bg-white py-14">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {nutritionHighlights.title}
        </h2>

        <ul className="flex flex-wrap items-center justify-center gap-2.5">
          {nutritionHighlights.items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-900/10 bg-cream px-3.5 py-1.5 text-sm font-medium text-neutral-800"
            >
              <svg
                className="h-3.5 w-3.5 flex-none text-brand"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <svg
            className="h-3.5 w-3.5 flex-none text-neutral-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          </svg>
          <span>{nutritionHighlights.note}</span>
        </p>
      </div>
    </section>
  );
}
