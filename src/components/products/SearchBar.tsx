interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      id="search"
      type="search"
      placeholder="Search products..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="w-full px-6 py-3 focus:border-secondary focus:outline-none"
    />
  );
}

export default SearchBar;
