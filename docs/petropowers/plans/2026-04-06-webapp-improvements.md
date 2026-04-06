# Reservoir Webapp UI/UX Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the existing Reservoir Management Web Application with four targeted UI/UX changes: replace the uPlot well log chart with a custom SVG panel view, add a reservoir well map page, remove two three.js pages, and add geological metadata overlays to core photos.

**Architecture:** Pure frontend changes in `examples/webapp/src/`. No backend modifications. New SVG-based components replace three.js and uPlot where called for. Pure utility functions (math, data transforms) are extracted to `lib/` and tested independently; Svelte components are tested with `@testing-library/svelte`.

**Tech Stack:** Svelte 5, TypeScript, Vitest + @testing-library/svelte, PapaParse (already installed), SVG (no new dependencies)

---

## File Map

### Created
- `src/lib/logscale.ts` — depth↔Y and log₁₀ scale utilities (pure functions, fully tested)
- `src/lib/wellmap.ts` — well grid position algorithm + pressure quartile utilities (pure functions, fully tested)
- `src/lib/corephoto.ts` — metadata sidecar path derivation + type definition (pure function, tested)
- `src/components/WellLogPanel.svelte` — custom SVG well log renderer (4 tracks)
- `src/components/ReservoirMap.svelte` — SVG bubble map component
- `src/components/CorePhotoCard.svelte` — photo tile with lazy metadata fetch + hover overlay
- `src/pages/WellMap.svelte` — page: fetch all production CSVs, compute per-well avg pressure, render ReservoirMap

### Modified
- `src/pages/WellLogs.svelte` — swap `WellLogChart` → `WellLogPanel`
- `src/pages/Production.svelte` — read `?well` URL param on mount, pre-select well
- `src/pages/ReservoirOverview.svelte` — replace Well Paths tile with Well Map; remove Seismic tile
- `src/pages/CorePhotos.svelte` — replace inline `<img>` with `<CorePhotoCard>`
- `src/App.svelte` — add `/well_map` route; remove `/well_paths` and `/seismic` routes
- `package.json` — remove `three` and `@types/three`

### Deleted
- `src/components/WellLogChart.svelte`
- `src/components/WellPaths3D.svelte`
- `src/components/SeismicViewer.svelte`
- `src/pages/WellPaths.svelte`
- `src/pages/Seismic.svelte`

### Test files
- `src/test/logscale.test.ts`
- `src/test/wellmap.test.ts`
- `src/test/corephoto.test.ts`

---

## Task 1: Remove 3D pages and three.js

**Files:**
- Delete: `src/components/WellPaths3D.svelte`
- Delete: `src/components/SeismicViewer.svelte`
- Delete: `src/pages/WellPaths.svelte`
- Delete: `src/pages/Seismic.svelte`
- Modify: `src/App.svelte`
- Modify: `src/pages/ReservoirOverview.svelte`
- Modify: `package.json`

- [ ] **Step 1: Delete the four 3D files**

```bash
cd examples/webapp
rm src/components/WellPaths3D.svelte
rm src/components/SeismicViewer.svelte
rm src/pages/WellPaths.svelte
rm src/pages/Seismic.svelte
```

- [ ] **Step 2: Update `src/App.svelte` — remove WellPaths and Seismic routes**

Replace the entire file content:

```svelte
<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import { get } from 'svelte/store'
  import { navigate } from 'svelte-routing'
  import { apiKey } from './lib/stores'
  import Login from './pages/Login.svelte'
  import ReservoirList from './pages/ReservoirList.svelte'
  import ReservoirOverview from './pages/ReservoirOverview.svelte'
  import WellLogs from './pages/WellLogs.svelte'
  import Production from './pages/Production.svelte'
  import CorePhotos from './pages/CorePhotos.svelte'
  import OsduManifests from './pages/OsduManifests.svelte'

  // Auth guard: redirect to /login if no key and not already there
  $effect(() => {
    if (!get(apiKey) && window.location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  })
</script>

<Router>
  <Route path="/login"><Login /></Route>
  <Route path="/"><ReservoirList /></Route>
  <Route path="/reservoirs/:name" let:params>
    <ReservoirOverview name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_logs" let:params>
    <WellLogs name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/production" let:params>
    <Production name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/core_photos" let:params>
    <CorePhotos name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/osdu_manifests" let:params>
    <OsduManifests name={params.name} />
  </Route>
</Router>
```

- [ ] **Step 3: Update `src/pages/ReservoirOverview.svelte` — remove Seismic tile, rename Well Paths → Well Map**

Replace the `DATA_TYPES` array (lines 18–25):

