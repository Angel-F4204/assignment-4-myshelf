import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="mb-4 text-3xl font-bold">404 - Page Not Found</h1>

      <Link to="/" className="underline">
        Go back home
      </Link>
    </main>
  );
}

export default NotFoundPage;
