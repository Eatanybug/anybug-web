import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">{subtitle}</p>}
      {children}
    </div>
  );
}

/** Palabra resaltada con fondo de marca, estilo "sticker". */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-brand px-2 py-0.5 text-neutral-900 decoration-clone">
      {children}
    </span>
  );
}
