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

  // Precompute quartile thresholds once per render — avoids O(n log n) sort inside the 1600-cell loop
  const sortedPressures = $derived([...allPressures].sort((a, b) => a - b))
  const q1 = $derived(sortedPressures[Math.floor(sortedPressures.length * 0.25)] ?? 0)
  const q3 = $derived(sortedPressures[Math.floor(sortedPressures.length * 0.75)] ?? 1)

  function cellColor(p: number): string {
    if (p <= q1) return '#22c55e'
    if (p >= q3) return '#ef4444'
    return '#f59e0b'
  }

  // --- Contour grid (40×40) ---
  const GRID = 40
  interface GridCell { x: number; y: number; w: number; h: number; color: string }
  const gridCells = $derived.by((): GridCell[] => {
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
          color: cellColor(p),
        })
      }
    }
    return cells
  })

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
        <path d={boundaryPath} />
      </clipPath>
    </defs>

    <!-- Contour fill (clipped to reservoir boundary) -->
    {#if mappedWells.length > 0}
      <g clip-path="url(#boundary-clip-{reservoirName})">
        {#each gridCells as cell}
          <rect x={cell.x} y={cell.y} width={cell.w} height={cell.h} fill={cell.color} fill-opacity="0.35" />
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
