import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>

          <p className="font-medium">{product.discountedPrice} NOK</p>

          <span className="mt-3 inline-block text-sm">View</span>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
