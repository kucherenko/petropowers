<script lang="ts">
  import { onMount } from 'svelte'
  import { loadWellPressures } from '../lib/api'
  import type { WellPressure } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import ReservoirMap from '../components/ReservoirMap.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let wells: WellPressure[] = $state([])
  let loading = $state(true)
  let pageError = $state('')

  onMount(async () => {
    try {
      wells = await loadWellPressures(name)
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