```ts
const DATA_TYPES: Array<{ key: string; label: string; color: string }> = [
  { key: 'well_logs',      label: 'Well Logs',      color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
  { key: 'production',     label: 'Production',     color: 'bg-green-100 text-green-800 hover:bg-green-200' },
  { key: 'well_map',       label: 'Well Map',        color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
  { key: 'core_photos',    label: 'Core Photos',    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
  { key: 'osdu_manifests', label: 'OSDU Manifests', color: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200' },
]
```

Note: `well_map` has no files on the backend so `summary['well_map']` will be `undefined` and the tile won't render via the existing `{#if summary[dt.key] !== undefined}` guard. That guard must be removed for the Well Map tile. Update the grid block:

```svelte
<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
  {#each DATA_TYPES as dt}
    {#if dt.key === 'well_map' || summary[dt.key] !== undefined}
      <button
        class="rounded-lg border p-5 text-left transition-colors cursor-pointer {dt.color}"
        onclick={() => navigate(`/reservoirs/${name}/${dt.key}`)}
      >
        <div class="text-sm font-medium mb-1">{dt.label}</div>
        <div class="text-3xl font-bold">{dt.key === 'well_map' ? '50' : summary[dt.key]}</div>
      </button>
    {/if}
  {/each}
</div>
```

- [ ] **Step 4: Remove three.js from `package.json`**

Remove `"three": "^0.169.0"` from `dependencies` and `"@types/three": "^0.169.0"` from `devDependencies`.

Run:
```bash
cd examples/webapp
npm install
```

Expected: no errors, `node_modules/three` directory gone.

- [ ] **Step 5: Run tests to confirm nothing broken**

```bash
cd examples/webapp
npm run test
```

Expected: all existing tests pass (11/11).

- [ ] **Step 6: Commit**

```bash
cd examples/webapp
git add -A
git commit -m "feat: remove 3D pages (WellPaths, Seismic) and three.js dependency"
```

---

## Task 2: Well log scale utilities

**Files:**
- Create: `src/lib/logscale.ts`
- Create: `src/test/logscale.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/test/logscale.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

describe('depthToY', () => {
  it('maps depthMin to 0', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(1500, 1500, 3500, 1000)).toBe(0)
  })

  it('maps depthMax to svgHeight', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(3500, 1500, 3500, 1000)).toBe(1000)
  })

  it('maps midpoint depth to half svgHeight', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(2500, 1500, 3500, 1000)).toBe(500)
  })
})

describe('linearToX', () => {
  it('maps min value to 0', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(0, 0, 150, 60)).toBe(0)
  })

  it('maps max value to trackWidth', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(150, 0, 150, 60)).toBe(60)
  })

  it('clamps values below min to 0', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(-10, 0, 150, 60)).toBe(0)
  })

  it('clamps values above max to trackWidth', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(200, 0, 150, 60)).toBe(60)
  })
})

describe('log10ToX', () => {
  it('maps logMin to 0', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(0.2, 0.2, 2000, 60)).toBeCloseTo(0, 5)
  })

  it('maps logMax to trackWidth', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(2000, 0.2, 2000, 60)).toBeCloseTo(60, 5)
  })

  it('places decade midpoint correctly', async () => {
    const { log10ToX } = await import('../lib/logscale')
    // log10(20) is midpoint of log10(0.2)..log10(2000)
    const mid = log10ToX(20, 0.2, 2000, 60)
    expect(mid).toBeCloseTo(30, 1)
  })

  it('clamps negative/zero values to 0', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(0, 0.2, 2000, 60)).toBe(0)
    expect(log10ToX(-5, 0.2, 2000, 60)).toBe(0)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|logscale"
```

Expected: `FAIL src/test/logscale.test.ts` (module not found).

- [ ] **Step 3: Create `src/lib/logscale.ts`**

```ts
/** Map a depth value to an SVG Y coordinate (depth increases downward). */
export function depthToY(
  depth: number,
  depthMin: number,
  depthMax: number,
  svgHeight: number
): number {
  return ((depth - depthMin) / (depthMax - depthMin)) * svgHeight
}

/** Map a linear curve value to an SVG X coordinate, clamped to [0, trackWidth]. */
export function linearToX(
  value: number,
  valMin: number,
  valMax: number,
  trackWidth: number
): number {
  const x = ((value - valMin) / (valMax - valMin)) * trackWidth
  return Math.max(0, Math.min(trackWidth, x))
}

/** Map a value on a log₁₀ scale to an SVG X coordinate, clamped to [0, trackWidth]. */
export function log10ToX(
  value: number,
  valMin: number,
  valMax: number,
  trackWidth: number
): number {
  if (value <= 0 || valMin <= 0) return 0
  const logVal = Math.log10(value)
  const logMin = Math.log10(valMin)
  const logMax = Math.log10(valMax)
  const x = ((logVal - logMin) / (logMax - logMin)) * trackWidth
  return Math.max(0, Math.min(trackWidth, x))
}
```

