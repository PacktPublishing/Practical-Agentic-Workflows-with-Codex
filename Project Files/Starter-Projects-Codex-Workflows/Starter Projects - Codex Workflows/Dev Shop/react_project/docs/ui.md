# UI & Styling Conventions

## Approach

All styling uses **CSS Modules** (`*.module.css`). No Tailwind, no utility classes, no external UI libraries.

Each component owns its styles in a sibling `.module.css` file.

## Layout

The app uses a two-column layout defined in `App.module.css`:

- Left column — `ProductList` (fluid, `flex: 1`)
- Right column — `Cart` sidebar (fixed width `320px`)

The outer wrapper is a flex row with `gap: 24px` and `padding: 32px`.

## Color palette

| Role | Value |
|---|---|
| Page background | `#edf2f7` |
| Card / sidebar background | `#fff` / `#f7fafc` |
| Border | `#e2e8f0` |
| Primary text | `#1a202c` |
| Secondary text | `#4a5568` |
| Muted text | `#718096` |
| Primary action (button) | `#3182ce` hover `#2b6cb0` |
| Destructive (remove) | `#e53e3e` |

## Typography

- Base font: system font stack (inherited from browser default)
- Headings use `font-weight: 700`
- Button labels use `font-weight: 500`
- No custom font imports

## Component style rules

- Cards and sidebars use `border-radius: 8px` and `border: 1px solid #e2e8f0`
- Buttons use `border-radius: 6px` (primary) or `border-radius: 4px` (small/secondary)
- Transitions on interactive elements: `0.15s` duration on `background` and `color`
- No box-shadows — borders only

## Naming convention

CSS Module class names use camelCase (e.g., `.card`, `.addButton`, `.lineTotal`). Keep names descriptive and scoped to the component — no global class names.
