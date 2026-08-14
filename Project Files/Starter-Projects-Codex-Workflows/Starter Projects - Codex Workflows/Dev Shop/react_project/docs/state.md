# State Management

## Where state lives

**All cart state lives in `App.jsx`.** No state in child components. No external store.

```
App (owns cartItems state)
├── ProductList  ← receives products + onAddToCart prop
│   └── ProductCard  ← receives product + onAddToCart prop
└── Cart  ← receives cartItems + onRemove + onClearCart props
    └── CartItem  ← receives item + onRemove props
```

## State shape

```js
cartItems: [
  { id: number, name: string, price: number, quantity: number },
  ...
]
```

Each item in `cartItems` is a product object extended with a `quantity` field. Products themselves are never mutated — cart items are copies.

## State transitions

| Action | Handler | Result |
|---|---|---|
| Add new product | `handleAddToCart(product)` | Appends `{ ...product, quantity: 1 }` |
| Add existing product | `handleAddToCart(product)` | Increments `quantity` on matching item |
| Remove item | `handleRemove(productId)` | Filters out item with matching `id` |
| Clear cart | `handleClearCart()` | Resets `cartItems` to `[]` |

## Rules

- **Never mutate state.** Always return a new array from `setCartItems`.
- **No localStorage**, no sessionStorage, no backend sync — state is in-memory only and resets on page reload.
- **Derived values** (line totals, cart total) are computed inline in the render — not stored in state.
- **Props down, events up** — child components receive data and callbacks; they never reach up to modify parent state directly.

## Computed values

| Value | Computed in | Formula |
|---|---|---|
| Line total | `CartItem.jsx` | `item.price * item.quantity` |
| Cart total | `Cart.jsx` | `cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)` |
