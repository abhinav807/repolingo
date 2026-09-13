"use client";

import { useEffect, useState } from "react";

interface Props {
  message: string;
  type?: "success" | "error";
  onDone: () => void;
}

export default function Toast({ message, type = "success", onDone }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <div
        className={`px-5 py-3 font-[family-name:var(--font-mono)] text-sm font-bold uppercase border-[3px] border-[var(--color-foreground)] shadow-[var(--shadow-brutal-sm)] ${
          type === "success"
            ? "bg-[var(--color-accent)] text-[var(--color-foreground)]"
            : "bg-[var(--color-error)] text-[var(--color-background)]"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
