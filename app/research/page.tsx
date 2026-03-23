import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">
        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // research
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Research</h1>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: 14 }}>
            Nothing here yet.
          </p>
        </header>
      </div>
    </div>
  );
}