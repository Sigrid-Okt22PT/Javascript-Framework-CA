// src/utils/search.ts
import type { Product } from "../types/product";

export function filterProducts(products: Product[], search: string) {
  const searchTerm = search.trim().toLowerCase();

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  );
}
