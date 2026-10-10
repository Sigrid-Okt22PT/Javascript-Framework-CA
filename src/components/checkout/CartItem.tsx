import type { CartItemType } from "../../types/cart";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  return (
    <article className="flex items-center gap-4 border-b border-gray-200 py-4">
      <img
        src={item.product.image.url}
        alt={item.product.image.alt || item.product.title}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div>
        <h2 className="font-semibold">{item.product.title}</h2>

        <p>{item.product.discountedPrice} NOK</p>

        <p>Quantity: {item.quantity}</p>
      </div>
    </article>
  );
}

export default CartItem;