- [ ] **Step 4: Run tests — expect pass**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|logscale"
```

Expected: `PASS src/test/logscale.test.ts` (10 tests passing).

- [ ] **Step 5: Commit**

```bash
cd examples/webapp
git add src/lib/logscale.ts src/test/logscale.test.ts
git commit -m "feat: add well log scale utilities (depthToY, linearToX, log10ToX)"
```

---

## Task 3: WellLogPanel component

**Files:**
- Create: `src/components/WellLogPanel.svelte`
- Modify: `src/pages/WellLogs.svelte`
- Delete: `src/components/WellLogChart.svelte`

- [ ] **Step 1: Create `src/components/WellLogPanel.svelte`**

```svelte
<script lang="ts">
  import type { LasData } from '../lib/las'
  import { depthToY, linearToX, log10ToX } from '../lib/logscale'

  interface Props { data: LasData }
  let { data }: Props = $props()

  const SVG_H = 2000        // SVG coordinate height (all tracks share this)
  const TRACK_W = 100       // SVG coordinate width per track
  const TICK_INTERVAL = 100 // depth tick every 100 m

  const depthMin = $derived(data.depth[0] ?? 0)
  const depthMax = $derived(data.depth[data.depth.length - 1] ?? 1)

  function toY(d: number) { return depthToY(d, depthMin, depthMax, SVG_H) }

  /** Build an SVG polyline points string from parallel depth + value arrays. */
  function buildPoints(
    values: number[],
    toX: (v: number) => number
  ): string {
    return data.depth
      .map((d, i) => {
        const v = values[i]
        if (!isFinite(v)) return null
        return `${toX(v).toFixed(1)},${toY(d).toFixed(1)}`
      })
      .filter(Boolean)
      .join(' ')
  }

  /** Build an SVG path for a left-fill (shale indicator) on GR track. */
  function grFillPath(values: number[]): string {
    const points = data.depth
      .map((d, i) => {
        const v = values[i]
        if (!isFinite(v)) return null
        return { x: linearToX(v, 0, 150, TRACK_W), y: toY(d) }
      })
      .filter(Boolean) as { x: number; y: number }[]
    if (points.length < 2) return ''
    const first = points[0]
    const last = points[points.length - 1]
    const outline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')
    return `M 0,${first.y.toFixed(1)} L ${outline} L 0,${last.y.toFixed(1)} Z`
  }

  const gr    = $derived(data.curves['GR']   ?? [])
  const rhob  = $derived(data.curves['RHOB'] ?? [])
  const nphi  = $derived(data.curves['NPHI'] ?? [])
  const rt    = $derived(data.curves['RT']   ?? [])
  const dt    = $derived(data.curves['DT']   ?? [])

  // Precompute polyline points for each curve
  const grPoints   = $derived(buildPoints(gr,   v => linearToX(v, 0, 150, TRACK_W)))
  const rhobPoints = $derived(buildPoints(rhob, v => linearToX(v, 1.7, 2.9, TRACK_W)))
  const nphiPoints = $derived(buildPoints(nphi, v => linearToX(v, 0.45, 0, TRACK_W))) // reversed
  const rtPoints   = $derived(buildPoints(rt,   v => log10ToX(v, 0.2, 2000, TRACK_W)))
  const dtPoints   = $derived(buildPoints(dt,   v => linearToX(v, 140, 40, TRACK_W)))  // reversed
  const grFill     = $derived(grFillPath(gr))

  // Depth tick marks
  const ticks = $derived(() => {
    const result: number[] = []
    const start = Math.ceil(depthMin / TICK_INTERVAL) * TICK_INTERVAL
    for (let d = start; d <= depthMax; d += TICK_INTERVAL) result.push(d)
    return result
  })
</script>

<!--
  Layout: [depth ruler] [GR track] [RHOB+NPHI track] [RT track] [DT track]
  All tracks share the same SVG coordinate height (SVG_H) so they are depth-synced.
  The outer div is vertically scrollable; track headers are sticky.
