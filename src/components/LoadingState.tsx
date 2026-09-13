"use client";

import { useEffect, useState } from "react";

const STATUS_MESSAGES = [
  "CLONING REPO STRUCTURE...",
  "READING THE README...",
  "ASKING THE ROBOT...",
  "WRITING YOUR DOC...",
];

interface Props {
  onCancel: () => void;
}

export default function LoadingState({ onCancel }: Props) {
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 2000);

    const timeInterval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(msgInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="card-brutal p-8 sm:p-12 max-w-2xl">
        <div className="mb-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50">
            ANALYZING
          </span>
        </div>

        <div className="relative h-20 flex items-center">
          {STATUS_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`transition-opacity duration-200 ${
                i === index ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <p className="font-[family-name:var(--font-display)] font-black text-2xl sm:text-3xl uppercase tracking-tight">
                {msg}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 border-2 border-[var(--color-foreground)] ${
                  i === index
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-muted)]"
                }`}
              />
            ))}
          </div>

          {elapsed > 20 && (
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-foreground)] opacity-60">
              TAKING LONGER THAN USUAL — STILL WORKING ON IT
            </p>
          )}
        </div>

        <button
          onClick={onCancel}
          className="btn-brutal mt-8 text-sm"
        >
          CANCEL AND START OVER
        </button>
      </div>
    </section>
  );
}
