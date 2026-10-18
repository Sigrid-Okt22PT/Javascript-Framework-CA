import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "../components/products/ProductCard";
import SearchBar from "../components/products/SearchBar";
import Sorting from "../components/products/Sorting";
import type { Product } from "../types/product";
import { getDiscountPercentage } from "../utils/discount";
import { filterProducts } from "../utils/search";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllResults, setShowAllResults] = useState(false);

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

  const filteredProducts = showAllResults
    ? filterProducts(products, search)
    : products;

  // Sort products based on selected criteria
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.discountedPrice - b.discountedPrice;
      case "price-desc":
        return b.discountedPrice - a.discountedPrice;
      case "rating-desc":
        return b.rating - a.rating;
      case "title-asc":
        return a.title.localeCompare(b.title);
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
      <div className="relative z-20 flex min-h-40 items-center justify-center bg-primary px-6 py-10">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-8 top-6 h-64 w-64 rotate-45 bg-accent" />
          <div className="absolute right-0 top-0 hidden h-64 w-64 rotate-45 bg-light sm:block" />
          <div className="absolute bottom-12 right-64 hidden h-64 w-64 rounded-full bg-secondary md:block" />
          <div className="absolute left-64 top-12 h-64 w-64 rounded-full bg-secondary" />
        </div>

        {/* Search bar */}
        <div className="relative z-10 w-full max-w-4xl">
          <SearchBar
            search={search}
            setSearch={(value) => {
              setSearch(value);
              setShowAllResults(false);
            }}
            products={products}
            showAllResults={showAllResults}
            onShowAll={() => setShowAllResults(true)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-3xl font-bold text-primary">
            {showAllResults ? "Search Results" : "Our Products"}
          </h1>

          {showAllResults && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setShowAllResults(false);
              }}
              className="text-sm font-medium text-primary underline"
            >
              Clear search
            </button>
          )}
        </div>

        <Sorting sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Loading and error messages */}
      {loading && <p role="status">Loading products...</p>}

      {error && (
        <p role="alert" className="text-red-600">
          {error}
        </p>
      )}

      {/* Product grid */}
      {!loading &&
        !error &&
        (sortedProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
    </section>
  );
}

export default Home;
