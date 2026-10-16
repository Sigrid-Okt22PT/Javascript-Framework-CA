import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

function CheckoutForm() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/checkout/success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Customer information</h2>

      <div>
        <label htmlFor="name" className="mb-1 block">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-light p-3"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-light p-3"
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-1 block">
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          className="w-full border border-light p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-accent px-6 py-3 text-primary transition hover:bg-secondary hover:text-light"
      >
        Complete checkout
      </button>
    </form>
  );
}

export default CheckoutForm;
