function CheckoutForm() {
  return (
    <form className="space-y-4">
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
          className="w-full border border-gray-300 p-3"
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
          className="w-full border border-gray-300 p-3"
        />
      </div>
      <div>
        <label htmlFor="address" className="mb-1 block">
          address
        </label>
        <input
          id="address"
          name="address"
          type="address"
          required
          className="w-full border border-gray-300 p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-accent px-6 py-3 text-primary hover:bg-gray-700"
      >
        Complete checkout
      </button>
    </form>
  );
}

export default CheckoutForm;
