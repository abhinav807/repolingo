"use client";

export default function EmptyState() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="card-brutal p-8 sm:p-12 max-w-2xl">
        <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
          02 / THE RESULT
        </span>
        <p className="font-[family-name:var(--font-display)] font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4">
          YOUR ONBOARDING DOC WILL APPEAR HERE.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm opacity-50">
          Paste a GitHub URL and hit analyze. We&apos;ll handle the rest.
        </p>
      </div>
    </section>
  );
}
