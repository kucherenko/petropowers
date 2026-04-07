# Reservoir List — Card Redesign with Pressure Map Previews

**Date:** 2026-04-06  
**Status:** Approved

## Problem

The main page (`/`) shows a compact grid of small cards with just a reservoir name and data-count badges. There is no visual preview of what each reservoir looks like, and the "Reservoirs" heading wastes vertical space.

## Goal

1. Remove the "Reservoirs" page title.
2. Replace the small compact cards with big cards arranged 2-per-row.
3. Embed a pressure map preview (well bubbles coloured/sized by average wellhead pressure) in each card so the user can visually distinguish reservoirs at a glance before clicking through.

## Reference

The pressure map style is modelled on the existing `ReservoirMap` SVG component, which renders wells as coloured circles on a dark grid background:

- Green → low pressure (≤ Q1)
- Amber → mid pressure (Q1–Q3)
- Red → high pressure (≥ Q3)
- Bubble radius ∝ average pressure

## Architecture

### Shared data-loading utility

Extract the production-CSV parsing logic that currently lives in `WellMap.svelte` into a new exported function in `src/lib/api.ts`:

```ts
export interface WellPressure {
  wellName: string
  avgPressure: number
}

export async function loadWellPressures(name: string): Promise<WellPressure[]>
```

Implementation:
1. Call `listFiles(name, 'production')` to get the list of CSV filenames.
2. Fetch each CSV via `downloadFileUrl`, parse with PapaParse, compute average `wellhead_pressure_psi`.
3. Derive `wellName` from filename (`PPR1-Well-001_production.csv` → `PPR1-Well-001`).
4. Return only wells with valid pressure data.

This removes duplication: `WellMap.svelte` will call the new utility instead of inlining the same logic.

### ReservoirList page

**File:** `src/pages/ReservoirList.svelte`

Changes:
- Remove `<h1 class="text-2xl font-bold mb-6">Reservoirs</h1>`.
- Widen container from `max-w-4xl` to `max-w-6xl`.
- Change grid from `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` to `grid-cols-1 lg:grid-cols-2`.
- Each item now loads its own well pressure data via `loadWellPressures(name)` after the main reservoir list is fetched (parallel, non-blocking).
- Each card is a `ReservoirCard` component (new, see below).

### New component: ReservoirCard

**File:** `src/components/ReservoirCard.svelte`

Props:
```ts
interface Props {
  name: string
  summary: ReservoirSummary
  onclick: () => void
}
```

Internal state:
- `wells: WellPressure[]` — loaded async after mount
- `mapLoading: boolean` — true while fetching well pressures
- `mapError: string` — non-empty if fetch fails

Layout (top-to-bottom):
1. **Map area** (full card width, fixed height ~220px):
   - While loading: dark placeholder with a centred `Spinner`.
   - On error or no wells: dark placeholder with text "No well data".
   - On success: `<ReservoirMap {wells} reservoirName={name} width={…} height={220} />` — width is responsive, derived from the card's rendered width via a `bind:clientWidth` div.
2. **Info section** (padding 16px):
   - Reservoir name (semibold, ~16px).
   - Badges for each data type / count (reuse existing `Badge` component).

The entire card is a `<button>` (or wraps a `<button>`) so it is keyboard-accessible and triggers navigation on click.

### WellMap page cleanup

**File:** `src/pages/WellMap.svelte`

Replace the inline CSV-loading logic with a call to `loadWellPressures(name)`. No visual changes.

## Data Flow

```
ReservoirList mounts
  → listReservoirs()          → string[]
  → getReservoir(name) × N    → ReservoirSummary[]
  → render N ReservoirCard components

ReservoirCard mounts
  → loadWellPressures(name)   → WellPressure[]
  → render ReservoirMap (or placeholder)
```

All well-pressure fetches are parallel and independent. A slow reservoir does not block others.

## Error handling

- If `listReservoirs` or `getReservoir` fails: existing `Alert` behaviour is preserved.
- If `loadWellPressures` fails for a card: the map area shows "No well data" and the card remains functional (user can still click through).

## No backend changes required

All data comes from existing API endpoints (`/reservoirs/:name/production`). No new server routes needed.

## Files changed

| File | Change |
|---|---|
| `src/lib/api.ts` | Add `loadWellPressures` + `WellPressure` type |
| `src/lib/types.ts` | No change (WellPressure lives in api.ts) |
| `src/pages/ReservoirList.svelte` | Remove title, widen, change grid, use ReservoirCard |
| `src/components/ReservoirCard.svelte` | New component |
| `src/pages/WellMap.svelte` | Replace inline CSV logic with `loadWellPressures` |
