import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might
          have been moved, deleted, or the URL might be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-transparent px-8 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

