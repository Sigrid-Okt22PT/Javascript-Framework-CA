interface SortingProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

function Sorting({ sortBy, setSortBy }: SortingProps) {
  return (
    <div>
      <label htmlFor="product-sort" className="sr-only">
        Sort products
      </label>

      <select
        id="product-sort"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        className="rounded border border-secondary px-4 py-2 text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="discount-desc">Discount: High to Low</option>
      </select>
    </div>
  );
}

export default Sorting;
