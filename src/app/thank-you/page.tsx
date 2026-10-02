import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for using Explain This Repo. Analyze another repo, get in touch, or star us on GitHub.",
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <div className="max-w-2xl">
            <span className="sticker sticker-rotate-1 inline-block mb-6">THANK YOU</span>

            <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(2rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.03em] uppercase mb-6">
              YOU&apos;RE ALL SET.
            </h1>

            <p className="font-[family-name:var(--font-body)] text-lg sm:text-xl leading-relaxed opacity-70 mb-10">
              Thanks for using Explain This Repo. Go understand some code, ship something,
              and stop reading 40 files for one answer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/" className="btn-brutal btn-brutal-accent">
                ANALYZE ANOTHER REPO →
              </Link>
              <a
                href="https://github.com/abhinav807/repolingo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
              >
                STAR ON GITHUB
              </a>
            </div>

            <div className="border-t-[3px] border-[var(--color-foreground)] pt-8">
              <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed opacity-60">
                Questions, feedback, or bugs? Email{" "}
                <a
                  href="mailto:codanzaprivatelimited@gmail.com"
                  className="underline underline-offset-2 font-bold hover:text-[var(--color-accent)]"
                >
                  codanzaprivatelimited@gmail.com
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/abhinav807/repolingo/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-bold hover:text-[var(--color-accent)]"
                >
                  open an issue
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
