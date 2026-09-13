"use client";

import { useState } from "react";
import Link from "next/link";

function getConsent(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("cookie_consent") === "accepted";
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !getConsent());

  function accept() {
    sessionStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t-[3px] border-[var(--color-foreground)] bg-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-background)] leading-relaxed">
            <strong className="font-[family-name:var(--font-display)] font-black uppercase">NO COOKIES USED.</strong>{" "}
            This site uses zero tracking cookies, zero analytics, and zero fingerprinting.
            Your API key is held in{" "}
            <code className="font-[family-name:var(--font-mono)] text-xs bg-[var(--color-foreground)] border border-[var(--color-accent)] px-1 text-[var(--color-accent)]">
              sessionStorage
            </code>{" "}
            and cleared on tab close. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2 font-bold text-[var(--color-accent)]">
              PRIVACY POLICY
            </Link>
            .
          </p>
        </div>
        <button
          onClick={accept}
          className="btn-brutal btn-brutal-accent text-xs shrink-0"
        >
          GOT IT
        </button>
      </div>
    </div>
  );
}
