# Reservoir Map Isobars & Geometry Service Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hash-based synthetic well positions in `ReservoirMap.svelte` with a real geometry service backed by static JSON data, and upgrade the visualization from isolated pressure bubbles to an IDW-interpolated filled isobar contour map with a reservoir boundary overlay.

**Architecture:** A new `GET /reservoirs/{reservoir}/geometry` FastAPI endpoint reads `data/{reservoir}/geometry/wells.json` and `data/{reservoir}/geometry/boundary.json` and returns typed Pydantic models. The frontend fetches this geometry in parent components and passes it down as a prop to the stateless `ReservoirMap` component, which renders a 40×40 grid of IDW-interpolated pressure cells clipped to the boundary polygon, with well markers on top.

**Tech Stack:** Python 3.11 + FastAPI + Pydantic v2, pytest + httpx (API tests), TypeScript + Svelte 5 runes, Vitest (frontend unit tests)

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `examples/scripts/generate_geometry.py` | **Create** | One-shot script to generate `wells.json` and `boundary.json` with reproducible seed |
| `examples/data/ppr-1/geometry/wells.json` | **Create** | 50 `{name, x_m, y_m}` surface coordinates |
| `examples/data/ppr-1/geometry/boundary.json` | **Create** | ~20 `{x_m, y_m}` reservoir boundary polygon vertices |
| `examples/api/routes/geometry.py` | **Create** | `GET /reservoirs/{reservoir}/geometry` endpoint |
| `examples/api/main.py` | **Modify** | Register geometry router |
| `examples/api/tests/test_geometry.py` | **Create** | FastAPI test client tests for the geometry endpoint |
| `webapp/src/lib/types.ts` | **Modify** | Add `WellCoordinate`, `ReservoirGeometry`, `MappedWell` |
| `webapp/src/lib/api.ts` | **Modify** | Add `loadReservoirGeometry` function |
| `webapp/src/lib/wellmap.ts` | **Modify** | Remove `computeWellPositions`/`nameJitter`; add `mergeGeometryAndPressure`, `interpolatePressure` |
| `webapp/src/test/wellmap.test.ts` | **Modify** | Remove old tests; add tests for new functions |
| `webapp/src/test/api.test.ts` | **Modify** | Add `loadReservoirGeometry` tests |
| `webapp/src/components/ReservoirMap.svelte` | **Modify** | Add contour fill layer, boundary clip, real coordinate normalization |
| `webapp/src/components/ReservoirCard.svelte` | **Modify** | Fetch geometry and pass as prop |
| `webapp/src/pages/WellMap.svelte` | **Modify** | Fetch geometry and pass as prop |

---

## Task 1: Generate geometry data files

**Files:**
- Create: `examples/scripts/generate_geometry.py`
- Create: `examples/data/ppr-1/geometry/wells.json`
- Create: `examples/data/ppr-1/geometry/boundary.json`

This task has no tests — it's a data generation script. Run it and verify output manually.

- [ ] **Step 1: Create the scripts directory**

```bash
mkdir -p examples/scripts
mkdir -p examples/data/ppr-1/geometry
```

- [ ] **Step 2: Write `generate_geometry.py`**

Create `examples/scripts/generate_geometry.py`:

