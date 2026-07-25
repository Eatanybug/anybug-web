/**
 * ÚNICO SITIO DONDE EDITAR LOS TEXTOS DE LA WEB.
 * Cambia aquí cualquier frase, título o dato y se actualiza en toda la web.
 */

export const site = {
  name: "AnyBug",
  short: "AnyBug",
  tagline: "Simply, better",
  description:
    "Barritas altas en proteína con harina de grillo, ingredientes reales y sin azúcares añadidos.",
  nav: [
    { label: "Beneficios", href: "/#beneficios" },
    { label: "Tienda", href: "/tienda" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Blog", href: "/blog" },
  ],
};

export const hero = {
  // Titular grande (estilo serif, como en la web actual)
  display: "Simply, better",
  eyebrow: "Una de las fuentes de proteína de menor impacto ambiental según la FAO",
  title: "Productos altos en proteína, naturalmente",
  badges: [
    "Sin edulcorantes artificiales",
    "Sin azúcares añadidos",
    "100% ingredientes naturales",
  ],
  primaryCta: { label: "Pre-order", href: "/tienda" },
  secondaryCta: { label: "Ver beneficios", href: "/#beneficios" },
  // Fondo del hero. Coloca tu vídeo en public/hero/hero.mp4 (se usa la imagen como respaldo/póster).
  video: "/hero/hero.mp4",
  poster: "/hero/hero.png",
};

export const cricket = {
  id: "harina-de-grillo",
  headingPre: "¿Por qué ",
  headingHighlight: "harina de grillo",
  headingPost: "?",
  body:
    "Descubre cómo la harina de grillo supera a las fuentes tradicionales de proteína en valor nutricional por cada 100 g.",
  // Tabla comparativa (valores aproximados por 100 g)
  table: {
    columns: ["Nutriente", "Pollo", "Soja", "Grillo"],
    highlightColumn: 3,
    rows: [
      { label: "Proteína (g)", values: ["~31", "36-40", "60-70"] },
      { label: "Calcio (mg)", values: ["~15", "~280", "75-100"] },
      { label: "Hierro (mg)", values: ["~1", "14-16", "9-12"] },
      { label: "Potasio (mg)", values: ["~250", "~1.800", "900-1.000"] },
      { label: "Vitaminas", values: ["B3, B6, B12", "B1, B2, B6", "B12, B2, B6"] },
      { label: "Omega 3", values: ["Bajo", "Moderado", "Moderado-alto"] },
      { label: "Aminoácidos", values: ["Completo", "Incompleto*", "Completo"] },
      { label: "Fibra (g)", values: ["0", "9-10", "5-8"] },
    ],
    footnote:
      "*La soja carece de metionina, un aminoácido esencial. Valores aproximados por cada 100 g de producto.",
  },
};

export const benefits = {
  id: "beneficios",
  eyebrow: "Nutrición",
  title: "El perfil de la harina de grillo",
  subtitle:
    "Comparativa informativa de la harina de grillo frente a alimentos de referencia, por cada 100 g.",
  footnote:
    "Valores aproximados de la harina de grillo por 100 g (no del producto terminado). Comparativa con fines informativos; no constituye una declaración nutricional o de propiedades saludables en el sentido del Reglamento (CE) 1924/2006.",
  items: [
    { factor: "4X", name: "Proteína", vs: "más que la carne de res" },
    { factor: "5X", name: "Vitamina B12", vs: "más que la carne de res" },
    { factor: "1.5X", name: "Calcio", vs: "más que la leche" },
    { factor: "=", name: "Omega 3", vs: "igual que el salmón" },
    { factor: "3X", name: "Hierro", vs: "más que la espinaca" },
    { factor: "9", name: "Aminoácidos", vs: "esenciales" },
    { factor: "2X", name: "Potasio", vs: "más que la banana" },
    { factor: "=", name: "Fibra", vs: "igual que las lentejas" },
    { factor: "2X", name: "Zinc", vs: "más que las almendras" },
    { factor: "5X", name: "Magnesio", vs: "más que la carne de res" },
  ],
};

export const better = {
  id: "somos-mejores",
  headingPre: "¿Por qué somos ",
  headingHighlight: "mejores",
  headingPost: "?",
  paragraphs: [
    "“¿Pero… insectos?” — Lo entendemos. Por eso no los notarás.",
    "No a un experimento científico. La harina de grillo es invisible: el sabor proviene del cacao real, los dátiles y el resto de ingredientes naturales de nuestros productos. Toda la proteína, sin nada de lo extraño.",
  ],
  features: [
    {
      title: "Sin pesadez estomacal",
      lead: "Saciedad de la que sienta bien.",
      note: "Fáciles de digerir.",
    },
    {
      title: "Alimento del futuro",
      lead: "Menos agua y pienso que la proteína animal (FAO).",
      note: "Producción de menor impacto.",
    },
    {
      title: "Altas en proteína",
      lead: "En cualquier momento y lugar.",
      note: "Aminoácidos completos.",
    },
    {
      title: "Harina de grillo",
      lead: "Para un consumo amigable.",
      note: "Natural y limpia.",
    },
  ],
};

export type ProductFact = { label: string; value: string };
export type ProductPack = { name: string; price?: string; note?: string; recommended?: boolean };

export type NutritionTable = {
  title?: string;
  columns: string[];
  rows: { label: string; values: string[]; highlight?: boolean }[];
  note?: string;
};

export type ProductDetails = {
  tagline?: string;
  highlights?: string[];
  packs?: ProductPack[];
  ingredients?: string;
  allergens?: string;
  /** Nota mientras no haya tabla nutricional validada. */
  nutritionNote?: string;
  /** Tabla nutricional real (análisis de laboratorio). */
  nutrition?: NutritionTable;
  /** Línea de confianza: análisis de laboratorio independiente. */
  labTested?: string;
  facts?: ProductFact[];
};

export type Flavor = {
  handle: string;
  name: string;
  description: string;
  /** Descripción larga para la página de detalle (edítala libremente). */
  long?: string;
  /** Precio mostrado si no hay Shopify conectado. */
  priceLabel?: string;
  image: string;
  images?: string[];
  details?: ProductDetails;
  status: "available" | "coming-soon";
};

export const products = {
  id: "productos",
  title: "Nuestros sabores",
  subtitle: "Real ingredients. Unreal taste.",
  // Datos de ejemplo (fallback). Cuando conectes Shopify, se usarán tus productos reales.
  flavors: [
    {
      handle: "brownie-with-dates-honey",
      name: "CRUSH",
      description: "Nuestro sabor insignia: brownie & dátiles con harina de grillo.",
      long:
        "Un brownie de cacao denso y jugoso que sabe a capricho, no a suplemento. El protagonismo se lo llevan el cacao y los dátiles; la harina de grillo hace su trabajo en silencio y ni la notas. El antojo de siempre, con la conciencia tranquila.",
      priceLabel: "2,90 €",
      image: "/products/crush.png",
      images: [
        "/products/crush.png",
        "/products/crush-bars.jpeg",
        "/products/crush-lifestyle.jpeg",
      ],
      details: {
        tagline: "Energía limpia sin renunciar al sabor.",
        highlights: [
          "Alto en proteína — 9 g por barrita",
          "Alto en fibra — 6,6 g por barrita",
          "Alto en hierro — 31% VRN por barrita",
          "Fuente de vitaminas del grupo B, incluida B12",
          "Alto en zinc",
          "Sin azúcares añadidos (solo los naturales de los dátiles)",
          "Ingredientes naturales, sin edulcorantes artificiales",
          "Proteína de origen sostenible (harina de grillo)",
        ],
        packs: [
          { name: "Pack prueba (3)", price: "7,90 €", note: "2,63 €/ud · empieza aquí", recommended: true },
          { name: "Pack 6", price: "16,50 €", note: "2,75 €/ud" },
          { name: "Pack 12", price: "30,90 €", note: "2,58 €/ud · el más popular" },
          { name: "Pack 24", price: "57,90 €", note: "2,41 €/ud · mejor precio" },
        ],
        ingredients:
          "Dátiles, fibra vegetal (achicoria), Acheta domesticus (grillo doméstico) en polvo (10,4%), proteína de arroz, proteína de guisante, cacao, aceite de oliva virgen extra, concentrado de zumo de uva y almidón de arroz, extracto de cacao, aroma, hierro (fumarato ferroso), vitamina B3 (nicotinamida), vitamina B6 (clorhidrato de piridoxina), vitamina B2 (riboflavina), vitamina B1 (clorhidrato de tiamina).",
        allergens:
          "Puede causar reacciones alérgicas a personas con alergia conocida a crustáceos, moluscos y sus productos, o a los ácaros del polvo. Puede contener soja.",
        nutrition: {
          title: "Información nutricional",
          columns: ["", "Por 100 g", "Por barrita (39 g)"],
          rows: [
            { label: "Valor energético", values: ["1363 kJ / 325 kcal", "532 kJ / 127 kcal"] },
            { label: "Grasas", values: ["7,7 g", "3,0 g"] },
            { label: "de las cuales saturadas", values: ["1,8 g", "0,7 g"] },
            { label: "Hidratos de carbono", values: ["34 g", "13,2 g"] },
            { label: "de los cuales azúcares", values: ["25,5 g", "9,9 g"] },
            { label: "Fibra alimentaria", values: ["17 g", "6,6 g"], highlight: true },
            { label: "Proteínas", values: ["21,5 g", "8,4 g"], highlight: true },
            { label: "Sal", values: ["0,33 g", "0,13 g"] },
            { label: "Hierro", values: ["11 mg", "4,3 mg"], highlight: true },
            { label: "Zinc", values: ["3,1 mg", "1,2 mg"] },
            { label: "Magnesio", values: ["60 mg", "23,4 mg"] },
            { label: "Vitamina B1 (tiamina)", values: ["0,61 mg", "0,24 mg"] },
            { label: "Vitamina B2 (riboflavina)", values: ["0,94 mg", "0,37 mg"] },
            { label: "Vitamina B3 (niacina)", values: ["10,2 mg", "4,0 mg"] },
            { label: "Vitamina B6", values: ["1,0 mg", "0,39 mg"] },
            { label: "Vitamina B12", values: ["1,2 µg", "0,47 µg"] },
          ],
          note:
            "Valores medios obtenidos por análisis de laboratorio (Mérieux NutriSciences), julio 2026.\nPor barrita: Hierro 31%, B6 28%, B2 26%, B3 25%, B1 22%, B12 19% de los VRN.",
        },
        labTested:
          "Analizado por laboratorio independiente (Mérieux NutriSciences), julio 2026.",
        facts: [
          { label: "Peso neto", value: "39 g" },
          { label: "Formato", value: "Barrita individual (flow-pack)" },
          { label: "Conservación", value: "Lugar fresco y seco, sin luz directa" },
          { label: "Consumo preferente", value: "8–10 meses" },
        ],
      },
      status: "available",
    },
    {
      handle: "island-vibe",
      name: "ISLAND VIBE",
      description:
        "Plátano de verdad, coco que abraza y proteína que no se esconde. Dulce tropical sin dramas ni culpa.",
      image: "/products/island-vibe.png",
      status: "coming-soon",
    },
    {
      handle: "berry-guilty",
      name: "BERRY GUILTY",
      description:
        "Proteica, jugosa y un poco pícara: un bocado que huele a verano aunque sea martes.",
      image: "/products/berry-guilty.png",
      status: "coming-soon",
    },
    {
      handle: "crunchy",
      name: "CRUNCHY",
      description:
        "Frutos secos reales, mordisco crujiente y proteína que suma. Salado-dulce con personalidad.",
      image: "/products/crunchy.png",
      status: "coming-soon",
    },
  ] as Flavor[],
};

export type NutritionStat =
  | {
      animate: true;
      /** Valor numérico final que se anima (0 → value). */
      value: number;
      /** Decimales a mostrar (usa coma decimal en la web). */
      decimals: number;
      /** Sufijo tras el número, p. ej. " g" o "%". */
      suffix: string;
      label: string;
    }
  | {
      animate: false;
      /** Valor no numérico (p. ej. "B12"), se muestra tal cual. */
      display: string;
      label: string;
    };

export const nutritionStats: {
  title: string;
  items: NutritionStat[];
  note: string;
} = {
  title: "Lo que dice el análisis",
  items: [
    { animate: true, value: 9, decimals: 0, suffix: " g", label: "Proteína por barrita" },
    { animate: true, value: 6.6, decimals: 1, suffix: " g", label: "Fibra por barrita" },
    { animate: true, value: 31, decimals: 0, suffix: "%", label: "VRN de hierro por barrita" },
    { animate: false, display: "B12", label: "Vitamina (de origen animal natural)" },
  ],
  note: "Analizado por laboratorio independiente (Mérieux NutriSciences).",
};

export const testimonials = {
  eyebrow: "Testimonios",
  title: "Historias que impulsan",
  items: [
    {
      quote:
        "AnyBug se convirtió en mi snack favorito entre entrenamientos. Ingredientes limpios, sabor increíble y energía real que de verdad dura.",
      name: "Carla M.",
      role: "Fitness Coach",
      result: "Recuperación más rápida y energía sostenida.",
    },
    {
      quote:
        "Por fin una barrita de proteína que se siente ligera pero me mantiene satisfecha durante horas. Sin bajones de energía, sin culpa, solo combustible real.",
      name: "Lucas R.",
      role: "Corredor",
      result: "Mayor rendimiento y energía constante.",
    },
    {
      quote:
        "La llevo en el bolso cada día. Es el equilibrio perfecto entre capricho y nutrición.",
      name: "Sofía G.",
      role: "Diseñadora",
      result: "Menos antojos de azúcar durante el día.",
    },
  ],
};

export const faq = {
  id: "faq",
  title: "FAQ",
  subtitle:
    "Las preguntas incómodas. Las respuestas directas. Sin rodeos, como nuestros productos.",
  items: [
    {
      q: "¿Qué hace diferente a AnyBug de otras barritas de proteína?",
      a: `Simple: nos posicionamos donde casi nadie se atreve.

La mayoría elige: o barrita "natural" con poca proteína y macros flojos, o barrita hiperproteica llena de cosas que no reconoces en la etiqueta. Nosotros no.

AnyBug es una barrita con ingredientes reales — dátiles, cacao, fibra de achicoria — pero con una proteína alta y macros que sí importan: mucha proteína, bajas calorías, sin azúcares añadidos y sin edulcorantes artificiales.

No somos la barrita del gym. No somos la barrita "healthy" de conveniencia. Somos la que nadie había hecho bien: sabor de verdad, nutrición de verdad, ingredientes de verdad.

Eso es lo diferente. Y no, no es marketing. Es la fórmula.`,
    },
    {
      q: "¿Qué tipo de proteína utilizamos?",
      a: `Tres fuentes. Una sola idea: que funcione de verdad.

Harina de grillo (Acheta domesticus, 10,4%), proteína de guisante y proteína de arroz. No una sola fuente barata rellena de aditivos para cuadrar la tabla nutricional — una combinación pensada para darte un perfil completo de aminoácidos esenciales.

El grillo aporta lo que casi ninguna proteína vegetal sola te da bien: lisina, hierro, vitamina B12. El guisante y el arroz completan el puzzle.

¿Suena raro? Sí. ¿Funciona mejor que la mayoría de lo que hay en el mercado? También.`,
    },
    {
      q: "¿Cómo que son fáciles de digerir?",
      a: `Te lo digo como te lo diría en persona:

Hoy en día, casi toda barrita que está buena de verdad — rica, con buen aporte nutricional, que no sabe a cartón — va cargada de edulcorantes, jarabes raros, poliolos o ingredientes que suenan bien en el packaging pero que tu cuerpo no termina de entender.

Y luego te preguntas por qué te hincha, te sienta mal o te deja ese regusto artificial.

Con AnyBug eso no pasa — o al menos, no por la misma razón. Sin edulcorantes artificiales. Sin azúcares añadidos. Ingredientes que reconoces: dátiles, cacao, fibra de achicoria, aceite de oliva. Proteína real, no "proteína sabor vainilla química".

¿Significa que a todo el mundo le sienta igual de bien? No — cada cuerpo es distinto. Pero si buscas una barrita que no te trate como un experimento de laboratorio, empiezas por leer la etiqueta. La nuestra no necesita un máster para entenderla.`,
    },
    {
      q: "¿Las barritas AnyBug contienen mucho azúcar?",
      a: `No llevamos azúcar añadido. Punto.

El único dulce de la barrita viene de ingredientes reales — dátiles y concentrado de zumo de uva — no de azúcar refinado ni de una cucharada de sacarosa escondida en el fondo de la lista. Es dulzor de fruta, sin procesar.

Y ojo con el truco de moda: muchas marcas te venden "sin azúcar añadido" y luego te meten maltitol, eritritol o jarabes que tu cuerpo procesa casi igual. Nosotros no jugamos a eso: sin edulcorantes artificiales ni polioles raros.

¿El resultado? Una barrita que sabe dulce de verdad, con el dulzor que pone la fruta y nada más. Sin trucos de etiqueta.`,
    },
    {
      q: "¿Tenéis análisis nutricional? ¿Está avalado?",
      a: `Sí, y no nos lo inventamos: CRUSH está analizada en un laboratorio independiente (Mérieux NutriSciences / Silliker). Los números que ves en la ficha salen de ahí, no de una estimación optimista.

Por barrita (39 g): proteína alta, 6,6 g de fibra y 127 kcal, con el único azúcar procedente de la fruta (cero azúcar añadido).

Y donde muchas barritas se quedan cortas, nosotros sumamos micronutrientes de verdad: 31% de los VRN de hierro por barrita, vitaminas del grupo B (incluida la B12) y zinc.

Transparencia total: si algún día cambia la fórmula, se vuelve a analizar y se actualiza aquí. Sin letra pequeña.`,
    },
    {
      q: "¿Por qué proteína de grillo?",
      a: `Porque el futuro de la proteína no pasa por seguir haciendo lo mismo.

La harina de grillo es una de las fuentes de proteína de menor impacto ambiental que existen — menos agua, menos pienso, menos emisiones que la proteína bovina (FAO). Y encima aporta aminoácidos esenciales, hierro y vitamina B12 de forma natural.

¿Da un poco de yuyu? A mucha gente, sí. ¿Es legal en Europa? Sí — autorizada como nuevo alimento desde 2022 (Reg. UE 2022/188). ¿Tiene sentido nutricional y ambiental? También.

No usamos grillo porque suene provocador. Lo usamos porque, cuando lo miras con datos y sin prejuicios, es una de las decisiones más inteligentes que puedes tomar en una barrita proteica.`,
    },
    {
      q: "¿Es seguro comer proteína de grillo?",
      a: `Sí. La harina de grillo (Acheta domesticus) está autorizada en la Unión Europea como nuevo alimento desde 2022 (Reg. UE 2023/5), tras la evaluación de seguridad de la EFSA.

Nuestro producto se fabrica en España en instalaciones con registro sanitario y bajo controles de seguridad alimentaria. La única precaución relevante es la de los alérgenos (ver más abajo).`,
    },
    {
      q: "¿Tiene alérgenos?",
      a: `Contiene grillo (Acheta domesticus). Puede provocar reacciones alérgicas en personas con alergia conocida a los crustáceos, moluscos y sus productos, o a los ácaros del polvo. Puede contener soja.

Tienes la lista completa de ingredientes y alérgenos en la ficha de cada producto. Si tienes alguna alergia, léela siempre antes de consumir.`,
    },
    {
      q: "¿A qué sabe? ¿Se nota el grillo?",
      a: `Sabe a lo que pone: brownie de cacao y dátiles. No, no se nota el grillo.

La harina de grillo aporta la proteína y los micronutrientes, pero el sabor viene del cacao real y los dátiles. No tiene regusto raro ni ese punto artificial de muchas barritas proteicas.`,
    },
    {
      q: "¿Dónde y cómo se fabrica?",
      a: `En España, en las instalaciones de SANAVI (Láchar, Granada), un fabricante con registro sanitario.

Trabajamos con una lista de ingredientes corta y reconocible, sin rellenos innecesarios ni edulcorantes artificiales.`,
    },
  ],
};

export const footer = {
  tagline: "Proteína de verdad. Ingredientes de verdad. AnyBug.",
  columns: [
    {
      title: "Tienda",
      links: [
        { label: "Productos", href: "/tienda" },
        { label: "Beneficios", href: "/#beneficios" },
      ],
    },
    {
      title: "Marca",
      links: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Política de privacidad", href: "/privacy-policy" },
        { label: "Términos", href: "/terms-of-service" },
        { label: "Aviso legal", href: "/aviso-legal" },
        { label: "Cookies", href: "/politica-de-cookies" },
        { label: "Condiciones de venta", href: "/condiciones-de-venta" },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} AnyBug. Todos los derechos reservados.`,
  social: [
    { label: "Instagram", href: "https://instagram.com/eatanybug" },
    { label: "TikTok", href: "https://tiktok.com/@eatanybug" },
  ],
};

/** Sección de newsletter (captación de email). */
export const newsletter = {
  title: "Entérate del lanzamiento",
  subtitle:
    "Sé de los primeros en probar AnyBug. Sin spam: solo novedades importantes y alguna sorpresa.",
  placeholder: "tu@email.com",
  cta: "Apuntarme",
  success: "¡Listo! Te avisaremos muy pronto.",
  legal: "Al apuntarte aceptas nuestra Política de privacidad. Puedes darte de baja cuando quieras.",
};

/* ---------------------------------- Tienda --------------------------------- */

export const shop = {
  eyebrow: "Tienda",
  title: "Nuestros sabores",
  subtitle: "Real ingredients. Unreal taste.",
};

/** Aviso de alérgenos común a todos los productos (contienen harina de grillo). */
export const allergenNotice =
  "Contiene grillo (Acheta domesticus). Puede causar reacciones alérgicas a personas con alergia a crustáceos, moluscos y sus productos, o a los ácaros del polvo. Puede contener soja.";

/* --------------------------------- Nosotros -------------------------------- */

export const about = {
  eyebrow: "Nosotros",
  title: "Comida real. Proteína real. Cambio real.",
  intro:
    "No somos la barrita del gym. Tampoco la barrita 'healthy' de la gasolinera. Somos la que nadie se había atrevido a hacer bien: sabor de verdad, macros que puedes enseñar sin vergüenza e ingredientes que reconoces sin necesitar un máster para leer la etiqueta.",
  story: {
    title: "Por qué existimos",
    paragraphs: [
      "AnyBug empezó por hartazgo. Nos cansamos de elegir siempre entre lo mismo: o una barrita 'natural' con proteína de adorno y macros flojos, o una hiperproteica cargada de edulcorantes, jarabes raros y cosas que tu cuerpo no termina de entender.",
      "Nos parecía absurdo tener que renunciar a una cosa para tener la otra. Así que nos pusimos donde casi nadie se atreve: proteína alta, calorías contenidas, sin azúcares añadidos y sin edulcorantes artificiales. Sin trucos de etiqueta. Y con un sabor que no pide perdón.",
      "¿La parte que da yuyu? Usamos harina de grillo. No para provocar, sino porque cuando la miras con datos y sin prejuicios tiene mucho sentido: es una de las fuentes de proteína de menor impacto ambiental (FAO), con aminoácidos y micronutrientes de forma natural.",
      "Y no la vas a notar. El sabor viene del cacao real, los dátiles y el resto de ingredientes de verdad. La proteína de grillo hace su trabajo en silencio. Toda la nutrición, sin el experimento de laboratorio.",
    ],
  },
  founder: {
    title: "Quién está detrás",
    paragraphs: [
      "AnyBug es un proyecto independiente con base en Granada, impulsado por Sara Aadía Manzano. Nació de una obsesión muy personal: encontrar una barrita que estuviera buena de verdad y que, además, tuviera una lista de ingredientes de la que no avergonzarse.",
      "Al no encontrarla, decidió crearla. Sin grandes departamentos de marketing detrás: una idea clara, mucho testeo y la convicción de que la proteína del futuro puede ser sostenible sin renunciar al sabor.",
    ],
  },
  making: {
    title: "Cómo se fabrica",
    paragraphs: [
      "Producimos en España, en las instalaciones de SANAVI (Láchar, Granada), un fabricante con registro sanitario que nos permite cuidar cada lote con estándares de seguridad alimentaria.",
      "La harina de grillo (Acheta domesticus) está autorizada en la Unión Europea como nuevo alimento. Trabajamos con ingredientes reales y una lista corta: nada de rellenos innecesarios.",
    ],
  },
  stats: [
    { value: "9 g", label: "Proteína por barrita" },
    { value: "0", label: "Azúcares añadidos" },
    { value: "100%", label: "Ingredientes naturales" },
    { value: "1", label: "Fuente de proteína más sostenible" },
  ],
  values: [
    {
      title: "Honestidad radical",
      text: "Etiquetas que se entienden a la primera. Lo que ves es lo que hay: sin 'sin azúcar' que en realidad lleva maltitol, sin letra pequeña.",
    },
    {
      title: "Futuro sin excusas",
      text: "Apostamos por la proteína del mañana: menos agua, menos pienso, menos emisiones. Comer bien no debería costarle caro al planeta.",
    },
    {
      title: "Sabor primero",
      text: "Si no está buena, no sale. La nutrición no está reñida con el placer, y nos negamos a elegir entre las dos.",
    },
  ],
  cta: {
    title: "¿Pero… insectos? Pruébalo y hablamos.",
    text: "Empieza por CRUSH, nuestro sabor insignia. La mejor forma de entenderlo es probarlo.",
    primary: { label: "Ir a la tienda", href: "/tienda" },
  },
};

/* ----------------------------------- Blog ---------------------------------- */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cover?: string;
  // Cada string es un párrafo. Sustituye por tu contenido real.
  body: string[];
};

export const blog = {
  eyebrow: "Blog",
  title: "Ideas, ciencia y algo de descaro",
  subtitle:
    "Hablamos de proteína, sostenibilidad y de por qué el futuro de la comida es más raro (y mejor) de lo que crees.",
  posts: [
    {
      slug: "por-que-proteina-de-grillo",
      title: "Por qué proteína de grillo (y por qué no es tan raro)",
      excerpt:
        "Menos agua, menos emisiones y un perfil de aminoácidos completo. Te contamos los datos sin postureo.",
      date: "2026-01-15",
      cover: "/products/crush.png",
      body: [
        "(Edita este texto) La harina de grillo es una de las fuentes de proteína de menor impacto ambiental que existen.",
        "(Edita este texto) Aquí desarrollamos el porqué, con datos de la FAO y la normativa europea.",
      ],
    },
    {
      slug: "leer-una-etiqueta",
      title: "Cómo leer la etiqueta de una barrita (sin que te engañen)",
      excerpt:
        "Maltitol, jarabes y 'sin azúcar añadido' que no lo es. Aprende a distinguir el marketing de la comida.",
      date: "2026-02-02",
      cover: "/products/crush-bar.png",
      body: [
        "(Edita este texto) No todo lo que dice 'natural' lo es.",
        "(Edita este texto) Te enseñamos qué mirar primero en la lista de ingredientes.",
      ],
    },
  ] as BlogPost[],
};
