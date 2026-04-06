<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import uPlot from 'uplot'
  import 'uplot/dist/uPlot.min.css'

  interface ProductionRow {
    date: number   // Unix timestamp (seconds)
    oil: number
    gas: number
    water: number
    pressure: number
    temperature: number
  }

  interface Props {
    rows: ProductionRow[]
    visibleSeries?: Array<'oil' | 'gas' | 'water' | 'pressure'>
  }
  let { rows, visibleSeries = ['oil', 'gas', 'water', 'pressure'] }: Props = $props()

  let container: HTMLDivElement | undefined = $state()
  let plot: uPlot | undefined

  const SERIES_CONFIG: Record<string, { label: string; stroke: string; scale: string }> = {
    oil:         { label: 'Oil (m³/d)',    stroke: '#22c55e', scale: 'rate' },
    gas:         { label: 'Gas (m³/d)',    stroke: '#f59e0b', scale: 'rate' },
    water:       { label: 'Water (m³/d)',  stroke: '#3b82f6', scale: 'rate' },
    pressure:    { label: 'Pressure (bar)',stroke: '#ef4444', scale: 'pressure' },
  }

  function buildPlot() {
    if (!container) return
    const dates = rows.map(r => r.date)
    const seriesData = (visibleSeries as string[]).map(k => rows.map((r) => (r as unknown as Record<string, number>)[k]))

    const opts: uPlot.Options = {
      width: container.clientWidth || 800,
      height: 350,
      scales: {
        x: { time: true },
        rate: { auto: true },
        pressure: { auto: true, side: 1 } as uPlot.Scale,
      },
      axes: [
        { label: 'Date' },
        { scale: 'rate', label: 'Rate (m³/d)' },
        { scale: 'pressure', label: 'Pressure (bar)', side: 1 },
      ],
      series: [
        {},
        ...(visibleSeries as string[]).map(k => ({
          label: SERIES_CONFIG[k].label,
          stroke: SERIES_CONFIG[k].stroke,
          scale: SERIES_CONFIG[k].scale,
          width: 1.5,
          spanGaps: false,
        })),
      ],
    }
    plot?.destroy()
    plot = new uPlot(opts, [dates, ...seriesData], container)
  }

  onMount(buildPlot)
  onDestroy(() => plot?.destroy())
  $effect(() => { rows; buildPlot() })
</script>

<div bind:this={container} class="w-full border rounded-lg overflow-hidden"></div>
