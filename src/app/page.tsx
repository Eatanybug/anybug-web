import { Hero } from "@/components/sections/Hero";
import { Cricket } from "@/components/sections/Cricket";
import { Benefits } from "@/components/sections/Benefits";
import { Better } from "@/components/sections/Better";
import { HowItsMade } from "@/components/sections/HowItsMade";
import { LifestyleBand } from "@/components/sections/LifestyleBand";
import { Products } from "@/components/sections/Products";
import { NutritionStats } from "@/components/sections/NutritionStats";
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
      <HowItsMade />
      <LifestyleBand
        src="/lifestyle/aes-bag-lilac-wide.png"
        mobileSrc="/lifestyle/aes-bag-lilac.png"
        alt="Mano guardando una barrita AnyBug en una bolsa de deporte lila"
        caption="Proteína real, para tu día real."
        objectPosition="center 55%"
      />
      <Products items={displayProducts} />
      <NutritionStats />
      <Faq />
      <Newsletter />
    </>
  );
}
