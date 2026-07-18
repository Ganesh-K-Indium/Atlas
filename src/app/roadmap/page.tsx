import Link from "next/link";
import { Check, CircleDashed } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { navigation } from "@/config/navigation";
import { getOverallStats } from "@/lib/stats";
import { Progress } from "@/components/ui/progress";

export const metadata = {
  title: "Content Roadmap",
  description: "What's published vs. planned across the full curriculum.",
};

export default function RoadmapPage() {
  const overall = getOverallStats();
  const pct = Math.round((overall.published / overall.total) * 100);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Content Roadmap</h1>
        <p className="mt-3 text-muted-foreground">
          This platform&apos;s navigation shows the full intended curriculum
          up front, not just what&apos;s finished — every topic below is
          either <strong className="text-foreground">published</strong> (a
          real, fact-checked page exists) or{" "}
          <strong className="text-foreground">planned</strong> (on the
          roadmap, not yet written). Nothing here is filled with placeholder
          or fabricated content.
        </p>

        <div className="mt-6 rounded-lg border p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">Overall progress</span>
            <span className="text-muted-foreground">
              {overall.published} / {overall.total} topics ({pct}%)
            </span>
          </div>
          <Progress value={pct} className="h-2" />
        </div>

        <div className="mt-10 space-y-10">
          {navigation.map((group) => (
            <div key={group.slug}>
              <h2 className="mb-4 text-xl font-semibold tracking-tight">
                {group.title}
              </h2>
              <div className="space-y-6">
                {group.sections.map((section) => (
                  <div key={section.slug}>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      {section.title}
                    </p>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const href = `/docs/${group.slug}/${section.slug}/${item.slug}`;
                        return (
                          <li key={item.slug}>
                            <Link
                              href={href}
                              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent"
                            >
                              {item.status === "published" ? (
                                <Check className="size-3.5 shrink-0 text-success" />
                              ) : (
                                <CircleDashed className="size-3.5 shrink-0 text-muted-foreground/50" />
                              )}
                              <span
                                className={
                                  item.status === "published"
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                                }
                              >
                                {item.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
