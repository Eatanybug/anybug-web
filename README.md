# That Was Mad (TWM) — Web

Web de barritas de proteína con harina de grillo. **Next.js 16 + React 19 + Tailwind v4 + Shopify Storefront API.**

## Cómo trabajar

```bash
npm run dev      # arranca en http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
```

## ✏️ Editar textos (lo más importante)

**Todos los textos están en un único archivo:** [`src/lib/content.ts`](src/lib/content.ts).

Cambia ahí cualquier frase, título, badge, producto de ejemplo, testimonio o pregunta del FAQ y se actualiza en toda la web. No hace falta tocar el diseño.

- Nombre de marca y navegación → `site`
- Hero (titular, badges, botones) → `hero`
- ¿Por qué harina de grillo? + tabla → `cricket`
- Beneficios nutricionales → `benefits`
- ¿Por qué somos mejores? + features → `better`
- Sabores / productos → `products`
- Testimonios → `testimonials`
- FAQ → `faq`
- Footer → `footer`

## 🖼️ Imágenes

Están en `public/`:

- Hero: `public/hero/hero.png`
- Productos: `public/products/*.png`

Sustituye los archivos manteniendo el nombre (o cambia la ruta en `content.ts`).

## 🛒 Conectar Shopify (catálogo + carrito + checkout)

1. En el admin de Shopify: **Settings → Apps and sales channels → Develop apps → Create an app**.
2. En **Configuration → Storefront API**, activa los permisos de lectura de productos y de carrito (`unauthenticated_read_product_listings`, `unauthenticated_write_checkouts` / cart).
3. Instala la app y copia el **Storefront API access token**.
4. Copia `.env.example` a `.env.local` y rellena:

   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=tu_token
   ```

5. Asegúrate de que los **handles** de tus productos en Shopify coinciden con los de `content.ts`
   (p. ej. `brownie-with-dates-honey`) para que se enlacen automáticamente.
6. Reinicia `npm run dev`.

Sin token, la web funciona con los datos de ejemplo de `content.ts` (útil mientras montas la tienda).
El **checkout** se gestiona en Shopify (botón "Finalizar compra" del carrito).

## 🚀 Deploy

Recomendado en **Vercel**: importa el repo, añade las 2 variables de entorno y listo.
