# NextSkill 

>A modern Next.js landing/demo for an online learning platform UI — components, pages and Tailwind styling.

## Project Overview

This repository contains a small Next.js project scaffolded to demonstrate a learning platform homepage and courses pages. The UI is built with React/TypeScript and TailwindCSS and includes several reusable components (navigation, hero, categories, courses grid, footer).

## Tech stack
- Next.js (v16)
- React (v19)
- TypeScript
- Tailwind CSS + PostCSS
- Radix UI, Lucide icons, and several utility libs (see `package.json`)

## Features
- Layout and routing using the Next.js App Router (`app/`)
- Reusable UI components in `components/`
- Tailwind-based theming and utility classes
- Path alias `@/*` configured for clean imports (see `tsconfig.json`)

## Project structure (important files)

- `app/` — Next.js App Router pages and layout (e.g. `app/page.tsx`, `app/layout.tsx`)
- `components/` — React components used by pages (`navigation.tsx`, `hero-section.tsx`, `courses-grid.tsx`, etc.)
- `postcss.config.mjs` — PostCSS configuration
- `tsconfig.json` — TypeScript config (path alias `@/*`)
- `.gitignore` — repository ignores (added)

## Getting started (local development)

Requirements:
- Node.js (recommended 18+ or latest LTS)
- npm (or use your preferred package manager)

Install dependencies:

```powershell
npm install
```

Note: In this repository some dependencies may have strict peer requirements (see "Known issues" below). If you encounter an ERESOLVE peer dependency error, you can run:

```powershell
npm install --legacy-peer-deps
```

Start the dev server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
npm run start
```

Lint (if ESLint is configured):

```powershell
npm run lint
```

## Environment variables

Create `.env.local` for local-only secrets (these are git-ignored). Example keys depend on integrations you add (analytics, API keys, etc.).

## Path aliases

This project uses the alias `@` to reference the repository root (e.g. `@/components/navigation`). The mapping is defined in `tsconfig.json` as:

```json
"paths": { "@/*": ["./*"] }
```

If VS Code marks imports red, restart the TypeScript server: Command Palette → *TypeScript: Restart TS Server* or reload the window.

## Known issues & troubleshooting

- Peer dependency conflicts: One package (`vaul`) required React ≤18 while this project currently lists React 19 in `package.json`. If you hit installation errors, either:
  - install with `--legacy-peer-deps`, or
  - downgrade React/ReactDOM to an 18.x version (edit `package.json`), or
  - remove/replace the conflicting package.

- Tailwind / PostCSS editor warnings: The editor may show "Unknown at rule" for Tailwind custom at-rules (e.g. `@apply`, `@theme`). Install the Tailwind CSS IntelliSense extension in VS Code to reduce false-positive lint messages.

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Make changes, run `npm install` and test locally with `npm run dev`
3. Commit with a clear message and open a Pull Request.

## License

No license is included in this repository. Add a `LICENSE` file if you want to make the project open-source under a chosen license.

---

If you'd like, I can also:
- run the dev server here and confirm the app loads, or
- add a minimal CONTRIBUTING.md and PR template, or
- adjust `package.json` (for example to pin React to 18) and reinstall dependencies.
