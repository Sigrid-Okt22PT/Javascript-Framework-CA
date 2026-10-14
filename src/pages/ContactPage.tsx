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
        <p role="status" className="bg-light p-4 text-primary">
          Your form has been completed successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-secondary">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            minLength={3}
            required
            className="mb-4 w-full border border-light p-3"
          />

          <label htmlFor="email" className="mb-1 block text-secondary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mb-4 w-full border border-light p-3"
          />

          <label htmlFor="subject" className="mb-1 block text-secondary">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            minLength={3}
            required
            className="mb-4 w-full border border-light p-3"
          />

          <label htmlFor="content" className="mb-1 block text-secondary">
            Message
          </label>
          <textarea
            name="content"
            id="content"
            minLength={3}
            required
            className="mb-4 w-full border border-lighty p-3"
          />

          <button
            type="submit"
            className="bg-accent px-6 py-3 text-primary hover:bg-secondary hover:text-white"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
