import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import {
  getContentSource,
  getPublishedSlugParams,
  findNavItem,
} from "@/lib/content";
import { extractToc } from "@/lib/toc";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { DocPageHeader } from "@/components/layout/doc-page-header";
import { PlannedPlaceholder } from "@/components/layout/planned-placeholder";
import { Paywall } from "@/components/layout/paywall";
import { Toc } from "@/components/layout/toc";
import { DocsPagination } from "@/components/layout/docs-pagination";
import { hasActiveSubscription } from "@/lib/subscription";

interface PageProps {
  params: Promise<{ group: string; section: string; item: string }>;
}

export function generateStaticParams() {
  return getPublishedSlugParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const p = await params;
  const nav = findNavItem(p);
  const source = getContentSource(p);

  if (!nav) return {};

  return {
    title: nav.item.title,
    description: source?.frontmatter.description ?? nav.item.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const p = await params;
  const nav = findNavItem(p);
  if (!nav) notFound();

  const breadcrumb = [nav.group.title, nav.section.title];
  const source = getContentSource(p);

  if (!source) {
    return (
      <PlannedPlaceholder title={nav.item.title} breadcrumb={breadcrumb} />
    );
  }

  const isGated = nav.item.tier === "pro" && !(await hasActiveSubscription());
  const toc = isGated ? [] : extractToc(source.content);

  return (
    <div className="flex gap-10">
      <article className="min-w-0 flex-1">
        <DocPageHeader
          title={source.frontmatter.title ?? nav.item.title}
          description={source.frontmatter.description}
          difficulty={source.frontmatter.difficulty ?? nav.item.difficulty ?? "intermediate"}
          readingTime={source.readingTime}
          breadcrumb={breadcrumb}
        />
        {isGated ? (
          <Paywall title={source.frontmatter.title ?? nav.item.title} />
        ) : (
        <div className="max-w-none">
          <MDXRemote
            source={source.content}
            components={mdxComponents}
            options={{
              // Content is first-party and authored by us, not user-submitted,
              // so it's safe to allow JS expressions in MDX (array/object props
              // for ComparisonTable, Quiz, etc. rely on this).
              blockJS: false,
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [
                  rehypeSlug,
                  rehypeKatex,
                  [
                    rehypePrettyCode,
                    {
                      theme: { dark: "github-dark", light: "github-light" },
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>
        )}
        <DocsPagination currentHref={`/docs/${p.group}/${p.section}/${p.item}`} />
      </article>
      <aside className="sticky top-20 hidden h-fit w-56 shrink-0 xl:block">
        <Toc entries={toc} />
      </aside>
    </div>
  );
}
