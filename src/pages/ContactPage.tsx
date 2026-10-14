import { useState } from "react";
import type { FormEvent } from "react";

function ContactPage() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
    event.currentTarget.reset();
  }

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-12">
      <h1 className="text-3xl font-bold">Contact us</h1>

      {success && (
        <p role="status" className="bg-lime p-4 text-navy">
          Your form has been completed successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            minLength={3}
            required
            className="mb-4 w-full border border-gray-300 p-3"
          />

          <label htmlFor="email" className="mb-1 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mb-4 w-full border border-gray-300 p-3"
          />

          <label htmlFor="subject" className="mb-1 block">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            minLength={3}
            required
            className="mb-4 w-full border border-gray-300 p-3"
          />

          <label htmlFor="content" className="mb-1 block">
            Message
          </label>
          <textarea
            name="content"
            id="content"
            minLength={3}
            required
            className="mb-4 w-full border border-gray-300 p-3"
          />

          <button
            type="submit"
            className="bg-yellow px-6 py-3 text-navy hover:bg-slate hover:text-white"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
