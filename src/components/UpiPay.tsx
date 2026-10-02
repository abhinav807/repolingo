"use client";

import { useEffect, useRef, useState } from "react";
import { SUPPORT_CONFIG, upiPayLink } from "@/lib/support";

export default function UpiPay() {
  const { upiId } = SUPPORT_CONFIG;
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(upiId);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = upiId;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* clipboard unavailable */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="border-[3px] border-[var(--color-foreground)] bg-[var(--color-card)] px-4 py-3 flex items-center justify-between gap-3 shadow-[var(--shadow-brutal-sm)]">
        <div className="min-w-0">
          <p className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider opacity-50 mb-1">
            UPI ID
          </p>
          <p className="font-[family-name:var(--font-mono)] text-sm font-bold truncate">
            {upiId}
          </p>
        </div>
        <button
          type="button"
          onClick={copy}
          className={`font-[family-name:var(--font-display)] font-black text-xs uppercase tracking-wider border-[3px] border-[var(--color-foreground)] px-4 py-2 shrink-0 transition-none cursor-pointer ${
            copied
              ? "bg-[var(--color-accent)] text-[var(--color-foreground)]"
              : "bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-[var(--color-accent)] hover:text-[var(--color-foreground)]"
          }`}
          aria-label={`Copy UPI ID ${upiId}`}
        >
          {copied ? "COPIED!" : "COPY"}
        </button>
      </div>

      <p role="status" aria-live="polite" className="font-[family-name:var(--font-mono)] text-xs font-bold text-[var(--color-foreground)] opacity-70 h-4">
        {copied ? "UPI ID COPIED TO CLIPBOARD" : ""}
      </p>

      <a
        href={upiPayLink()}
        className="btn-brutal btn-brutal-accent w-full sm:hidden"
        aria-label="Pay with UPI app"
      >
        PAY WITH UPI APP →
      </a>
    </div>
  );
}
