import Link from "next/link";
import { products as productsContent } from "@/lib/content";
import type { DisplayProduct } from "@/lib/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";

export type { DisplayProduct };

export function Products({ items }: { items: DisplayProduct[] }) {
  return (
    <section id={productsContent.id} className="section bg-cream">
      <div className="container-page flex flex-col items-center gap-10">
        <SectionHeading title={productsContent.title} subtitle={productsContent.subtitle} />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>

        <Link
          href="/tienda"
          className="rounded-full border border-neutral-900/20 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          Ver toda la tienda
        </Link>
      </div>
    </section>
  );
}
