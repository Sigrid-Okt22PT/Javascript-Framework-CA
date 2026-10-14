import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { ShoppingCartPlus } from "lucide-react";
import { useCartStore } from "../../stores/cartStore";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <article className="flex h-full flex-col bg-white transition duration-200 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden ">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-6 pt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-semibold text-primary">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-md font-medium text-secondary">
            {product.discountedPrice} NOK
          </p>

          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-primary transition hover:bg-primary hover:text-light mb-4"
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