```python
"""Generate synthetic well surface coordinates and reservoir boundary polygon.

Usage:
    python scripts/generate_geometry.py

Writes:
    data/ppr-1/geometry/wells.json
    data/ppr-1/geometry/boundary.json
"""

from __future__ import annotations

import json
import math
import random
from pathlib import Path

SEED = 42
N_WELLS = 50
EXTENT_X = 10_000  # metres east
EXTENT_Y = 8_000   # metres north
WELL_NAMES = [f"PPR1-Well-{i:03d}" for i in range(1, N_WELLS + 1)]

OUT_DIR = Path(__file__).parent.parent / "data" / "ppr-1" / "geometry"


def _cluster_points(rng: random.Random) -> list[tuple[float, float]]:
    """Return 50 (x, y) surface locations with realistic cluster distribution."""
    # 4 cluster centres scattered across the reservoir
    centres = [
        (EXTENT_X * 0.25, EXTENT_Y * 0.30),
        (EXTENT_X * 0.65, EXTENT_Y * 0.25),
        (EXTENT_X * 0.40, EXTENT_Y * 0.70),
        (EXTENT_X * 0.75, EXTENT_Y * 0.65),
    ]
    cluster_sizes = [14, 13, 12, 11]  # = 50 total
    points: list[tuple[float, float]] = []
    for (cx, cy), size in zip(centres, cluster_sizes):
        for _ in range(size):
            # spacing 500–800 m with gaussian scatter
            x = cx + rng.gauss(0, 700)
            y = cy + rng.gauss(0, 600)
            x = max(500.0, min(EXTENT_X - 500.0, x))
            y = max(400.0, min(EXTENT_Y - 400.0, y))
            points.append((x, y))
    return points


def _boundary_polygon() -> list[dict[str, float]]:
    """Return ~20 vertices for a slightly irregular convex polygon."""
    rng = random.Random(SEED + 1)
    cx, cy = EXTENT_X / 2, EXTENT_Y / 2
    # Radii approximate: 5400 m E-W, 4200 m N-S
    rx, ry = 4800, 3700
    n = 20
    vertices: list[dict[str, float]] = []
    for i in range(n):
        angle = 2 * math.pi * i / n
        # Add small per-vertex perturbation for organic look
        jitter_r = rng.uniform(0.88, 1.08)
        x = cx + rx * math.cos(angle) * jitter_r
        y = cy + ry * math.sin(angle) * jitter_r
        # Clamp to reasonable bounds
        x = max(100.0, min(EXTENT_X - 100.0, x))
        y = max(100.0, min(EXTENT_Y - 100.0, y))
        vertices.append({"x_m": round(x, 1), "y_m": round(y, 1)})
    return vertices


def main() -> None:
    rng = random.Random(SEED)
    raw_points = _cluster_points(rng)

    wells = [
        {"name": name, "x_m": round(x, 1), "y_m": round(y, 1)}
        for name, (x, y) in zip(WELL_NAMES, raw_points)
    ]
    boundary = _boundary_polygon()

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    wells_path = OUT_DIR / "wells.json"
    boundary_path = OUT_DIR / "boundary.json"

    wells_path.write_text(json.dumps(wells, indent=2))
    boundary_path.write_text(json.dumps(boundary, indent=2))

    print(f"Wrote {len(wells)} wells  → {wells_path}")
    print(f"Wrote {len(boundary)} boundary vertices → {boundary_path}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 3: Run the script from the `examples/` directory**

```bash
cd examples
python scripts/generate_geometry.py
```

Expected output:
```
Wrote 50 wells  → .../data/ppr-1/geometry/wells.json
Wrote 20 boundary vertices → .../data/ppr-1/geometry/boundary.json
```

- [ ] **Step 4: Verify output files look sane**

```bash
python -c "
import json
wells = json.loads(open('data/ppr-1/geometry/wells.json').read())
boundary = json.loads(open('data/ppr-1/geometry/boundary.json').read())
print(f'Wells: {len(wells)}, first: {wells[0]}')
print(f'Boundary: {len(boundary)}, first: {boundary[0]}')
assert len(wells) == 50
assert len(boundary) == 20
assert all(k in wells[0] for k in ('name','x_m','y_m'))
assert all(k in boundary[0] for k in ('x_m','y_m'))
print('OK')
"
```

Expected: `Wells: 50`, `Boundary: 20`, `OK`.

- [ ] **Step 5: Commit**

```bash
git add examples/scripts/generate_geometry.py examples/data/ppr-1/geometry/
git commit -m "feat: add geometry data files and generation script for PPR-1"
```

---

## Task 2: Geometry API endpoint

**Files:**
- Create: `examples/api/routes/geometry.py`
- Modify: `examples/api/main.py`
- Create: `examples/api/tests/__init__.py` (if not present)
- Create: `examples/api/tests/test_geometry.py`

- [ ] **Step 1: Write the failing tests**

Create `examples/api/tests/__init__.py` (empty) if the directory doesn't exist:

```bash
mkdir -p examples/api/tests
touch examples/api/tests/__init__.py
```

Create `examples/api/tests/test_geometry.py`:

```python
"""Tests for GET /reservoirs/{reservoir}/geometry."""
import json
import os
import tempfile
from pathlib import Path

import pytest
from fastapi.testclient import TestClient


@pytest.fixture()
def data_dir(tmp_path: Path) -> Path:
    """Create a minimal data directory with geometry files for ppr-1."""
    geo_dir = tmp_path / "ppr-1" / "geometry"
    geo_dir.mkdir(parents=True)

    wells = [{"name": f"PPR1-Well-{i:03d}", "x_m": float(i * 100), "y_m": float(i * 80)}
             for i in range(1, 4)]
    boundary = [{"x_m": 0.0, "y_m": 0.0}, {"x_m": 500.0, "y_m": 0.0},
                {"x_m": 500.0, "y_m": 400.0}, {"x_m": 0.0, "y_m": 400.0}]

    (geo_dir / "wells.json").write_text(json.dumps(wells))
    (geo_dir / "boundary.json").write_text(json.dumps(boundary))
    return tmp_path


