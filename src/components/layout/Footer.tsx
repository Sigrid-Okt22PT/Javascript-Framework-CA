import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row">
        {/* Copyright */}
        <p className="text-m text-light">
          © {new Date().getFullYear()} Sigrid Johanne.
        </p>

        {/* Navigation */}
        <nav aria-label="Footer">
          <div className="flex items-center gap-12">
            <Link
              to="/contact"
              className="text-m text-light hover:text-light hover:underline"
            >
              Contact us
            </Link>
            <Link
              to="/"
              className="text-m text-light hover:text-light hover:underline"
            >
              Home
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
