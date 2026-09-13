"use client";

interface Props {
  message: string;
  details?: string;
  onRetry?: () => void;
  onReset?: () => void;
}

export default function ErrorState({ message, details, onRetry, onReset }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="card-brutal p-8 sm:p-12 max-w-2xl border-[var(--color-error)]">
        <div className="mb-6">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider text-[var(--color-error)]">
            SOMETHING WENT WRONG
          </span>
        </div>

        <p className="font-[family-name:var(--font-display)] font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4">
          {message}
        </p>

        {details && (
          <p className="font-[family-name:var(--font-mono)] text-sm opacity-60 mb-8">
            {details}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {onRetry && (
            <button onClick={onRetry} className="btn-brutal btn-brutal-accent">
              TRY AGAIN
            </button>
          )}
          {onReset && (
            <button onClick={onReset} className="btn-brutal">
              START OVER
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
