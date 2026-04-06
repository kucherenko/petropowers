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
        No well or geometry data
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
