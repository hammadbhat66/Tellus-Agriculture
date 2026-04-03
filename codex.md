# Codex AI Notes for psyd-app (React Native)

This file documents the project structure and the most important commands for contributors, for use with Codex-style assistant workflows.

## Project summary

- Project: `psyd-app`
- Framework: React Native (TypeScript)
- Platforms: iOS + Android
- App shell: `App.tsx`, `index.js`

## Key folders

- `src/`
  - `api/` API wrappers and service endpoints
  - `assets/` fonts, icons, images
  - `hooks/` custom hooks (`subscription.tsx` etc.)
  - `redux/` slices + state management
  - `router/` navigation config
  - `screens/` UI screens
  - `sharedComponents/` shared UI components
  - `utils/` helper utilities

## What to ask Codex

- "Where is the user auth flow implemented?" → `src/redux/auth.tsx`, `src/api/authApi.js`
- "Update the subscription hook" → `src/hooks/subscription.tsx`
- "Add a new screen to navigation" → `src/router/`

