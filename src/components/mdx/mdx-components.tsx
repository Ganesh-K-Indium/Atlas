import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/mdx/callout";
import { ComparisonTable } from "@/components/mdx/comparison-table";
import { Quiz } from "@/components/mdx/quiz";
import { Flashcards } from "@/components/mdx/flashcards";
import { Mermaid } from "@/components/mdx/mermaid";
import {
  Prerequisites,
  KeyTakeaways,
  ProsCons,
  ReferenceList,
} from "@/components/mdx/page-elements";
import { Pre } from "@/components/mdx/pre";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      {...props}
      className={cn("mt-10 scroll-mt-24 text-3xl font-bold tracking-tight", props.className)}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className={cn(
        "mt-12 scroll-mt-24 border-b pb-2 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={cn("mt-8 scroll-mt-24 text-xl font-semibold tracking-tight", props.className)}
    />
  ),
  h4: (props) => (
    <h4 {...props} className={cn("mt-6 scroll-mt-24 text-lg font-semibold", props.className)} />
  ),
  p: (props) => (
    <p {...props} className={cn("mt-4 leading-7 text-foreground/90", props.className)} />
  ),
  a: (props) => (
    <Link
      href={props.href ?? "#"}
      className="font-medium text-primary underline underline-offset-4"
    >
      {props.children}
    </Link>
  ),
  ul: (props) => (
    <ul {...props} className={cn("mt-4 ml-6 list-disc space-y-1.5", props.className)} />
  ),
  ol: (props) => (
    <ol {...props} className={cn("mt-4 ml-6 list-decimal space-y-1.5", props.className)} />
  ),
  li: (props) => <li {...props} className={cn("leading-7", props.className)} />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className={cn(
        "mt-6 border-l-2 border-primary pl-4 italic text-muted-foreground",
        props.className,
      )}
    />
  ),
  hr: (props) => <hr {...props} className="my-10 border-border" />,
  table: (props) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border">
      <table {...props} className="w-full border-collapse text-sm" />
    </div>
  ),
  th: (props) => (
    <th {...props} className={cn("border-b bg-muted/50 px-4 py-2.5 text-left font-semibold", props.className)} />
  ),
  td: (props) => <td {...props} className={cn("px-4 py-2.5 align-top", props.className)} />,
  code: (props) => (
    <code
      {...props}
      className={cn(
        "rounded bg-code px-1.5 py-0.5 font-mono text-[0.85em] text-code-foreground",
        props.className,
      )}
    />
  ),
  pre: Pre,
  Callout,
  ComparisonTable,
  Quiz,
  Flashcards,
  Mermaid,
  Prerequisites,
  KeyTakeaways,
  ProsCons,
  ReferenceList,
};
