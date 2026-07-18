"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  return (
    <div className="my-8 space-y-6">
      {questions.map((q, i) => (
        <QuizQuestionCard key={i} question={q} index={i} />
      ))}
    </div>
  );
}

function QuizQuestionCard({
  question,
  index,
}: {
  question: QuizQuestion;
  index: number;
}) {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <div className="rounded-lg border p-4">
      <p className="mb-3 text-sm font-medium">
        {index + 1}. {question.question}
      </p>
      <div className="space-y-1.5">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === question.answerIndex;
          const showState = selected !== null;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              disabled={selected !== null}
              className={cn(
                "flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors",
                !showState && "hover:bg-accent hover:text-accent-foreground",
                showState && isCorrect && "border-success/50 bg-success/10",
                showState &&
                  isSelected &&
                  !isCorrect &&
                  "border-destructive/50 bg-destructive/10",
                showState && !isSelected && !isCorrect && "opacity-60",
              )}
            >
              <span>{opt}</span>
              {showState && isCorrect && (
                <Check className="size-4 shrink-0 text-success" />
              )}
              {showState && isSelected && !isCorrect && (
                <X className="size-4 shrink-0 text-destructive" />
              )}
            </button>
          );
        })}
      </div>
      {selected !== null && question.explanation && (
        <p className="mt-3 text-sm text-muted-foreground">
          {question.explanation}
        </p>
      )}
    </div>
  );
}
