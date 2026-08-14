# UI & Styling Conventions

## CSS Modules

Every component has its own `.module.css` file with the same base name. Import styles as a default import named `styles`:

```js
import styles from './ComponentName.module.css';
// use as: className={styles.container}
```

No Tailwind, no styled-components, no external UI library. All styling is plain CSS.

## Layout

The root layout is a two-column CSS grid defined in `App.module.css`:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
  padding: 28px 32px;
}
```

- Left column: `TransactionList` (flexible width)
- Right column: `Dashboard` (fixed 380px)
- Collapses to single column below 768px

## Colour palette

| Role | Value |
|---|---|
| Page background | `#f1f5f9` |
| Card background | `#ffffff` |
| Primary text | `#0f172a` |
| Secondary text | `#1e293b` |
| Muted text | `#64748b` |
| Subtle text / labels | `#94a3b8` |
| Border / divider | `#f1f5f9`, `#e2e8f0` |
| Income (green) | `#16a34a` |
| Expense (red) | `#dc2626` |
| Profit background | `#f0fdf4` |
| Loss background | `#fef2f2` |

Category colours are defined in `src/utils/categoryUtils.js` and returned by `getCategoryColour(category)`. Never hardcode category colours in component files.

## Card style

Panels (TransactionList, Dashboard) use:
```css
background: #ffffff;
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
```

## Typography

- Font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Section headings: `1.1rem`, `font-weight: 700`
- Category/stat labels: `0.78–0.82rem`, uppercase, `letter-spacing: 0.05em`
- Transaction description: `0.95rem`, `font-weight: 500`
- Amount values: `0.95rem`, `font-weight: 600`

## Colour-coding rule

- Any amount that is positive (income) → `#16a34a` green
- Any amount that is negative (expense) → `#dc2626` red
- Monthly balance card → green background/text if balance ≥ 0, red if < 0
