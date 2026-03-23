# Sanjay Kumar — Portfolio

Personal portfolio site built with Next.js, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Next.js 15** (App Router) with `output: 'export'` for static generation
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- Deployed to **GitHub Pages** via GitHub Actions

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (fonts, GA)
│   ├── globals.css         # Design tokens + global styles
│   ├── page.tsx            # Home
│   ├── experience/         # Work history
│   ├── projects/           # Side projects
│   ├── research/           # Publications
│   ├── blog/               # Blog listing + [slug] post pages
│   ├── principles/         # Working principles
│   └── contact/            # Contact + CV download
├── components/
│   ├── Nav.tsx
│   └── Footer.tsx
├── data/
│   ├── siteData.ts         # ← Edit all content here
│   ├── blogPosts.ts        # Blog post metadata (slugs, categories, tags)
│   └── blogPosts.generated.json  # Blog post bodies (Markdown)
└── public/
    ├── profile.jpg         # Your profile photo
    └── cv.pdf              # Your CV
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

**All main content** lives in `data/siteData.ts`:
- `profile` — name, role, bio, email, location
- `experience` — work history entries
- `projects` — project cards
- `principles` — working principles list
- `research` — publications
- `social` — links to GitHub, LinkedIn, etc.

**Blog posts** are split across two files:
- `data/blogPosts.ts` — metadata: slug, title, date, category, tags, summary, reading time
- `data/blogPosts.generated.json` — post body content in Markdown (headings + paragraphs)

**Static assets:**
- Replace `public/profile.jpg` with your actual photo
- Replace `public/cv.pdf` with your actual CV

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages** → Source: **GitHub Actions**
3. (Optional) Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` as a repository secret under **Settings → Secrets and variables → Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

## Custom Domain

Add a `CNAME` file to `/public/` containing your domain:

```
sanjay.dev
```

Then configure your DNS to point to GitHub Pages.
