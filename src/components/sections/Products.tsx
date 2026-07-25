import { products as productsContent } from "@/lib/content";
import type { DisplayProduct } from "@/lib/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaButton } from "@/components/ui/CtaButton";
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

        <CtaButton href="/tienda" variant="secondary">
          Ver toda la tienda
        </CtaButton>
      </div>
    </section>
  );
}
