"use client";

import { useState } from "react";
import Link from "next/link";
import { newsletter } from "@/lib/content";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: conectar con proveedor de email (Mailchimp/Brevo/Shopify) cuando esté listo.
    setSent(true);
  }

  return (
    <section className="bg-black text-white">
      <div className="container-page flex flex-col items-center gap-5 py-16 text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {newsletter.title}
        </h2>
        <p className="max-w-xl text-neutral-300">{newsletter.subtitle}</p>

        {sent ? (
          <p className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-black">
            {newsletter.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base text-white placeholder:text-neutral-400 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-black transition hover:brightness-95"
            >
              {newsletter.cta}
            </button>
          </form>
        )}

        <p className="max-w-md text-xs text-neutral-500">
          Al apuntarte aceptas nuestra{" "}
          <Link href="/privacy-policy" className="underline hover:text-neutral-300">
            Política de privacidad
          </Link>
          . Puedes darte de baja cuando quieras.
        </p>
      </div>
    </section>
  );
}
