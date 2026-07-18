"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    priceId: null,
    features: [
      "Foundations: math, statistics, information theory",
      "Classical Machine Learning & Deep Learning",
      "Applied domains & Retrieval/RAG",
    ],
  },
  {
    name: "Pro — Monthly",
    price: "$9",
    period: "/month",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
    features: [
      "Everything in Free",
      "LLMs, tokenization, training & alignment",
      "Agentic AI: MCP, A2A, LangGraph, CrewAI",
      "MLOps, cloud & production ML",
      "Interview prep & reference material",
    ],
    highlight: true,
  },
  {
    name: "Pro — Annual",
    price: "$79",
    period: "/year",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY,
    features: ["Everything in Pro Monthly", "~27% cheaper than paying monthly"],
  },
];

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function subscribe(priceId: string | null | undefined, planName: string) {
    if (!priceId) return;
    setLoadingPlan(planName);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      if (res.status === 401) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Unlock the full curriculum
          </h1>
          <p className="mt-3 text-muted-foreground">
            Foundations stay free forever. Subscribe for LLMs, agents, and
            production ML.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-6 ${
                plan.highlight ? "border-primary ring-1 ring-primary/40" : ""
              }`}
            >
              <h2 className="font-semibold">{plan.name}</h2>
              <p className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.priceId ? (
                <Button
                  className="mt-6"
                  disabled={loadingPlan === plan.name}
                  onClick={() => subscribe(plan.priceId, plan.name)}
                >
                  {loadingPlan === plan.name ? "Redirecting…" : "Subscribe"}
                </Button>
              ) : (
                <Button className="mt-6" variant="outline" asChild>
                  <Link href="/docs/foundations/linear-algebra/eigenvalues-eigenvectors">
                    Start reading
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
