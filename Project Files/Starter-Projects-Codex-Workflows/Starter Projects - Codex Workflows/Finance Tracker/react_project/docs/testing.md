# Testing Conventions

## Framework

[Vitest](https://vitest.dev/) — configured in `vitest.config.js` with the jsdom environment.

Run tests:
```bash
npm run test        # watch mode
vitest --run        # single pass (CI)
```

## Test file location

Test files live alongside the module they test, using the `.test.js` suffix:

```
src/services/transactionService.js
src/services/transactionService.test.js

src/utils/currencyUtils.js
src/utils/currencyUtils.test.js

src/utils/categoryUtils.js
src/utils/categoryUtils.test.js
```

## Import style

Always import Vitest globals explicitly — `globals: false` is set in `vitest.config.js`:

```js
import { describe, it, expect } from 'vitest';
```

## What must be tested

The 12 required tests and what they verify:

| # | Test | Expected value |
|---|---|---|
| 1 | `getAllTransactions` length | 12 |
| 2 | `getTotalIncome` | `4000` |
| 3 | `getTotalExpenses` | `-1493` |
| 4 | `getBalance` | `2507` |
| 5 | `getTransactionsByCategory('Food')` | 3 items, all Food |
| 6 | `getTransactionsByCategory('Unknown')` | `[]` |
| 7 | `getSummaryByCategory` length | 8 |
| 8 | `getSummaryByCategory` Food total | `-230` |
| 9 | `formatCurrency(3200)` | `'£3,200.00'` |
| 10 | `formatCurrency(-950)` | `'-£950.00'` |
| 11 | `getCategoryColour` for all 8 known categories | returns a string |
| 12 | `getCategoryColour('Unknown')` | `'#6b7280'` (fallback) |

## Rules

- All 12 tests must pass before any PR is merged.
- Do not mock the data layer in service tests — tests should use the real `transactions.js` data so they catch regressions in both the data and the service functions.
- Do not test component rendering unless a new component test is specifically required — the current suite focuses on the service and util layers.
- If you add a new service function, add at least one test for it.
