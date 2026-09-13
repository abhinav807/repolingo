"use client";

export type Provider = "claude" | "openai" | "gemini" | "groq" | "openrouter" | "together";

interface ProviderInfo {
  id: Provider;
  name: string;
  prefix: string;
  placeholder: string;
  hint: string;
  recommended?: boolean;
  limits: string;
}

export const PROVIDERS: ProviderInfo[] = [
  {
    id: "groq",
    name: "GROQ",
    prefix: "gsk_",
    placeholder: "gsk_...",
    hint: "CONSOLE.GROQ.COM",
    recommended: true,
    limits: "FREE · 30 RPM · FAST",
  },
  {
    id: "claude",
    name: "CLAUDE",
    prefix: "sk-ant-",
    placeholder: "sk-ant-...",
    hint: "CONSOLE.ANTHROPIC.COM",
    limits: "FREE TIER · 50 RPM",
  },
  {
    id: "openai",
    name: "OPENAI",
    prefix: "sk-",
    placeholder: "sk-... or sk-proj-...",
    hint: "PLATFORM.OPENAI.COM",
    limits: "FREE TIER · 3 RPM · SLOW",
  },
  {
    id: "gemini",
    name: "GEMINI",
    prefix: "AI",
    placeholder: "AIza...",
    hint: "AISTUDIO.GOOGLE.COM",
    limits: "FREE · 15 RPM",
  },
  {
    id: "openrouter",
    name: "OPENROUTER",
    prefix: "sk-or-",
    placeholder: "sk-or-...",
    hint: "OPENROUTER.AI",
    limits: "FREE CREDITS · 20 RPM",
  },
  {
    id: "together",
    name: "TOGETHER",
    prefix: "",
    placeholder: "...",
    hint: "API.TOGETHER.AI",
    limits: "FREE CREDITS",
  },
];

interface Props {
  selected: Provider | null;
  onSelect: (p: Provider) => void;
}

export default function ProviderSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <label className="block font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
        SELECT YOUR PROVIDER
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p.id)}
            className={`relative border-[3px] border-[var(--color-foreground)] px-3 py-3 font-[family-name:var(--font-display)] font-black text-xs sm:text-sm uppercase tracking-wider transition-none cursor-pointer text-left ${
              selected === p.id
                ? "bg-[var(--color-foreground)] text-[var(--color-accent)] shadow-[var(--shadow-brutal-sm)]"
                : "bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
            }`}
          >
            <div className="flex items-center gap-2">
              {p.name}
              {p.recommended && (
                <span className="text-[8px] font-[family-name:var(--font-mono)] bg-[var(--color-accent)] text-[var(--color-foreground)] px-1 py-0.5 font-bold">
                  BEST
                </span>
              )}
            </div>
            <div className="font-[family-name:var(--font-mono)] text-[9px] opacity-50 mt-1 font-normal normal-case">
              {p.limits}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
