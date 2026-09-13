"use client";

export type Provider = "claude" | "openai" | "gemini" | "groq" | "openrouter" | "together";

interface ProviderInfo {
  id: Provider;
  name: string;
  prefix: string;
  placeholder: string;
  hint: string;
}

export const PROVIDERS: ProviderInfo[] = [
  {
    id: "claude",
    name: "CLAUDE",
    prefix: "sk-ant-",
    placeholder: "sk-ant-...",
    hint: "CONSOLE.ANTHROPIC.COM",
  },
  {
    id: "openai",
    name: "OPENAI",
    prefix: "sk-",
    placeholder: "sk-...",
    hint: "PLATFORM.OPENAI.COM",
  },
  {
    id: "gemini",
    name: "GEMINI",
    prefix: "AI",
    placeholder: "AIza...",
    hint: "AISTUDIO.GOOGLE.COM",
  },
  {
    id: "groq",
    name: "GROQ",
    prefix: "gsk_",
    placeholder: "gsk_...",
    hint: "CONSOLE.GROQ.COM",
  },
  {
    id: "openrouter",
    name: "OPENROUTER",
    prefix: "sk-or-",
    placeholder: "sk-or-...",
    hint: "OPENROUTER.AI",
  },
  {
    id: "together",
    name: "TOGETHER",
    prefix: "",
    placeholder: "...",
    hint: "API.TOGETHER.AI",
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
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {PROVIDERS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p.id)}
            className={`border-[3px] border-[var(--color-foreground)] px-3 py-3 font-[family-name:var(--font-display)] font-black text-xs sm:text-sm uppercase tracking-wider transition-none cursor-pointer ${
              selected === p.id
                ? "bg-[var(--color-foreground)] text-[var(--color-accent)] shadow-[var(--shadow-brutal-sm)]"
                : "bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
