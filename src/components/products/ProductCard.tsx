"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { DisplayProduct } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";

export function ProductCard({ product }: { product: DisplayProduct }) {
  const { addItem, loading, configured } = useCart();
  const isAvailable = product.status === "available";
  const canBuy = configured && isAvailable && Boolean(product.variantId);
  const gallery = product.images?.length ? product.images : [product.image];
  const [index, setIndex] = useState(0);
  const href = `/tienda/${product.handle}`;

  useEffect(() => {
    setIndex(0);
  }, [product.handle, gallery.length]);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-cream sm:aspect-square">
        <Image
          key={gallery[index]}
          src={gallery[index]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {!isAvailable && (
          <>
            {/* Difuminado encima para sabores que aún no están disponibles */}
            <div className="absolute inset-0 bg-white/25 backdrop-blur-[3px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
            <span className="absolute left-3 top-3 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase text-black">
              Próximamente
            </span>
          </>
        )}
      </Link>

      {gallery.length > 1 && (
        <div className="flex justify-center gap-1.5 pt-3">
          {gallery.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver imagen ${i + 1} de ${gallery.length}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
            <Link href={href} className="transition hover:text-brand">
              {product.name}
            </Link>
          </h3>
          {product.priceLabel && (
            <span className="text-sm font-semibold text-neutral-700">{product.priceLabel}</span>
          )}
        </div>
        <p className="flex-1 text-sm text-neutral-500 sm:text-[15px]">{product.description}</p>

        {canBuy ? (
          <button
            onClick={() => addItem(product.variantId as string)}
            disabled={loading}
            className="mt-3 w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
          >
            {loading ? "Añadiendo…" : "Añadir al carrito"}
          </button>
        ) : isAvailable ? (
          <Link
            href={href}
            className="mt-3 w-full rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-black transition hover:brightness-95"
          >
            Pre-order
          </Link>
        ) : (
          <span className="mt-3 w-full rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-semibold text-neutral-600 transition group-hover:border-neutral-900 group-hover:text-neutral-900">
            Notificarme
          </span>
        )}
      </div>
    </article>
  );
}
