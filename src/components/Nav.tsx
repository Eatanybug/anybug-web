"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";
import { useCart } from "@/components/cart/CartProvider";
import { AnybugLogo } from "@/components/AnybugLogo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { cart, open: openCart } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <nav className="container-page flex h-20 items-center justify-between md:h-24">
        {/* Logo */}
        <Link
          href="/"
          aria-label="AnyBug - inicio"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <AnybugLogo className="h-10 w-auto text-white sm:h-12" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-white/80 transition hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative rounded-full p-2.5 text-white transition hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" strokeLinejoin="round" />
              <path d="M3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-bold text-black">
                {count}
              </span>
            )}
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={"Men\u00fa"}
            aria-expanded={open}
            className="rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 md:hidden ${
          open ? "max-h-72" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium uppercase tracking-wide text-white/90 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
