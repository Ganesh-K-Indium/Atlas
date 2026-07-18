import Link from "next/link";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlannedPlaceholder({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string[];
}) {
  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <p className="text-sm text-muted-foreground">{breadcrumb.join(" / ")}</p>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-dashed p-4 text-muted-foreground">
        <Construction className="size-5 shrink-0" />
        <p className="text-sm">
          This page is on the roadmap and hasn&apos;t been written yet. It
          exists in the navigation so the full curriculum is visible, but the
          content itself is not published — nothing here is a placeholder
          pretending to be finished.
        </p>
      </div>
      <Button variant="outline" asChild>
        <Link href="/roadmap">View the content roadmap</Link>
      </Button>
    </div>
  );
}
