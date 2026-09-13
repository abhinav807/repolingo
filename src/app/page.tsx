"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import LoadingState from "@/components/LoadingState";
import ResultsDisplay from "@/components/ResultsDisplay";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";
import Toast from "@/components/Toast";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import type { AnalyzeResponse } from "@/lib/types";
import type { Provider } from "@/components/ProviderSelector";

type AppState =
  | { status: "idle" }
  | { status: "loading"; repoUrl: string }
  | { status: "success"; data: AnalyzeResponse }
  | { status: "error"; message: string; details?: string; retryUrl?: string; retryKey?: string; retryProvider?: Provider };

export default function Home() {
  const [state, setState] = useState<AppState>({ status: "idle" });
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = useCallback(async (url: string, apiKey: string, provider: Provider) => {
    setState({ status: "loading", repoUrl: url });

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl: url, apiKey, provider }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          data.error === "REPO_NOT_FOUND"
            ? "REPO NOT FOUND"
            : data.error === "INVALID_KEY"
            ? "INVALID API KEY"
            : data.error === "INVALID_KEY_FORMAT"
            ? "INVALID KEY FORMAT"
            : data.error === "LLM_RATE_LIMITED"
            ? "RATE LIMITED"
            : data.error === "RATE_LIMITED" || data.error === "GITHUB_RATE_LIMITED"
            ? "GITHUB RATE LIMITED"
            : data.error === "LLM_FAILED"
            ? "PROVIDER ERROR"
            : data.error === "PARSE_FAILED"
            ? "COULD NOT PARSE AI RESPONSE"
            : "SOMETHING WENT WRONG";

        setState({
          status: "error",
          message: errorMsg,
          details: data.details,
          retryUrl: url,
          retryKey: apiKey,
          retryProvider: provider,
        });
        return;
      }

      setState({ status: "success", data });
    } catch {
      setState({
        status: "error",
        message: "NETWORK ERROR",
        details: "Could not reach the server. Check your connection and try again.",
        retryUrl: url,
        retryKey: apiKey,
        retryProvider: provider,
      });
    }
  }, []);

  const handleReset = useCallback(() => {
    setState({ status: "idle" });
  }, []);

  const handleCancel = useCallback(() => {
    setState({ status: "idle" });
  }, []);

  const handleRetry = useCallback(() => {
    if (state.status === "error" && state.retryUrl && state.retryKey && state.retryProvider) {
      handleSubmit(state.retryUrl, state.retryKey, state.retryProvider);
    }
  }, [state, handleSubmit]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {state.status === "idle" && (
        <>
          <Hero onSubmit={handleSubmit} isLoading={false} />
          <Marquee />
          <EmptyState />
        </>
      )}

      {state.status === "loading" && (
        <>
          <Marquee />
          <LoadingState onCancel={handleCancel} />
        </>
      )}

      {state.status === "success" && (
        <ResultsDisplay
          repo={state.data.repo}
          analysis={state.data.analysis}
          hasReadme={state.data.hasReadme}
          onReset={handleReset}
          onCopy={() => setToast("COPIED TO CLIPBOARD")}
        />
      )}

      {state.status === "error" && (
        <ErrorState
          message={state.message}
          details={state.details}
          onRetry={handleRetry}
          onReset={handleReset}
        />
      )}

      {/* Sticky mobile CTA */}
      {state.status === "success" && (
        <div className="fixed bottom-0 left-0 right-0 sm:hidden z-50 border-t-[3px] border-[var(--color-foreground)] bg-[var(--color-background)] p-3">
          <button
            onClick={handleReset}
            className="btn-brutal btn-brutal-accent w-full text-sm"
          >
            ANALYZE ANOTHER REPO
          </button>
        </div>
      )}

      <Footer />
      <CookieBanner />

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </div>
  );
}
