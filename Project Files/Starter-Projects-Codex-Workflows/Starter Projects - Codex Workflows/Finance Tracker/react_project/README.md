# Finance Tracker

A React + Vite personal finance tracker built as a starter project for a coding course on AI-assisted development.

## What it does

- Displays 12 hardcoded transactions for January 2025
- Shows a summary dashboard with total income, total expenses, and current balance
- Breaks down spending by category with colour-coded labels
- Highlights whether the month is in profit or loss

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint `src/` with ESLint |
| `npm run test` | Run the Vitest test suite |

## Project structure

```
src/
  components/        React UI components (CSS Modules)
  services/          Business logic — all calculations live here
  utils/             Pure utility functions (currency formatting, colours)
  data/              Hardcoded transaction data
  App.jsx            Root component
  main.jsx           Entry point
docs/
  ui.md              Styling conventions
  state.md           Data flow and services layer rules
  testing.md         Testing conventions
AGENTS.md            Guide for Codex AI assistant
```

## Tech stack

- **React 19** — UI
- **Vite 7** — build tool and dev server
- **CSS Modules** — scoped component styles, no external UI library
- **Vitest** — unit tests (12 tests covering services and utils)
- **ESLint 9** — flat config with React Hooks plugin

## Design decisions

All data flows top-down: `data/transactions.js` → `services/transactionService.js` → `App.jsx` → components via props. Components contain no business logic. This separation makes the service layer easy to test in isolation and straightforward to swap for a real API later.
