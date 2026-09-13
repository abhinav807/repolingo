import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · EXPLAIN THIS REPO",
  description: "How Explain This Repo handles your data and API keys.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="font-[family-name:var(--font-display)] font-black text-4xl sm:text-5xl uppercase tracking-tight mb-8">
          PRIVACY POLICY
        </h1>

        <div className="space-y-8 font-[family-name:var(--font-body)] text-base leading-relaxed opacity-80">
          <section>
            <h2 className="font-[family-name:var(--font-display)] font-black text-xl uppercase tracking-tight mb-3">
              YOUR API KEY
            </h2>
            <p>
              Your API key is entered in your browser and sent directly to our server
              over HTTPS for a single request. It is used to call the LLM API on your behalf,
              then immediately discarded. We never store your API key in a database, log it,
              cache it, or transmit it to any third party.
            </p>
            <p className="mt-2">
              Your key is held in browser <code>sessionStorage</code> for convenience across page
              refreshes within the same tab. It is automatically cleared when you close the tab.
              We never use <code>localStorage</code>, cookies, or any other persistent storage for
              your key.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] font-black text-xl uppercase tracking-tight mb-3">
              REPO URLs
            </h2>
            <p>
              The GitHub URLs you submit are used to fetch public repository data (metadata,
              README, file tree) via the GitHub API. We do not log submitted URLs beyond what
              is needed for rate-limiting and caching (an in-memory cache with a 1-hour TTL).
              No URL data is persisted to disk or shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] font-black text-xl uppercase tracking-tight mb-3">
              ANALYTICS
            </h2>
            <p>
              This application does not use any analytics, tracking cookies, or third-party
              telemetry. There are no tracking scripts, no advertising pixels, and no behavioral
              data collection of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] font-black text-xl uppercase tracking-tight mb-3">
              CONTACT
            </h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:codanzaprivatelimited@gmail.com"
                className="underline underline-offset-2 font-bold hover:text-[var(--color-accent)]"
              >
                codanzaprivatelimited@gmail.com
              </a>
              {" "}or open an issue on our{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 font-bold hover:text-[var(--color-accent)]"
              >
                GitHub repository
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
