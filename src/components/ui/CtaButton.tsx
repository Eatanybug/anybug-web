import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

/**
 * Botón pill reutilizable con insignia circular y flecha (↗).
 * Estilo inspirado en la referencia, adaptado a la identidad de AnyBug.
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-base font-semibold transition sm:pl-8";

  const surface =
    variant === "primary"
      ? "bg-black text-white shadow-lg hover:bg-neutral-800"
      : "border border-neutral-900/20 bg-cream text-neutral-900 shadow-sm hover:border-neutral-900 hover:bg-white";

  const badge =
    variant === "primary" ? "bg-brand text-black" : "bg-black text-white";

  return (
    <Link href={href} className={`${base} ${surface} ${className}`}>
      <span>{children}</span>
      <span
        aria-hidden
        className={`flex h-9 w-9 flex-none items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${badge}`}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </span>
    </Link>
  );
}
