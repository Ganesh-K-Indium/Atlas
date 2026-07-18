export interface TocEntry {
  depth: 2 | 3;
  text: string;
  slug: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractToc(source: string): TocEntry[] {
  const lines = source.split("\n");
  const entries: TocEntry[] = [];

  for (const line of lines) {
    const match = /^(##|###)\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length === 2 ? 2 : 3;
    const text = match[2].replace(/[`*_]/g, "").trim();
    entries.push({ depth, text, slug: slugify(text) });
  }

  return entries;
}
