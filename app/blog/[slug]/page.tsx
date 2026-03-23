import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPostsMeta } from "@/data/blogPosts";
import postsJson from "@/data/blogPosts.generated.json";

interface PostPayload {
  slug: string;
  content: string;
}

const payloads: PostPayload[] = postsJson as PostPayload[];

export function generateStaticParams() {
  return blogPostsMeta.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogPostsMeta.find((p) => p.slug === slug);
  if (!meta) return {};
  return { title: meta.title, description: meta.summary };
}

// Very lightweight Markdown → HTML renderer (headings + paragraphs only)
function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith("# ")) {
        return `<h1>${block.slice(2)}</h1>`;
      }
      // inline bold
      const html = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return `<p>${html}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = blogPostsMeta.find((p) => p.slug === slug);
  const payload = payloads.find((p) => p.slug === slug);

  if (!meta || !payload) notFound();

  const date = new Date(meta.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">

        {/* Back */}
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            display: "inline-block",
            marginBottom: 48,
            transition: "color 0.15s",
          }}
        >
          ← all posts
        </Link>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--accent-orange)",
                letterSpacing: "0.06em",
              }}
            >
              {meta.category}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              {date}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              {meta.readingTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              lineHeight: 1.25,
              marginBottom: 20,
            }}
          >
            {meta.title}
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            {meta.summary}
          </p>

          <div style={{ height: 1, background: "var(--border)", marginTop: 32 }} />
        </header>

        {/* Body */}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(payload.content) }}
        />

        {/* Tags */}
        <div style={{ marginTop: 48, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {meta.tags.map((t) => (
            <span key={t} className="tag">
              #{t}
            </span>
          ))}
        </div>

        <div className="divider" />

        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--accent)",
          }}
        >
          ← back to all posts
        </Link>
      </div>
    </div>
  );
}
