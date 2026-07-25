"use client";

import { useEffect, useRef, useState } from "react";
import { nutritionStats } from "@/lib/content";

function formatNumber(n: number, decimals: number) {
  return n.toFixed(decimals).replace(".", ",");
}

/** Número que cuenta desde 0 hasta su valor final al entrar en pantalla. */
function CountUp({
  value,
  decimals,
  suffix,
  active,
  reduce,
}: {
  value: number;
  decimals: number;
  suffix: string;
  active: boolean;
  reduce: boolean;
}) {
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!active) return;

    let raf = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduce, value]);

  return (
    <span>
      {formatNumber(display, decimals)}
      {suffix}
    </span>
  );
}

export function NutritionStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);

    if (mq.matches || !("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
      <div className="container-page flex flex-col items-center gap-12">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {nutritionStats.title}
        </h2>

        <div
          ref={ref}
          className="grid w-full grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4"
        >
          {nutritionStats.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="relative flex h-24 items-center justify-center">
                {/* Forma de acento amarilla detrás del número */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -z-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[38%] bg-brand/30 sm:h-24 sm:w-24"
                />
                <span className="relative z-10 font-serif text-6xl font-bold leading-none tracking-tight text-neutral-900 sm:text-7xl">
                  {item.animate ? (
                    <CountUp
                      value={item.value}
                      decimals={item.decimals}
                      suffix={item.suffix}
                      active={active}
                      reduce={reduce}
                    />
                  ) : (
                    item.display
                  )}
                </span>
              </div>
              <span className="max-w-[18ch] text-sm font-medium uppercase tracking-wide text-neutral-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <svg
            className="h-3.5 w-3.5 flex-none text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>{nutritionStats.note}</span>
        </p>
      </div>
    </section>
  );
}
