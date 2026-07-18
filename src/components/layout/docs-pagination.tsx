import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { flatNavItems } from "@/config/navigation";

export function DocsPagination({ currentHref }: { currentHref: string }) {
  const index = flatNavItems.findIndex((item) => item.href === currentHref);
  if (index === -1) return null;

  const prev = index > 0 ? flatNavItems[index - 1] : null;
  const next = index < flatNavItems.length - 1 ? flatNavItems[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-12 grid gap-3 border-t pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 rounded-lg border p-4 text-left transition-colors hover:border-primary/40 hover:bg-accent/30"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col gap-1 rounded-lg border p-4 text-right transition-colors hover:border-primary/40 hover:bg-accent/30 sm:items-end"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Next
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
