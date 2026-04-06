<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { listReservoirs, getReservoir } from '../lib/api'
  import type { ReservoirSummary } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import ReservoirCard from '../components/ReservoirCard.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  let loading = $state(true)
  let error = $state('')
  let items: Array<{ name: string; summary: ReservoirSummary }> = $state([])

  onMount(async () => {
    try {
      const names = await listReservoirs()
      const summaries = await Promise.all(names.map(n => getReservoir(n)))
      items = names.map((name, i) => ({ name, summary: summaries[i] }))
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar />
<main class="p-6 max-w-6xl mx-auto">
  {#if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if error}
    <Alert variant="destructive">{error}</Alert>
  {:else}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {#each items as { name, summary }}
        <ReservoirCard
          {name}
          {summary}
          onclick={() => navigate(`/reservoirs/${name}`)}
        />
      {/each}
    </div>
  {/if}
</main>
