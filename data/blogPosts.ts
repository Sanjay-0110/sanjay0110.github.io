// data/blogPosts.ts
// Metadata for blog posts. Payloads live in blogPosts.generated.json.

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  readingTime: string; // e.g. "5 min read"
  externalUrl?: string;
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "lonely-nights-and-fighting-souls",
    title: "Lonely Nights and Fighting Souls",
    date: "2025-03-01",
    category: "Writing",
    tags: ["personal", "reflection"],
    summary: "A personal essay on solitude, resilience, and what it means to keep going.",
    readingTime: "3 min read",
    externalUrl: "https://sjai58066.substack.com/p/lonely-nights-and-fighting-souls",
  },
  {
    slug: "the-b-side-of-brilliance",
    title: "The B-Side of Brilliance: Understanding the Unseen",
    date: "2025-02-01",
    category: "Writing",
    tags: ["personal", "essay"],
    summary: "Exploring the hidden side of brilliance — the struggles, doubts, and quiet work that never makes the highlight reel.",
    readingTime: "4 min read",
    externalUrl: "https://sjai58066.substack.com/p/the-b-side-of-brilliance-understanding",
  },
];
