"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Flashcard {
  front: string;
  back: string;
}

export function Flashcards({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const card = cards[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  return (
    <div className="my-8 flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className={cn(
          "flex min-h-40 w-full max-w-xl cursor-pointer items-center justify-center rounded-xl border bg-card p-6 text-center shadow-sm transition-colors hover:border-primary/40",
        )}
      >
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {flipped ? "Answer" : "Question"}
          </p>
          <p className="text-base leading-relaxed">
            {flipped ? card.back : card.front}
          </p>
        </div>
      </button>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={prev}>
          <ChevronLeft className="size-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={() => setFlipped((f) => !f)}>
          <RotateCw className="mr-1.5 size-3.5" /> Flip
        </Button>
        <Button variant="outline" size="icon" onClick={next}>
          <ChevronRight className="size-4" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        {index + 1} / {cards.length}
      </p>
    </div>
  );
}
