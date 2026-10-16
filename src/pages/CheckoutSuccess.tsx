import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 text-center">
      <h1 className="mb-4 text-3xl font-bold text-primary">Order completed!</h1>

      <p className="mb-8">
        Thank you for your order. Your checkout was successful.
      </p>

      <Link
        to="/"
        className="inline-block bg-accent px-6 py-3 text-primary transition hover:bg-secondary hover:text-light"
      >
        Continue shopping
      </Link>
    </section>
  );
}

export default CheckoutSuccess;
