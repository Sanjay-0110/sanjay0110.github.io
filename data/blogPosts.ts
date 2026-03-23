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
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "feature-stores-explained",
    title: "Feature Stores Explained (Without the Hype)",
    date: "2025-02-14",
    category: "Engineering",
    tags: ["mlops", "feature-store", "data-engineering"],
    summary:
      "What a feature store actually is, when you need one, and when a simple Parquet file on S3 will do just fine.",
    readingTime: "7 min read",
  },
  {
    slug: "calibration-matters",
    title: "Calibration: The Model Property Nobody Talks About",
    date: "2025-01-03",
    category: "Machine Learning",
    tags: ["calibration", "probability", "model-evaluation"],
    summary:
      "Your classifier's accuracy can look great while its confidence scores are completely wrong. Here's why calibration matters and how to measure it.",
    readingTime: "9 min read",
  },
  {
    slug: "dbt-for-ml",
    title: "Using dbt to Version-Control Your Feature Pipeline",
    date: "2024-11-20",
    category: "Engineering",
    tags: ["dbt", "data-engineering", "mlops"],
    summary:
      "How to treat your feature transformations like software: tested, versioned, and documented — using dbt as the backbone.",
    readingTime: "6 min read",
  },
  {
    slug: "llm-evaluation-gap",
    title: "The LLM Evaluation Gap: Why Benchmarks Lie",
    date: "2024-09-08",
    category: "Research",
    tags: ["llm", "evaluation", "benchmarks"],
    summary:
      "MMLU scores go up every quarter, yet models still fail on tasks a 10-year-old handles easily. A look at why our evaluation frameworks are broken.",
    readingTime: "11 min read",
  },
];
