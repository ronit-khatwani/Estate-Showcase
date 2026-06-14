# EstateVista — Real Estate Platform

Premium Awwwards-level real estate discovery platform covering all property types: residential, commercial, plots/land, and industrial.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, served at `/api`)
- `pnpm --filter @workspace/real-estate run dev` — run the frontend (port 20263, served at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/scripts run seed` — seed DB with agents + 58 properties
- Required env: `DATABASE_URL`, `SESSION_SECRET`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Tailwind CSS v4 + Framer Motion + Leaflet
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/real-estate/src/` — React frontend
  - `pages/` — Home, Properties, PropertyDetail, MapView, Agents, About, Contact
  - `components/` — Navbar, Footer, PropertyCard, PropertySkeleton, StatCounter
  - `lib/utils.ts` — formatPrice, formatArea, typeLabel, statusLabel, typeColor
  - `index.css` — dark charcoal + gold/amber theme, Playfair Display + Inter fonts
- `artifacts/api-server/src/routes/` — Express routes (properties, agents, stats, search)
- `lib/db/src/schema/` — Drizzle schema (agentsTable, propertiesTable)
- `lib/api-spec/` — OpenAPI spec (source of truth for API contract)
- `lib/api-client-react/src/generated/api.ts` — generated React Query hooks
- `scripts/src/seed.ts` — seed data (6 agents, 58 properties across all types)

## Architecture decisions

- **Contract-first API**: OpenAPI spec in `lib/api-spec` drives codegen for both client hooks and Zod validation schemas.
- **Dark-only theme**: Single dark theme (charcoal `hsl(220,10%,8%)` + gold `hsl(43,74%,49%)`). No light/dark toggle needed.
- **Sharp radius**: `--radius: 0` — editorial feel, no rounded corners anywhere.
- **Map integration**: Leaflet via `react-leaflet` with dark CartoDB tiles and color-coded price markers by property type. Leaflet icon fix required (delete `_getIconUrl`, mergeOptions with CDN URLs).
- **Framer Motion for all animations**: Page transitions, scroll-triggered reveals, parallax hero, animated stat counters.

## Product

- **Home**: Parallax hero with live search/autocomplete, stats counters, category grid (4 types), featured properties, "Why Us" features, top cities, recent listings, CTA banner.
- **Properties**: Full filter/sort (type, status, city, price range, bedrooms), pagination (12/page), animated cards.
- **Category pages**: `/residential`, `/commercial`, `/plots`, `/industrial` — reuse Properties with `forcedType`.
- **Property Detail**: Multi-image gallery with thumbnails, key stats, description, amenities, OpenStreetMap iframe, agent sidebar with contact.
- **Map View**: Interactive Leaflet map with 58 property pins, color-coded by type, price labels, dark CartoDB tiles, type/status filters.
- **Agents**: Agent directory with photos, ratings, specializations, sales stats.
- **About**: Brand story, stat counters, core values.
- **Contact**: Inquiry form with success state.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Leaflet default icons must be fixed manually: `delete (L.Icon.Default.prototype as any)._getIconUrl; L.Icon.Default.mergeOptions({ iconUrl: "...", iconRetinaUrl: "...", shadowUrl: "..." })` — uses CDN URLs.
- `Properties.tsx` accepts optional `forcedType` prop — category pages pass this to pre-filter the listing.
- Generated API types have many optional fields (`boolean | undefined`). Always use `??` or `!!` when passing to child components expecting non-optional.
- The `AnimatePresence` in properties grid should use `mode="popLayout"` or no mode to avoid "multiple children in wait mode" warning.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
