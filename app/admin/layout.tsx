"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RequireRole from "@/components/RequireRole";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Orders", href: "/admin/orders", icon: "📦" },
  { label: "Price Match", href: "/admin/price-match", icon: "💰" },
  { label: "Issue Reports", href: "/admin/issues", icon: "⚠️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <RequireRole allowedRoles={["admin"]}>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <h2 className="admin-sidebar__title">Admin Panel</h2>
          <nav className="admin-sidebar__nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-sidebar__link ${
                  pathname === item.href ? "admin-sidebar__link--active" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="admin-content">{children}</main>
      </div>
    </RequireRole>
  );
}
