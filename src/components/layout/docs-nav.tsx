"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle, CircleDashed } from "lucide-react";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 text-sm">
      {navigation.map((group) => (
        <div key={group.slug}>
          <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.title}
          </h4>
          <div className="space-y-4">
            {group.sections.map((section) => (
              <div key={section.slug}>
                <p className="px-2 text-xs font-medium text-foreground/70">
                  {section.title}
                </p>
                <ul className="mt-1 space-y-0.5">
                  {section.items.map((item) => {
                    const href = `/docs/${group.slug}/${section.slug}/${item.slug}`;
                    const active = pathname === href;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-1.5 leading-snug transition-colors hover:bg-accent hover:text-accent-foreground",
                            active
                              ? "bg-accent font-medium text-accent-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {item.status === "published" ? (
                            <Circle className="size-2 shrink-0 fill-primary text-primary" />
                          ) : (
                            <CircleDashed className="size-2 shrink-0 text-muted-foreground/40" />
                          )}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
