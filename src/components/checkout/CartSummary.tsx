import type { CartItemType } from "../../types/cart";

interface CartSummaryProps {
  items: CartItemType[];
}

function CartSummary({ items }: CartSummaryProps) {
  // Total before discounts
  const originalTotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // Total after discounts
  const total = items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0,
  );

  // Amount saved
  const discount = originalTotal - total;

  return (
    <section className="rounded-lg bg-gray-100 p-6">
      <h2 className="mb-6 text-xl font-semibold">Order summary</h2>

      <div className="space-y-4">
        {/* Original price */}
        <div className="flex items-center justify-between gap-4">
          <span>Original price</span>
          <span>{originalTotal.toFixed(2)} NOK</span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex items-center justify-between gap-4">
            <span>Discount</span>
            <span className="text-red-600">-{discount.toFixed(2)} NOK</span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between gap-4">
          <span>Shipping</span>
          <span className="text-right text-sm">Calculated at checkout</span>
        </div>

        {/* Final total */}
        <div className="flex items-center justify-between border-t pt-4">
          <span className="font-semibold">Total to pay</span>
          <span className="text-xl font-bold text-primary">
            {total.toFixed(2)} NOK
          </span>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
