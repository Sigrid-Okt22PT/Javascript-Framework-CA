import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-6xl px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="text-2xl font-bold">
            Sigrids shop!
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              Contact
            </Link>
            <Link
              to="/checkout"
              className="flex items-center gap-2 text-gray-800 hover:text-gray-500"
            >
              <ShoppingCart size={22} />
              <span>Checkout</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`flex-col gap-4 pt-4 md:hidden ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link to="/" onClick={closeMenu} className="py-2 hover:text-gray-500">
            Home
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="py-2 hover:text-gray-500"
          >
            Contact
          </Link>

          <Link
            to="/checkout"
            onClick={closeMenu}
            className="py-2 hover:text-gray-500"
          >
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
