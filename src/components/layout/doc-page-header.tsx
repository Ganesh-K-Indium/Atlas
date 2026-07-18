import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { Difficulty } from "@/types/content";

const difficultyColor: Record<Difficulty, string> = {
  beginner: "bg-success/10 text-success border-success/30",
  intermediate: "bg-info/10 text-info border-info/30",
  advanced: "bg-warning/10 text-warning border-warning/30",
  expert: "bg-destructive/10 text-destructive border-destructive/30",
};

export function DocPageHeader({
  title,
  description,
  difficulty,
  readingTime,
  breadcrumb,
}: {
  title: string;
  description: string;
  difficulty: Difficulty;
  readingTime: string;
  breadcrumb: string[];
}) {
  return (
    <div className="mb-8 space-y-4 border-b pb-8">
      <p className="text-sm text-muted-foreground">{breadcrumb.join(" / ")}</p>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline" className={difficultyColor[difficulty]}>
          {difficulty}
        </Badge>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {readingTime}
        </span>
      </div>
    </div>
  );
}
