# Reservoir Webapp — UI/UX Improvements Design Spec

**Date:** 2026-04-06  
**Status:** Approved  
**Builds on:** `2026-04-06-reservoir-webapp-design.md`

---

## Overview

Four targeted improvements to the existing Reservoir Management Web Application (`examples/webapp/`):

1. **Well Log Panel** — replace uPlot multi-track chart with a custom SVG-based traditional log view
2. **Reservoir Well Map** — new page showing all 50 wells on a synthetic pressure-coded grid
3. **Remove 3D pages** — delete WellPaths3D and SeismicViewer (three.js), simplify the app
4. **Core Photos with metadata** — show geological metadata overlay on hover

All changes are frontend-only. The FastAPI backend (`examples/api/`) is not modified.

---

## Improvement 1: Well Log Panel

### Goal

Replace the existing `WellLogChart.svelte` (uPlot-based) with a traditional petroleum-industry log panel view using a custom SVG renderer.

### Design

**New file:** `src/components/WellLogPanel.svelte`  
**Deleted:** `src/components/WellLogChart.svelte`  
**Updated:** `src/pages/WellLogs.svelte` — import `WellLogPanel` instead of `WellLogChart`

**Visual style:** Dark petroleum theme — `#0f1117` canvas background, colored curves on dark tracks.

**Layout:**

```
┌──────┬──────────┬────────────┬──────────┬──────────┐
│DEPTH │    GR    │  RHOB/NPHI │    RT    │    DT    │
│ (m)  │ 0—150API │ 1.7—2.9g/cc│0.2—2000Ω│140—40µs/ft│
│      ├──────────┼────────────┼──────────┼──────────┤
│ 1500 │ (curve)  │ (2 lines)  │  (curve) │  (curve) │
│  …   │          │            │          │          │
│ 3500 │          │            │          │          │
└──────┴──────────┴────────────┴──────────┴──────────┘
```

**Tracks:**

| Track | Curves | Scale | Fill |
|-------|--------|-------|------|
| GR | GR | 0–150 API (linear) | Left-fill (shale indicator, green at 30% opacity) |
| RHOB/NPHI | RHOB (solid blue), NPHI (dashed red) | 1.7–2.9 g/cc | None |
| RT | RT | 0.2–2000 Ω·m (log₁₀) | None |
| DT | DT | 140–40 µs/ft (reversed) | None |

**Depth axis:** Fixed ruler on the far left. Tick marks every 100 m with depth labels. Depth increases downward (top = shallow).

**Scrolling:** The panel container is vertically scrollable. All tracks and the depth ruler scroll together (single scroll container, `overflow-y: auto`). Track headers stick at the top (`position: sticky`).

**SVG approach:** Each track is a single `<svg>` element with a fixed `viewBox` matching the full depth range. The SVG scales to fill the track's column width. Depth-to-Y mapping is linear: `y = (depth - depthMin) / (depthMax - depthMin) * svgHeight`. RT uses `log10` for X mapping.

**Component interface:**

```ts
interface Props {
  data: LasData   // { depth: number[], curves: Record<string, number[]> }
}
```

No `visibleCurves` prop — all four tracks always shown. Curves missing from the LAS file render as empty tracks (no error).

---

## Improvement 2: Reservoir Well Map

### Goal

A new page showing all 50 wells positioned on a synthetic 2D grid, with bubbles sized and colored by average wellhead pressure.

### New files

- `src/components/ReservoirMap.svelte` — SVG map component
- `src/pages/WellMap.svelte` — page wrapper

### Route

`/reservoirs/:name/well_map`

### Navigation

`ReservoirOverview.svelte` updated: the **Well Paths** tile is replaced with a **Well Map** tile (same color slot — orange). The **Seismic** tile is removed entirely (see Improvement 3).

### Data loading

