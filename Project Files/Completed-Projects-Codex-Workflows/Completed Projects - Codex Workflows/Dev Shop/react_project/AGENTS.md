# AGENTS.md

## Project

Dev Shop — a React shopping cart starter project for a coding course on AI-assisted development. Students use this as a base to practice adding features with AI assistance.

The app shows a product list on the left and a cart sidebar on the right. All data is hardcoded; there is no backend, API, or localStorage.

## Stack

- React 19 (functional components only)
- Vite 7
- CSS Modules (no Tailwind, no external UI libraries)
- Vitest + @testing-library/react for tests

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run test` | Run test suite (Vitest, non-watch) |

## Conventions

- **Functional components only** — no class components
- **CSS Modules only** — one `.module.css` per component, class names in camelCase
- **No external UI libraries** — style from scratch
- **Props down, events up** — all cart state lives in `App.jsx` and is passed to children as props; children emit events via callback props (`onAddToCart`, `onRemove`, `onClearCart`)
- **No routing** — single-page, no React Router
- **Derived values in render** — line totals and cart total are computed inline, not stored in state
- **Immutable state updates** — always return new arrays from `setCartItems`, never mutate

## Critical Rules

1. **Cart state must stay in `App.jsx`.** Do not lift state into a context, store, or separate hook unless explicitly asked. This is a teaching project — the simple prop-drilling pattern is intentional.

2. **Do not add localStorage, sessionStorage, or any persistence.** State resets on page reload by design.

3. **Do not install additional dependencies** beyond Vite, React, Vitest, and @testing-library/react. Students should see a minimal, legible dependency tree.

4. **Missing features are intentional.** This is a starter project. If something seems unimplemented (e.g., quantity controls, checkout flow), assume it is a student exercise — do not silently add it.

5. **All 10 tests must pass** after any change. Run `npm run test` to verify before considering work complete.

6. **ALWAYS run npm run test after making any changes to component 
  logic or state management. Do not consider a task complete 
  until all tests pass.**