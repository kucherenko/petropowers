# Reservoir Management Web Application — Design Spec

**Date:** 2026-04-06  
**Status:** Approved

---

## Overview

A single-page web application for browsing and visualizing synthetic oil & gas reservoir datasets served by the existing FastAPI backend at `examples/api/`. The app provides hierarchical drill-down navigation from reservoir list → reservoir overview → per-data-type views with 2D charts (uPlot) and 3D scenes (three.js).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Svelte 5 + Vite |
| UI components | shadcn-svelte |
| 2D charts | uPlot |
| 3D visualization | three.js |
| Routing | svelte-routing |
| CSV parsing | PapaParse |
| Dev proxy | Vite built-in proxy |
| Prod server | Node.js + Express + http-proxy-middleware |
| Language | TypeScript |

---

## Project Structure

```
examples/
└── webapp/
    ├── package.json
    ├── vite.config.ts             # /api/* → http://127.0.0.1:8000/*
    ├── svelte.config.js
    ├── server.cjs                 # prod: serves dist/ + proxies /api
    ├── src/
    │   ├── main.ts
    │   ├── App.svelte             # router root + auth guard
    │   ├── lib/
    │   │   ├── api.ts             # fetch wrapper with X-API-Key injection
    │   │   ├── stores.ts          # apiKey (localStorage), reservoirs list
    │   │   └── types.ts           # TypeScript types for API responses
    │   ├── pages/
    │   │   ├── Login.svelte
    │   │   ├── ReservoirList.svelte
    │   │   ├── ReservoirOverview.svelte
    │   │   ├── WellLogs.svelte
    │   │   ├── Production.svelte
    │   │   ├── WellPaths.svelte
    │   │   ├── Seismic.svelte
    │   │   ├── CorePhotos.svelte
    │   │   └── OsduManifests.svelte
    │   └── components/
    │       ├── WellLogChart.svelte
    │       ├── ProductionChart.svelte
    │       ├── WellPaths3D.svelte
    │       └── SeismicViewer.svelte
    └── dist/
```

---

## Proxy Setup

### Development

`vite.config.ts` proxies all `/api/*` requests to the FastAPI backend, stripping the `/api` prefix:

```ts
server: {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000',
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
}
```

### Production

`server.cjs` is a small Express server that:
1. Serves the Vite build output from `dist/` as static files
2. Proxies `/api/*` to the FastAPI backend using `http-proxy-middleware`
3. Falls back to `dist/index.html` for all other routes (SPA client-side routing support)

The FastAPI backend URL in production is configured via a `API_TARGET_URL` environment variable read by `server.cjs` at startup (defaults to `http://127.0.0.1:8000`). This is a Node process environment variable, not a Vite build-time variable.

---

## Authentication

### Flow

1. On app load, `App.svelte` reads `reservoir_api_key` from localStorage into the `apiKey` writable store
2. If the store is empty → redirect to `/login`
3. `Login.svelte` renders an API key input (shadcn `Input`) and a Connect button (shadcn `Button`)
4. On submit → `GET /api/health` with `X-API-Key: <entered_key>` header
5. Response 200 → write key to localStorage + `apiKey` store → navigate to `/`
6. Response 401 → display error message, stay on login page
7. A "Disconnect" button in the persistent nav bar clears localStorage and the store, redirects to `/login`

### Auth guard

All routes except `/login` are wrapped in a guard component in `App.svelte`. If `apiKey` store is empty when a protected route is accessed, the guard redirects to `/login` before rendering the page.

### Header injection

`lib/api.ts` reads `get(apiKey)` on every call and adds the header:
```ts
headers: { 'X-API-Key': get(apiKey) }
```
The Vite/Express proxy passes headers through unchanged — the FastAPI backend receives `X-API-Key` directly.

---

## Routing

Client-side routing via svelte-routing. The persistent top nav bar (shadcn) shows: **app name | breadcrumb | Disconnect**.

