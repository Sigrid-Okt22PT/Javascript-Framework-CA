function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Contact us</h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 p-3"
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
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1 block">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="subject"
            required
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>
        <div>
          <label htmlFor="content" className="mb-1 block">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="w-full rounded-lg border border-gray-300 p-3"
          ></textarea>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
