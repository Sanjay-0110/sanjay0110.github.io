import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: 120,
        paddingBottom: 96,
        textAlign: "center",
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}
        >
          // 404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          page not found
          <span
            style={{
              color: "var(--accent)",
              animation: "cursor-blink 1.2s step-end infinite",
            }}
          >
            _
          </span>
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            marginBottom: 40,
          }}
        >
          This path doesn't exist in the filesystem.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--accent)",
            border: "1px solid var(--accent-dim)",
            padding: "10px 24px",
            display: "inline-block",
            transition: "background 0.15s",
          }}
        >
          cd ~/home →
        </Link>
      </div>
    </div>
  );
}
