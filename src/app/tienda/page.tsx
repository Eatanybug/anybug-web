import type { Metadata } from "next";
import { shop } from "@/lib/content";
import { getDisplayProducts } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Tienda",
  description: shop.subtitle,
};

export default async function TiendaPage() {
  const products = await getDisplayProducts();

  return (
    <div className="section bg-cream">
      <div className="container-page flex flex-col gap-10">
        <header className="flex max-w-2xl flex-col gap-3">
          <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            {shop.eyebrow}
          </span>
          <h1 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {shop.title}
          </h1>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">{shop.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
