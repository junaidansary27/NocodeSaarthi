# CLAUDE.md — Developer Guide

This file outlines build, run, test, and style guidelines for the **Nocode Sarathi Website** project.

## Development & Build Commands

- **Run Dev Server**: `npm run dev` (Starts Vite server at `http://localhost:5173/`)
- **Build App**: `npm run build` (Type-checks with `tsc` and builds production bundle)
- **Lint Code**: `npm run lint` (Checks code styling and issues with Oxlint)
- **Preview Build**: `npm run preview` (Previews the local production build)

## Code Quality & Technical Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (configured via `@theme` in `src/index.css`)
- **3D Features**: Three.js, `@react-three/fiber`, and `@react-three/drei`
- **Animations**: `framer-motion` for page transitions and micro-interactions
- **Routing**: `react-router-dom` v7
- **Linting**: Oxlint (`.oxlintrc.json`)

## Code Style & Conventions

- **Components**: Write functional components using TypeScript types for `props`.
- **Hooks**: Use standard React hooks (`useMemo`, `useCallback`, `useRef`) and custom hooks placed in `src/hooks/`.
- **CSS / Styling**: 
  - Use utility classes provided by Tailwind CSS.
  - Custom colors and fonts (e.g., `--color-brand-orange`, `--font-sans`) are defined in `@theme` in `src/index.css`.
  - Use custom glassmorphism classes (`.glass-panel`, `.glass-navbar`) and gradient classes (`.gradient-text`) defined in `src/index.css`.
- **TypeScript**: Always enable strict null checks and specify precise types for Three.js / Canvas references.
- **Routing & Navigation**: Keep routing structured in `src/App.tsx`.
