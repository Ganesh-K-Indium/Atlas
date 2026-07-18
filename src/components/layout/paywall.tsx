import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Paywall({ title }: { title: string }) {
  return (
    <div className="mt-8 flex flex-col items-start gap-4 rounded-xl border bg-card p-8">
      <div className="flex items-center gap-2 text-primary">
        <Lock className="size-5" />
        <span className="text-sm font-medium">Pro content</span>
      </div>
      <p className="max-w-md text-muted-foreground">
        <strong className="text-foreground">{title}</strong> is part of
        Atlas Pro. Subscribe to unlock every advanced topic — LLMs, agents,
        and production ML — with full derivations, code, and references.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/pricing">See plans</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
