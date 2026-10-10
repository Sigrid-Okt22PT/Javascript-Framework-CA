

function Home() {
  return (
    <main>
      {/* Welcome section */}
      <section className="bg-gray-100 px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Welcome to our webshop
        </h1>

        <p className="mx-auto max-w-2xl text-gray-600">
          Discover our products and find something you'll love.
        </p>
      </section>

      {/* Products section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Our Products
        </h2>

        {/* Product grid will go here */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <p className="text-gray-500">
            Products coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

