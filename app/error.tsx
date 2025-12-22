"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          We encountered an unexpected error. Please try again or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-transparent px-8 py-3 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