-->
<div class="well-log-panel" style="--track-w:{TRACK_W}px; --svg-h:{SVG_H}px;">
  <!-- Sticky header row -->
  <div class="log-headers">
    <div class="depth-header">DEPTH<br/>(m)</div>
    <div class="track-header" style="color:#22c55e;">GR<br/><span>0 — 150 API</span></div>
    <div class="track-header" style="color:#3b82f6;">RHOB / NPHI<br/><span>1.7—2.9 g/cc / 0.45—0</span></div>
    <div class="track-header" style="color:#f59e0b;">RT<br/><span>0.2 — 2000 Ω·m</span></div>
    <div class="track-header" style="color:#8b5cf6;">DT<br/><span>140 — 40 µs/ft</span></div>
  </div>

  <!-- Scrollable track area -->
  <div class="log-tracks">
    <!-- Depth ruler -->
    <div class="depth-ruler">
      <svg viewBox="0 0 40 {SVG_H}" width="40" height={SVG_H} preserveAspectRatio="none">
        {#each ticks() as tick}
          <line x1="28" y1={toY(tick)} x2="40" y2={toY(tick)} stroke="#444" stroke-width="1"/>
          <text x="0" y={toY(tick) + 4} font-size="16" fill="#888">{tick}</text>
        {/each}
      </svg>
    </div>

    <!-- GR track with left-fill -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if grFill}
          <path d={grFill} fill="#22c55e" fill-opacity="0.25"/>
        {/if}
        {#if grPoints}
          <polyline points={grPoints} fill="none" stroke="#22c55e" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>

    <!-- RHOB + NPHI shared track -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if rhobPoints}
          <polyline points={rhobPoints} fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        {/if}
        {#if nphiPoints}
          <polyline points={nphiPoints} fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
        {/if}
      </svg>
    </div>

    <!-- RT track (log scale) -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if rtPoints}
          <polyline points={rtPoints} fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>

    <!-- DT track (reversed scale) -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if dtPoints}
          <polyline points={dtPoints} fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>
  </div>
</div>

<style>
  .well-log-panel {
    display: flex;
    flex-direction: column;
    border: 1px solid #2a3040;
    border-radius: 8px;
    background: #0f1117;
    overflow: hidden;
    max-height: 75vh;
  }

  .log-headers {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #0f1117;
    border-bottom: 2px solid #2a3040;
    flex-shrink: 0;
  }

  .depth-header {
    width: 40px;
    min-width: 40px;
    font-size: 10px;
    color: #888;
    text-align: center;
    padding: 6px 2px;
    border-right: 1px solid #2a3040;
    line-height: 1.3;
  }

  .track-header {
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    padding: 6px 4px;
    border-right: 1px solid #2a3040;
    line-height: 1.3;
  }

  .track-header span {
    display: block;
    font-size: 9px;
    color: #666;
    font-weight: normal;
  }

  .log-tracks {
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .depth-ruler {
    width: 40px;
    min-width: 40px;
    flex-shrink: 0;
    border-right: 1px solid #2a3040;
    background: #13161f;
  }

  .track {
    flex: 1;
    border-right: 1px solid #2a3040;
    background: #0f1117;
    overflow: hidden;
  }

  .track:last-child {
    border-right: none;
  }
</style>
```

- [ ] **Step 2: Update `src/pages/WellLogs.svelte` — swap component**

Replace the import line and the usage:

```svelte
import WellLogPanel from '../components/WellLogPanel.svelte'
```

Replace `<WellLogChart data={lasData} />` with:

```svelte
<WellLogPanel data={lasData} />
```

Remove the `import WellLogChart` line.

- [ ] **Step 3: Delete `src/components/WellLogChart.svelte`**

```bash
cd examples/webapp
rm src/components/WellLogChart.svelte
```

- [ ] **Step 4: Run tests**

```bash
cd examples/webapp
npm run test
```

Expected: all tests pass (21/21 — 11 existing + 10 new logscale tests).

- [ ] **Step 5: Commit**

```bash
cd examples/webapp
git add -A
git commit -m "feat: replace uPlot WellLogChart with custom SVG WellLogPanel"
```

---

## Task 4: Well map position and pressure utilities

**Files:**
- Create: `src/lib/wellmap.ts`
- Create: `src/test/wellmap.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/test/wellmap.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

describe('nameJitter', () => {
  it('returns a value in ±0.04 range', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    const j = nameJitter('PPR1-Well-001x')
    expect(j).toBeGreaterThanOrEqual(-0.04)
    expect(j).toBeLessThanOrEqual(0.04)
  })

  it('is deterministic for same input', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    expect(nameJitter('PPR1-Well-007x')).toBe(nameJitter('PPR1-Well-007x'))
  })

  it('produces different values for different seeds', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    expect(nameJitter('PPR1-Well-001x')).not.toBe(nameJitter('PPR1-Well-002x'))
  })
})

describe('computeWellPositions', () => {
  it('returns one entry per well', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = ['W-001', 'W-002', 'W-003', 'W-004']
    const result = computeWellPositions(names)
    expect(result).toHaveLength(4)
  })

  it('all x and y values are in 0–1 range', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = Array.from({ length: 50 }, (_, i) => `PPR1-Well-${String(i + 1).padStart(3, '0')}`)
    for (const p of computeWellPositions(names)) {
      expect(p.x).toBeGreaterThanOrEqual(0)
      expect(p.x).toBeLessThanOrEqual(1)
      expect(p.y).toBeGreaterThanOrEqual(0)
      expect(p.y).toBeLessThanOrEqual(1)
    }
  })

  it('preserves well names', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = ['Alpha', 'Beta', 'Gamma']
    const result = computeWellPositions(names)
    expect(result.map(p => p.wellName)).toEqual(['Alpha', 'Beta', 'Gamma'])
  })
})