`WellMap.svelte` on mount:
1. `listFiles(name, 'production')` → get all 50 CSV filenames
2. Fetch all CSVs in parallel via `downloadFileUrl`
3. Parse each CSV with PapaParse (already a dependency)
4. Compute per-well average `wellhead_pressure_psi` across all rows
5. Pass `Array<{ wellName: string, avgPressure: number }>` to `ReservoirMap`

Well positions are computed purely from well name — no separate network requests for path data.

### Position algorithm

Well names are sorted alphabetically. Each well is assigned a grid position using a simple deterministic layout:

```ts
// Place wells in a grid with a small name-derived jitter for organic spread
const cols = Math.ceil(Math.sqrt(wells.length))  // ~8 for 50 wells
const row = Math.floor(i / cols)
const col = i % cols

// Deterministic jitter from well name — no extra network requests
function nameJitter(name: string): number {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return ((hash % 17) / 17 - 0.5) * 0.08   // ±0.04 normalized
}

const x = (col + 0.5) / cols + nameJitter(wellName + 'x')
const y = (row + 0.5) / rows + nameJitter(wellName + 'y')
```

Positions are fully deterministic from well names — no well path fetches needed for layout.

### Visual encoding

- **Bubble radius:** proportional to `avgPressure`, clamped to 6–18px
- **Bubble color:**
  - Bottom quartile: `#22c55e` (green)
  - Middle two quartiles: `#f59e0b` (amber)
  - Top quartile: `#ef4444` (red)
- **Background:** `#13161f` (dark)
- **Grid lines:** faint `#1e2330` lines every 20% of width/height
- **Axis labels:** "East →" bottom, "North →" left (rotated)
- **Disclaimer:** "Schematic — not geographic" in small muted text below the map

### Interaction

- **Hover:** tooltip showing well name + avg pressure in psi
- **Click:** `navigate('/reservoirs/:name/production')` — `WellMap` passes the clicked well name to `WellLogs` via URL query param `?well=<wellName>`. `Production.svelte` reads `?well` on mount and pre-selects that well in its dropdown.

### `ReservoirMap` component interface

```ts
interface WellDot {
  wellName: string
  avgPressure: number
  x: number   // normalized 0–1
  y: number   // normalized 0–1
}

interface Props {
  wells: WellDot[]
  reservoirName: string
  width?: number   // default 600
  height?: number  // default 400
}
```

---

## Improvement 3: Remove 3D Pages

### Files deleted

| File | Reason |
|------|--------|
| `src/components/WellPaths3D.svelte` | three.js well paths — removed |
| `src/pages/WellPaths.svelte` | page for above |
| `src/components/SeismicViewer.svelte` | three.js seismic cube — removed |
| `src/pages/Seismic.svelte` | page for above |

### Routes removed from `App.svelte`

- `/reservoirs/:name/well_paths`
- `/reservoirs/:name/seismic`

### `ReservoirOverview.svelte` changes

The `DATA_TYPES` array is updated:

| Before | After |
|--------|-------|
| Well Logs | Well Logs (unchanged) |
| Production | Production (unchanged) |
| Well Paths | **Well Map** (new — links to `/well_map`) |
| Seismic | **removed** |
| Core Photos | Core Photos (unchanged) |
| OSDU Manifests | OSDU Manifests (unchanged) |

### Dependency cleanup

After deleting SeismicViewer and WellPaths3D, check `package.json` for `three` and `@types/three`. If no other files import from `three`, remove both packages.

---

## Improvement 4: Core Photos with Metadata Overlay

### Goal

Show rich geological metadata alongside each photo without cluttering the grid.

### Data

Each photo has a sidecar metadata file at the same path with `_metadata.json` replacing the image extension:

```
PPR1-Well-001/PPR1-Well-001_depth_2021.9m.png
PPR1-Well-001/PPR1-Well-001_depth_2021.9m_metadata.json  ← sidecar
```

The sidecar path is derived client-side:
```ts
function metadataPath(photoPath: string): string {
  return photoPath.replace(/\.[^.]+$/, '_metadata.json')
}
```

