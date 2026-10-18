import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

function CheckoutForm() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    navigate("/checkout/success", {
      state: { email },
    });
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-10">
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
        <label htmlFor="addressLine1" className="mb-1 block">
          Street address
        </label>
        <input
          id="addressLine1"
          name="Street address"
          type="text"
          required
          autoComplete="address-line1"
          className="w-full border border-light p-3"
        />
      </div>
      <div>
        <label htmlFor="addressLine2" className="mb-1 block">
          Apartment / address line 2{" "}
          <span className="text-gray-400">(optional)</span>
        </label>
        <input
          id="addressLine2"
          name="Apartment / address line 2"
          type="text"
          autoComplete="address-line2"
          className="w-full border border-light p-3"
        />
      </div>
      {/* Postcode and City */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="postcode" className="mb-1 block">
            Postcode
          </label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            required
            autoComplete="postal-code"
            className="w-full border border-light p-3"
          />
        </div>

        <div>
          <label htmlFor="city" className="mb-1 block">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            className="w-full border border-light p-3"
          />
        </div>
      </div>

      <button
        type="submit"
        name="completeCheckout"
        className="bg-accent px-6 py-4 text-primary transition hover:bg-secondary hover:text-light"
      >
        Complete checkout
      </button>
    </form>
  );
}
export default CheckoutForm;
