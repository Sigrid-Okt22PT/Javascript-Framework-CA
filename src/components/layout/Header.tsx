import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "../../stores/cartStore";
import Logo from "./Logo";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function closeMenu() {
    setMenuOpen(false);
  }
  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="mx-auto max-w-6xl px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="hover:text-secondary"
              aria-label="Go to homepage"
            >
              Home
            </Link>
            <Link to="/contact" className="hover:text-secondary">
              Contact
            </Link>
            <Link
              to="/checkout"
              aria-label="Go to checkout"
              className="flex h-10 w-32 items-center justify-center bg-accent text-primary hover:bg-primary hover:text-light"
            >
              {cartCount > 0 && (
                <span className="flex min-w-6 items-center justify-center px-1 rounded-full bg-background font-bold text-accent">
                  {cartCount}
                </span>
              )}
              <ShoppingCart size={22} />
              <span>Checkout</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <Link
              to="/checkout"
              onClick={closeMenu}
              aria-label="Go to checkout"
              className="flex items-center gap-1 rounded p-2 text-primary"
            >
              {cartCount > 0 && (
                <span className="flex min-w-6 items-center justify-center rounded-full bg-accent px-1 text-primary">
                  {cartCount}
                </span>
              )}
              <ShoppingCart size={24} />
            </Link>

            <button
              type="button"
              className="rounded p-2 text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`flex-col gap-4 pt-4 md:hidden ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Go to homepage"
            className="py-2 flex items-center gap-2 text-primary justify-center"
          >
            Home
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            aria-label="Go to contact page"
            className="py-2 flex items-center gap-2 text-primary justify-center"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
