"use client";

export default function Marquee() {
  const text =
    "PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 PASTE A REPO \u00B7 GET THE TL;DR \u00B7 NO SIGNUP \u00B7 WORKS ON ANY PUBLIC REPO \u00B7 ";

  return (
    <div className="bg-[var(--color-foreground)] text-[var(--color-accent)] border-y-[3px] border-[var(--color-foreground)] overflow-hidden whitespace-nowrap py-3">
      <div className="animate-marquee inline-block">
        <span className="font-[family-name:var(--font-display)] font-black text-sm uppercase tracking-[0.15em]">
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
