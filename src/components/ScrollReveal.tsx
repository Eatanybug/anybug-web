"use client";

import { useEffect } from "react";

/**
 * Adds a smooth "appear on scroll" effect (fade + slide up) to every section
 * below the hero, and staggers grid/list items inside each section.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    ).slice(1);

    const targets: HTMLElement[] = [];

    sections.forEach((section) => {
      const groups = section.querySelectorAll<HTMLElement>(
        ".grid, tbody, [data-stagger]",
      );

      if (groups.length > 0) {
        section.classList.add("reveal");
        targets.push(section);
        groups.forEach((group) => {
          Array.from(group.children).forEach((child, i) => {
            const el = child as HTMLElement;
            el.classList.add("reveal");
            el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
            targets.push(el);
          });
        });
      } else {
        section.classList.add("reveal");
        targets.push(section);
      }
    });

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  return null;
}
