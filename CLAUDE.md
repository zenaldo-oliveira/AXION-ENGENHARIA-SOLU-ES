# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then produce a production build via Vite
- `npm run lint` — run ESLint over the project
- `npm run preview` — serve the production build locally

There is no test runner configured in this project.

## Architecture

This is a Vite + React 19 + TypeScript + Tailwind CSS v4 single-page app, currently at the initial scaffold stage (`src/App.tsx` still holds the default Vite template content).

- Entry point: `src/main.tsx` mounts `src/App.tsx` into `index.html`.
- Tailwind is wired in via the `@tailwindcss/vite` plugin in `vite.config.ts` (no separate `tailwind.config.js`).
- `framer-motion` and `lucide-react` are installed as dependencies for animation and icons, respectively.
- TypeScript is split across three configs: `tsconfig.json` is the solution file referencing `tsconfig.app.json` (app source, targets ES2023/DOM) and `tsconfig.node.json` (Vite config tooling).
- ESLint config (`eslint.config.js`) uses the flat-config format with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
