"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

/**
 * Carrusel de fondo del hero: cruza suavemente entre imágenes de deporte
 * y de producto, con un velo difuminado (frost) encima para que el texto
 * oscuro siga siendo legible. Respeta prefers-reduced-motion.
 */
export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="scale-110 object-cover blur-md brightness-105"
          />
        </div>
      ))}

      {/* Velo difuminado + degradados para legibilidad del texto */}
      <div className="absolute inset-0 bg-white/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/45 to-white/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-transparent" />
    </div>
  );
}
