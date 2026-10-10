import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row">
        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Sigrid Johanne.
        </p>

        {/* Navigation */}
        <nav aria-label="Footer">
          <div className="flex items-center gap-12">
            <Link
              to="/contact"
              className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
            >
              Contact us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
            >
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
