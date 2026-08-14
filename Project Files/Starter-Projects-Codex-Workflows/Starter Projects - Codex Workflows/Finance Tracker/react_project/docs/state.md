# Data Flow & State

## Architecture overview

```
src/data/transactions.js          ← single source of truth (hardcoded array)
        ↓
src/services/transactionService.js ← all calculations and queries
        ↓
src/App.jsx                        ← calls service functions once at module load
        ↓
components (via props)             ← display only, no logic
```

There is no state management library. There is no `useState` or `useReducer` in this project — data does not change at runtime, so all values are computed once and passed as props.

## Services layer rules

All business logic lives in `src/services/transactionService.js`. The exported functions are:

| Function | Returns |
|---|---|
| `getAllTransactions()` | Full array of 12 transactions |
| `getTransactionsByCategory(category)` | Filtered array |
| `getTotalIncome()` | Number (positive) |
| `getTotalExpenses()` | Number (negative) |
| `getBalance()` | Number (income + expenses) |
| `getSummaryByCategory()` | `Array<{ category: string, total: number }>` |

**Rules:**
- Components must never import from `src/data/transactions.js` directly.
- Components must never perform filtering, summing, or aggregation.
- If you need a new derived value, add a function to `transactionService.js` and call it from `App.jsx`.

## Props contract

`App.jsx` calls the service layer once and passes results down:

```
App
├── TransactionList  ({ transactions })
│   └── TransactionItem  ({ transaction })  ← per item
└── Dashboard  ({ income, expenses, balance, summary })
    ├── MonthlyBalance  ({ balance, month })
    └── CategorySummary  ({ summary })
```

No component reaches up for data — data flows strictly downward via props.

## Utils

Utils are pure functions with no side effects:

- `src/utils/currencyUtils.js` — `formatCurrency(amount)` → formatted string
- `src/utils/categoryUtils.js` — `getCategoryColour(category)` → hex colour string

Components may import utils directly since they are stateless helpers, not data sources.
