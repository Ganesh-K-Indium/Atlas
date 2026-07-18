import Link from "next/link";
import type { Reference } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink } from "lucide-react";

export function Prerequisites({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="my-6 rounded-lg border bg-muted/30 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Prerequisites
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Badge variant="secondary">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
      <p className="mb-2 text-sm font-semibold">Key takeaways</p>
      <ul className="space-y-1.5 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-success/30 bg-success/5 p-4">
        <p className="mb-2 text-sm font-semibold text-success">Advantages</p>
        <ul className="space-y-1.5 text-sm">
          {pros.map((p, i) => (
            <li key={i} className="flex gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-success" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="mb-2 text-sm font-semibold text-destructive">
          Disadvantages
        </p>
        <ul className="space-y-1.5 text-sm">
          {cons.map((c, i) => (
            <li key={i} className="flex gap-2">
              <X className="mt-0.5 size-3.5 shrink-0 text-destructive" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ReferenceList({ items }: { items: Reference[] }) {
  if (!items.length) return null;
  return (
    <div className="my-6">
      <p className="mb-2 text-sm font-semibold">References</p>
      <ol className="space-y-2 text-sm text-muted-foreground">
        {items.map((ref, i) => (
          <li key={i} className="flex gap-2">
            <span className="tabular-nums">[{i + 1}]</span>
            <span>
              {ref.authors && <span>{ref.authors}. </span>}
              <span className="text-foreground">{ref.title}</span>
              {ref.venue && <span>, {ref.venue}</span>}
              {ref.year && <span> ({ref.year})</span>}
              {ref.url && (
                <>
                  {" "}
                  <Link
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    link <ExternalLink className="size-3" />
                  </Link>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
