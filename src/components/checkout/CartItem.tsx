import { useCartStore } from "../../stores/cartStore";
import type { CartItemType } from "../../types/cart";
import { TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const { product, quantity } = item;

  const totalPrice = product.discountedPrice * quantity;
  const hasDiscount = product.price > product.discountedPrice;

  return (
    <div className="grid grid-cols-2 items-center gap-4 border-b py-6 md:grid-cols-5">
      {/* Product */}
      <Link
        className="flex min-w-0 items-center gap-3 md:col-span-2"
        to={`/product/${product.id}`}
      >
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="h-20 w-20 shrink-0 rounded object-cover"
        />

        <h3 className="min-w-0 font-semibold">{product.title}</h3>
      </Link>

      {/* Unit price */}
      <div className="text-right">
        <p className="font-semibold text-gray-600 ">
          {product.discountedPrice.toFixed(2)} NOK
        </p>

        {hasDiscount && (
          <p className="text-sm text-gray-500 line-through">
            {product.price.toFixed(2)} NOK
          </p>
        )}
      </div>
      {/* Quantity */}
      <div className="flex items-center justify-end gap-3 ">
        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity - 1)}
          aria-label="Decrease quantity"
          className="rounded border px-2 py-1"
        >
          -
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={() => updateQuantity(product.id, quantity + 1)}
          aria-label="Increase quantity"
          className="rounded border px-2 py-1"
        >
          +
        </button>

        <button
          type="button"
          onClick={() => removeItem(product.id)}
          aria-label={`Remove ${product.title} from cart`}
          className="rounded p-2 hover:bg-gray-100"
        >
          <TrashIcon size={20} className="text-red-800" />
        </button>
      </div>

      {/* Total */}
      <div className="text-right">
        <p className="font-semibold text-primary">
          {totalPrice.toFixed(2)} NOK
        </p>
      </div>
    </div>
  );
}

export default CartItem;
