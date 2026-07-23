"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={faq.id} className="section bg-black text-white">
      <div className="container-page flex flex-col items-center gap-10">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            {faq.title}
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="text-base leading-relaxed text-neutral-400">{faq.subtitle}</p>
        </div>

        <div className="w-full max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold sm:text-lg">{item.q}</span>
                  <span
                    className={`flex-none text-brand transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="whitespace-pre-line text-[15px] leading-relaxed text-neutral-300">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
