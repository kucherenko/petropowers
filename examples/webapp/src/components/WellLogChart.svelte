<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import uPlot from 'uplot'
  import 'uplot/dist/uPlot.min.css'
  import type { LasData } from '../lib/las'

  interface Props {
    data: LasData
    visibleCurves?: string[]
  }
  let { data, visibleCurves = ['GR', 'RHOB', 'NPHI', 'RT', 'DT'] }: Props = $props()

  // Each curve gets its own track (uPlot instance sharing depth axis)
  const CURVE_COLORS: Record<string, string> = {
    GR: '#22c55e', RHOB: '#3b82f6', NPHI: '#ef4444', RT: '#f59e0b', DT: '#8b5cf6',
  }

  let containers: HTMLDivElement[] = $state([])
  let plots: uPlot[] = []

  function buildPlot(container: HTMLDivElement, curveName: string) {
    const depthVals = data.depth
    const curveVals = data.curves[curveName] ?? []
    const opts: uPlot.Options = {
      width: 140,
      height: container.parentElement?.clientHeight ?? 500,
      title: curveName,
      axes: [
        { show: false }, // x (depth) hidden — we display it once outside
        { label: curveName },
      ],
      series: [
        {},
        {
          stroke: CURVE_COLORS[curveName] ?? '#64748b',
          width: 1.5,
          label: curveName,
          spanGaps: false,
        },
      ],
    }
    return new uPlot(opts, [depthVals, curveVals], container)
  }

  onMount(() => {
    plots = containers.map((c, i) => buildPlot(c, activeCurves[i]))
  })

  onDestroy(() => {
    plots.forEach(p => p.destroy())
    plots = []
  })

  const activeCurves = $derived(
    visibleCurves.filter(c => Object.keys(data.curves).includes(c))
  )
</script>

<div class="flex gap-2 overflow-x-auto border rounded-lg bg-background p-2" style="min-height: 500px;">
  <!-- Depth axis label -->
  <div class="flex flex-col justify-between text-xs text-muted-foreground py-8 pr-1 min-w-[40px]">
    <span>{data.depth[0]?.toFixed(0)} m</span>
    <span>Depth</span>
    <span>{data.depth[data.depth.length - 1]?.toFixed(0)} m</span>
  </div>
  {#each activeCurves as _curve, i}
    <div bind:this={containers[i]}></div>
  {/each}
</div>
