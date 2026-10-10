import CartItem from "../components/checkout/CartItem";
import CartSummary from "../components/checkout/CartSummary";
import CheckoutForm from "../components/checkout/CheckoutForm";
import type { CartItemType } from "../types/cart";

function Checkout() {
  const items: CartItemType[] = [];

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-12">
      <h1 className="text-3xl font-bold">Checkout</h1>

      {/* Cart items */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Your cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => <CartItem key={item.product.id} item={item} />)
        )}
      </div>

      {/* Order summary */}
      <CartSummary items={items} />

      {/* Checkout form */}
      <CheckoutForm />
    </section>
  );
}

export default Checkout;
