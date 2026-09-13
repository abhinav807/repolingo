"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-background)] border-b-[3px] border-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] font-black text-lg tracking-tight uppercase no-underline text-[var(--color-foreground)]"
        >
          EXPLAIN THIS REPO
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors duration-100 no-underline"
          >
            HOW IT WORKS
          </Link>
          <a
            href="https://github.com/abhinav807/repolingo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors duration-100 no-underline"
          >
            GITHUB
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[3px] bg-[var(--color-foreground)] transition-transform ${
              mobileOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[var(--color-foreground)] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[var(--color-foreground)] transition-transform ${
              mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t-[3px] border-[var(--color-foreground)] bg-[var(--color-background)]">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/how-it-works"
              onClick={() => setMobileOpen(false)}
              className="block font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wider text-[var(--color-foreground)] no-underline"
            >
              HOW IT WORKS
            </Link>
            <a
              href="https://github.com/abhinav807/repolingo"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wider text-[var(--color-foreground)] no-underline"
            >
              GITHUB
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