@pytest.fixture()
def client(data_dir: Path, monkeypatch: pytest.MonkeyPatch) -> TestClient:
    """Return a TestClient with DATA_DIR pointing to the temp fixture."""
    monkeypatch.setenv("DATA_DIR", str(data_dir))
    # Re-import app after env is set so config picks up the new DATA_DIR
    import importlib
    import api.config as cfg
    importlib.reload(cfg)
    import api.main as app_module
    importlib.reload(app_module)
    return TestClient(app_module.app)


def test_geometry_200(client: TestClient) -> None:
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 200
    body = r.json()
    assert "wells" in body
    assert "boundary" in body
    assert len(body["wells"]) == 3
    assert body["wells"][0] == {"name": "PPR1-Well-001", "x_m": 100.0, "y_m": 80.0}
    assert len(body["boundary"]) == 4


def test_geometry_404_unknown_reservoir(client: TestClient) -> None:
    r = client.get("/reservoirs/does-not-exist/geometry")
    assert r.status_code == 404


def test_geometry_404_missing_wells_file(client: TestClient, data_dir: Path) -> None:
    (data_dir / "ppr-1" / "geometry" / "wells.json").unlink()
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 404


def test_geometry_404_missing_boundary_file(client: TestClient, data_dir: Path) -> None:
    (data_dir / "ppr-1" / "geometry" / "boundary.json").unlink()
    r = client.get("/reservoirs/ppr-1/geometry")
    assert r.status_code == 404


def test_geometry_400_path_traversal(client: TestClient) -> None:
    r = client.get("/reservoirs/../etc/geometry")
    # FastAPI will either 400 or 404 — either is acceptable; must not be 200
    assert r.status_code in (400, 404)
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd examples
python -m pytest api/tests/test_geometry.py -v
```

Expected: all 5 tests fail with `ModuleNotFoundError` or `404` because the route doesn't exist yet.

- [ ] **Step 3: Write `api/routes/geometry.py`**

```python
"""Geometry route: surface well coordinates and reservoir boundary polygon."""
from pathlib import Path
import json

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from .. import config
from ..auth import verify_api_key

router = APIRouter(dependencies=[Depends(verify_api_key)])


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


def _get_reservoir_dir(reservoir: str) -> Path:
    """Return reservoir directory or raise 400/404."""
    data_dir = config.DATA_DIR
    rd = (data_dir / reservoir).resolve()
    try:
        rd.relative_to(data_dir.resolve())
    except ValueError:
        raise HTTPException(status_code=400, detail="Path traversal detected")
    if not rd.is_dir():
        raise HTTPException(status_code=404, detail=f"Reservoir '{reservoir}' not found")
    return rd


@router.get(
    "/reservoirs/{reservoir}/geometry",
    response_model=GeometryResponse,
    tags=["geometry"],
    summary="Reservoir geometry",
    description=(
        "Returns surface coordinates for all wells in the reservoir "
        "and the boundary polygon vertices."
    ),
)
def get_geometry(reservoir: str) -> GeometryResponse:
    rd = _get_reservoir_dir(reservoir)
    geo_dir = rd / "geometry"

    wells_path = geo_dir / "wells.json"
    boundary_path = geo_dir / "boundary.json"

    if not wells_path.is_file():
        raise HTTPException(status_code=404, detail="geometry/wells.json not found")
    if not boundary_path.is_file():
        raise HTTPException(status_code=404, detail="geometry/boundary.json not found")

    wells_data = json.loads(wells_path.read_text())
    boundary_data = json.loads(boundary_path.read_text())

    return GeometryResponse(
        wells=[WellCoordinate(**w) for w in wells_data],
        boundary=[BoundaryPoint(**b) for b in boundary_data],
    )
```

- [ ] **Step 4: Register the geometry router in `main.py`**

Edit `examples/api/main.py`. Add after the existing imports and before `app = FastAPI(...)`:

```python
from .routes.geometry import router as geometry_router
```

And after the existing `app.include_router` calls:

```python
app.include_router(geometry_router)
```

The relevant section of `main.py` should look like:

```python
from .routes.catalogue import router as catalogue_router
from .routes.download import router as download_router
from .routes.geometry import router as geometry_router

