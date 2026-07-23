/**
 * Cliente ligero para la Shopify Storefront API (sin dependencias).
 *
 * Configura en `.env.local`:
 *   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
 *   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxx
 *
 * El token de Storefront es público por diseño (solo lectura de catálogo y carrito).
 */

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = "2025-01";

export const isShopifyConfigured = Boolean(DOMAIN && TOKEN);

export type Money = { amount: string; currencyCode: string };

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  featuredImage?: { url: string; altText: string | null };
  price: Money;
  variantId: string | null;
};

export type CartLine = {
  id: string;
  quantity: number;
  title: string;
  variantTitle: string;
  image?: string;
  price: Money;
  merchandiseId: string;
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money };
  lines: CartLine[];
};

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!isShopifyConfigured) {
    throw new Error("Shopify no está configurado (faltan variables de entorno).");
  }
  const res = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? "Error de Shopify");
  }
  return json.data as T;
}

/* --------------------------------- Fragments -------------------------------- */

const PRODUCT_FIELDS = `
  id
  handle
  title
  description
  availableForSale
  featuredImage { url altText }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 1) { nodes { id } }
`;

type RawProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: { minVariantPrice: Money };
  variants: { nodes: { id: string }[] };
};

function normalizeProduct(p: RawProduct): ShopifyProduct {
  return {
    id: p.id,
    handle: p.handle,
    title: p.title,
    description: p.description,
    availableForSale: p.availableForSale,
    featuredImage: p.featuredImage ?? undefined,
    price: p.priceRange.minVariantPrice,
    variantId: p.variants.nodes[0]?.id ?? null,
  };
}

/* --------------------------------- Products -------------------------------- */

export async function getProducts(count = 12): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { nodes: RawProduct[] } }>(
    `query Products($count: Int!) {
      products(first: $count) { nodes { ${PRODUCT_FIELDS} } }
    }`,
    { count }
  );
  return data.products.nodes.map(normalizeProduct);
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: RawProduct | null }>(
    `query Product($handle: String!) {
      product(handle: $handle) { ${PRODUCT_FIELDS} }
    }`,
    { handle }
  );
  return data.product ? normalizeProduct(data.product) : null;
}

/* ----------------------------------- Cart ---------------------------------- */

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 50) {
    nodes {
      id
      quantity
      merchandise {
        ... on ProductVariant {
          id
          title
          price { amount currencyCode }
          image { url }
          product { title }
        }
      }
    }
  }
`;

type RawCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money };
  lines: {
    nodes: {
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        price: Money;
        image: { url: string } | null;
        product: { title: string };
      };
    }[];
  };
};

function normalizeCart(c: RawCart): Cart {
  return {
    id: c.id,
    checkoutUrl: c.checkoutUrl,
    totalQuantity: c.totalQuantity,
    cost: c.cost,
    lines: c.lines.nodes.map((l) => ({
      id: l.id,
      quantity: l.quantity,
      title: l.merchandise.product.title,
      variantTitle: l.merchandise.title,
      image: l.merchandise.image?.url,
      price: l.merchandise.price,
      merchandiseId: l.merchandise.id,
    })),
  };
}

export async function createCart(): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: RawCart } }>(
    `mutation { cartCreate { cart { ${CART_FIELDS} } } }`
  );
  return normalizeCart(data.cartCreate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: RawCart | null }>(
    `query Cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`,
    { id: cartId }
  );
  return data.cart ? normalizeCart(data.cart) : null;
}

export async function addToCart(cartId: string, merchandiseId: string, quantity = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: RawCart } }>(
    `mutation Add($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lines: [{ merchandiseId, quantity }] }
  );
  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: RawCart } }>(
    `mutation Update($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] }
  );
  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeCartLine(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: RawCart } }>(
    `mutation Remove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lineIds: [lineId] }
  );
  return normalizeCart(data.cartLinesRemove.cart);
}

export function formatMoney(money: Money): string {
  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: money.currencyCode,
    }).format(Number(money.amount));
  } catch {
    return `${money.amount} ${money.currencyCode}`;
  }
}