Fetched via `downloadFileUrl(name, 'core_photos', metadataPath)`.

### Metadata fields displayed

| Field | Label | Format |
|-------|-------|--------|
| `depth_start` / `depth_end` | Depth | `2021.9 – 2022.9 m` |
| `lithology` | Lithology | capitalized string |
| `porosity` | Porosity | `29.9%` |
| `permeability` | Perm | `967.8 mD` |
| `grain_size` | Grain | string |
| `oil_staining` | Oil stain | `Yes` / `No` |
| `formation` | Formation | string |

Fields `latitude`, `longitude`, `image_path`, `sample_date`, `field_name`, `texture`, `color`, `fractures`, `bedding_angle` are fetched but not displayed in the overlay (kept in memory for possible future use).

### Interaction

**Hover:** A semi-transparent dark overlay (`rgba(0,0,0,0.82)`) fades in over the photo (CSS `transition: opacity 150ms`). The overlay contains a compact two-column metadata table. The photo itself dims slightly (`filter: brightness(0.6)`).

**Click:** Opens the existing lightbox `Dialog`, enhanced to show:
- Left: full-size image
- Right: full metadata panel (all displayed fields, plus `grain_size`, `texture`, `color`, `fractures`, `bedding_angle`)

### Loading strategy

Metadata is fetched **lazily on first hover** (not on page load). A `Map<string, CorePhotoMeta | 'loading' | 'error'>` store per photo tracks state. On hover: if not yet fetched, start fetch and show a spinner in the overlay. On success, cache the result — subsequent hovers on the same photo are instant.

### Updated `CorePhotos.svelte`

- `grouped()` derived remains the same
- Each `<img>` is wrapped in a `<div class="photo-wrapper">` that handles hover state and renders the overlay
- A new `CorePhotoCard.svelte` sub-component encapsulates the wrapper + overlay + metadata fetch logic per photo

---

## Routing Summary (after changes)

| Route | Page | Status |
|-------|------|--------|
| `/login` | `Login.svelte` | unchanged |
| `/` | `ReservoirList.svelte` | unchanged |
| `/reservoirs/:name` | `ReservoirOverview.svelte` | updated tiles |
| `/reservoirs/:name/well_logs` | `WellLogs.svelte` | updated component |
| `/reservoirs/:name/production` | `Production.svelte` | reads `?well` param |
| `/reservoirs/:name/well_map` | `WellMap.svelte` | **new** |
| `/reservoirs/:name/core_photos` | `CorePhotos.svelte` | updated |
| `/reservoirs/:name/osdu_manifests` | `OsduManifests.svelte` | unchanged |
| `/reservoirs/:name/well_paths` | — | **removed** |
| `/reservoirs/:name/seismic` | — | **removed** |

---

## Files Changed / Added / Deleted

### Added
- `src/components/WellLogPanel.svelte`
- `src/components/ReservoirMap.svelte`
- `src/components/CorePhotoCard.svelte`
- `src/pages/WellMap.svelte`

### Updated
- `src/pages/WellLogs.svelte` — use `WellLogPanel` instead of `WellLogChart`
- `src/pages/Production.svelte` — read `?well` query param on mount
- `src/pages/ReservoirOverview.svelte` — update tile list
- `src/pages/CorePhotos.svelte` — use `CorePhotoCard` per photo
- `src/App.svelte` — update routes
- `package.json` — remove `three` and `@types/three` if unused

### Deleted
- `src/components/WellLogChart.svelte`
- `src/components/WellPaths3D.svelte`
- `src/components/SeismicViewer.svelte`
- `src/pages/WellPaths.svelte`
- `src/pages/Seismic.svelte`

---

## Out of Scope

- Backend changes
- Write operations
- Real geographic coordinates for the well map
- Depth-track integration of core photos in the well log panel (already exists in `WellLogs.svelte`, unchanged)
- RHOB/NPHI crossover fill (highlight pay zones) — can be added later