app = FastAPI(...)

app.include_router(catalogue_router)
app.include_router(download_router)
app.include_router(geometry_router)
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
cd examples
python -m pytest api/tests/test_geometry.py -v
```

Expected: all 5 tests pass.

- [ ] **Step 6: Commit**

```bash
git add examples/api/routes/geometry.py examples/api/main.py examples/api/tests/
git commit -m "feat: add GET /reservoirs/{reservoir}/geometry endpoint"
```

---

## Task 3: Frontend types

**Files:**
- Modify: `webapp/src/lib/types.ts`

- [ ] **Step 1: Add new types to `types.ts`**

Append to the end of `webapp/src/lib/types.ts`:

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

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd examples/webapp
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add webapp/src/lib/types.ts
git commit -m "feat: add WellCoordinate, ReservoirGeometry, MappedWell types"
```

---

## Task 4: `loadReservoirGeometry` in api.ts + tests

**Files:**
- Modify: `webapp/src/lib/api.ts`
- Modify: `webapp/src/test/api.test.ts`

- [ ] **Step 1: Write the failing test**

Add to `webapp/src/test/api.test.ts` (at the end of the file):

```ts
describe('loadReservoirGeometry', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('returns parsed geometry for a valid reservoir', async () => {
    const body = {
      wells: [{ name: 'PPR1-Well-001', x_m: 1234.5, y_m: 5678.9 }],
      boundary: [{ x_m: 0, y_m: 0 }, { x_m: 10000, y_m: 8000 }],
    }
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify(body), { status: 200 })
    )
    const { loadReservoirGeometry } = await import('../lib/api')
    const result = await loadReservoirGeometry('ppr-1')
    expect(result.wells).toHaveLength(1)
    expect(result.wells[0].name).toBe('PPR1-Well-001')
    expect(result.wells[0].x_m).toBe(1234.5)
    expect(result.boundary).toHaveLength(2)
  })

  it('throws on 404', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response('Not Found', { status: 404 })
    )
    const { loadReservoirGeometry } = await import('../lib/api')
    await expect(loadReservoirGeometry('no-such-reservoir')).rejects.toThrow('404')
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd examples/webapp
npx vitest run src/test/api.test.ts
```

Expected: the 2 new tests fail with `loadReservoirGeometry is not a function`.

- [ ] **Step 3: Add `loadReservoirGeometry` to `api.ts`**

Add the following import at the top of `webapp/src/lib/api.ts` (alongside existing type imports):

```ts
import type { ReservoirGeometry } from './types'
```

Then append to the end of `api.ts`:

```ts
export async function loadReservoirGeometry(reservoirId: string): Promise<ReservoirGeometry> {
  const r = await apiFetch(`/reservoirs/${encodeURIComponent(reservoirId)}/geometry`)
  return r.json()
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd examples/webapp
npx vitest run src/test/api.test.ts
```

Expected: all tests including the 2 new ones pass.

- [ ] **Step 5: Commit**

```bash
git add webapp/src/lib/api.ts webapp/src/test/api.test.ts
git commit -m "feat: add loadReservoirGeometry to api.ts"
```

---

## Task 5: Update `wellmap.ts` — remove old functions, add new ones

**Files:**
- Modify: `webapp/src/lib/wellmap.ts`
- Modify: `webapp/src/test/wellmap.test.ts`

- [ ] **Step 1: Write the new tests (and remove old ones that will break)**

Replace the entire contents of `webapp/src/test/wellmap.test.ts` with:

