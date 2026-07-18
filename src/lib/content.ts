import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { FrontMatter } from "@/types/content";
import { navigation } from "@/config/navigation";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

export interface ContentSlugParams {
  group: string;
  section: string;
  item: string;
}

export function contentFilePath({ group, section, item }: ContentSlugParams) {
  return path.join(CONTENT_ROOT, group, section, `${item}.mdx`);
}

export function getContentSource(params: ContentSlugParams) {
  const filePath = contentFilePath(params);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  const stats = readingTime(content);

  return {
    content,
    frontmatter: data as FrontMatter,
    readingTime: stats.text,
  };
}

export function getPublishedSlugParams(): ContentSlugParams[] {
  return navigation.flatMap((group) =>
    group.sections.flatMap((section) =>
      section.items
        .filter((item) => item.status === "published")
        .map((item) => ({
          group: group.slug,
          section: section.slug,
          item: item.slug,
        })),
    ),
  );
}

export function findNavItem(params: ContentSlugParams) {
  const group = navigation.find((g) => g.slug === params.group);
  const section = group?.sections.find((s) => s.slug === params.section);
  const item = section?.items.find((i) => i.slug === params.item);
  if (!group || !section || !item) return null;
  return { group, section, item };
}
