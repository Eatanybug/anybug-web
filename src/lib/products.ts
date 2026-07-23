import { products as productsContent, type ProductDetails } from "@/lib/content";
import { formatMoney, getProducts, isShopifyConfigured } from "@/lib/shopify";

export type DisplayProduct = {
  handle: string;
  name: string;
  description: string;
  long?: string;
  image: string;
  images?: string[];
  details?: ProductDetails;
  status: "available" | "coming-soon";
  priceLabel?: string;
  variantId?: string | null;
};

/** Lista de productos: usa Shopify si esta configurado, si no el fallback local. */
export async function getDisplayProducts(): Promise<DisplayProduct[]> {
  const fallback: DisplayProduct[] = productsContent.flavors.map((f) => ({
    handle: f.handle,
    name: f.name,
    description: f.description,
    long: f.long,
    image: f.image,
    images: f.images,
    details: f.details,
    status: f.status,
    priceLabel: f.priceLabel,
  }));

  if (!isShopifyConfigured) return fallback;

  try {
    const shopifyProducts = await getProducts();
    const byHandle = new Map(shopifyProducts.map((p) => [p.handle, p]));

    const merged: DisplayProduct[] = fallback.map((f) => {
      const p = byHandle.get(f.handle);
      if (!p) return f;
      byHandle.delete(f.handle);
      return {
        handle: f.handle,
        name: p.title || f.name,
        description: p.description || f.description,
        long: f.long,
        image: p.featuredImage?.url ?? f.image,
        images: f.images,
        details: f.details,
        status: p.availableForSale ? "available" : "coming-soon",
        priceLabel: formatMoney(p.price),
        variantId: p.variantId,
      };
    });

    // Nota: no añadimos productos de Shopify que no estén en nuestra lista curada
    // (evita que aparezcan productos de ejemplo/borrador de la tienda).
    return merged;
  } catch {
    return fallback;
  }
}

export async function getDisplayProductByHandle(
  handle: string
): Promise<DisplayProduct | null> {
  const all = await getDisplayProducts();
  return all.find((p) => p.handle === handle) ?? null;
}
