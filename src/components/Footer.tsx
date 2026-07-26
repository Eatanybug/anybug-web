import Link from "next/link";
import { footer, site } from "@/lib/content";
import { AnybugLogo } from "@/components/AnybugLogo";

export function Footer() {
  return (
    <footer className="mt-auto bg-black text-neutral-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <AnybugLogo className="h-8 w-auto text-white" />
          <p className="mt-4 max-w-xs text-sm text-neutral-400">{footer.tagline}</p>
          {footer.social && footer.social.length > 0 && (
            <div className="mt-5 flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-neutral-300 transition hover:border-white hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {footer.contact && (
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              {footer.contact.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-sm text-neutral-400 transition hover:text-white"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.contact.phoneHref}`}
                  className="text-sm text-neutral-400 transition hover:text-white"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={footer.contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 transition hover:text-white"
                >
                  Instagram {footer.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-neutral-500 sm:flex-row">
          <span>{footer.legal}</span>
          <span>{site.name}</span>
        </div>
      </div>

      {/* Wordmark tipográfico gigante, guiño de marca al pie */}
      <div className="overflow-hidden px-3 sm:px-6" aria-hidden>
        <AnybugLogo className="block h-auto w-full text-brand/10" />
      </div>
    </footer>
  );
}
