import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";
import type { CartItemType } from "../types/cart";

interface CartStore {
  items: CartItemType[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      // Add an item or increase its quantity
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id,
          );

          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );

            return { items: updatedItems };
          } else {
            const newItem = { product, quantity: 1 };
            const updatedItems = [...state.items, newItem];

            return { items: updatedItems };
          }
        }),

      // Remove an item completely
      removeItem: (productId) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== productId,
          );

          return { items: updatedItems };
        }),

      // Update quantity or remove item if quantity is 0
      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            const updatedItems = state.items.filter(
              (item) => item.product.id !== productId,
            );

            return { items: updatedItems };
          } else {
            const updatedItems = state.items.map((item) =>
              item.product.id === productId
                ? { ...item, quantity: quantity }
                : item,
            );

            return { items: updatedItems };
          }
        }),

      // Empty the cart
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "shopping-cart-storage",
    },
  ),
);
