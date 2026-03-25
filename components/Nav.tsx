"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation, profile } from "@/data/siteData";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", gap: 4, alignItems: "center" }}>
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
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 36,
              height: 36,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <span style={{
              display: "block",
              width: 20,
              height: 1,
              background: menuOpen ? "var(--accent)" : "var(--text-secondary)",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              transition: "transform 0.2s, background 0.2s",
            }} />
            <span style={{
              display: "block",
              width: 20,
              height: 1,
              background: menuOpen ? "transparent" : "var(--text-secondary)",
              transition: "background 0.2s",
            }} />
            <span style={{
              display: "block",
              width: 20,
              height: 1,
              background: menuOpen ? "var(--accent)" : "var(--text-secondary)",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              transition: "transform 0.2s, background 0.2s",
            }} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {navigation.map((item, i) => {
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
                  fontSize: "1.2rem",
                  letterSpacing: "0.04em",
                  color: active ? "var(--accent)" : "var(--text-primary)",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  animationDelay: `${i * 0.04}s`,
                }}
                className="mobile-nav-link fade-up"
              >
                {item.label}
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>→</span>
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
