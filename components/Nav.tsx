"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, profile } from "@/data/siteData";

export default function Nav() {
  const path = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "var(--accent)" }}>~/</span>
          {profile.name.toLowerCase()}
        </Link>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? path === "/"
                : path.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  padding: "4px 10px",
                  color: active ? "var(--accent)" : "var(--text-secondary)",
                  borderBottom: active
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
