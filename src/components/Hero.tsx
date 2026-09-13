"use client";

import { useState } from "react";
import ProviderSelector, { PROVIDERS, type Provider } from "./ProviderSelector";

interface Props {
  onSubmit: (url: string, apiKey: string, provider: Provider) => void;
  isLoading: boolean;
}

export default function Hero({ onSubmit, isLoading }: Props) {
  const [url, setUrl] = useState("");
  const [provider, setProvider] = useState<Provider | null>(null);
  const [apiKey, setApiKey] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("llm_api_key") || "";
    }
    return "";
  });
  const [showKey, setShowKey] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [keyError, setKeyError] = useState("");

  const providerInfo = PROVIDERS.find((p) => p.id === provider);

  const URL_REGEX =
    /^(?:https?:\/\/)?(?:www\.)?github\.com\/[\w.-]+\/[\w.-]+\/?$/;

  function normalizeUrl(input: string): string {
    let u = input.trim();
    if (/^[\w.-]+\/[\w.-]+$/.test(u)) {
      u = `https://github.com/${u}`;
    }
    if (!u.startsWith("http")) {
      u = `https://${u}`;
    }
    return u.replace(/\/$/, "");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUrlError("");
    setKeyError("");

    let valid = true;

    if (!provider) {
      setKeyError("SELECT A PROVIDER FIRST");
      valid = false;
    } else if (!apiKey.trim()) {
      setKeyError(`API KEY REQUIRED — GET ONE AT ${providerInfo?.hint}`);
      valid = false;
    } else if (providerInfo?.prefix && !apiKey.startsWith(providerInfo.prefix)) {
      setKeyError(`KEY SHOULD START WITH "${providerInfo.prefix}" — CHECK YOUR KEY`);
      valid = false;
    }

    const normalized = normalizeUrl(url);
    if (!URL_REGEX.test(normalized)) {
      setUrlError("ENTER A VALID GITHUB URL — e.g. https://github.com/vercel/next.js");
      valid = false;
    }

    if (!valid) return;

    sessionStorage.setItem("llm_api_key", apiKey.trim());
    sessionStorage.setItem("llm_provider", provider!);
    onSubmit(normalized, apiKey.trim(), provider!);
  }

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50">
              01 / PASTE ANY REPO
            </span>
            <span className="sticker sticker-rotate-1">FREE</span>
            <span className="sticker sticker-rotate-2">NO SIGNUP</span>
            <span className="sticker sticker-rotate-3">OSS-FRIENDLY</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.03em] uppercase mb-6">
            STOP READING 40 FILES TO UNDERSTAND ONE REPO.
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 opacity-70">
            Paste a GitHub URL. We fetch the README and file structure, send it to an LLM, and
            generate a plain-English onboarding doc in seconds.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
            {/* Repo URL Input */}
            <div>
              <label className="block font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
                GITHUB REPO URL
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (urlError) setUrlError("");
                }}
                placeholder="https://github.com/owner/repo"
                className={`input-brutal ${urlError ? "input-error" : ""}`}
                disabled={isLoading}
                autoComplete="off"
                spellCheck={false}
              />
              {urlError && (
                <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-error)] font-bold">
                  {urlError}
                </p>
              )}
            </div>

            {/* Provider Selector */}
            <ProviderSelector selected={provider} onSelect={(p) => {
              setProvider(p);
              setApiKey("");
              setKeyError("");
            }} />

            {/* API Key Input */}
            {provider && (
              <div>
                <label className="block font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
                  {providerInfo?.name} API KEY
                </label>
                <div className="relative">
                  <input
                    type={showKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      if (keyError) setKeyError("");
                    }}
                    placeholder={providerInfo?.placeholder}
                    className={`input-brutal pr-16 ${keyError ? "input-error" : ""}`}
                    disabled={isLoading}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    onClick={() => setShowKey(!showKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 font-[family-name:var(--font-mono)] text-xs font-bold opacity-50 hover:opacity-100"
                    tabIndex={-1}
                  >
                    {showKey ? "HIDE" : "SHOW"}
                  </button>
                </div>
                {keyError && (
                  <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-[var(--color-error)] font-bold">
                    {keyError}
                  </p>
                )}
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] opacity-40">
                  GET ONE AT {providerInfo?.hint} &middot; NEVER STORED SERVER-SIDE &middot; CLEARED ON TAB CLOSE
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !url.trim() || !apiKey.trim() || !provider}
              className="btn-brutal btn-brutal-accent w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[var(--shadow-brutal-sm)]"
            >
              {isLoading ? "ANALYZING..." : "ANALYZE REPO →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