```ts
import { describe, it, expect } from 'vitest'
import type { ReservoirGeometry, MappedWell } from '../lib/types'
import type { WellPressure } from '../lib/api'

describe('mergeGeometryAndPressure', () => {
  it('inner-joins wells present in both datasets', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = {
      wells: [
        { name: 'Well-001', x_m: 1000, y_m: 2000 },
        { name: 'Well-002', x_m: 3000, y_m: 4000 },
        { name: 'Well-003', x_m: 5000, y_m: 6000 },
      ],
      boundary: [],
    }
    const pressures: WellPressure[] = [
      { wellName: 'Well-001', avgPressure: 1500 },
      { wellName: 'Well-002', avgPressure: 2000 },
      // Well-003 intentionally missing from pressures
    ]
    const result = mergeGeometryAndPressure(geometry, pressures)
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ name: 'Well-001', x_m: 1000, y_m: 2000, avgPressure: 1500 })
    expect(result[1]).toEqual({ name: 'Well-002', x_m: 3000, y_m: 4000, avgPressure: 2000 })
  })

  it('returns empty array when pressures is empty', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = {
      wells: [{ name: 'Well-001', x_m: 1000, y_m: 2000 }],
      boundary: [],
    }
    expect(mergeGeometryAndPressure(geometry, [])).toHaveLength(0)
  })

  it('returns empty array when geometry has no wells', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = { wells: [], boundary: [] }
    const pressures: WellPressure[] = [{ wellName: 'Well-001', avgPressure: 1500 }]
    expect(mergeGeometryAndPressure(geometry, pressures)).toHaveLength(0)
  })
})

describe('interpolatePressure', () => {
  const wells: MappedWell[] = [
    { name: 'W1', x_m: 0, y_m: 0, avgPressure: 1000 },
    { name: 'W2', x_m: 1000, y_m: 0, avgPressure: 2000 },
  ]

  it('returns exact well pressure when query coincides with a well', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    expect(interpolatePressure(0, 0, wells)).toBe(1000)
    expect(interpolatePressure(1000, 0, wells)).toBe(2000)
  })

  it('returns midpoint pressure equidistant between two wells', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    // At x=500, y=0 both wells are equidistant → average
    const result = interpolatePressure(500, 0, wells)
    expect(result).toBeCloseTo(1500, 0)
  })

  it('biases toward closer well with power=2', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    // At x=200 (closer to W1), result should be closer to 1000 than to 2000
    const result = interpolatePressure(200, 0, wells)
    expect(result).toBeLessThan(1500)
    expect(result).toBeGreaterThan(1000)
  })
})

describe('pressureQuartileColor', () => {
  it('bottom quartile is green', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(100, [100, 200, 300, 400])).toBe('#22c55e')
  })

  it('top quartile is red', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(400, [100, 200, 300, 400])).toBe('#ef4444')
  })

  it('middle values are amber', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(250, [100, 200, 300, 400])).toBe('#f59e0b')
  })
})

describe('pressureToRadius', () => {
  it('maps min pressure to 6', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(100, 100, 400)).toBe(6)
  })

  it('maps max pressure to 18', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(400, 100, 400)).toBe(18)
  })

  it('clamps values below min', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(0, 100, 400)).toBe(6)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd examples/webapp
npx vitest run src/test/wellmap.test.ts
```

Expected: `mergeGeometryAndPressure` and `interpolatePressure` tests fail as those functions don't exist yet. The `pressureQuartileColor` and `pressureToRadius` tests should still pass.

- [ ] **Step 3: Replace `wellmap.ts`**

Replace the entire contents of `webapp/src/lib/wellmap.ts` with:

```ts
import type { ReservoirGeometry, MappedWell } from './types'
import type { WellPressure } from './api'

/**
 * Inner-join geometry and pressure data on well name.
 * Only wells present in both datasets are returned.
 */
export function mergeGeometryAndPressure(
  geometry: ReservoirGeometry,
  pressures: WellPressure[]
): MappedWell[] {
  const pressureMap = new Map(pressures.map(p => [p.wellName, p.avgPressure]))
  return geometry.wells
    .filter(w => pressureMap.has(w.name))
    .map(w => ({
      name: w.name,
      x_m: w.x_m,
      y_m: w.y_m,
      avgPressure: pressureMap.get(w.name)!,
    }))
}

/**
 * Inverse-distance weighting interpolation.
 * Returns the pressure at (x, y) weighted by distance^power to each well.
 * If the query point is within 0.1 m of a well, returns that well's pressure directly.
 */
export function interpolatePressure(
  x: number,
  y: number,
  wells: MappedWell[],
  power = 2
): number {
  for (const w of wells) {
    const d = Math.sqrt((x - w.x_m) ** 2 + (y - w.y_m) ** 2)
    if (d < 0.1) return w.avgPressure
  }
  let num = 0
  let den = 0
  for (const w of wells) {
    const d = Math.sqrt((x - w.x_m) ** 2 + (y - w.y_m) ** 2)
    const w_i = 1 / d ** power
    num += w_i * w.avgPressure
    den += w_i
  }
  return den === 0 ? 0 : num / den
}

/** Return hex color for a pressure value based on quartile across all pressures. */
export function pressureQuartileColor(pressure: number, allPressures: number[]): string {
  const sorted = [...allPressures].sort((a, b) => a - b)
  const q1 = sorted[Math.floor(sorted.length * 0.25)]
  const q3 = sorted[Math.floor(sorted.length * 0.75)]
  if (pressure <= q1) return '#22c55e'
  if (pressure >= q3) return '#ef4444'
  return '#f59e0b'
}

/** Map a pressure value to a bubble radius (6–18 px), clamped. */
export function pressureToRadius(pressure: number, minP: number, maxP: number): number {
  const t = maxP === minP ? 0 : (pressure - minP) / (maxP - minP)
  return Math.round(6 + Math.max(0, Math.min(1, t)) * 12)
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd examples/webapp
npx vitest run src/test/wellmap.test.ts
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add webapp/src/lib/wellmap.ts webapp/src/test/wellmap.test.ts
git commit -m "feat: replace computeWellPositions with mergeGeometryAndPressure and interpolatePressure"
```

