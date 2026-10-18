import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import type { Product } from "../types/product";
import { useCartStore } from "../stores/cartStore";
import RatingStars from "../components/products/Ratings";
import Review from "../components/products/Reviews";
import DiscountSticker from "../components/products/DiscountSticker";

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

  if (error) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-red-600">{error}</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-gray-600">Loading product...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Product image */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="h-full w-full object-cover"
          />
          <DiscountSticker
            discountedPrice={product.discountedPrice}
            originalPrice={product.price}
          />
        </div>

        {/* Product information */}
        <div className="flex flex-col gap-6 ">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <h2 className="text-2xl font-semibold">
            {product.discountedPrice} NOK{" "}
            <span className="text-sm font-normal line-through">
              {product.price} NOK
            </span>
          </h2>

          <p className="leading-relaxed text-gray-600">{product.description}</p>
          <RatingStars rating={product.rating} />
          <button
            type="button"
            onClick={() => addItem(product)}
            className="bg-accent px-6 py-3 font-semibold text-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="mt-12 max-w-2xl">
        <h2 className="mb-4 text-xl font-semibold">Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))
        ) : (
          <p className="border-t border-gray-200 py-4 text-secondary">
            No reviews available.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
