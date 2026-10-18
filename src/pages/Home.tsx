import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "../components/products/ProductCard";
import SearchBar from "../components/products/SearchBar";
import Sorting from "../components/products/Sorting";
import type { Product } from "../types/product";
import { getDiscountPercentage } from "../utils/discount";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Something went wrong while loading products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const [sortBy, setSortBy] = useState("default");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Sort products based on selected criteria
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.discountedPrice - b.discountedPrice;
      case "price-desc":
        return b.discountedPrice - a.discountedPrice;
      case "rating-desc":
        return b.rating - a.rating;
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "discount-desc":
        return (
          getDiscountPercentage(b.price, b.discountedPrice) -
          getDiscountPercentage(a.price, a.discountedPrice)
        );

      default:
        return 0;
    }
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      {/* Search section */}
      <div className="relative flex min-h-40 items-center justify-center overflow-hidden bg-primary px-6 py-10">
        {/* Yellow square */}
        <div className="absolute left-8 top-6 h-64 w-64 rotate-45 bg-accent"></div>
        {/* Lime square */}
        <div className="absolute right-0 top-0 h-64 w-64 rotate-45 bg-light hidden sm:block"></div>
        {/* Teal circle */}
        <div className="absolute right-64 bottom-12 h-64 w-64 rounded-full bg-secondary hidden md:block"></div>
        {/* Slate circle */}
        <div className="absolute left-64 top-12 h-64 w-64 rounded-full bg-secondary"></div>

        {/* Search bar */}
        <div className="relative z-10 w-full max-w-4xl">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <h1 className="text-3xl font-bold text-primary">Our Products</h1>

        <Sorting sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {loading && <p>Loading products...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Home;
