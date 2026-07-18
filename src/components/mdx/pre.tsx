"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pre({ children, ...props }: React.ComponentProps<"pre">) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative my-6">
      <pre
        ref={preRef}
        {...props}
        className={cn(
          "overflow-x-auto rounded-lg border border-code-border bg-code p-4 text-sm text-code-foreground",
          props.className,
        )}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy code"
        className="absolute right-2 top-2 rounded-md border border-code-border bg-code/80 p-1.5 text-code-foreground/70 opacity-0 transition-opacity hover:text-code-foreground group-hover:opacity-100"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  );
}
