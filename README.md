# EXPLAIN THIS REPO

> **PASTE A REPO. GET THE TL;DR.**

`[BYOK]` `[6 PROVIDERS]` `[NO TRACKING]` `[OPEN SOURCE]` `[NEXT.JS]`

---

## WHAT IT DOES

You paste a GitHub URL. We fetch the README and file structure. Your LLM of choice writes you a plain-English onboarding doc. Done.

No signup. No account. No tracking. You bring your own API key — we never store it.

---

## HOW IT WORKS

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   STEP 01 — PASTE                                       │
│   Drop a GitHub URL into the input field.               │
│                                                         │
│   STEP 02 — PICK + KEY                                  │
│   Choose a provider (Claude, OpenAI, Gemini, Groq,      │
│   OpenRouter, Together) and enter your API key.          │
│   It stays in your tab only.                            │
│                                                         │
│   STEP 03 — FETCH                                       │
│   We pull repo metadata, README, and file tree from     │
│   the GitHub API.                                        │
│                                                         │
│   STEP 04 — THINK                                       │
│   Your LLM reads everything and writes a structured     │
│   onboarding doc.                                        │
│                                                         │
│   STEP 05 — READ                                        │
│   Get a clean, sectioned result you can copy as         │
│   Markdown.                                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## TECH STACK

**Frontend** — `NEXT.JS` `REACT 19` `TYPESCRIPT` `TAILWIND 4`

**Backend** — `NEXT.JS API ROUTES` `GITHUB REST API`

**AI** — `ANTHROPIC` `OPENAI` `GOOGLE` `GROQ` `OPENROUTER` `TOGETHER` `BYOK`

**Design** — `NEO-BRUTALIST` `CUSTOM DESIGN SYSTEM`

---

## GETTING STARTED

### Prerequisites

