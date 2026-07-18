import { navigation } from "@/config/navigation";

export function getGroupStats() {
  return navigation.map((group) => {
    const items = group.sections.flatMap((s) => s.items);
    const published = items.filter((i) => i.status === "published").length;
    return {
      slug: group.slug,
      title: group.title,
      total: items.length,
      published,
      firstHref: items.length
        ? `/docs/${group.slug}/${group.sections[0].slug}/${group.sections[0].items[0].slug}`
        : "/",
    };
  });
}

export function getOverallStats() {
  const all = navigation.flatMap((g) => g.sections.flatMap((s) => s.items));
  return {
    total: all.length,
    published: all.filter((i) => i.status === "published").length,
    groups: navigation.length,
  };
}
