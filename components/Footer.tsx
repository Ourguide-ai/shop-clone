import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 mt-16 border-t-2 border-[var(--color-primary)]">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-12">
        {/* Top: Logo + tagline */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-primary)] transition-transform duration-200 group-hover:scale-105">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 7h12l-1 14H7L6 7zm3 0a3 3 0 016 0"
                />
              </svg>
            </span>
            <span className="font-heading text-lg font-semibold text-white tracking-tight">
              Shop<span className="text-gray-500">Clone</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-gray-500 max-w-sm leading-relaxed">
            Curated products, crafted experiences. Discover what&apos;s next in online shopping.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-[0.6875rem] font-semibold text-white uppercase tracking-widest mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="relative inline-block hover:text-white transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/category/electronics" className="relative inline-block hover:text-white transition-colors duration-200">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/clothing" className="relative inline-block hover:text-white transition-colors duration-200">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/category/home" className="relative inline-block hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/books" className="relative inline-block hover:text-white transition-colors duration-200">
                  Books
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-[0.6875rem] font-semibold text-white uppercase tracking-widest mb-4">
              Account
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cart" className="relative inline-block hover:text-white transition-colors duration-200">
                  Your Cart
                </Link>
              </li>
              <li>
                <Link href="/orders" className="relative inline-block hover:text-white transition-colors duration-200">
                  Your Orders
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="relative inline-block hover:text-white transition-colors duration-200">
                  Your Wishlist
                </Link>
              </li>
              <li>
                <Link href="/account" className="relative inline-block hover:text-white transition-colors duration-200">
                  Account Settings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-[0.6875rem] font-semibold text-white uppercase tracking-widest mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="relative inline-block hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/price-match" className="relative inline-block hover:text-white transition-colors duration-200">
                  Price Match
                </Link>
              </li>
              <li>
                <Link href="/schedule-repair" className="relative inline-block hover:text-white transition-colors duration-200">
                  Schedule Repair
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-[0.6875rem] font-semibold text-white uppercase tracking-widest mb-4">
              Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/help" className="relative inline-block hover:text-white transition-colors duration-200">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/help?tab=returns" className="relative inline-block hover:text-white transition-colors duration-200">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link href="/help?tab=shipping" className="relative inline-block hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">&copy; 2026 ShopClone. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-heading text-xs">Built with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
