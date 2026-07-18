import Link from "next/link";
import {
  ArrowRight,
  Sigma,
  BrainCircuit,
  Bot,
  Network,
  Server,
  BookOpenCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getGroupStats, getOverallStats } from "@/lib/stats";

const groupIcons: Record<string, typeof Sigma> = {
  foundations: Sigma,
  "machine-learning": BrainCircuit,
  "deep-learning": Network,
  "applied-domains": Network,
  llms: Bot,
  "retrieval-knowledge": Server,
  agents: Bot,
  mlops: Server,
  practice: BookOpenCheck,
};

export default function Home() {
  const groups = getGroupStats();
  const overall = getOverallStats();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
            <Badge variant="outline" className="mb-6">
              Foundations through the frontier
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The AI, ML & Data Science{" "}
              <span className="text-primary">handbook</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Mathematical intuition, derivations, architecture diagrams, and
              production practice — organized as a single reference spanning
              Statistics, Machine Learning, Deep Learning, LLMs, Agentic AI,
              and MLOps.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/docs/foundations/linear-algebra/eigenvalues-eigenvectors">
                  Start reading <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/roadmap">View content roadmap</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {overall.published} of {overall.total} topics published across{" "}
              {overall.groups} curriculum areas — see what&apos;s live vs.
              planned on the{" "}
              <Link href="/roadmap" className="underline underline-offset-4">
                roadmap
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Curriculum grid */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              A complete curriculum
            </h2>
            <p className="mt-2 text-muted-foreground">
              Every area follows the same standard: intuition, theory, math,
              code, comparisons, and interview practice.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => {
              const Icon = groupIcons[group.slug] ?? Sigma;
              const pct = Math.round((group.published / group.total) * 100);
              return (
                <Link
                  key={group.slug}
                  href={group.firstHref}
                  className="group rounded-xl border p-5 transition-colors hover:border-primary/40 hover:bg-accent/30"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {group.total} topics
                  </p>
                  <Progress value={pct} className="h-1.5" />
                  <p className="mt-2 text-xs text-muted-foreground">
                    {group.published} published
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* What every page includes */}
        <section className="border-t border-border/60 bg-muted/20">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Every published topic includes
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Intuition before formalism",
                "Full mathematical derivations",
                "Architecture & flow diagrams",
                "Working Python implementations",
                "Complexity & trade-off analysis",
                "Comparison tables across alternatives",
                "Interview-style questions",
                "Verified references & primary sources",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg border bg-card px-4 py-3 text-sm"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        Built as a living reference — content ships incrementally, tracked
        openly on the{" "}
        <Link href="/roadmap" className="underline underline-offset-4">
          roadmap
        </Link>
        .
      </footer>
    </div>
  );
}
