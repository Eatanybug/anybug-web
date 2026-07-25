"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DisplayProduct } from "@/lib/products";
import { allergenNotice } from "@/lib/content";
import { useCart } from "@/components/cart/CartProvider";

export function ProductDetail({ product }: { product: DisplayProduct }) {
  const { addItem, loading, configured } = useCart();
  const isAvailable = product.status === "available";
  const canBuy = configured && isAvailable && Boolean(product.variantId);
  const gallery = product.images?.length ? product.images : [product.image];
  const [index, setIndex] = useState(0);
  const details = product.details;

  return (
    <div className="section">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        {/* Galería */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream ring-1 ring-neutral-200">
            <Image
              key={gallery[index]}
              src={gallery[index]}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-contain ${isAvailable ? "" : "opacity-80"}`}
              priority
            />
            {!isAvailable && (
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase text-black">
                Próximamente
              </span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="flex flex-wrap gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`relative h-20 w-20 overflow-hidden rounded-xl bg-cream ring-1 transition ${
                    i === index ? "ring-2 ring-neutral-900" : "ring-neutral-200 hover:ring-neutral-400"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5 lg:pt-4">
          <nav className="text-sm text-neutral-500">
            <Link href="/tienda" className="transition hover:text-neutral-900">
              Tienda
            </Link>
            <span className="px-2">/</span>
            <span className="text-neutral-700">{product.name}</span>
          </nav>

          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {product.name}
            </h1>
            {details?.tagline && (
              <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                {details.tagline}
              </p>
            )}
          </div>

          {product.priceLabel && (
            <p className="text-2xl font-semibold text-neutral-900">{product.priceLabel}</p>
          )}

          <p className="text-base leading-relaxed text-neutral-600">
            {product.long || product.description}
          </p>

          {details?.highlights && details.highlights.length > 0 && (
            <ul className="flex flex-col gap-2 pt-1">
              {details.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-none text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {details?.labTested && (
            <p className="flex items-center gap-1.5 text-xs text-neutral-500">
              <svg
                className="h-3.5 w-3.5 flex-none text-brand"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{details.labTested}</span>
            </p>
          )}

          {details?.packs && details.packs.length > 0 && (
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Formatos disponibles
              </span>
              <div className="flex flex-wrap gap-2">
                {details.packs.map((pack) => (
                  <span
                    key={pack.name}
                    className={`relative rounded-full border px-3 py-1.5 text-sm ${
                      pack.recommended
                        ? "border-brand bg-brand/10 text-neutral-900"
                        : "border-neutral-900/15 bg-white text-neutral-800"
                    }`}
                  >
                    <span className="font-semibold">{pack.name}</span>
                    {pack.price && <span className="text-neutral-900"> - {pack.price}</span>}
                    {pack.note && <span className="text-neutral-500"> - {pack.note}</span>}
                    {pack.recommended && (
                      <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-black">
                        Recomendado
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Aviso de alérgenos visible */}
          <div className="flex items-start gap-2.5 rounded-xl border border-amber-300/70 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <svg
              className="mt-0.5 h-4 w-4 flex-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
            </svg>
            <p>
              <span className="font-semibold">Alérgenos:</span> {allergenNotice}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            {canBuy ? (
              <button
                onClick={() => addItem(product.variantId as string)}
                disabled={loading}
                className="group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-base font-semibold text-white shadow-lg transition hover:bg-neutral-800 disabled:opacity-60 sm:pl-8"
              >
                <span>{loading ? "Añadiendo..." : "Añadir al carrito"}</span>
                <span
                  aria-hidden
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-black transition-transform duration-300 group-hover:scale-110"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 6h16l-1.6 8.2a2 2 0 0 1-2 1.6H9a2 2 0 0 1-2-1.6L5 4H3" />
                    <circle cx="9.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
                    <circle cx="17.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </button>
            ) : isAvailable ? (
              <span className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-black">
                Pre-order
              </span>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3.5 text-base font-semibold text-neutral-600">
                Notificarme
              </span>
            )}
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900/20 px-8 py-3.5 text-base font-semibold text-neutral-900 transition hover:border-neutral-900"
            >
              Seguir viendo
            </Link>
          </div>

          {/* Detalle: ingredientes, nutrición y datos */}
          {details && (details.ingredients || details.nutrition || details.nutritionNote || details.facts) && (
            <div className="mt-4 flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
              {details.ingredients && (
                <section className="py-4">
                  <h2 className="mb-1.5 text-sm font-bold uppercase tracking-wide text-neutral-900">
                    Ingredientes
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-600">{details.ingredients}</p>
                </section>
              )}

              <section className="py-4">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-900">
                  {details.nutrition?.title || "Información nutricional"}
                </h2>
                {details.nutrition ? (
                  <div className="flex flex-col gap-3">
                    <div className="overflow-hidden rounded-xl ring-1 ring-neutral-200">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-neutral-50 text-left">
                            {details.nutrition.columns.map((col, i) => (
                              <th
                                key={i}
                                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 ${
                                  i === 0 ? "" : "text-right"
                                }`}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {details.nutrition.rows.map((row) => (
                            <tr
                              key={row.label}
                              className={row.highlight ? "bg-brand/15 font-semibold text-neutral-900" : "text-neutral-700"}
                            >
                              <th scope="row" className="px-3 py-2 text-left font-[inherit]">
                                {row.label}
                              </th>
                              {row.values.map((v, i) => (
                                <td key={i} className="px-3 py-2 text-right tabular-nums">
                                  {v}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {details.nutrition.note && (
                      <p className="whitespace-pre-line text-xs leading-relaxed text-neutral-500">
                        {details.nutrition.note}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {details.nutritionNote || "Tabla nutricional disponible próximamente."}
                  </p>
                )}
              </section>

              {details.facts && details.facts.length > 0 && (
                <section className="py-4">
                  <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-900">
                    Detalles del producto
                  </h2>
                  <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {details.facts.map((f) => (
                      <div key={f.label} className="flex flex-col">
                        <dt className="text-xs uppercase tracking-wide text-neutral-400">
                          {f.label}
                        </dt>
                        <dd className="text-sm text-neutral-700">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
