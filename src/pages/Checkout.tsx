import CartItem from "../components/checkout/CartItem";
import CartSummary from "../components/checkout/CartSummary";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { useCartStore } from "../stores/cartStore";

function Checkout() {
  const items = useCartStore((state) => state.items);

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-12">
      <h1 className="text-3xl font-bold">Checkout</h1>

      {/* Cart items */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Your cart</h2>
        <div className="hidden grid-cols-6 items-center gap-4 border-b pb-3 text-sm font-semibold text-gray-600 md:grid">
          <span className="col-span-3">Item</span>
          <span>Price</span>
          <span>Quantity</span>
          <span className="text-right">Total price</span>
        </div>
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
