import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

      <p className="mt-2 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-700"
      >
        Back to homepage
      </Link>
    </section>
  );
}

export default NotFound;
