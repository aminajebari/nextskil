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
# NextSkill

A modern Next.js demo/landing project for an online learning platform UI. It showcases reusable React + TypeScript components, Tailwind CSS styling, and example course pages.

## Quick overview

- Framework: Next.js (App Router) in `app/`
- Language: TypeScript
- UI: React + Tailwind CSS
- Components: reusable components live in the `components/` folder
- Path alias: `@/*` mapped in `tsconfig.json`

## Project structure (important files)

- `app/` — Next.js App Router pages and layouts (`app/page.tsx`, `app/layout.tsx`)
- `components/` — UI building blocks (`navigation.tsx`, `hero-section.tsx`, `courses-grid.tsx`, etc.)
- `postcss.config.mjs` — PostCSS/Tailwind config
- `tsconfig.json` — TypeScript configuration and `@/*` path alias
- `.gitignore` — repository ignores (added)

## Requirements

- Node.js 18+ (recommended)
- npm (or pnpm/yarn if preferred)

## Setup & run

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

If you encounter peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

## Environment variables

Create a `.env.local` file for local secrets (this repo ignores `.env*` files). Example:

```
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://user:pass@localhost:5432/db
```

## Notes & known issues

- The repo currently lists React 19 in `package.json`. Some third-party packages may still require React 18 or lower; if you run into install-time peer conflicts consider using `--legacy-peer-deps` or pinning React to 18.
- If Tailwind at-rules show editor warnings, install Tailwind CSS IntelliSense in VS Code.

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes and test locally (`npm run dev`)
3. Commit and open a PR

## License

No license file is included. Add a `LICENSE` if you want to publish under an open-source license.

## Next steps I can help with

- Run the dev server here and confirm the app loads
- Add a minimal `CONTRIBUTING.md` and PR template
- Adjust `package.json` to pin React to 18 and reinstall dependencies