| Route | Page component |
|-------|---------------|
| `/login` | `Login.svelte` |
| `/` | `ReservoirList.svelte` |
| `/reservoirs/:name` | `ReservoirOverview.svelte` |
| `/reservoirs/:name/well_logs` | `WellLogs.svelte` |
| `/reservoirs/:name/production` | `Production.svelte` |
| `/reservoirs/:name/well_paths` | `WellPaths.svelte` |
| `/reservoirs/:name/seismic` | `Seismic.svelte` |
| `/reservoirs/:name/core_photos` | `CorePhotos.svelte` |
| `/reservoirs/:name/osdu_manifests` | `OsduManifests.svelte` |

---

## Data Layer

### `lib/api.ts`

Single `apiFetch(path, options?)` wrapper:
- Prepends `/api` to path
- Injects `X-API-Key` header from store
- Throws a typed error on non-2xx responses

Typed helpers:

```ts
getHealth()                           // → { status: string, reservoirs: string[] }
listReservoirs()                      // → string[]
getReservoir(name: string)            // → Record<string, number>
listFiles(name: string, dataType: string) // → string[]
downloadFileUrl(name, dataType, file) // → string  (URL for fetch)
imageUrl(name, dataType, file)        // → string  (URL for <img src>)
```

### `lib/stores.ts`

```ts
apiKey: Writable<string>      // persisted to localStorage under 'reservoir_api_key'
reservoirs: Writable<string[]> // populated on ReservoirList mount
```

No global per-reservoir cache. Each page fetches what it needs on `onMount` and holds data in local component state. This avoids stale data and keeps the store minimal.

### Per-page data loading

| Page | API calls on mount |
|------|--------------------|
| `ReservoirList` | `listReservoirs()` |
| `ReservoirOverview` | `getReservoir(name)` |
| `WellLogs` | `listFiles(name, 'well_logs')` → user picks well → fetch LAS text → parse in-browser |
| `Production` | `listFiles(name, 'production')` → user picks well → fetch CSV → PapaParse |
| `WellPaths` | `listFiles(name, 'well_paths')` → fetch all JSON trajectory files |
| `Seismic` | `downloadFileUrl` for single `.segy` → stream binary into three.js |
| `CorePhotos` | `listFiles(name, 'core_photos')` → `imageUrl()` per file for `<img>` |
| `OsduManifests` | `listFiles(name, 'osdu_manifests')` → user picks one → fetch JSON → collapsible tree |

### In-browser LAS parsing

A small parser (no external dependency) reads raw LAS 2.0 text:
1. Extracts the `~C` (curve) section to get curve names and units
2. Reads the `~A` (data) section as whitespace-delimited rows
3. Returns `{ depth: number[], curves: Record<string, number[]> }`

---

## Visualization Components

### `WellLogChart.svelte` (uPlot)

- Input: parsed LAS object with depth + curve arrays
- Renders one uPlot instance per curve (GR, RHOB, NPHI, RT, DT) laid out side-by-side
- All instances share a synced Y-axis (depth increases downward)
- shadcn checkboxes toggle curve visibility
- If core photos exist for the selected well, a depth-aligned photo strip is rendered alongside the log tracks using `imageUrl()` for each photo

### `ProductionChart.svelte` (uPlot)

- Input: PapaParse output from a production CSV
- Single uPlot instance with dual Y-axes: rates (oil, gas, water in m³/day) on left, pressure (bar) on right
- X-axis is time (parsed ISO dates → Unix timestamps for uPlot)
- shadcn toggle buttons select which series are shown
- Built-in uPlot cursor for cross-hair hover

### `WellPaths3D.svelte` (three.js)

- Creates a WebGL renderer and `OrbitControls` on `onMount`, disposes on `onDestroy`
- Each well path JSON (`md`, `tvd`, `inclination`, `azimuth` arrays) is converted to XYZ Cartesian coordinates and rendered as a `TubeGeometry`
- 50 wells color-coded by index using a categorical color palette
- Axes helper + grid on ground plane for spatial orientation
- Raycasting on pointer move → hover tooltip showing well name (shadcn `Tooltip`)

