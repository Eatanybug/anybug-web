"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  addToCart,
  createCart,
  getCart,
  isShopifyConfigured,
  removeCartLine,
  updateCartLine,
  type Cart,
} from "@/lib/shopify";
import { CartDrawer } from "@/components/cart/CartDrawer";

const STORAGE_KEY = "twm_cart_id";

type CartContextValue = {
  cart: Cart | null;
  isOpen: boolean;
  loading: boolean;
  configured: boolean;
  open: () => void;
  close: () => void;
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Recuperar carrito existente al cargar.
  useEffect(() => {
    if (!isShopifyConfigured) return;
    const id = localStorage.getItem(STORAGE_KEY);
    if (!id) return;
    getCart(id)
      .then((c) => {
        if (c) setCart(c);
        else localStorage.removeItem(STORAGE_KEY);
      })
      .catch(() => localStorage.removeItem(STORAGE_KEY));
  }, []);

  const ensureCart = useCallback(async (): Promise<Cart> => {
    if (cart) return cart;
    const created = await createCart();
    localStorage.setItem(STORAGE_KEY, created.id);
    setCart(created);
    return created;
  }, [cart]);

  const addItem = useCallback(
    async (merchandiseId: string, quantity = 1) => {
      if (!isShopifyConfigured) return;
      setLoading(true);
      try {
        const current = await ensureCart();
        const updated = await addToCart(current.id, merchandiseId, quantity);
        setCart(updated);
        setIsOpen(true);
      } finally {
        setLoading(false);
      }
    },
    [ensureCart]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setLoading(true);
      try {
        const updated =
          quantity <= 0
            ? await removeCartLine(cart.id, lineId)
            : await updateCartLine(cart.id, lineId, quantity);
        setCart(updated);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setLoading(true);
      try {
        setCart(await removeCartLine(cart.id, lineId));
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      isOpen,
      loading,
      configured: isShopifyConfigured,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      addItem,
      updateItem,
      removeItem,
    }),
    [cart, isOpen, loading, addItem, updateItem, removeItem]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}
