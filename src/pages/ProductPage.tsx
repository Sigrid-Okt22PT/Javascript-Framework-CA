import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import type { Product } from "../types/product";
import { useCartStore } from "../stores/cartStore";

function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const data = await getProductById(id!);
        setProduct(data);
      } catch {
        setError("Failed to fetch product.");
      }
    }

    fetchProduct();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product...</p>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Product image */}
        <div className="overflow-hidden bg-gray-100">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product information */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-2xl font-semibold">
            {product.discountedPrice} NOK
          </p>

          <p className="leading-relaxed text-gray-600">{product.description}</p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="bg-accent px-6 py-3 font-semibold text-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