- Node.js 18+
- npm
- An API key from any supported provider — free tier works ([Groq is free and fastest](https://console.groq.com))

### Install

```bash
git clone https://github.com/abhinav807/repolingo.git
cd repolingo
npm install
```

### Environment Variables

> ⚡ **COPY THIS** — create a `.env.local` file in the project root:

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub PAT — raises rate limit from 60/hr to 5,000/hr |

```bash
# .env.local
GITHUB_TOKEN=ghp_your_token_here
```

That's it for server config. Users supply their own LLM key in the browser.

### Run

```bash
npm run dev
```

Open `http://localhost:3000`

---

## 🛡️ SECURITY MODEL

> **CALLOUT** — This app has real attack surface. We take it seriously.

- **BYOK** — Your API key is never stored server-side. Used once per request, then discarded. There is no database.
- **Anti-SSRF** — We never fetch URLs you supply. Server constructs GitHub API calls from parsed `owner/repo` only.
- **Prompt Injection** — System prompt explicitly treats repo content as data, not instructions.
- **Input Validation** — Every field type-checked server-side; only expected fields accepted (field tampering blocked).
- **XSS** — No `dangerouslySetInnerHTML` anywhere; all content rendered through React's auto-escaping.
- **Rate Limiting** — 30 requests/hour per IP on the analyze endpoint.
- **Bot Protection** — Origin/Referer validation plus a honeypot field on the API.
- **No Cookies** — No tracking cookies, no sessions, no fingerprinting. Anonymous page-view analytics only (Vercel Web Analytics, cookieless).
- **Security Headers** — CSP, HSTS (preload), X-Frame-Options DENY, nosniff, strict referrer, forced HTTPS.
- **HTTPS Only** — HTTP is redirected to HTTPS at the edge and in app config.

---

## PROJECT STRUCTURE

```
repolingo/
├── src/
│   ├── app/
│   │   ├── api/analyze/        ← server route (GitHub + multi-provider LLM)
│   │   ├── (legal)/            ← shared layout w/ navbar for legal pages
│   │   │   ├── privacy/        ← privacy policy page
│   │   │   └── terms/          ← terms & conditions page
│   │   ├── how-it-works/       ← how it works page
│   │   ├── thank-you/          ← thank you page
│   │   ├── not-found.tsx       ← custom 404
│   │   ├── layout.tsx          ← root layout + fonts + analytics
│   │   ├── page.tsx            ← main app state machine
│   │   ├── globals.css         ← design system tokens
│   │   ├── robots.ts           ← SEO robots
│   │   └── sitemap.ts          ← SEO sitemap
│   ├── components/
│   │   ├── Navbar.tsx          ← sticky nav + mobile menu
│   │   ├── Hero.tsx            ← input form + BYOK field
│   │   ├── ProviderSelector.tsx ← 6-provider picker w/ rate limits
│   │   ├── Marquee.tsx         ← scrolling ticker band
│   │   ├── LoadingState.tsx    ← rotating status messages
│   │   ├── ResultsDisplay.tsx  ← 7-section result cards
│   │   ├── ErrorState.tsx      ← dedicated error UI
│   │   ├── EmptyState.tsx      ← pre-analysis placeholder
│   │   ├── Toast.tsx           ← success/error toasts
│   │   ├── CookieBanner.tsx    ← cookie notice
│   │   └── Footer.tsx          ← footer + ticker
│   └── lib/
│       └── types.ts            ← shared TypeScript types
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png / icon-512.png
│   ├── og.jpg                  ← Open Graph card (1200×630)
│   └── site.webmanifest
├── next.config.ts              ← security headers + HTTPS redirects
├── vercel.json                 ← function timeout
├── .env.local.example
└── README.md
```

---

## DESIGN SYSTEM

### Color Palette

```
┌────────────┬──────────┬──────────────────────┐
│ TOKEN      │ HEX      │ USAGE                │
├────────────┼──────────┼──────────────────────┤
│ foreground │ #0A0A0A  │ text, borders        │
│ background │ #FAFAFA  │ page, cards          │
│ accent     │ #D4FF3F  │ CTA, highlights      │
│ muted      │ #E5E5E5  │ inactive states      │
│ error      │ #FF3333  │ error states         │
└────────────┴──────────┴──────────────────────┘
```

### Typography

```
DISPLAY  → Space Grotesk 700   (headers, ALL CAPS)
BODY     → Inter 400-600       (paragraphs, mixed case)
MONO     → JetBrains Mono 400  (code, file paths)
```

### Principles

No gradients. No border-radius. No blur. Hard offset shadows. Snap-cut hover states. Everything is flat, bold, aggressive. Neo-brutalism.

---

## ENVIRONMENT VARIABLES

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | GitHub personal access token for higher API rate limits |
| *(user supplies LLM key in browser)* | Yes | BYOK — Bring Your Own Key. Never stored server-side. |

---

## API REFERENCE

### `POST /api/analyze`

Requires browser `Origin`/`Referer` headers matching the site (bot protection).

**Request Body**

```json
{
  "repoUrl": "https://github.com/owner/repo",
  "apiKey": "your-provider-key",
  "provider": "groq"
}
```

`provider` is one of: `claude`, `openai`, `gemini`, `groq`, `openrouter`, `together`.

**Success Response (200)**

```json
{
  "repo": {
    "name": "repo-name",
    "fullName": "owner/repo-name",
    "description": "Project description",
    "stars": 12345,
    "language": "TypeScript",
    "ownerAvatar": "https://avatars.githubusercontent.com/...",
    "htmlUrl": "https://github.com/owner/repo-name"
  },
  "analysis": {
    "summary": "2-4 sentence plain-English summary",
    "techStack": ["TypeScript", "React", "Next.js"],
    "fileStructure": [
      { "path": "src/", "explanation": "Source code directory" }
    ],
    "keyFiles": [
      { "path": "src/index.ts", "explanation": "Entry point" }
    ],
    "howToRun": {
      "confidence": "confirmed",
      "steps": ["npm install", "npm run dev"]
    },
    "contributing": "How to contribute..."
  },
  "hasReadme": true
}
```

**Error Codes**

| Code | Meaning |
|---|---|
| `BOT_DETECTED` | Request didn't originate from this site |
| `MISSING_REPO_URL` | No repoUrl in request body |
| `MISSING_API_KEY` | No apiKey in request body |
| `INVALID_KEY_FORMAT` | Key is too short or malformed |
| `INVALID_PROVIDER` | Unknown provider value |
| `RATE_LIMITED` | 30 requests/hour per IP exceeded |
| `INVALID_URL` | Can't parse owner/repo from URL |
| `REPO_NOT_FOUND` | Repo is private or doesn't exist |
| `GITHUB_RATE_LIMITED` | GitHub API rate limit exceeded |
| `INVALID_KEY` | The LLM provider rejected the key |
| `LLM_RATE_LIMITED` | The LLM provider rate-limited you (429) |
| `LLM_FAILED` | LLM call failed |
| `PARSE_FAILED` | LLM response wasn't valid JSON |
| `INTERNAL_ERROR` | Unexpected server error |

---

## CONTRIBUTING

1. Fork it
2. `npm install`
3. `npm run dev`
4. Make your changes
5. `npm run lint` — must pass
6. `npm run build` — must pass
7. Open a PR

Keep it brutalist. Keep it simple.

---

## LICENSE

MIT

---

> **BUILT WITH ⚡ NEXT.JS + YOUR FAVORITE LLM**
>
> `© 2026 · EXPLAIN THIS REPO`
