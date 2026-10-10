import type { CartItemType } from "../../types/cart";

interface CartSummaryProps {
  items: CartItemType[];
}

function CartSummary({ items }: CartSummaryProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0,
  );

  return (
    <section className="rounded-lg bg-gray-100 p-6">
      <h2 className="mb-4 text-xl font-semibold">Order summary</h2>

      <div className="flex justify-between">
        <span>Total</span>
        <span className="font-semibold">{total.toFixed(2)} NOK</span>
      </div>
    </section>
  );
}

export default CartSummary;
