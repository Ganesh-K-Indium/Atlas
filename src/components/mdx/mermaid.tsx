"use client";

import * as React from "react";
import { useTheme } from "next-themes";

let idCounter = 0;

export function Mermaid({ chart }: { chart: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [id] = React.useState(() => `mermaid-${idCounter++}`);

  React.useEffect(() => {
    let cancelled = false;

    import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === "dark" ? "dark" : "default",
        securityLevel: "strict",
        fontFamily: "var(--font-sans)",
      });
      mermaid.render(id, chart).then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      });
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  return (
    <div className="my-6 flex justify-center overflow-x-auto rounded-lg border bg-card p-4">
      <div ref={ref} />
    </div>
  );
}
