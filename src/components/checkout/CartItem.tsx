import { useCartStore } from "../../stores/cartStore";
import type { CartItemType } from "../../types/cart";
import { TrashIcon } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="flex items-center justify-between border-b py-6">
      <div>
        <h3 className="font-semibold">{item.product.title}</h3>

        <p className="text-sm text-secondary">
          {item.product.discountedPrice.toFixed(2)} NOK
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
        >
          +
        </button>

        <button type="button" onClick={() => removeItem(item.product.id)}>
          <TrashIcon size={20} className="text-red-500 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