### `SeismicViewer.svelte` (three.js)

- Reads SEG-Y binary: parses the 3200-byte text header, 400-byte binary header, and per-trace headers (inline number, crossline number, delay recording time) plus IEEE float32 amplitude samples. The format assumption is IEEE float32 samples as written by segyio's default output — IBM float is not supported. Geometry is derived from the inline/crossline ranges in the binary header.
- Three `PlaneGeometry` slices (inline, crossline, time) each backed by a `DataTexture` mapping amplitude values to a grayscale colormap
- Three shadcn `Slider` components (one per axis) control which slice index is displayed; changing a slider updates the texture
- `OrbitControls` for 3D navigation
- Renderer and scene disposed on `onDestroy`

---

## Error Handling

- All `apiFetch` calls are wrapped in try/catch in each page; errors shown as shadcn `Alert` components
- 401 from any request (expired/invalid key) triggers a store clear + redirect to `/login`
- File not found (404) and server errors (500) show inline error messages, not full-page errors
- three.js components show a loading indicator while the SEG-Y or well path data is being fetched

---

## Pages in Detail

### `Login.svelte`
Centered card (shadcn `Card`) with an `Input` for the API key and a `Button`. On submit, calls `getHealth()`. Shows a spinner during validation. On success navigates to `/`. On failure shows an inline error.

### `ReservoirList.svelte`
Grid of shadcn `Card` components, one per reservoir. Each card shows reservoir name and file counts per data type (from `getReservoir()`). Clicking a card navigates to `/reservoirs/:name`.

### `ReservoirOverview.svelte`
Six shadcn stat cards (one per data type) showing file counts. Clicking a card navigates to the corresponding data type route. Breadcrumb in nav: **Home › ppr-1**.

### `WellLogs.svelte`
shadcn `Select` to pick a well from the file list. On selection fetches and parses the LAS file, then renders `WellLogChart`. To check core photo availability, `WellLogs` also calls `listFiles(name, 'core_photos')` on mount and checks whether any returned paths begin with the selected well name (e.g. `PPR1-Well-001/`). If matches exist, the photo strip is shown below the log.

### `Production.svelte`
shadcn `Select` for well selection. Fetches and parses CSV via PapaParse. Renders `ProductionChart` with series toggles.

### `WellPaths.svelte`
Fetches all 50 well path JSON files on mount (parallel fetch). Renders `WellPaths3D` canvas. Shows a loading progress indicator while files are being fetched.

### `Seismic.svelte`
Downloads the single SEG-Y file as an `ArrayBuffer`. Renders `SeismicViewer` with the three slice controls.

### `CorePhotos.svelte`
Lists all photos grouped by well name (from file paths like `PPR1-Well-001/photo_001.png`). Renders a grid of `<img>` tags using `imageUrl()`. Clicking a photo opens a shadcn `Dialog` with a full-size view.

### `OsduManifests.svelte`
shadcn `Select` to pick a manifest file. Fetches the JSON and renders it as a collapsible tree (recursive Svelte component). Shows key names and values with type-appropriate formatting.

---

## Development Workflow

```bash
# 1. Start the FastAPI backend (from repo root)
cd examples && uvicorn api.main:app --reload

# 2. Start the Svelte dev server (in a second terminal)
cd examples/webapp && npm install && npm run dev

# App available at http://localhost:5173
# Requests to /api/* proxied to http://127.0.0.1:8000
```

## Production Build

```bash
cd examples/webapp
npm run build          # outputs to dist/
node server.cjs        # serves dist/ + proxies /api
```

---

## Out of Scope

- Write operations (the FastAPI backend is read-only)
- User accounts or multi-user sessions
- Real-time data streaming
- OSDU manifest editing
- SEG-Y amplitude analysis beyond slice visualization
