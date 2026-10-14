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
    <article className="flex h-full flex-col rounded-lg border border-slate/20 bg-white p-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="h-56 w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.title}</h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <p className="font-medium">{product.discountedPrice} NOK</p>

          <button
            type="button"
            aria-label="Add to cart"
            onClick={() => addItem(product)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow text-navy hover:bg-lime"
          >
            <ShoppingCartPlus size={22} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
