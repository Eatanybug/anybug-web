import { Hero } from "@/components/sections/Hero";
import { Cricket } from "@/components/sections/Cricket";
import { Benefits } from "@/components/sections/Benefits";
import { Better } from "@/components/sections/Better";
import { Products } from "@/components/sections/Products";
import { NutritionHighlights } from "@/components/sections/NutritionHighlights";
import { Faq } from "@/components/sections/Faq";
import { Newsletter } from "@/components/sections/Newsletter";
import { getDisplayProducts } from "@/lib/products";

export default async function Home() {
  const displayProducts = await getDisplayProducts();

  return (
    <>
      <Hero />
      <Cricket />
      <Benefits />
      <Better />
      <Products items={displayProducts} />
      <NutritionHighlights />
      <Faq />
      <Newsletter />
    </>
  );
}
