import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandMenu } from "@/components/features/search/command-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { DocsNav } from "@/components/layout/docs-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-4 px-4 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="h-full overflow-y-auto p-4">
              <DocsNav />
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="size-5 text-primary" />
          <span className="tracking-tight">Atlas</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/foundations/linear-algebra/eigenvalues-eigenvectors">
              Foundations
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/llms/frontier-landscape/frontier-model-landscape">
              LLMs
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/agents/protocols-frameworks/model-context-protocol">
              Agents
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/roadmap">Roadmap</Link>
          </Button>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <CommandMenu />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
