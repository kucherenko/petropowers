<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { getReservoir } from '../lib/api'
  import type { ReservoirSummary } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import Card from '../components/ui/Card.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let loading = $state(true)
  let error = $state('')
  let summary: ReservoirSummary = $state({})

  const DATA_TYPES: Array<{ key: string; label: string; color: string }> = [
    { key: 'well_logs',      label: 'Well Logs',      color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
    { key: 'production',     label: 'Production',     color: 'bg-green-100 text-green-800 hover:bg-green-200' },
    { key: 'well_map',       label: 'Well Map',        color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
    { key: 'core_photos',    label: 'Core Photos',    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
    { key: 'osdu_manifests', label: 'OSDU Manifests', color: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200' },
  ]

  onMount(async () => {
    try {
      summary = await getReservoir(name)
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name]} />
<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6">{name}</h1>

  {#if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if error}
    <Alert variant="destructive">{error}</Alert>
  {:else}
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {#each DATA_TYPES as dt}
        {#if dt.key === 'well_map' || summary[dt.key] !== undefined}
          <button
            class="rounded-lg border p-5 text-left transition-colors cursor-pointer {dt.color}"
            onclick={() => navigate(`/reservoirs/${name}/${dt.key}`)}
          >
            <div class="text-sm font-medium mb-1">{dt.label}</div>
            <div class="text-3xl font-bold">{dt.key === 'well_map' ? '50' : summary[dt.key]}</div>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</main>