---

## Task 6: Update `ReservoirMap.svelte` — contour fill, boundary, real coords

**Files:**
- Modify: `webapp/src/components/ReservoirMap.svelte`

No new unit tests for the component itself (Svelte component rendering tests are out of scope). The visual result is verified manually.

- [ ] **Step 1: Replace `ReservoirMap.svelte`**

Replace the entire file with:

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { mergeGeometryAndPressure, interpolatePressure, pressureQuartileColor, pressureToRadius } from '../lib/wellmap'
  import type { ReservoirGeometry } from '../lib/types'
  import type { WellPressure } from '../lib/api'

  interface Props {
    wells: WellPressure[]
    geometry: ReservoirGeometry
    reservoirName: string
    width?: number
    height?: number
  }

  let { wells, geometry, reservoirName, width = 600, height = 400 }: Props = $props()

  // --- Coordinate normalisation ---
  const bndX = $derived(geometry.boundary.map(p => p.x_m))
  const bndY = $derived(geometry.boundary.map(p => p.y_m))
  const minX = $derived(bndX.length ? Math.min(...bndX) : 0)
  const maxX = $derived(bndX.length ? Math.max(...bndX) : 10_000)
  const minY = $derived(bndY.length ? Math.min(...bndY) : 0)
  const maxY = $derived(bndY.length ? Math.max(...bndY) : 8_000)

  function toSvgX(x_m: number): number {
    return (x_m - minX) / (maxX - minX) * width
  }
  function toSvgY(y_m: number): number {
    // Y-flip: higher y_m = north = top of SVG
    return height - (y_m - minY) / (maxY - minY) * height
  }

  // --- Merged well data ---
  const mappedWells = $derived(mergeGeometryAndPressure(geometry, wells))
  const allPressures = $derived(mappedWells.map(w => w.avgPressure))
  const minP = $derived(allPressures.length ? Math.min(...allPressures) : 0)
  const maxP = $derived(allPressures.length ? Math.max(...allPressures) : 1)

  // --- Contour grid (40×40) ---
  const GRID = 40
  interface GridCell { x: number; y: number; w: number; h: number; color: string }
  const gridCells = $derived((): GridCell[] => {
    if (mappedWells.length === 0) return []
    const cellW = width / GRID
    const cellH = height / GRID
    const cells: GridCell[] = []
    for (let row = 0; row < GRID; row++) {
      for (let col = 0; col < GRID; col++) {
        const svgCx = (col + 0.5) * cellW
        const svgCy = (row + 0.5) * cellH
        // Convert SVG centre back to metres for IDW
        const x_m = svgCx / width * (maxX - minX) + minX
        const y_m = (height - svgCy) / height * (maxY - minY) + minY
        const p = interpolatePressure(x_m, y_m, mappedWells)
        cells.push({
          x: col * cellW,
          y: row * cellH,
          w: cellW,
          h: cellH,
          color: pressureQuartileColor(p, allPressures),
        })
      }
    }
    return cells
  })

  // --- Boundary polygon points for SVG ---
  const boundaryPoints = $derived(
    geometry.boundary.map(p => `${toSvgX(p.x_m)},${toSvgY(p.y_m)}`).join(' ')
  )

  // --- Well dots ---
  interface DotProps {
    wellName: string
    cx: number
    cy: number
    r: number
    color: string
    avgPressure: number
  }
  const dots = $derived(
    mappedWells.map(w => ({
      wellName: w.name,
      cx: toSvgX(w.x_m),
      cy: toSvgY(w.y_m),
      r: pressureToRadius(w.avgPressure, minP, maxP),
      color: pressureQuartileColor(w.avgPressure, allPressures),
      avgPressure: w.avgPressure,
    } satisfies DotProps))
  )

  let hoveredWell: DotProps | null = $state(null)

  function handleClick(dot: DotProps) {
    const wellFile = `${dot.wellName}_production.csv`
    navigate(`/reservoirs/${reservoirName}/production?well=${encodeURIComponent(wellFile)}`)
  }
