"use client";

import { useCart } from "@/components/cart/CartProvider";
import { formatMoney } from "@/lib/shopify";

export function CartDrawer() {
  const { cart, isOpen, close, updateItem, loading } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrito"
      >
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-lg font-semibold uppercase tracking-wide">Tu carrito</h2>
          <button
            onClick={close}
            aria-label="Cerrar"
            className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!cart || cart.lines.length === 0 ? (
            <p className="mt-10 text-center text-neutral-500">Tu carrito está vacío.</p>
          ) : (
            <ul className="flex flex-col gap-5">
              {cart.lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  {line.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={line.image}
                      alt={line.title}
                      className="h-20 w-20 flex-none rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-20 w-20 flex-none rounded-lg bg-neutral-100" />
                  )}
                  <div className="flex flex-1 flex-col">
                    <span className="font-semibold">{line.title}</span>
                    <span className="text-sm text-neutral-500">{line.variantTitle}</span>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-neutral-300">
                        <button
                          onClick={() => updateItem(line.id, line.quantity - 1)}
                          disabled={loading}
                          className="px-3 py-1 text-neutral-600 hover:text-black"
                          aria-label="Quitar uno"
                        >
                          ?
                        </button>
                        <span className="min-w-6 text-center text-sm">{line.quantity}</span>
                        <button
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          disabled={loading}
                          className="px-3 py-1 text-neutral-600 hover:text-black"
                          aria-label="Añadir uno"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium">{formatMoney(line.price)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart && cart.lines.length > 0 && (
          <footer className="border-t border-neutral-200 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-neutral-500">Subtotal</span>
              <span className="text-base font-semibold">
                {formatMoney(cart.cost.subtotalAmount)}
              </span>
            </div>
            <a
              href={cart.checkoutUrl}
              className="block w-full rounded-full bg-black px-6 py-3.5 text-center font-semibold text-white transition hover:bg-neutral-800"
            >
              Finalizar compra
            </a>
            <p className="mt-3 text-center text-xs text-neutral-400">
              Pago seguro gestionado por Shopify.
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
