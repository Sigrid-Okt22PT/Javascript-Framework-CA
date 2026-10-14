import { create } from "zustand";
import type { Product } from "../types/product";
import type { CartItemType } from "../types/cart";

interface CartStore {
  items: CartItemType[];
  addItem: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),
}));
