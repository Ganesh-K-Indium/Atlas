# Atlas — Content & Platform Roadmap

Atlas is a documentation-grade reference for Data Science, ML, Deep Learning,
Mathematics, and modern AI (LLMs, RAG, Agents, MLOps). This document tracks
what's built vs. what's planned. The live, always-current version of the
content checklist is at `/roadmap` in the running app (`src/app/roadmap/page.tsx`),
generated directly from `src/config/navigation.ts` — this file is the
narrative companion, not the source of truth for status.

## What's done (Phase 0 — platform foundation)

- **Stack**: Next.js 16 (App Router, RSC), React 19, TypeScript (strict),
  Tailwind CSS v4, shadcn/ui (Radix primitives), next-themes, TanStack Query.
- **Design system**: fully semantic tokens (no hardcoded colors anywhere) —
  `background`, `foreground`, `primary`, `secondary`, `accent`, `muted`,
  `success`, `warning`, `info`, `destructive`, `card`, `popover`, `sidebar`,
  `code`, five `chart-*` tokens — each with light and dark values in
  `src/app/globals.css`. Palette is a neutral base with a violet-blue brand
  accent (Stripe/Linear-adjacent), OKLCH throughout.
- **Information architecture**: the complete curriculum tree lives in
  `src/config/navigation.ts` — 9 top-level areas, ~40 sections, ~150 topics —
  covering every area named in the original brief (Foundations/Math, ML, DL,
  Applied Domains, LLMs & GenAI, Retrieval/RAG, Agentic AI, MLOps/Cloud,
  Interview Prep/Reference). Every topic has a `status` (`published` |
  `planned`) so the nav always shows the full intended scope honestly.
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
- **9 fully-written, web-verified exemplar pages** — one per major domain,
  demonstrating the full page standard (intuition → theory → derivation →
  diagram → code → complexity → pros/cons → interview Qs → references):
  1. Eigenvalues & Eigenvectors (`/docs/foundations/linear-algebra/eigenvalues-eigenvectors`)
  2. Backpropagation: Full Derivation (`/docs/foundations/calculus-optimization/backpropagation-derivation`)
  3. Gradient Boosting: XGBoost/LightGBM/CatBoost (`/docs/machine-learning/supervised-learning/gradient-boosting`)
  4. The Transformer Architecture (`/docs/deep-learning/attention-transformers/transformer-architecture`)
  5. Positional Encoding & RoPE (`/docs/llms/tokenization-representations/positional-encoding-rope`)
  6. PEFT: LoRA & QLoRA (`/docs/llms/training-alignment/lora-qlora`)
  7. Retrieval-Augmented Generation (`/docs/retrieval-knowledge/rag/retrieval-augmented-generation`)
  8. Model Context Protocol (`/docs/agents/protocols-frameworks/model-context-protocol`)
  9. The Frontier Model Landscape (`/docs/llms/frontier-landscape/frontier-model-landscape`)
- Time-sensitive claims (frontier model rankings, MCP governance/spec status,
  RoPE/LoRA/QLoRA paper details, XGBoost/LightGBM/CatBoost comparisons) were
  verified via live web search rather than written from memory; each page
  carries a `lastVerified` frontmatter date and, where the underlying facts
  are inherently volatile (the frontier-landscape and MCP pages), an explicit
  in-page callout warning readers to treat it as a snapshot.

## How to add a new topic

1. Find (or add) the entry in `src/config/navigation.ts` and flip its
   `status` to `"published"` once content exists.
2. Create `src/content/<group>/<section>/<item>.mdx` matching the slug path.
3. Frontmatter must satisfy `FrontMatter` in `src/types/content.ts`
   (`title`, `description`, `difficulty`, `status`, ideally `lastVerified`).
4. Use the MDX component library for structure — don't hand-roll raw HTML
   for callouts/tables/quizzes when a component already exists for it.
5. For any claim that changes over time (benchmarks, library versions,
   current SOTA, protocol/spec status), verify via web search before writing
   and record the date in `lastVerified`.
6. Run `npm run build` — new published pages are statically generated via
   `generateStaticParams` in `src/app/docs/[group]/[section]/[item]/page.tsx`.

## Phase 1 — Foundations & core ML depth (next up)

Fill out the remaining Linear Algebra / Calculus / Probability / Information
Theory pages, then core supervised/unsupervised/RL ML topics. These are the
most evergreen (least time-sensitive) and highest-leverage for the "handbook"
positioning — prioritize: PCA/SVD derivations, gradient descent variants,
bias-variance, cross-validation, clustering, and MDPs/policy gradients.

## Phase 2 — Deep Learning architectures

CNN family (ResNet/EfficientNet/U-Net/ViT/YOLO/CLIP/SAM), sequence models
(RNN/LSTM/GRU/Seq2Seq), generative models (VAE/GAN/Diffusion), and modern
architectures (GNNs, MoE, Mamba/state-space models). Each of these has
enough independent research literature to warrant its own verification pass.

## Phase 3 — LLM training, inference & evaluation

Tokenizers, SFT/RLHF/DPO derivations, scaling laws, FlashAttention, KV
caching, quantization (GPTQ/AWQ), speculative decoding, vLLM/TensorRT-LLM
serving, and LLM evaluation methodology. High time-sensitivity — verify
current best-practice and benchmark claims at write time, not from training
data memory.

## Phase 4 — Agents, Retrieval & MLOps

GraphRAG/knowledge graphs, hybrid search/reranking, A2A protocol,
LangChain/LangGraph/CrewAI/AutoGen, multi-agent systems, feature
stores/experiment tracking/model serving/monitoring, and cloud ML platforms
(AWS/Azure/GCP/Databricks/Snowflake).

## Phase 5 — Practice & reference

ML system design case studies, coding problems, glossary, AI timeline, and
downloadable cheat sheets. Lowest priority — most useful once the reference
content above it is substantially in place.

## Explicitly out of scope for now

- A real backend/auth/progress-persistence layer (bookmarks, tracked
  progress) — the spec asked for it, but it needs a data layer and account
  system decision (Postgres + auth provider) that's a separate project
  decision, not a default to make silently.
- An AI chatbot embedded in the docs — needs a decision on which model/API
  and a cost model before wiring up.
- A real code playground/sandbox — needs a decision on sandboxing approach
  (WebContainers, Pyodide, a remote executor) before implementation.

These are flagged here rather than stubbed out with fake functionality.
