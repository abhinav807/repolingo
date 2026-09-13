"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "PASTE A GITHUB URL",
    desc: "Drop any public GitHub repository URL into the input field. We handle the rest — no signup, no configuration.",
  },
  {
    num: "02",
    title: "WE FETCH THE REPO",
    desc: "We pull the README, file tree, and key metadata from the GitHub API. Smart sampling ensures even massive repos are analyzed efficiently.",
  },
  {
    num: "03",
    title: "LLM GENERATES YOUR DOC",
    desc: "The repo context is sent to your chosen LLM provider (Claude, OpenAI, Gemini, Groq, OpenRouter, or Together) using YOUR API key. You get a structured onboarding document in seconds.",
  },
];

const SECTIONS = [
  {
    title: "WHAT YOU GET",
    items: [
      "Project Overview — what the repo does, its tech stack, and purpose",
      "Architecture — how the codebase is structured and organized",
      "Quick Start — how to get the project running locally",
      "Key Concepts — the important patterns and abstractions",
      "API Reference — endpoints, routes, and interfaces",
      "Environment Variables — config you need to set up",
      "Common Tasks — where to look when you need to make changes",
    ],
  },
  {
    title: "YOUR DATA",
    items: [
      "Your API key is never stored on our servers",
      "Keys are held in browser sessionStorage only",
      "Automatically cleared when you close the tab",
      "No cookies, no analytics, no tracking",
      "Open source — verify our claims yourself",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12">
          <div className="max-w-4xl">
            <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 mb-4 block">
              HOW IT WORKS
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.03em] uppercase mb-6">
              THREE STEPS TO UNDERSTAND ANY REPO.
            </h1>
            <p className="font-[family-name:var(--font-body)] text-lg sm:text-xl leading-relaxed max-w-2xl opacity-70">
              No signup. No config files. No babysitting. Just paste a URL and get a document
              that actually explains what the code does.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="border-[3px] border-[var(--color-foreground)] p-6 sm:p-8"
              >
                <span className="font-[family-name:var(--font-mono)] text-5xl sm:text-6xl font-black text-[var(--color-accent)] block mb-4">
                  {step.num}
                </span>
                <h2 className="font-[family-name:var(--font-display)] font-black text-lg sm:text-xl uppercase tracking-tight mb-3">
                  {step.title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed opacity-70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t-[3px] border-[var(--color-foreground)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid gap-12 sm:grid-cols-2">
              {SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="font-[family-name:var(--font-display)] font-black text-xl uppercase tracking-tight mb-6">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="font-[family-name:var(--font-body)] text-sm leading-relaxed opacity-70 flex items-start gap-3"
                      >
                        <span className="font-[family-name:var(--font-mono)] text-[var(--color-accent)] font-bold mt-0.5 shrink-0">
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-[3px] border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h2 className="font-[family-name:var(--font-display)] font-black text-3xl sm:text-4xl uppercase tracking-tight mb-6">
              READY TO TRY IT?
            </h2>
            <Link
              href="/"
              className="inline-block font-[family-name:var(--font-display)] font-black text-sm uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-foreground)] border-[3px] border-[var(--color-foreground)] px-8 py-4 no-underline hover:shadow-[var(--shadow-brutal-sm)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-none"
            >
              ANALYZE A REPO →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
