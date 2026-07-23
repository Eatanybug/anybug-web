import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products as productsContent } from "@/lib/content";
import { getDisplayProductByHandle } from "@/lib/products";
import { ProductDetail } from "@/components/products/ProductDetail";

export function generateStaticParams() {
  return productsContent.flavors.map((f) => ({ handle: f.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getDisplayProductByHandle(handle);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.long || product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getDisplayProductByHandle(handle);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
