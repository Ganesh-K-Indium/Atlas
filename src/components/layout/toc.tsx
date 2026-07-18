import type { TocEntry } from "@/lib/toc";

export function Toc({ entries }: { entries: TocEntry[] }) {
  if (!entries.length) return null;

  return (
    <div className="space-y-2 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-1.5 border-l">
        {entries.map((entry) => (
          <li key={entry.slug} style={{ paddingLeft: entry.depth === 3 ? "1.5rem" : "0.75rem" }}>
            <a
              href={`#${entry.slug}`}
              className="block -ml-px border-l border-transparent pl-3 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
