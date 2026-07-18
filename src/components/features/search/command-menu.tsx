"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:w-56"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 size-4" />
        Search docs…
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          <span>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search every topic…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navigation.map((group) => (
            <CommandGroup key={group.slug} heading={group.title}>
              {group.sections.flatMap((section) =>
                section.items.map((item) => (
                  <CommandItem
                    key={`${group.slug}-${section.slug}-${item.slug}`}
                    value={`${group.title} ${section.title} ${item.title}`}
                    onSelect={() =>
                      go(`/docs/${group.slug}/${section.slug}/${item.slug}`)
                    }
                  >
                    <span className="text-muted-foreground mr-2 text-xs">
                      {section.title}
                    </span>
                    {item.title}
                  </CommandItem>
                )),
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
