# Weather Dashboard — AGENTS.md

## Project

A React weather dashboard built as a starter project for a course on AI-assisted development. Students use this codebase to practice finding and fixing bugs with AI tooling.

## Stack

- React 19 + Vite 7
- CSS Modules — no external UI libraries
- Vitest for unit testing

## Commands

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start development server       |
| `npm run build` | Production build               |
| `npm run test`  | Run Vitest test suite          |

## Conventions

- All components live in `src/components/` with a co-located CSS module
- Shared utilities live in `src/utils/`
- Mock weather data lives in `src/data/`
- CSS class names use camelCase inside module files
- Component files use PascalCase; utility and data files use camelCase

## Critical Rules

- Do not add external dependencies beyond React, Vite, and Vitest
- Do not add Tailwind or any CSS framework or component library
- Do not add routing or localStorage
- Do not replace the mock data with real API calls
- The broken behaviours in this repo are intentional student exercises — do not silently fix them
