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
    }, 2000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="scale-[1.03] object-cover"
          />
        </div>
      ))}

      {/* Degradado oscuro solo a la izquierda/abajo: producto nítido a la derecha
          y texto blanco legible en cualquier fondo (claro u oscuro) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
    </div>
  );
}
