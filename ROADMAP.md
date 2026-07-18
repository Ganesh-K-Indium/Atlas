# Atlas — Content & Platform Roadmap

Atlas is a documentation-grade reference for Data Science, ML, Deep Learning,
Mathematics, and modern AI (LLMs, RAG, Agents, MLOps). This document tracks
what's built. The live, always-current version of the content checklist is
at `/roadmap` in the running app (`src/app/roadmap/page.tsx`), generated
directly from `src/config/navigation.ts` — this file is the narrative
companion, not the source of truth for status.

## Status: all 115 planned topics published

Every topic in the original curriculum plan now has a real, written page —
`grep -c 'status: "planned"' src/config/navigation.ts` returns `0`. The
`status` field on each nav item is left in place (rather than removed)
because it's how new topics get added going forward: a new entry starts
`"planned"` and flips to `"published"` once its page exists, so the roadmap
mechanism stays live for future expansion rather than being a one-time
migration.

## Platform foundation

- **Stack**: Next.js 16 (App Router, RSC), React 19, TypeScript (strict),
  Tailwind CSS v4, shadcn/ui (Radix primitives), next-themes, TanStack Query.
- **Design system**: fully semantic tokens (no hardcoded colors anywhere) —
  `background`, `foreground`, `primary`, `secondary`, `accent`, `muted`,
  `success`, `warning`, `info`, `destructive`, `card`, `popover`, `sidebar`,
  `code`, five `chart-*` tokens — each with light and dark values in
  `src/app/globals.css`. Palette is a neutral base with a violet-blue brand
  accent (Stripe/Linear-adjacent), OKLCH throughout.
- **Information architecture**: the complete curriculum tree lives in
  `src/config/navigation.ts` — 9 top-level areas, ~40 sections, 115 topics —
  covering every area named in the original brief (Foundations/Math, ML, DL,
  Applied Domains, LLMs & GenAI, Retrieval/RAG, Agentic AI, MLOps/Cloud,
  Interview Prep/Reference).
- **Content pipeline**: MDX via `next-mdx-remote/rsc`, `remark-math` +
  `rehype-katex` for LaTeX, `rehype-pretty-code` (Shiki) for syntax
  highlighting, `rehype-slug` for heading anchors, a hand-rolled TOC extractor.
- **Reusable MDX component library** (`src/components/mdx/`): `Callout`,
  `ComparisonTable`, `Quiz` (interactive, client-side), `Flashcards`
  (flip-card, client-side), `Mermaid` (theme-aware diagram rendering),
  `Prerequisites`, `KeyTakeaways`, `ProsCons`, `ReferenceList`, a
  copy-to-clipboard `Pre` wrapper for code blocks.
- **Docs shell**: collapsible sidebar nav, sticky header with a `⌘K` command
  palette (fuzzy search across every topic via `cmdk`), mobile sheet nav,
  per-page TOC, difficulty badges, reading-time estimates.

## Content coverage

All 115 pages follow the same standard: intuition before formalism, a real
worked derivation (not hand-waved), a Mermaid diagram, working code, a
complexity/comparison table, common mistakes, a 2-question interview quiz,
and a references list of real, correctly-attributed sources.

| Area | Topics | Notes |
| --- | --- | --- |
| Foundations (Linear Algebra, Calculus/Optimization, Probability/Statistics, Information Theory) | 21 | Stable, evergreen math — least time-sensitive |
| Machine Learning (Supervised, Unsupervised, RL, Evaluation) | 18 | Classical algorithms through ensemble methods |
| Deep Learning (Fundamentals, Vision, Sequence, Attention/Transformers, Generative, Modern Architectures) | 23 | CNNs through Mamba/state-space models |
| Applied AI Domains | 5 | CV, NLP, Speech, Time Series, RecSys survey pages |
| LLMs & Generative AI (Tokenization, Training/Alignment, Inference/Serving, Eval/Safety, Frontier Landscape) | 15 | Highest time-sensitivity — web-verified throughout |
| Retrieval & Knowledge Systems | 4 | RAG, vector DBs, hybrid search, GraphRAG |
| Agentic AI (Architectures, Protocols/Frameworks) | 8 | MCP, A2A, LangGraph, CrewAI/AutoGen |
| MLOps & Systems (Production ML, Cloud/Big Data) | 10 | Feature stores through Databricks/Snowflake |
| Career & Practice (Interview Prep, Reference) | 6 | System design, coding problems, glossary, timeline, cheat sheets |

**Accuracy methodology**: every page carries a `lastVerified` frontmatter
date. Stable/foundational math and classical ML content was written from
verified first-principles derivations. Anything time-sensitive — frontier
model rankings, protocol governance (MCP/A2A), current framework capabilities
(vLLM, LangGraph, CrewAI/AutoGen, cloud ML platforms), paper-specific claims
(RoPE, LoRA/QLoRA, DPO, GraphRAG, FlashAttention, GPTQ/AWQ) — was verified via
live web search rather than written from training-data memory, with explicit
in-page callouts on pages whose facts are inherently a snapshot (frontier
landscape, MCP, AI alignment/safety, AutoGen's 2026 fork situation).

## How to add a new topic

1. Find (or add) the entry in `src/config/navigation.ts` with `status: "planned"`.
2. Create `src/content/<group>/<section>/<item>.mdx` matching the slug path.
3. Frontmatter must satisfy `FrontMatter` in `src/types/content.ts`
   (`title`, `description`, `difficulty`, `status`, ideally `lastVerified`).
4. Use the MDX component library for structure — don't hand-roll raw HTML
   for callouts/tables/quizzes when a component already exists for it.
5. For any claim that changes over time (benchmarks, library versions,
   current SOTA, protocol/spec status), verify via web search before writing
   and record the date in `lastVerified`.
6. Two MDX syntax pitfalls that have broken the build before — avoid both:
   - A block-math `$$` closer must be on its own line, never glued to the
     end of the last content character (`...text.$$` breaks the parser).
   - Never write a bare `{word}` placeholder in prose (e.g. literal
     `{class}` as example text) — MDX parses it as a JS expression. Wrap
     placeholders in backticks instead.
7. Flip the item's `status` to `"published"` in `navigation.ts`.
8. Run `npm run build` — published pages are statically generated via
   `generateStaticParams` in `src/app/docs/[group]/[section]/[item]/page.tsx`.

## Explicitly out of scope

- A real backend/auth/progress-persistence layer (bookmarks, tracked
  progress) — the spec asked for it, but it needs a data layer and account
  system decision (Postgres + auth provider) that's a separate project
  decision, not a default to make silently.
- An AI chatbot embedded in the docs — needs a decision on which model/API
  and a cost model before wiring up.
- A real code playground/sandbox — needs a decision on sandboxing approach
  (WebContainers, Pyodide, a remote executor) before implementation.

These are flagged here rather than stubbed out with fake functionality.
