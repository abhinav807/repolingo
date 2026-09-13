import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://explain-this-repo.app"),
  title: {
    default: "EXPLAIN THIS REPO — Paste a Repo, Get the TL;DR",
    template: "%s · EXPLAIN THIS REPO",
  },
  description:
    "Paste any public GitHub repo URL and get a plain-English onboarding doc explaining what it is, how it's structured, and how to get started.",
  openGraph: {
    title: "EXPLAIN THIS REPO — Paste a Repo, Get the TL;DR",
    description:
      "Paste any public GitHub repo URL and get a plain-English onboarding doc in seconds.",
    type: "website",
    siteName: "Explain This Repo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Explain This Repo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXPLAIN THIS REPO",
    description: "Paste a GitHub URL. Get a plain-English onboarding doc.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
