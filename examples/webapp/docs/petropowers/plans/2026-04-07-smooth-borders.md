# Smooth Borders Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the jagged straight-line reservoir boundary polygon with a smooth Catmull-Rom bezier curve, and increase card corner radius from `rounded-lg` to `rounded-2xl`.

**Architecture:** Two isolated changes in two files. `ReservoirMap.svelte` gains a `smoothClosedPath()` helper and switches from `<polygon>` to `<path>` for both the `<clipPath>` shape and the visible outline. `ReservoirCard.svelte` gets a one-class change. No data changes, no new files, no API changes.

**Tech Stack:** TypeScript, Svelte 5 runes, SVG path commands, Tailwind CSS

---

## File Map

| File | Action | Change |
|------|--------|--------|
| `webapp/src/components/ReservoirMap.svelte` | Modify | Add `smoothClosedPath` helper; replace `boundaryPoints` with `svgBoundaryPts` + `boundaryPath`; swap `<polygon>` → `<path>` in clipPath and outline |
| `webapp/src/components/ReservoirCard.svelte` | Modify | `rounded-lg` → `rounded-2xl` |

---

## Task 1: Smooth the reservoir boundary in `ReservoirMap.svelte`

**Files:**
- Modify: `webapp/src/components/ReservoirMap.svelte`

No unit tests for SVG rendering. Verification is via `tsc --noEmit` and manual visual check.

- [ ] **Step 1: Add the `smoothClosedPath` helper function**

In `webapp/src/components/ReservoirMap.svelte`, inside the `<script>` block, add this function directly after the `handleClick` function (before `</script>`):

```ts
  /**
   * Convert an array of SVG-space {x, y} points into a smooth closed SVG path
   * using Catmull-Rom to cubic bezier conversion.
   * tension=0.3 produces gentle curves that preserve the overall polygon shape.
   * Returns '' when fewer than 3 points are provided.
   */
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

- [ ] **Step 2: Replace `boundaryPoints` with `svgBoundaryPts` + `boundaryPath`**

Find and replace the existing `boundaryPoints` derived value:

Old (lines 78–81):
```ts
  // --- Boundary polygon points for SVG ---
  const boundaryPoints = $derived(
    geometry.boundary.map(p => `${toSvgX(p.x_m)},${toSvgY(p.y_m)}`).join(' ')
  )
```

New:
```ts
  // --- Boundary path (smooth bezier) ---
  const svgBoundaryPts = $derived(
    geometry.boundary.map(p => ({ x: toSvgX(p.x_m), y: toSvgY(p.y_m) }))
  )
  const boundaryPath = $derived(smoothClosedPath(svgBoundaryPts))
```

- [ ] **Step 3: Update the `<clipPath>` in the SVG template**

Find and replace:
```svelte
      <clipPath id="boundary-clip-{reservoirName}">
        <polygon points={boundaryPoints} />
      </clipPath>
```

With:
```svelte
      <clipPath id="boundary-clip-{reservoirName}">
        <path d={boundaryPath} />
      </clipPath>
```

- [ ] **Step 4: Update the boundary outline in the SVG template**

Find and replace:
```svelte
    <!-- Reservoir boundary outline -->
    {#if boundaryPoints}
      <polygon points={boundaryPoints} fill="none" stroke="#4a5568" stroke-width="1.5" />
    {/if}
```

With:
```svelte
    <!-- Reservoir boundary outline -->
    {#if boundaryPath}
      <path d={boundaryPath} fill="none" stroke="#4a5568" stroke-width="1.5" />
    {/if}
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
cd examples/webapp
npx tsc --noEmit
```

Expected: only the pre-existing jest-dom errors (`Cannot find type definition file for 'jest'`), nothing new.

- [ ] **Step 6: Run all tests**

```bash
cd examples/webapp
npx vitest run
```

Expected: 49 tests pass across 8 files.

- [ ] **Step 7: Commit**

```bash
cd examples
git add webapp/src/components/ReservoirMap.svelte
git commit -m "feat: smooth reservoir boundary with Catmull-Rom bezier curves"
```

---

## Task 2: Increase card corner radius in `ReservoirCard.svelte`

**Files:**
- Modify: `webapp/src/components/ReservoirCard.svelte`

- [ ] **Step 1: Update the corner radius class**

In `webapp/src/components/ReservoirCard.svelte`, find and replace on the `<button>` element:

Old:
```svelte
  class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-full text-left cursor-pointer hover:shadow-md transition-shadow"
```

New:
```svelte
  class="rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden w-full text-left cursor-pointer hover:shadow-md transition-shadow"
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd examples/webapp
npx tsc --noEmit
```

Expected: only the pre-existing jest-dom errors, nothing new.

- [ ] **Step 3: Run all tests**

```bash
cd examples/webapp
npx vitest run
```

Expected: 49 tests pass across 8 files.

- [ ] **Step 4: Commit**

```bash
cd examples
git add webapp/src/components/ReservoirCard.svelte
git commit -m "feat: increase card corner radius to rounded-2xl"
```

---

## Summary

| Task | Files | Tests |
|------|-------|-------|
| 1 — Smooth boundary | `ReservoirMap.svelte` | tsc + 49 vitest |
| 2 — Card corners | `ReservoirCard.svelte` | tsc + 49 vitest |
