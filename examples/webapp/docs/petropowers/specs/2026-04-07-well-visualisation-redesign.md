# Well Visualisation Redesign

**Date:** 2026-04-07
**Scope:** `ReservoirMap.svelte`, `wellmap.ts`, `wellmap.test.ts`

## Goal

Replace the current pressure visualisation — a 40×40 IDW rect grid with variable-radius pressure bubbles — with:

1. **Radial gradient halos** centered on each well, blending into a smooth heatmap-like pressure field
2. **Small fixed-size point markers** (r=4) with hover tooltips

The result should match the reference aesthetic: large semi-transparent colored halos that overlap and blend naturally, with small dot markers visible at each well location.

## Design

### 1. Halo rendering — `ReservoirMap.svelte`

**Remove:**
- `GRID`, `GridCell`, and `gridCells` `$derived.by()` — the 40×40 IDW cell computation
- `<rect>` elements that render the grid cells
- `pressureToRadius` import and usage
- `interpolatePressure` import and usage
- `r` field from `DotProps` interface and from the `dots` derived array

**Add — `<defs>` section:**

One `<radialGradient>` per well, defined in `<defs>` before rendering:

```svelte
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
```

`gradientUnits="userSpaceOnUse"` means `cx`/`cy`/`r` are in SVG coordinate units, automatically centering the gradient on the well.

**Add — halo circles (inside boundary `<clipPath>` group):**

```svelte
<g clip-path="url(#boundary-clip-{reservoirName})">
  {#each dots as dot}
    <circle cx={dot.cx} cy={dot.cy} r={haloRadius} fill="url(#halo-{dot.wellName})" />
  {/each}
</g>
```

Halos are drawn before the boundary outline and well markers. Multiple overlapping halos blend via their transparent edges.

**Halo radius computation:**

```ts
const haloRadius = $derived(Math.min(width, height) * 0.30)
```

`width` and `height` are props (defaults 600/400), so `haloRadius` is constant per render. The radius scales with the viewport so halos remain proportional regardless of component size.

**Well marker circles:**

Fixed r=4. Remove `r` from `DotProps`:

```ts
interface DotProps {
  wellName: string
  cx: number
  cy: number
  color: string
  avgPressure: number
}
```

In the SVG: `r={4}` hardcoded. Tooltip position: `tx = dot.cx + 4 + 6`.

**SVG rendering order:**

1. `<defs>` — clipPath + radial gradients
2. Halo circles group (clipped by boundary)
3. Boundary outline `<path>`
4. Axis labels
5. Well marker `<circle>` elements (r=4, **not** clipped — same as current behaviour, ensures wells near the boundary edge always show their dot)
6. Hover tooltip

### 2. Remove unused functions — `wellmap.ts`

Remove `interpolatePressure` and `pressureToRadius`. Both are dead code once the IDW grid and sized markers are gone.

**Keep:** `mergeGeometryAndPressure`, `pressureQuartileColor`, `smoothClosedPath`.

Remove the corresponding unit tests from `wellmap.test.ts`:
- Tests for `interpolatePressure` (basic IDW, exact match, single well — 3 tests)
- Tests for `pressureToRadius` (min, max, mid, clamp — 4 tests)

Net test count: 53 → 46 (7 tests removed, all for deleted functions).

## Files Changed

| File | Change |
|------|--------|
| `webapp/src/components/ReservoirMap.svelte` | Remove grid; add radial gradients + halo circles; fix marker to r=4; strip `r` from DotProps |
| `webapp/src/lib/wellmap.ts` | Remove `interpolatePressure`, `pressureToRadius` |
| `webapp/src/test/wellmap.test.ts` | Remove tests for the two deleted functions |

## What Does Not Change

- `types.ts`, `api.ts` — no changes
- `ReservoirCard.svelte`, `WellMap.svelte` — no changes
- `boundary.json`, `wells.json` — no data changes
- `smoothClosedPath`, `mergeGeometryAndPressure`, `pressureQuartileColor` — kept as-is
- `tsc` should remain clean (only pre-existing jest-dom errors)

## Acceptance Criteria

- The reservoir map shows colored halos centered on each well, blending into a smooth pressure field
- No IDW rect grid is rendered
- Well markers are small fixed dots (r=4) with white stroke
- Hover tooltip appears and positions correctly
- Boundary clipPath clips halos; well marker dots are rendered outside the clip group (same as current behaviour)
- All remaining Vitest tests pass (target: 46)
- `npx tsc --noEmit` produces no new errors
