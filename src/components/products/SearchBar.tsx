import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { filterProducts } from "../../utils/search";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  products: Product[];
  showAllResults: boolean;
  onShowAll: () => void;
}

function SearchBar({
  search,
  setSearch,
  products,
  showAllResults,
  onShowAll,
}: SearchBarProps) {
  const searchTerm = search.trim().toLowerCase();

  const filteredProducts = filterProducts(products, search);

  return (
    <div className="relative w-full">
      <input
        id="search"
        type="search"
        placeholder="Search products..."
        aria-label="Search products"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
      />

      {!showAllResults && searchTerm.length > 0 && (
        <div className="absolute left-0 top-full z-50 mt-1 w-full bg-background shadow-lg">
          <ul className="max-h-64 overflow-y-auto">
            {filteredProducts.map((product) => (
              <li key={product.id} className="border-b border-gray-200">
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center gap-4 px-4 py-2 text-primary hover:bg-light focus:bg-light"
                >
                  <img
                    src={product.image.url}
                    alt=""
                    className="h-16 w-16 shrink-0 object-cover"
                  />

                  <span className="flex-1">{product.title}</span>

                  <span className="text-sm text-primary">
                    {product.discountedPrice} NOK
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {filteredProducts.length > 0 ? (
            <button
              type="button"
              onClick={onShowAll}
              className="w-full border-t border-gray-200 px-4 py-3 text-center font-semibold text-primary hover:bg-light focus:bg-light"
            >
              Show all {filteredProducts.length} results
            </button>
          ) : (
            <p className="px-4 py-3 text-primary">
              No matching products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
