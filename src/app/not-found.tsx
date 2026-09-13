"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 bg-[var(--color-background)] border-b-[3px] border-[var(--color-foreground)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] font-black text-lg tracking-tight uppercase no-underline text-[var(--color-foreground)]"
          >
            EXPLAIN THIS REPO
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] font-black text-[clamp(6rem,20vw,12rem)] leading-none tracking-tighter text-[var(--color-muted)]">
            404
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-black text-3xl sm:text-4xl uppercase tracking-tight mt-4 mb-4">
            PAGE NOT FOUND
          </h1>
          <p className="font-[family-name:var(--font-body)] text-lg opacity-60 mb-8 max-w-md mx-auto">
            THIS PAGE DOESN&apos;T EXIST. MIGHT HAVE BEEN MOVED, MIGHT NEVER HAVE EXISTED.
          </p>
          <Link href="/" className="btn-brutal btn-brutal-accent inline-flex">
            BACK TO HOME
          </Link>
        </div>
      </main>

      <footer className="bg-[var(--color-background)] border-t-[3px] border-[var(--color-foreground)] py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs opacity-50">
            &copy; {new Date().getFullYear()} &middot; EXPLAIN THIS REPO
          </p>
        </div>
      </footer>
    </div>
  );
}