</script>

<div class="reservoir-map-wrap">
  <svg
    {width}
    {height}
    viewBox="0 0 {width} {height}"
    style="background:#13161f; border-radius:8px; border:1px solid #2a3040; display:block;"
  >
    <defs>
      <clipPath id="boundary-clip-{reservoirName}">
        <polygon points={boundaryPoints} />
      </clipPath>
    </defs>

    <!-- Contour fill (clipped to reservoir boundary) -->
    {#if mappedWells.length > 0}
      <g clip-path="url(#boundary-clip-{reservoirName})">
        {#each gridCells() as cell}
          <rect x={cell.x} y={cell.y} width={cell.w} height={cell.h} fill={cell.color} fill-opacity="0.35" />
        {/each}
      </g>
    {/if}

    <!-- Reservoir boundary outline -->
    {#if boundaryPoints}
      <polygon points={boundaryPoints} fill="none" stroke="#4a5568" stroke-width="1.5" />
    {/if}

    <!-- Axis labels -->
    <text x={width / 2} y={height - 4} font-size="11" fill="#444" text-anchor="middle">East →</text>
    <text
      x="12"
      y={height / 2}
      font-size="11"
      fill="#444"
      text-anchor="middle"
      transform="rotate(-90, 12, {height / 2})"
    >North →</text>

    <!-- Well markers -->
    {#each dots as dot}
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
      <circle
        cx={dot.cx}
        cy={dot.cy}
        r={dot.r}
        fill={dot.color}
        fill-opacity="0.9"
        stroke="white"
        stroke-width="1.5"
        style="cursor:pointer;"
        onmouseenter={() => { hoveredWell = dot }}
        onmouseleave={() => { hoveredWell = null }}
        onclick={() => handleClick(dot)}
      />
    {/each}

    <!-- Hover tooltip -->
    {#if hoveredWell}
      {@const tx = hoveredWell.cx + hoveredWell.r + 6}
      {@const ty = hoveredWell.cy}
      <rect
        x={tx - 2}
        y={ty - 18}
        width="160"
        height="38"
        rx="4"
        fill="#1e2330"
        stroke="#3a4050"
        stroke-width="1"
      />
      <text x={tx + 4} y={ty - 4} font-size="11" fill="#e2e8f0">{hoveredWell.wellName}</text>
      <text x={tx + 4} y={ty + 12} font-size="10" fill="#94a3b8">
        {hoveredWell.avgPressure.toFixed(0)} psi avg · click → production
      </text>
    {/if}
  </svg>
</div>

<style>
  .reservoir-map-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd examples/webapp
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add webapp/src/components/ReservoirMap.svelte
git commit -m "feat: upgrade ReservoirMap to IDW contour fill with boundary clip and real coords"
```

---

## Task 7: Update parent components to fetch and pass geometry

**Files:**
- Modify: `webapp/src/components/ReservoirCard.svelte`
- Modify: `webapp/src/pages/WellMap.svelte`

- [ ] **Step 1: Update `ReservoirCard.svelte`**

Replace the entire file contents with:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { loadWellPressures, loadReservoirGeometry } from '../lib/api'
  import type { WellPressure } from '../lib/api'
  import type { ReservoirSummary, ReservoirGeometry } from '../lib/types'
  import ReservoirMap from './ReservoirMap.svelte'
  import Badge from './ui/Badge.svelte'
  import Spinner from './ui/Spinner.svelte'

  interface Props {
    name: string
    summary: ReservoirSummary
    onclick: () => void
  }

  let { name, summary, onclick }: Props = $props()

  let wells: WellPressure[] = $state([])
  let geometry: ReservoirGeometry | null = $state(null)
  let mapLoading = $state(true)
  let mapError = $state('')
  let cardWidth = $state(0)

  onMount(async () => {
    try {
      ;[wells, geometry] = await Promise.all([
        loadWellPressures(name),
        loadReservoirGeometry(name),
      ])
    } catch (e: unknown) {
      mapError = e instanceof Error ? e.message : String(e)
    } finally {
      mapLoading = false
    }
  })
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<button
  class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-full text-left cursor-pointer hover:shadow-md transition-shadow"
  {onclick}
>
  <div class="w-full" bind:clientWidth={cardWidth}>
    {#if mapLoading}
      <div class="flex items-center justify-center bg-[#13161f]" style="height:220px;">
        <Spinner class="h-6 w-6" />
      </div>
    {:else if mapError || wells.length === 0 || !geometry}
      <div
        class="flex items-center justify-center bg-[#13161f] text-muted-foreground text-sm"
        style="height:220px;"
      >
        No well data
      </div>
    {:else}
      <ReservoirMap {wells} {geometry} reservoirName={name} width={cardWidth || 400} height={220} />
    {/if}
  </div>

  <div class="p-4">
    <h2 class="text-base font-semibold mb-2">{name}</h2>
    <div class="flex flex-wrap gap-1">
      {#each Object.entries(summary) as [type, count]}
        <Badge variant="secondary">{type}: {count}</Badge>
      {/each}
    </div>
  </div>
</button>
```

- [ ] **Step 2: Update `WellMap.svelte`**

Replace the entire file contents with:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { loadWellPressures, loadReservoirGeometry } from '../lib/api'
  import type { WellPressure } from '../lib/api'
  import type { ReservoirGeometry } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import ReservoirMap from '../components/ReservoirMap.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let wells: WellPressure[] = $state([])
  let geometry: ReservoirGeometry | null = $state(null)
  let loading = $state(true)
  let pageError = $state('')

  onMount(async () => {
    try {
      ;[wells, geometry] = await Promise.all([
        loadWellPressures(name),
        loadReservoirGeometry(name),
      ])
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Well Map']} />
<main class="p-6 max-w-5xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if wells.length === 0 || !geometry}
    <p class="text-muted-foreground">No production or geometry data available to build the well map.</p>
  {:else}
    <div class="mb-4 flex items-center gap-4 flex-wrap">
      <div class="flex items-center gap-2 text-sm">
        <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span> Low pressure
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="inline-block w-3 h-3 rounded-full bg-amber-500"></span> Mid pressure
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="inline-block w-3 h-3 rounded-full bg-red-500"></span> High pressure
      </div>
      <div class="text-sm text-muted-foreground ml-auto">Bubble size ∝ avg pressure</div>
    </div>
    <ReservoirMap {wells} {geometry} reservoirName={name} width={700} height={450} />
  {/if}
</main>
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd examples/webapp
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Run all frontend tests**

```bash
cd examples/webapp
npx vitest run
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add webapp/src/components/ReservoirCard.svelte webapp/src/pages/WellMap.svelte
git commit -m "feat: fetch geometry in ReservoirCard and WellMap, pass to ReservoirMap"
```

---

## Task 8: End-to-end smoke test (manual)

This task has no automated steps — it verifies the full stack works visually.

- [ ] **Step 1: Start the API server**

```bash
cd examples
python -m uvicorn api.main:app --reload --port 8000
```

- [ ] **Step 2: In a separate terminal, start the webapp**

```bash
cd examples/webapp
npm run dev
```

- [ ] **Step 3: Open http://localhost:5173 and verify**

Checklist:
- The dashboard shows reservoir cards with coloured isobar contour fill (not just bubbles)
- The reservoir boundary polygon is visible as a dark grey outline
- Well markers (circles with white border) are positioned inside the boundary
- Hovering a well shows the tooltip with well name and pressure
- Clicking a well navigates to the production page
- The `/reservoirs/ppr-1/well-map` page shows the full-size isobar map

- [ ] **Step 4: Verify the API endpoint directly**

```bash
curl http://localhost:8000/reservoirs/ppr-1/geometry | python -m json.tool | head -20
```

Expected: JSON with `wells` (50 items) and `boundary` (20 items).

---

## Summary

| Task | Files | Tests |
|------|-------|-------|
| 1 — Generate data | `scripts/generate_geometry.py`, `data/ppr-1/geometry/*.json` | Manual |
| 2 — API endpoint | `api/routes/geometry.py`, `api/main.py` | 5 pytest cases |
| 3 — TS types | `webapp/src/lib/types.ts` | tsc |
| 4 — `loadReservoirGeometry` | `webapp/src/lib/api.ts` | 2 Vitest cases |
| 5 — `wellmap.ts` | `webapp/src/lib/wellmap.ts` | 9 Vitest cases |
| 6 — `ReservoirMap.svelte` | component | tsc |
| 7 — Parent components | `ReservoirCard.svelte`, `WellMap.svelte` | tsc + all Vitest |
| 8 — Smoke test | — | Manual |
