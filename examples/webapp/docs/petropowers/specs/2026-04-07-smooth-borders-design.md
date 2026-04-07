# Smooth Borders Design

**Date:** 2026-04-07
**Scope:** `ReservoirMap.svelte`, `ReservoirCard.svelte`

## Goal

Two visual improvements:

1. The reservoir boundary polygon in `ReservoirMap` currently draws straight lines between its 20 vertices, producing a jagged, angular outline. Replace it with a smooth closed bezier curve so the shape reads as a natural geological boundary.
2. The reservoir cards on the dashboard have `rounded-lg` (8px) corners. Increase to `rounded-2xl` (16px) for a softer, more modern feel.

## Design

### 1. Smooth boundary polygon — `ReservoirMap.svelte`

**Algorithm:** Catmull-Rom spline converted to cubic bezier, tension = 0.3.

Add a pure helper function `smoothClosedPath(pts, tension)`:

```ts
function smoothClosedPath(
  pts: { x: number; y: number }[],
  tension = 0.3
): string {
  if (pts.length < 3) return ''
  const n = pts.length
  const p = (i: number) => pts[(i + n) % n]
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < n; i++) {
    const p0 = p(i - 1), p1 = p(i), p2 = p(i + 1), p3 = p(i + 2)
    const cp1x = p1.x + tension * (p2.x - p0.x)
    const cp1y = p1.y + tension * (p2.y - p0.y)
    const cp2x = p2.x - tension * (p3.x - p1.x)
    const cp2y = p2.y - tension * (p3.y - p1.y)
    d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`
  }
  return d + ' Z'
}
```

Rename the existing `boundaryPoints` derived value to `boundaryPath` and have it call `smoothClosedPath` with the SVG-space boundary points:

```ts
const svgBoundaryPts = $derived(
  geometry.boundary.map(p => ({ x: toSvgX(p.x_m), y: toSvgY(p.y_m) }))
)
const boundaryPath = $derived(smoothClosedPath(svgBoundaryPts))
```

Replace both `<polygon points={boundaryPoints}>` elements with `<path d={boundaryPath}>`:

- In `<clipPath>`: `<path d={boundaryPath} />`
- In the outline: `<path d={boundaryPath} fill="none" stroke="#4a5568" stroke-width="1.5" />`

Update the template guard: `{#if boundaryPath}` (truthy when boundary has ≥ 3 points).

**Effect:** Both the contour fill clip region and the visible outline follow the same smooth curve. The IDW-interpolated fill is clipped to the smoothed boundary, not the original jagged polygon.

### 2. Rounder card corners — `ReservoirCard.svelte`

Change the card's `rounded-lg` class to `rounded-2xl` on the `<button>` element.

The existing `overflow-hidden` class already clips the inner SVG map to the card's corner radius, so the map corners will automatically follow the new shape. No other changes needed.

## Files Changed

| File | Change |
|------|--------|
| `webapp/src/components/ReservoirMap.svelte` | Add `smoothClosedPath` helper; `boundaryPoints` → `boundaryPath`; replace `<polygon>` with `<path>` in clipPath and outline |
| `webapp/src/components/ReservoirCard.svelte` | `rounded-lg` → `rounded-2xl` |

## What Does Not Change

- No data changes (`boundary.json` stays as-is with 20 vertices)
- No new tests (SVG rendering not unit-tested)
- No other components
- `tsc` should remain clean (only pre-existing jest-dom errors)

## Acceptance Criteria

- The boundary outline in the reservoir map appears as a smooth curve, not a jagged polygon
- The contour fill (IDW isobar bands) is clipped to the same smooth boundary
- Reservoir cards have visibly rounder corners
- All 49 existing Vitest tests still pass
- `npx tsc --noEmit` produces no new errors
