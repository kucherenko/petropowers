# Reservoir Map — Isobars & Geometry Service Design

**Date:** 2026-04-06  
**Status:** Approved

## Problem

`ReservoirMap.svelte` currently renders wells as pressure-sized bubbles at fabricated hash-based positions. There are no spatial relationships between wells, no reservoir boundary, and no pressure contour zones. The result looks nothing like a real reservoir pressure map.

## Goal

Replace the synthetic coordinate system with a real geometry service, and upgrade the map visualization from isolated bubbles to a filled isobar contour map with a reservoir boundary overlay — matching the visual style of real isopach/structure contour maps used in reservoir engineering.

---

## Section 1: Data & API

### Data files

New directory: `data/ppr-1/geometry/`

| File | Content |
|------|---------|
| `wells.json` | Array of 50 objects `{name, x_m, y_m}` — surface locations for all PPR-1 wells |
| `boundary.json` | Array of ~20 objects `{x_m, y_m}` — polygon vertices defining the reservoir boundary |

**Coordinate system:** Local meters, origin at SW corner of the reservoir. Reservoir extent approximately 10 000 m (E–W) × 8 000 m (N–S). Well spacing 500–800 m with realistic cluster distribution. Boundary is a slightly irregular convex polygon (not a rectangle) to suggest a geological closure.

**Generation:** A Python script (`examples/scripts/generate_geometry.py`) produces both files with reproducible random seed so the layout is stable across re-runs. The `scripts/` directory sits alongside `api/`, `data/`, and `webapp/` at the `examples/` root.

### New API endpoint

**File:** `api/routes/geometry.py`  
**Registration:** added to `main.py` alongside existing routers.

```
GET /reservoirs/{reservoir}/geometry
```

**Pydantic response model:**

```python
class WellCoordinate(BaseModel):
    name: str
    x_m: float
    y_m: float

class BoundaryPoint(BaseModel):
    x_m: float
    y_m: float

class GeometryResponse(BaseModel):
    wells: list[WellCoordinate]
    boundary: list[BoundaryPoint]
```

**Error behaviour:**

| Condition | HTTP status |
|-----------|------------|
| Reservoir directory not found | 404 |
| `geometry/wells.json` missing | 404 |
| `geometry/boundary.json` missing | 404 |
| Path traversal attempt | 400 |

The endpoint reads both JSON files, validates them through the Pydantic models, and returns the combined response. Authentication follows the existing `verify_api_key` dependency.

---

## Section 2: Frontend Types & Data Fetching

### New types (`src/lib/types.ts`)

```ts
export interface WellCoordinate {
  name: string;
  x_m: number;
  y_m: number;
}

export interface ReservoirGeometry {
  wells: WellCoordinate[];
  boundary: { x_m: number; y_m: number }[];
}

export interface MappedWell {
  name: string;
  x_m: number;
  y_m: number;
  avgPressure: number;
}
```

### New function (`src/lib/api.ts`)

```ts
loadReservoirGeometry(reservoirId: string): Promise<ReservoirGeometry>
```

Fetches `GET /reservoirs/{reservoirId}/geometry` from the configured API base URL. Returns the typed response. Throws on non-200 or network error. Follows the same pattern as the existing `loadWellPressures`.

### Updated `src/lib/wellmap.ts`

- **Remove:** `computeWellPositions(wellNames)` — the hash-based coordinate fabricator.
- **Add:** `mergeGeometryAndPressure(geometry, pressures): MappedWell[]` — joins on `WellCoordinate.name === WellPressure.wellName`; returns only wells present in both datasets (inner join).
- **Add:** `interpolatePressure(x, y, wells, power?): number` — IDW interpolation (see Section 3).
- **Keep:** `pressureQuartileColor`, `pressureToRadius` — unchanged.

### Component props

`ReservoirMap.svelte` gains a new required prop:

```ts
geometry: ReservoirGeometry
```

alongside the existing `wellPressures` prop. Parent components (`ReservoirCard`, `WellMap`) are responsible for fetching geometry (via `loadReservoirGeometry`) and passing it down. This keeps `ReservoirMap` stateless and independently testable.

---

## Section 3: ReservoirMap Rendering

### Coordinate normalization

Before rendering, all coordinates (well positions and boundary vertices) are normalized from meters to SVG viewport units using the bounding box of the boundary polygon:

```
svgX = (x_m - minX) / (maxX - minX) * svgWidth
svgY = svgHeight - (y_m - minY) / (maxY - minY) * svgHeight   // Y-flip: north = up
```

### Layer stack (bottom to top)

| Layer | SVG element | Description |
|-------|------------|-------------|
| Contour fill | `<rect>` grid (40×40 cells) | Each cell colored by IDW-interpolated pressure |
| Clip mask | `<clipPath>` + `<polygon>` | Clips contour grid to reservoir boundary |
| Boundary outline | `<polygon>` | Reservoir boundary, dark grey stroke, no fill |
| Well markers | `<circle>` | Sized by `pressureToRadius`, white border |
| Axis labels | `<text>` | "East →", "North →" — unchanged |
| Tooltip | Svelte conditional block | Unchanged |

### IDW interpolation

Implemented as a pure function in `wellmap.ts`:

```ts
function interpolatePressure(
  x: number,
  y: number,
  wells: MappedWell[],
  power = 2
): number
```

Standard formula: `Σ(pᵢ / dᵢᵖ) / Σ(1 / dᵢᵖ)`. If the query point coincides exactly with a well (distance < 0.1 m), return that well's pressure directly to avoid division by zero.

**Performance:** 40×40 grid × 50 wells = 80 000 distance calculations per render cycle. Computed in a reactive `$derived` block; negligible at runtime. No canvas required.

### Color scale

The existing `pressureQuartileColor` function is used for both the contour fill cells and the well marker fill, ensuring visual consistency between the contour layer and the well overlay.

---

## Files Changed

| File | Change |
|------|--------|
| `data/ppr-1/geometry/wells.json` | **New** — 50 well surface coordinates |
| `data/ppr-1/geometry/boundary.json` | **New** — reservoir boundary polygon |
| `scripts/generate_geometry.py` | **New** — generation script (`examples/scripts/`) |
| `api/routes/geometry.py` | **New** — geometry endpoint |
| `api/main.py` | **Modified** — register geometry router |
| `webapp/src/lib/types.ts` | **Modified** — add `WellCoordinate`, `ReservoirGeometry`, `MappedWell` |
| `webapp/src/lib/api.ts` | **Modified** — add `loadReservoirGeometry` |
| `webapp/src/lib/wellmap.ts` | **Modified** — remove hash positions, add `mergeGeometryAndPressure`, `interpolatePressure` |
| `webapp/src/components/ReservoirMap.svelte` | **Modified** — contour layer, boundary, clip path, normalized coords |
| `webapp/src/components/ReservoirCard.svelte` | **Modified** — fetch + pass `geometry` prop |
| `webapp/src/pages/WellMap.svelte` | **Modified** — fetch + pass `geometry` prop |

---

## Testing

- Unit tests for `mergeGeometryAndPressure` (missing wells, empty inputs)
- Unit tests for `interpolatePressure` (exact well hit, midpoint between two wells)
- Unit test for `loadReservoirGeometry` (mock fetch, 404 error)
- API endpoint covered by FastAPI test client (200, 404 missing reservoir, 404 missing geometry files)
