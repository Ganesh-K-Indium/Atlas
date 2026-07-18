# Atlas — AI, ML & Data Science Handbook

A documentation-grade reference platform for Data Science, Machine Learning,
Deep Learning, Mathematics, Generative AI, LLMs, and Agentic AI — built with
Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

See [ROADMAP.md](./ROADMAP.md) for what's built, what's planned, and how to
add a new topic. The live content checklist is also browsable at `/roadmap`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework**: Next.js 16 (App Router, RSC), React 19, TypeScript (strict)
- **Styling**: Tailwind CSS v4, semantic design tokens only (no hardcoded
  colors) — see `src/app/globals.css`
- **UI**: shadcn/ui on Radix primitives, Framer Motion, Lucide icons
- **Content**: MDX (`next-mdx-remote/rsc`) with KaTeX math, Shiki syntax
  highlighting, Mermaid diagrams, and a custom component library
  (`src/components/mdx/`)
- **Data/forms**: TanStack Query, React Hook Form + Zod

## Project structure

```
src/
  app/            routes (docs catch-all, homepage, roadmap)
  components/
    ui/           shadcn primitives
    layout/       header, sidebar, TOC, planned-page placeholder
    mdx/          Callout, ComparisonTable, Quiz, Flashcards, Mermaid, etc.
    features/     command palette / search
  config/         navigation.ts — the full curriculum IA
  content/        MDX source files, mirroring the nav slug structure
  lib/            content loader, TOC extraction, stats
  providers/      theme + query providers
  types/          FrontMatter / nav types
```

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build (also runs the TS type check)
npm run lint    # eslint
```
