# Dev Shop — React Shopping Cart

A simple shopping cart app built with React and Vite. Designed as a starter project for a coding course on AI-assisted development.

## What it does

- Displays a product catalog on the left
- Lets users add products to a cart sidebar on the right
- Tracks quantities when the same product is added more than once
- Shows per-item line totals and a cart grand total
- Supports removing individual items or clearing the cart entirely

All data is hardcoded — no backend, no API calls, no localStorage.

## Stack

- **React 19** — functional components, hooks
- **Vite** — dev server and build tool
- **CSS Modules** — scoped per-component styles, no Tailwind or UI libraries
- **Vitest** + **@testing-library/react** — unit/integration tests

## Getting started

```bash
npm install
npm run dev
```

## Running tests

```bash
npm run test
```

The test suite has 10 tests covering product rendering, add-to-cart, quantity tracking, line totals, remove, clear cart, and empty-cart state.

## Project structure

```
src/
  components/
    ProductList.jsx + ProductList.module.css
    ProductCard.jsx + ProductCard.module.css
    Cart.jsx       + Cart.module.css
    CartItem.jsx   + CartItem.module.css
  data/
    products.js         # hardcoded product catalog
  App.jsx               # root component, owns all cart state
  App.module.css
  main.jsx
  setupTests.js         # @testing-library/jest-dom setup
docs/
  ui.md                 # styling conventions
  state.md              # state structure and rules
```

## Products

| Name | Price |
|---|---|
| Mechanical Keyboard | $89.99 |
| USB-C Hub | $34.99 |
| Monitor Stand | $49.99 |
| Webcam HD 1080p | $79.99 |
| Desk Lamp LED | $29.99 |
