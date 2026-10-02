import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import UpiPay from "@/components/UpiPay";
import { SUPPORT_CONFIG } from "@/lib/support";

export const metadata: Metadata = {
  title: { absolute: "SUPPORT — EXPLAIN THIS REPO" },
  description:
    "Support Repolingo — scan the UPI QR or pay with any UPI app. Free, open source, built solo. Pay any amount you want, it's completely optional.",
  openGraph: {
    title: "SUPPORT — EXPLAIN THIS REPO",
    description:
      "Repolingo is free, open source and built solo. Pay any amount you want — every rupee helps cover hosting and development.",
    type: "website",
    siteName: "Explain This Repo",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Explain This Repo — paste a GitHub URL, get a plain-English onboarding doc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUPPORT — EXPLAIN THIS REPO",
    description:
      "Repolingo is free, open source and built solo. Pay any amount you want — every rupee helps.",
    images: ["/og.jpg"],
  },
};

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
              <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50">
                SUPPORT / 100% OPTIONAL
              </span>
              <span className="sticker sticker-rotate-1">FREE</span>
              <span className="sticker sticker-rotate-2">NO ADS</span>
              <span className="sticker sticker-rotate-3">OPEN SOURCE</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(1.85rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.03em] uppercase mb-4 sm:mb-6">
              LIKE IT? BUY ME A CHAI.
            </h1>

            <p className="font-[family-name:var(--font-body)] text-base sm:text-xl leading-relaxed max-w-2xl opacity-70">
              Repolingo is free, open source and built solo — any support helps cover
              hosting and development.
            </p>
          </div>
        </section>

        <Marquee />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* QR card */}
            <div className="order-1 sm:order-2">
              <div className="card-brutal p-4 w-full max-w-[320px] mx-auto">
                <Image
                  src={SUPPORT_CONFIG.qrImage}
                  alt={SUPPORT_CONFIG.qrAlt}
                  width={SUPPORT_CONFIG.qrWidth}
                  height={SUPPORT_CONFIG.qrHeight}
                  sizes="(max-width: 640px) calc(100vw - 56px), 288px"
                  className="block w-full h-auto"
                />
                <p className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-wider text-center mt-3 opacity-70">
                  SCAN WITH ANY UPI APP
                </p>
              </div>
            </div>

            {/* Copy, amount, notes */}
            <div className="order-2 sm:order-1 space-y-6">
              <div className="border-[3px] border-[var(--color-foreground)] bg-[var(--color-foreground)] p-6 shadow-[var(--shadow-brutal)]">
                <p className="font-[family-name:var(--font-display)] font-black text-xl sm:text-2xl uppercase tracking-tight text-[var(--color-accent)]">
                  PAY ANY AMOUNT YOU WANT.
                </p>
                <p className="font-[family-name:var(--font-body)] text-base sm:text-lg leading-relaxed text-[var(--color-background)] mt-2">
                  ₹10, ₹100, whatever feels right.
                </p>
                <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-background)] opacity-70 mt-3">
                  Donating is optional — if it&apos;s not for you, that&apos;s completely
                  fine. Every rupee helps keep Repolingo free.
                </p>
              </div>

              <UpiPay />

              <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed opacity-60">
                UPI works for Indian bank accounts only. Not in India?{" "}
                <a
                  href={SUPPORT_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-bold hover:text-[var(--color-accent)]"
                >
                  Starring the repo on GitHub
                </a>{" "}
                helps just as much.
              </p>

              <p className="border-t-[3px] border-[var(--color-foreground)] pt-6">
                <Link
                  href="/thank-you"
                  className="font-[family-name:var(--font-display)] font-black text-sm uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors"
                >
                  PAID? THANK YOU! →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
