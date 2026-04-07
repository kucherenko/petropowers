# Well Visualisation Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 40×40 IDW rect grid and variable-radius pressure bubbles with per-well SVG radial gradient halos and small fixed-size point markers.

**Architecture:** Each well gets a `<radialGradient>` in SVG `<defs>` (centered on the well via `gradientUnits="userSpaceOnUse"`), paired with a large halo `<circle>` clipped to the reservoir boundary. Overlapping semi-transparent halos blend into a smooth pressure field. Well markers become fixed r=4 dots. Dead code (`interpolatePressure`, `pressureToRadius` and their tests) is deleted first.

**Tech Stack:** Svelte 5, TypeScript, Vitest, SVG

---

### Task 1: Remove dead code — `wellmap.ts` + `wellmap.test.ts`

**Files:**
- Modify: `webapp/src/test/wellmap.test.ts`
- Modify: `webapp/src/lib/wellmap.ts`

- [ ] **Step 1: Delete the `interpolatePressure` test block**

In `webapp/src/test/wellmap.test.ts`, remove lines 44–74 (the entire `describe('interpolatePressure', ...)` block):

```ts
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
  it('returns 0 when wells array is empty', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    expect(interpolatePressure(500, 500, [])).toBe(0)
  })
})
```

Also remove the `MappedWell` import from line 2 if it is no longer used after both deletions (check after step 2).

- [ ] **Step 2: Delete the `pressureToRadius` test block**

In `webapp/src/test/wellmap.test.ts`, remove lines 93–108 (the entire `describe('pressureToRadius', ...)` block):

```ts
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

After this deletion, check if `MappedWell` is still imported in the test file — it was used in the `interpolatePressure` block. If no other test uses it, remove it from the import on line 2:

```ts
// Before (line 2):
import type { ReservoirGeometry, MappedWell } from '../lib/types'

// After (if MappedWell no longer used):
import type { ReservoirGeometry } from '../lib/types'
```

- [ ] **Step 3: Run tests — verify 46 pass**

```bash
cd webapp && npx vitest run
```

Expected: `Tests  46 passed (46)` — the 7 removed tests no longer run, all remaining tests pass.

- [ ] **Step 4: Delete `interpolatePressure` from `wellmap.ts`**

In `webapp/src/lib/wellmap.ts`, remove lines 24–48 (the `interpolatePressure` function and its JSDoc):

```ts
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
```

- [ ] **Step 5: Delete `pressureToRadius` from `wellmap.ts`**

In `webapp/src/lib/wellmap.ts`, remove lines 60–64 (the `pressureToRadius` function and its JSDoc):

```ts
/** Map a pressure value to a bubble radius (6–18 px), clamped. */
export function pressureToRadius(pressure: number, minP: number, maxP: number): number {
  const t = maxP === minP ? 0 : (pressure - minP) / (maxP - minP)
  return Math.round(6 + Math.max(0, Math.min(1, t)) * 12)
}
```

- [ ] **Step 6: Run tsc — verify no new errors**

```bash
cd webapp && npx tsc --noEmit 2>&1 | grep -v "jest.d.ts"
```

Expected: no output (only the pre-existing `node_modules/@testing-library/jest-dom/types/jest.d.ts` error is filtered out).

- [ ] **Step 7: Commit**

```bash
git add webapp/src/lib/wellmap.ts webapp/src/test/wellmap.test.ts
git commit -m "refactor: remove interpolatePressure and pressureToRadius (dead code)"
```

---

### Task 2: Redesign `ReservoirMap.svelte`

**Files:**
- Modify: `webapp/src/components/ReservoirMap.svelte`

- [ ] **Step 1: Replace the entire script section**

Replace the `<script lang="ts">` block in `webapp/src/components/ReservoirMap.svelte` with the following. Key changes: remove `interpolatePressure`/`pressureToRadius` imports, remove `GRID`/`GridCell`/`gridCells`, remove `minP`/`maxP`/`sortedPressures`/`q1`/`q3`/`cellColor`, add `haloRadius`, remove `r` from `DotProps`.

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { mergeGeometryAndPressure, pressureQuartileColor, smoothClosedPath } from '../lib/wellmap'
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

  // --- Halo radius: 30% of the shorter SVG dimension ---
  const haloRadius = $derived(Math.min(width, height) * 0.30)

  // --- Boundary path (smooth bezier) ---
  const svgBoundaryPts = $derived(
    geometry.boundary.map(p => ({ x: toSvgX(p.x_m), y: toSvgY(p.y_m) }))
  )
  const boundaryPath = $derived(smoothClosedPath(svgBoundaryPts))

  // --- Well dots ---
  interface DotProps {
    wellName: string
    cx: number
    cy: number
    color: string
    avgPressure: number
  }
  const dots = $derived(
    mappedWells.map(w => ({
      wellName: w.name,
      cx: toSvgX(w.x_m),
      cy: toSvgY(w.y_m),
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
```

- [ ] **Step 2: Replace the SVG template**

Replace everything from `<div class="reservoir-map-wrap">` through the closing `</style>` tag with:

```svelte
<div class="reservoir-map-wrap">
  <svg
    {width}
    {height}
    viewBox="0 0 {width} {height}"
    style="background:#13161f; border-radius:8px; border:1px solid #2a3040; display:block;"
  >
    <defs>
      <clipPath id="boundary-clip-{reservoirName}">
        <path d={boundaryPath} />
      </clipPath>
      {#each dots as dot}
        <radialGradient
          id="halo-{dot.wellName}"
          gradientUnits="userSpaceOnUse"
          cx={dot.cx}
          cy={dot.cy}
          r={haloRadius}
        >
          <stop offset="0%" stop-color={dot.color} stop-opacity="0.45" />
          <stop offset="100%" stop-color={dot.color} stop-opacity="0" />
        </radialGradient>
      {/each}
    </defs>

    <!-- Radial gradient halos (clipped to reservoir boundary) -->
    {#if mappedWells.length > 0}
      <g clip-path="url(#boundary-clip-{reservoirName})">
        {#each dots as dot}
          <circle cx={dot.cx} cy={dot.cy} r={haloRadius} fill="url(#halo-{dot.wellName})" />
        {/each}
      </g>
    {/if}

    <!-- Reservoir boundary outline -->
    {#if boundaryPath}
      <path d={boundaryPath} fill="none" stroke="#4a5568" stroke-width="1.5" />
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

    <!-- Well markers (fixed r=4, outside clip group so dots always visible) -->
    {#each dots as dot}
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
      <circle
        cx={dot.cx}
        cy={dot.cy}
        r={4}
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
      {@const tx = hoveredWell.cx + 4 + 6}
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

- [ ] **Step 3: Run tsc — verify no new errors**

```bash
cd webapp && npx tsc --noEmit 2>&1 | grep -v "jest.d.ts"
```

Expected: no output.

- [ ] **Step 4: Run vitest — verify 46 tests still pass**

```bash
cd webapp && npx vitest run
```

Expected: `Tests  46 passed (46)`

- [ ] **Step 5: Commit**

```bash
git add webapp/src/components/ReservoirMap.svelte
git commit -m "feat: replace IDW grid with per-well radial gradient halos"
```
