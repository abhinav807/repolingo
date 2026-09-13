"use client";

import { useState } from "react";
import Image from "next/image";
import type { RepoMeta, RepoAnalysis } from "@/lib/types";

interface Props {
  repo: RepoMeta;
  analysis: RepoAnalysis;
  hasReadme: boolean;
  onReset: () => void;
  onCopy?: () => void;
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FileTreeItem({ path, explanation, depth = 0 }: { path: string; explanation: string; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const isDir = path.endsWith("/");

  return (
    <div>
      <button
        onClick={() => isDir && setExpanded(!expanded)}
        className={`w-full text-left py-1.5 px-2 font-[family-name:var(--font-mono)] text-sm hover:bg-[var(--color-muted)] transition-colors flex items-start gap-2 ${isDir ? "cursor-pointer" : "cursor-default"}`}
        style={{ paddingLeft: `${depth * 1.5}rem` }}
      >
        {isDir && (
          <span className="shrink-0 w-4 text-center opacity-50">
            {expanded ? "▼" : "▶"}
          </span>
        )}
        {!isDir && <span className="shrink-0 w-4" />}
        <span className="font-bold">{path}</span>
        <span className="opacity-50 ml-2 hidden sm:inline">→ {explanation}</span>
      </button>
      {isDir && expanded && (
        <div className="border-l-2 border-[var(--color-muted)]" style={{ marginLeft: `${depth * 1.5 + 0.5}rem` }}>
          <p className="font-[family-name:var(--font-mono)] text-xs opacity-40 px-4 py-1">{explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function ResultsDisplay({ repo, analysis, hasReadme, onReset, onCopy }: Props) {
  const [copied, setCopied] = useState(false);

  function generateMarkdown(): string {
    let md = `# ${repo.fullName}\n\n`;
    md += `> ${repo.description || "No description provided."}\n\n`;
    md += `**Stars:** ${repo.stars.toLocaleString()} | **Language:** ${repo.language || "N/A"} | **Link:** [${repo.htmlUrl}](${repo.htmlUrl})\n\n`;
    md += `---\n\n`;
    md += `## 02 / What Is This\n\n${analysis.summary}\n\n`;
    md += `## 03 / Tech Stack\n\n${analysis.techStack.map((t) => `\`${t}\``).join(", ")}\n\n`;
    md += `## 04 / File Structure\n\n`;
    analysis.fileStructure.forEach((f) => {
      md += `- \`${f.path}\` — ${f.explanation}\n`;
    });
    md += `\n## 05 / Key Files Explained\n\n`;
    analysis.keyFiles.forEach((f) => {
      md += `- **\`${f.path}\`** — ${f.explanation}\n`;
    });
    md += `\n## 06 / How To Run\n\n`;
    if (analysis.howToRun.confidence === "inferred") {
      md += `*Note: These steps are inferred from the file structure, not confirmed from the README.*\n\n`;
    }
    analysis.howToRun.steps.forEach((s, i) => {
      md += `${i + 1}. ${s}\n`;
    });
    if (analysis.contributing) {
      md += `\n## 07 / Contributing\n\n${analysis.contributing}\n`;
    }
    return md;
  }

  function handleCopy() {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onCopy?.();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Repo Header Card */}
      <div className="card-brutal p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-start gap-5">
        <Image
          src={repo.ownerAvatar}
          alt={repo.name}
          width={56}
          height={56}
          className="w-14 h-14 border-2 border-[var(--color-foreground)]"
          unoptimized
        />
        <div className="flex-1 min-w-0">
          <h2 className="font-[family-name:var(--font-display)] font-black text-2xl sm:text-3xl uppercase tracking-tight truncate">
            {repo.fullName}
          </h2>
          {repo.description && (
            <p className="font-[family-name:var(--font-body)] text-sm opacity-60 mt-1 line-clamp-2">
              {repo.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <span className="badge-brutal flex items-center gap-1">
              <StarIcon /> {repo.stars.toLocaleString()}
            </span>
            {repo.language && <span className="badge-brutal">{repo.language}</span>}
            <a
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-xs font-bold underline underline-offset-2 hover:text-[var(--color-accent)]"
            >
              VIEW ON GITHUB ↗
            </a>
          </div>
        </div>
      </div>

      {!hasReadme && (
        <div className="card-brutal p-4 mb-8 border-[var(--color-accent)] bg-[var(--color-accent)] bg-opacity-10">
          <p className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase">
            NOTE: THIS REPO HAS NO README — ANALYSIS IS BASED ON FILE STRUCTURE ONLY
          </p>
        </div>
      )}

      <div className="space-y-6">
        {/* 02 - What Is This */}
        <div className="card-brutal p-6 sm:p-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
            02 / WHAT IS THIS
          </span>
          <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed">
            {analysis.summary}
          </p>
        </div>

        {/* 03 - Tech Stack */}
        <div className="card-brutal p-6 sm:p-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
            03 / TECH STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {analysis.techStack.map((tech) => (
              <span key={tech} className="badge-brutal">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 04 - File Structure */}
        <div className="card-brutal p-6 sm:p-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
            04 / FILE STRUCTURE
          </span>
          <div className="bg-[var(--color-background)] border-2 border-[var(--color-foreground)] p-2 max-h-96 overflow-y-auto">
            {analysis.fileStructure.map((item) => (
              <FileTreeItem
                key={item.path}
                path={item.path}
                explanation={item.explanation}
              />
            ))}
          </div>
        </div>

        {/* 05 - Key Files */}
        <div className="card-brutal p-6 sm:p-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
            05 / KEY FILES EXPLAINED
          </span>
          <ul className="space-y-4">
            {analysis.keyFiles.map((f) => (
              <li key={f.path}>
                <code className="font-[family-name:var(--font-mono)] text-sm font-bold bg-[var(--color-muted)] px-2 py-1">
                  {f.path}
                </code>
                <p className="font-[family-name:var(--font-body)] text-sm mt-1 opacity-70">
                  {f.explanation}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 06 - How To Run */}
        <div className="card-brutal p-6 sm:p-8">
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
            06 / HOW TO RUN IT
          </span>
          {analysis.howToRun.confidence === "inferred" && (
            <p className="font-[family-name:var(--font-mono)] text-xs opacity-50 mb-4 border-2 border-[var(--color-foreground)] inline-block px-2 py-1">
              INFERRED FROM FILE STRUCTURE — NOT CONFIRMED
            </p>
          )}
          <ol className="space-y-2">
            {analysis.howToRun.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-[family-name:var(--font-display)] font-black text-lg shrink-0 w-6">
                  {i + 1}.
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* 07 - Contributing */}
        {analysis.contributing && (
          <div className="card-brutal p-6 sm:p-8">
            <span className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-wider opacity-50 block mb-4">
              07 / CONTRIBUTING
            </span>
            <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed opacity-70">
              {analysis.contributing}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-10">
        <button onClick={handleCopy} className="btn-brutal btn-brutal-accent">
          {copied ? "COPIED!" : "COPY AS MARKDOWN"}
        </button>
        <button onClick={onReset} className="btn-brutal">
          ANALYZE ANOTHER REPO
        </button>
      </div>
    </section>
  );
}
