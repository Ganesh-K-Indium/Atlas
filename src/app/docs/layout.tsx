import { SiteHeader } from "@/components/layout/site-header";
import { DocsNav } from "@/components/layout/docs-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 items-start px-4 sm:px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r border-border/60 lg:block">
          <ScrollArea className="h-full py-6 pr-4">
            <DocsNav />
          </ScrollArea>
        </aside>
        <main className="min-w-0 flex-1 py-8 lg:pl-8">{children}</main>
      </div>
    </div>
  );
}
