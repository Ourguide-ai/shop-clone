import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-24 text-center">
      <svg className="h-16 w-16 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h1 className="text-6xl font-heading font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-2">
        Product Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        Sorry, we couldn&apos;t find the product you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="btn btn--primary btn--lg"
      >
        Back to Shop
      </Link>
    </div>
  );
}
