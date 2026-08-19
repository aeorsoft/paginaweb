# Bulletproof Next.js 15 Template

This project showcases how to apply the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture to a modern **Next.js 15** app. It includes a feature-focused folder layout, reusable shared modules, and example UI patterns so you can start a production-grade project with confidence.

## Quick Start

1. Install dependencies (uses the package manager lockfile already in the repo):

   ```bash
   npm install
   ```

2. Copy the example environment file and adjust values if you plan to call a real backend:

   ```bash
   cp .env.example .env.local
   ```

   Environment variables are validated with `zod` in `src/config/env.ts`. The template works out of the box without configuring `NEXT_PUBLIC_API_URL`; requests fall back to the local `/api/tasks` route.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` to explore the demo homepage and the `/tasks` feature route.

When you're ready to deploy, run `npm run build` followed by `npm start`.

### Resetting the Template

Run `npm run reset:template` to archive the sample marketing page, tasks feature, and mock API handlers to `template-archive/<timestamp>`. The archive directory is git-ignored so you can reference the examples later without shipping them to production. A clean placeholder `src/app/page.tsx` is generated automatically so you can start fresh.

## Project Structure

All app code lives inside `src/` to keep the root tidy and match the Bulletproof guidelines.

```
src
├── app             # Next.js app router structure (layouts, routes, API handlers, providers)
├── components      # reusable UI building blocks shared across features
├── config          # application-wide configuration (env parsing, site metadata)
├── features        # feature modules composed of their own api/hooks/components/etc.
├── hooks           # cross-cutting custom hooks
├── lib             # framework-level utilities (theme, feature flags, data clients)
├── testing         # helpers used in unit or integration tests
├── types           # shared TypeScript definitions
└── utils           # primitive utilities (e.g., `cn` className helper)
```

Each feature gets its own folder so that UI, hooks, and API calls stay close together. The sample `tasks` feature demonstrates how to:

- expose a Next.js route handler in `app/api/tasks` to serve feature data
- share request logic through the Ky-based client in `src/lib/api-client.ts`
- encapsulate UI in `features/tasks/components` using the `{action}-{entity}` naming convention (`index-task-list.tsx`, `show-task-card.tsx`, etc.)
- consume data via React Query using helpers from `src/lib/react-query.ts`
- reuse utilities and types from the shared layers via the `@/` alias

## Architectural Highlights

- `src/app/layout.tsx` wires up shared layout chrome and global providers from `src/app/providers.tsx`.
- `AppProviders` wires up React Query with defaults from `src/lib/react-query.ts` alongside the feature flag context (`src/lib/feature-flags.tsx`) and theme manager (`src/lib/theme.tsx`).
- Shared navigation lives in `src/components/navigation`, while marketing copy sits in `src/components/marketing`.
- Feature-specific logic (see `src/features/tasks`) pulls from shared modules but never the other way around, keeping the dependency graph unidirectional.
- `src/testing/render-with-providers.tsx` illustrates how to render components with the application's providers from test suites.

Feel free to add ESLint `import/no-restricted-paths` rules (as suggested in the Bulletproof React docs) to enforce these boundaries in larger teams.

## Customisation Tips

- Duplicate the `tasks` feature folder when bootstrapping new domains; swap out the API layer and components as needed.
- Extend `src/config/site.ts` with brand-specific metadata and links. `layout.tsx` consumes this config automatically for page titles.
- Adjust global providers in `src/app/providers.tsx` to include things like data fetching clients, analytics, or auth.
- Replace the mock API route under `src/app/api/tasks/route.ts` with real backend calls. Point `NEXT_PUBLIC_API_URL` to your service when you are ready.
- Update `src/utils/cn.ts` or introduce additional utility helpers as your design system evolves.

## Reference

- [Bulletproof React documentation](https://raw.githubusercontent.com/alan2207/bulletproof-react/refs/heads/master/README.md)
- [Project structure guide](https://raw.githubusercontent.com/alan2207/bulletproof-react/refs/heads/master/docs/project-structure.md)

Those resources provide deeper explanations of the patterns mirrored in this template.
