import type { Product, ApiResponse } from "../types/product";

const API_ROOT = "https://v2.api.noroff.dev";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_ROOT}/online-shop`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result: ApiResponse<Product[]> = await response.json();

  return result.data;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_ROOT}/online-shop/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const result: ApiResponse<Product> = await response.json();

  return result.data;
}
