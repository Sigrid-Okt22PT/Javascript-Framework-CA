import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Webshop
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          <Link to="/cart" className="hover:text-gray-500">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
