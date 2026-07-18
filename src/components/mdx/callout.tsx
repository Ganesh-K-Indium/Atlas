import { AlertTriangle, Info, Lightbulb, ShieldAlert, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "note" | "tip" | "warning" | "danger" | "success";

const config: Record<CalloutType, { icon: typeof Info; classes: string }> = {
  note: {
    icon: Info,
    classes: "border-info/30 bg-info/10 text-foreground [&_svg]:text-info",
  },
  tip: {
    icon: Lightbulb,
    classes: "border-primary/30 bg-primary/5 text-foreground [&_svg]:text-primary",
  },
  warning: {
    icon: AlertTriangle,
    classes: "border-warning/40 bg-warning/10 text-foreground [&_svg]:text-warning",
  },
  danger: {
    icon: ShieldAlert,
    classes: "border-destructive/40 bg-destructive/10 text-foreground [&_svg]:text-destructive",
  },
  success: {
    icon: CheckCircle2,
    classes: "border-success/40 bg-success/10 text-foreground [&_svg]:text-success",
  },
};

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const { icon: Icon, classes } = config[type];
  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4 text-sm", classes)}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="space-y-1 [&>p]:leading-relaxed [&>p:last-child]:mb-0">
        {title && <p className="font-medium">{title}</p>}
        {children}
      </div>
    </div>
  );
}
