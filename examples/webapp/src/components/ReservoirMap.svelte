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
