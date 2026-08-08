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

    if (reduce) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    // Revelado basado en scroll: robusto en cualquier dispositivo y con
    // cualquier tipo de scroll. Garantiza que el contenido nunca se quede
    // invisible (a diferencia de un IntersectionObserver que puede no
    // dispararse en algunos navegadores móviles).
    let pending = [...targets];
    let raf = 0;

    const check = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      pending = pending.filter((t) => {
        const rect = t.getBoundingClientRect();
        // Visible si el borde superior ya entró (con un pequeño margen) y aún
        // no ha salido por completo por arriba.
        if (rect.top < vh * 0.9 && rect.bottom > 0) {
          t.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (pending.length === 0) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(check);
    };

    check(); // revela lo que ya esté en pantalla al cargar
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Red de seguridad: por si algo impide el scroll, revela todo pasado un
    // tiempo prudencial para que nunca quede contenido oculto.
    const safety = window.setTimeout(() => {
      pending.forEach((t) => t.classList.add("is-visible"));
      pending = [];
    }, 2500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