describe('pressureQuartileColor', () => {
  it('bottom quartile is green', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    // pressures: [100, 200, 300, 400] — 100 is bottom quartile
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

- [ ] **Step 2: Run tests — expect failure**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|wellmap"
```

Expected: `FAIL src/test/wellmap.test.ts` (module not found).

- [ ] **Step 3: Create `src/lib/wellmap.ts`**

```ts
export interface WellPosition {
  wellName: string
  x: number  // normalized 0–1
  y: number  // normalized 0–1
}

/** Deterministic jitter derived from a string seed. Returns a value in ±0.04. */
export function nameJitter(seed: string): number {
  const hash = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return ((hash % 17) / 17 - 0.5) * 0.08
}

/**
 * Compute synthetic grid positions for a list of well names.
 * Wells are sorted before layout so positions are stable regardless of input order.
 */
export function computeWellPositions(wellNames: string[]): WellPosition[] {
  const sorted = [...wellNames].sort()
  const cols = Math.ceil(Math.sqrt(sorted.length))
  const rows = Math.ceil(sorted.length / cols)

  return sorted.map((name, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = Math.max(0, Math.min(1, (col + 0.5) / cols + nameJitter(name + 'x')))
    const y = Math.max(0, Math.min(1, (row + 0.5) / rows + nameJitter(name + 'y')))
    return { wellName: name, x, y }
  })
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

- [ ] **Step 4: Run tests — expect pass**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|wellmap"
```

Expected: `PASS src/test/wellmap.test.ts` (12 tests passing).

- [ ] **Step 5: Commit**

```bash
cd examples/webapp
git add src/lib/wellmap.ts src/test/wellmap.test.ts
git commit -m "feat: add well map position and pressure quartile utilities"
```

---

## Task 5: ReservoirMap component and WellMap page

**Files:**
- Create: `src/components/ReservoirMap.svelte`
- Create: `src/pages/WellMap.svelte`
- Modify: `src/App.svelte`

- [ ] **Step 1: Create `src/components/ReservoirMap.svelte`**

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { computeWellPositions, pressureQuartileColor, pressureToRadius } from '../lib/wellmap'

  interface WellData {
    wellName: string
    avgPressure: number
  }

  interface Props {
    wells: WellData[]
    reservoirName: string
    width?: number
    height?: number
  }

  let { wells, reservoirName, width = 600, height = 400 }: Props = $props()

  const positions = $derived(computeWellPositions(wells.map(w => w.wellName)))

  const pressureByName = $derived(
    new Map(wells.map(w => [w.wellName, w.avgPressure]))
  )

  const allPressures = $derived(wells.map(w => w.avgPressure))
  const minP = $derived(Math.min(...allPressures))
  const maxP = $derived(Math.max(...allPressures))

  interface DotProps {
    wellName: string
    cx: number
    cy: number
    r: number
    color: string
    avgPressure: number
  }

  const dots = $derived(
    positions.map(p => {
      const avg = pressureByName.get(p.wellName) ?? 0
      return {
        wellName: p.wellName,
        cx: p.x * width,
        cy: p.y * height,
        r: pressureToRadius(avg, minP, maxP),
        color: pressureQuartileColor(avg, allPressures),
        avgPressure: avg,
      } satisfies DotProps
    })
  )

  let hoveredWell: DotProps | null = $state(null)

  function handleClick(dot: DotProps) {
    // Derive production filename from well name: "PPR1-Well-001" → "PPR1-Well-001_production.csv"
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
    <!-- Grid lines -->
    {#each [0.2, 0.4, 0.6, 0.8] as t}
      <line x1={t * width} y1="0" x2={t * width} y2={height} stroke="#1e2330" stroke-width="1"/>
      <line x1="0" y1={t * height} x2={width} y2={t * height} stroke="#1e2330" stroke-width="1"/>
    {/each}

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

    <!-- Well bubbles -->
    {#each dots as dot}
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
      <circle
        cx={dot.cx}
        cy={dot.cy}
        r={dot.r}
        fill={dot.color}
        fill-opacity="0.7"
        stroke={dot.color}
        stroke-width="1"
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

  <p class="disclaimer">Schematic — not geographic. Positions are synthetic.</p>
</div>

<style>
  .reservoir-map-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .disclaimer {
    font-size: 11px;
    color: #555;
    text-align: center;
  }
</style>
```

- [ ] **Step 2: Create `src/pages/WellMap.svelte`**

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import Papa from 'papaparse'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import ReservoirMap from '../components/ReservoirMap.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  interface WellData { wellName: string; avgPressure: number }

  let wells: WellData[] = $state([])
  let loading = $state(true)
  let pageError = $state('')

  onMount(async () => {
    try {
      const files = await listFiles(name, 'production')
      const apiKey = localStorage.getItem('reservoir_api_key') ?? ''

      const results = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(downloadFileUrl(name, 'production', file), {
            headers: { 'X-API-Key': apiKey },
          })
          if (!res.ok) return null
          const text = await res.text()
          const parsed = Papa.parse<Record<string, string>>(text, {
            header: true,
            skipEmptyLines: true,
          })
          const pressures = parsed.data
            .map(r => parseFloat(r['wellhead_pressure_psi']))
            .filter(v => isFinite(v))
          if (pressures.length === 0) return null
          const avg = pressures.reduce((a, b) => a + b, 0) / pressures.length
          // Derive well name from filename: "PPR1-Well-001_production.csv" → "PPR1-Well-001"
          const wellName = file.replace(/_production\.csv$/i, '')
          return { wellName, avgPressure: avg } satisfies WellData
        })
      )

      wells = results.filter((r): r is WellData => r !== null)
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
  {:else if wells.length === 0}
    <p class="text-muted-foreground">No production data available to build the well map.</p>
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
    <ReservoirMap {wells} reservoirName={name} width={700} height={450} />
  {/if}
</main>
```

- [ ] **Step 3: Add `/well_map` route to `src/App.svelte`**

Add the import after the existing imports:

```svelte
import WellMap from './pages/WellMap.svelte'
```

Add the route inside `<Router>`, after the `/production` route:

```svelte
<Route path="/reservoirs/:name/well_map" let:params>
  <WellMap name={params.name} />
</Route>
```

- [ ] **Step 4: Run tests**

```bash
cd examples/webapp
npm run test
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
cd examples/webapp
git add -A
git commit -m "feat: add ReservoirMap component and WellMap page"
```

---

## Task 6: Production page — pre-select well from URL

**Files:**
- Modify: `src/pages/Production.svelte`

- [ ] **Step 1: Update `src/pages/Production.svelte` to read `?well` on mount**

In the `onMount` handler, after `files` is populated, add URL param reading before the fallback to `files[0]`:

```ts
onMount(async () => {
  try {
    files = await listFiles(name, 'production')
    const params = new URLSearchParams(window.location.search)
    const wellParam = params.get('well')
    if (wellParam && files.includes(wellParam)) {
      selected = wellParam
    } else if (files.length) {
      selected = files[0]
    }
  } catch (e: unknown) {
    pageError = e instanceof Error ? e.message : String(e)
  }
})
```

Remove the old `if (files.length) selected = files[0]` line.

- [ ] **Step 2: Run tests**

```bash
cd examples/webapp
npm run test
```

Expected: all tests pass (no test covers this — it is UI routing behaviour verified manually).

- [ ] **Step 3: Commit**

```bash
cd examples/webapp
git add src/pages/Production.svelte
git commit -m "feat: pre-select well in Production page from ?well URL param"
```

---

## Task 7: Core photo metadata path utility

**Files:**
- Create: `src/lib/corephoto.ts`
- Create: `src/test/corephoto.test.ts`

- [ ] **Step 1: Write the failing tests**

Create `src/test/corephoto.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

describe('metadataPath', () => {
  it('replaces .png extension with _metadata.json', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    expect(metadataPath('PPR1-Well-001/PPR1-Well-001_depth_2021.9m.png'))
      .toBe('PPR1-Well-001/PPR1-Well-001_depth_2021.9m_metadata.json')
  })

  it('works for jpeg extension', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    expect(metadataPath('PPR1-Well-001/photo_001.jpeg'))
      .toBe('PPR1-Well-001/photo_001_metadata.json')
  })

  it('preserves subdirectory path', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    const result = metadataPath('WellA/sub/photo.png')
    expect(result.startsWith('WellA/sub/')).toBe(true)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|corephoto"
```

Expected: `FAIL src/test/corephoto.test.ts` (module not found).

- [ ] **Step 3: Create `src/lib/corephoto.ts`**

```ts
export interface CorePhotoMeta {
  depth_start: number
  depth_end: number
  lithology: string
  porosity: number
  permeability: number
  grain_size: string
  texture: string
  color: string
  fractures: number
  bedding_angle: number
  oil_staining: boolean
  formation: string
  well_name: string
  field_name: string
  sample_date: string
  latitude: number
  longitude: number
}

/**
 * Derive the sidecar metadata JSON path from a photo file path.
 * "PPR1-Well-001/photo_001.png" → "PPR1-Well-001/photo_001_metadata.json"
 */
export function metadataPath(photoPath: string): string {
  return photoPath.replace(/\.[^./]+$/, '_metadata.json')
}
```

- [ ] **Step 4: Run tests — expect pass**

```bash
cd examples/webapp
npm run test -- --reporter=verbose 2>&1 | grep -E "FAIL|PASS|corephoto"
```

Expected: `PASS src/test/corephoto.test.ts` (3 tests passing).

- [ ] **Step 5: Commit**

```bash
cd examples/webapp
git add src/lib/corephoto.ts src/test/corephoto.test.ts
git commit -m "feat: add core photo metadata path utility"
```

---

## Task 8: CorePhotoCard component and CorePhotos update

**Files:**
- Create: `src/components/CorePhotoCard.svelte`
- Modify: `src/pages/CorePhotos.svelte`

- [ ] **Step 1: Create `src/components/CorePhotoCard.svelte`**

```svelte
<script lang="ts">
  import { downloadFileUrl, imageUrl } from '../lib/api'
  import { metadataPath } from '../lib/corephoto'
  import type { CorePhotoMeta } from '../lib/corephoto'
  import Dialog from './ui/Dialog.svelte'
  import Button from './ui/Button.svelte'

  interface Props {
    reservoirName: string
    photoPath: string   // e.g. "PPR1-Well-001/PPR1-Well-001_depth_2021.9m.png"
  }

  let { reservoirName, photoPath }: Props = $props()

  // Metadata fetch state per photo: undefined = not fetched, 'loading', 'error', or the data
  let meta: CorePhotoMeta | 'loading' | 'error' | undefined = $state(undefined)
  let hovered = $state(false)
  let lightboxOpen = $state(false)

  async function fetchMeta() {
    if (meta !== undefined) return  // already fetched or in progress
    meta = 'loading'
    try {
      const url = downloadFileUrl(reservoirName, 'core_photos', metadataPath(photoPath))
      const res = await fetch(url, {
        headers: { 'X-API-Key': localStorage.getItem('reservoir_api_key') ?? '' },
      })
      if (!res.ok) throw new Error(`${res.status}`)
      meta = await res.json() as CorePhotoMeta
    } catch {
      meta = 'error'
    }
  }

  function handleMouseEnter() {
    hovered = true
    fetchMeta()
  }

  const imgSrc = $derived(imageUrl(reservoirName, 'core_photos', photoPath))

  const displayedMeta = $derived(
    meta && meta !== 'loading' && meta !== 'error' ? meta : null
  )
</script>

<div
  class="photo-card"
  role="figure"
  onmouseenter={handleMouseEnter}
  onmouseleave={() => { hovered = false }}
>
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
  <img
    src={imgSrc}
    alt={photoPath}
    class="photo-img"
    style={hovered ? 'filter: brightness(0.5);' : ''}
    onclick={() => { lightboxOpen = true; fetchMeta() }}
  />

  {#if hovered}
    <div class="meta-overlay" style="opacity: {meta === 'loading' ? 0.7 : 1};">
      {#if meta === 'loading'}
        <div class="meta-loading">Loading…</div>
      {:else if meta === 'error'}
        <div class="meta-loading">Metadata unavailable</div>
      {:else if displayedMeta}
        <table class="meta-table">
          <tr><td>Depth</td><td>{displayedMeta.depth_start.toFixed(1)}–{displayedMeta.depth_end.toFixed(1)} m</td></tr>
          <tr><td>Lithology</td><td>{displayedMeta.lithology}</td></tr>
          <tr><td>Porosity</td><td>{(displayedMeta.porosity * 100).toFixed(1)}%</td></tr>
          <tr><td>Perm</td><td>{displayedMeta.permeability.toFixed(1)} mD</td></tr>
          <tr><td>Grain</td><td>{displayedMeta.grain_size}</td></tr>
          <tr><td>Oil stain</td><td>{displayedMeta.oil_staining ? 'Yes' : 'No'}</td></tr>
          <tr><td>Formation</td><td>{displayedMeta.formation}</td></tr>
        </table>
      {/if}
    </div>
  {/if}
</div>

<!-- Lightbox with metadata panel -->
<Dialog bind:open={lightboxOpen} class="max-w-4xl p-0">
  <div class="lightbox-inner">
    <div class="lightbox-image">
      <img src={imgSrc} alt={photoPath} class="w-full rounded-l" />
    </div>
    <div class="lightbox-meta">
      {#if displayedMeta}
        <h3 class="text-sm font-semibold mb-3">{displayedMeta.well_name}</h3>
        <dl class="meta-dl">
          <dt>Depth</dt><dd>{displayedMeta.depth_start.toFixed(1)}–{displayedMeta.depth_end.toFixed(1)} m</dd>
          <dt>Lithology</dt><dd>{displayedMeta.lithology}</dd>
          <dt>Porosity</dt><dd>{(displayedMeta.porosity * 100).toFixed(1)}%</dd>
          <dt>Permeability</dt><dd>{displayedMeta.permeability.toFixed(1)} mD</dd>
          <dt>Grain size</dt><dd>{displayedMeta.grain_size}</dd>
          <dt>Texture</dt><dd>{displayedMeta.texture}</dd>
          <dt>Color</dt><dd>{displayedMeta.color}</dd>
          <dt>Fractures</dt><dd>{displayedMeta.fractures}</dd>
          <dt>Bedding angle</dt><dd>{displayedMeta.bedding_angle.toFixed(1)}°</dd>
          <dt>Oil staining</dt><dd>{displayedMeta.oil_staining ? 'Yes' : 'No'}</dd>
          <dt>Formation</dt><dd>{displayedMeta.formation}</dd>
          <dt>Field</dt><dd>{displayedMeta.field_name}</dd>
          <dt>Sample date</dt><dd>{displayedMeta.sample_date}</dd>
        </dl>
      {:else}
        <p class="text-sm text-muted-foreground">Metadata unavailable</p>
      {/if}
      <div class="flex justify-end mt-4">
        <Button variant="outline" size="sm" onclick={() => { lightboxOpen = false }}>Close</Button>
      </div>
    </div>
  </div>
</Dialog>

<style>
  .photo-card {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .photo-img {
    height: 192px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    object-fit: cover;
    display: block;
    transition: filter 150ms;
  }

  .meta-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.82);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    transition: opacity 150ms;
    pointer-events: none;
  }

  .meta-loading {
    color: #94a3b8;
    font-size: 12px;
    margin: auto;
  }

  .meta-table {
    width: 100%;
    font-size: 11px;
    border-collapse: collapse;
  }

  .meta-table td {
    padding: 1px 4px;
    color: #e2e8f0;
  }

  .meta-table td:first-child {
    color: #94a3b8;
    white-space: nowrap;
    padding-right: 8px;
  }

  .lightbox-inner {
    display: flex;
    max-height: 80vh;
  }

  .lightbox-image {
    flex: 1;
    overflow: hidden;
  }

  .lightbox-meta {
    width: 220px;
    flex-shrink: 0;
    padding: 20px;
    overflow-y: auto;
    border-left: 1px solid #e2e8f0;
  }

  .meta-dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2px 12px;
    font-size: 12px;
  }

  .meta-dl dt {
    color: #94a3b8;
    white-space: nowrap;
  }

  .meta-dl dd {
    margin: 0;
    color: #1e293b;
    word-break: break-word;
  }
</style>
```

- [ ] **Step 2: Update `src/pages/CorePhotos.svelte` — use CorePhotoCard**

Replace the file content:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import CorePhotoCard from '../components/CorePhotoCard.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let files: string[] = $state([])
  let loading = $state(true)
  let pageError = $state('')

  // Group files by well: "PPR1-Well-001/photo_001.png" → keyed by "PPR1-Well-001"
  const grouped = $derived(() => {
    const map = new Map<string, string[]>()
    for (const f of files) {
      // Skip metadata JSON sidecars — show only image files
      if (f.endsWith('_metadata.json')) continue
      const slash = f.indexOf('/')
      if (slash === -1) continue
      const well = f.slice(0, slash)
      if (!map.has(well)) map.set(well, [])
      map.get(well)!.push(f)
    }
    return map
  })

  onMount(async () => {
    try {
      files = await listFiles(name, 'core_photos')
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Core Photos']} />
<main class="p-6 max-w-6xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if files.length === 0}
    <p class="text-muted-foreground">No core photos available for this reservoir.</p>
  {:else}
    {#each [...grouped().entries()] as [well, photos]}
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-3">{well}</h2>
        <div class="flex flex-wrap gap-3">
          {#each photos as photo}
            <CorePhotoCard reservoirName={name} photoPath={photo} />
          {/each}
        </div>
      </section>
    {/each}
  {/if}
</main>
```

- [ ] **Step 3: Run all tests**

```bash
cd examples/webapp
npm run test
```

Expected: all tests pass. Count: 11 (original) + 10 (logscale) + 12 (wellmap) + 3 (corephoto) = **36 tests**.

- [ ] **Step 4: Commit**

```bash
cd examples/webapp
git add -A
git commit -m "feat: add CorePhotoCard with lazy metadata overlay and update CorePhotos page"
```

---

## Final Verification

- [ ] **Confirm test count**

```bash
cd examples/webapp
npm run test -- --reporter=verbose
```

Expected: **36 tests, 0 failures**.

- [ ] **Confirm three.js is gone**

```bash
grep -r "from 'three'" examples/webapp/src/
```

Expected: no output.

- [ ] **Confirm deleted files are gone**

```bash
ls examples/webapp/src/components/WellLogChart.svelte 2>&1
ls examples/webapp/src/components/WellPaths3D.svelte 2>&1
ls examples/webapp/src/components/SeismicViewer.svelte 2>&1
```

Expected: `No such file or directory` for all three.
