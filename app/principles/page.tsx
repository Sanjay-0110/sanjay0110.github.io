import type { Metadata } from "next";
import { principles } from "@/data/siteData";

export const metadata: Metadata = { title: "Principles" };

export default function PrinciplesPage() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">

        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // principles
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>How I Work</h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginTop: 14,
              maxWidth: 480,
            }}
          >
            A set of working beliefs I've found useful. Not rules — hypotheses
            I keep testing.
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {principles.map((p, i) => (
            <div
              key={p.id}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 28,
                padding: "32px 0",
                borderBottom:
                  i < principles.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              {/* Index */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  paddingTop: 4,
                }}
              >
                {p.index}
              </div>

              {/* Content */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                    marginBottom: 12,
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    maxWidth: 560,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
