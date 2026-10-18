import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { ShoppingCartPlus } from "lucide-react";
import { useCartStore } from "../../stores/cartStore";
import RatingStars from "./Ratings";
import DiscountSticker from "./DiscountSticker";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <article className="flex h-full flex-col bg-white transition duration-200 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image.url}
            alt=""
            className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
          />
          <DiscountSticker
            discountedPrice={product.discountedPrice}
            originalPrice={product.price}
          />
        </div>

        <h2 className="px-6 pt-4 text-base font-semibold text-primary">
          {product.title}
        </h2>
      </Link>

      <div className="flex flex-1 flex-col px-6">
        <RatingStars rating={product.rating} />

        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-md font-medium text-primary">
            {product.discountedPrice} NOK
          </p>

          <button
            type="button"
            onClick={() => addItem(product)}
            className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-primary transition hover:bg-primary hover:text-light"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCartPlus size={22} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
