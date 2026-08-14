# Finance Tracker — AGENTS.md

## Project

A personal finance tracker built as a starter project for a coding course on AI-assisted development. Displays a list of transactions, a summary dashboard with totals by category, and a monthly balance view. All data is hardcoded — no backend, no API, no localStorage.

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | CSS Modules (plain CSS, no Tailwind) |
| Testing | Vitest 4 + @testing-library/react |
| Linting | ESLint 9 (flat config) |
| Language | JavaScript (ESM) |

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # lint src/ with ESLint
npm run test      # run Vitest in watch mode
npm run test:run  # run tests once (CI mode)
```

## Conventions

### File structure
```
src/
  components/      # React components, one per file + matching .module.css
  services/        # All business logic and data access
  utils/           # Pure utility functions (formatting, colour mapping)
  data/            # Hardcoded mock data
  App.jsx          # Root component — wires service layer to components
  main.jsx         # React entry point
```

### Naming
- Components: PascalCase (`TransactionItem.jsx`)
- CSS modules: same name as component (`TransactionItem.module.css`)
- Services and utils: camelCase (`transactionService.js`, `currencyUtils.js`)
- Test files: co-located with the module they test, `.test.js` suffix

### CSS
- Plain CSS modules only — no Tailwind, no external UI libraries
- Colour palette: slate grays for text (`#0f172a`, `#1e293b`, `#64748b`), green `#16a34a` for income, red `#dc2626` for expenses
- Component styles are scoped; global resets live in `App.module.css` only

### Data flow
- Service functions in `transactionService.js` are the single source of truth
- `App.jsx` calls the service layer once at module load (not inside render)
- Components receive data via props — they never import from services or data files directly

## Critical Rules

1. **All calculations must happen in `transactionService.js`** — components only receive and display data. Never put filtering, summing, or aggregation logic inside a component.
2. **No new dependencies** — the allowed set is: React, ReactDOM, Vite, Vitest, @testing-library/react, and ESLint. Do not add UI libraries, date libraries, or state managers.
3. **No localStorage, no fetch, no backend** — this is a fully static, hardcoded project.
4. **12 tests must stay green** — do not modify the test files without keeping all 12 passing.
5. **`npm run lint` must pass with zero errors** — fix lint errors before committing.
6. **The project contains intentional bugs** seeded for student exercises — do not silently fix code that looks wrong without reading the course context first.
