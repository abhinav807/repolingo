"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="bg-[var(--color-foreground)] text-[var(--color-accent)] border-y-[3px] border-[var(--color-foreground)] overflow-hidden whitespace-nowrap py-3">
        <div className="animate-marquee inline-block">
          <span className="font-[family-name:var(--font-display)] font-black text-sm uppercase tracking-[0.15em]">
            PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7{" "}
          </span>
        </div>
      </div>
      <div className="bg-[var(--color-background)] border-b-[3px] border-[var(--color-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              HOW IT WORKS
            </a>
            <Link
              href="/privacy"
              className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms"
              className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              TERMS
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              GITHUB
            </a>
          </div>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-foreground)] opacity-60">
            &copy; {year} &middot; BUILT WITH ANTHROPIC CLAUDE
          </p>
        </div>
      </div>
    </footer>
  );
}
