<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { listReservoirs, getReservoir } from '../lib/api'
  import type { ReservoirSummary } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import Card from '../components/ui/Card.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'
  import Badge from '../components/ui/Badge.svelte'

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
<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6">Reservoirs</h1>

  {#if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if error}
    <Alert variant="destructive">{error}</Alert>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each items as { name, summary }}
        <Card onclick={() => navigate(`/reservoirs/${name}`)} class="p-5">
          <h2 class="text-lg font-semibold mb-2">{name}</h2>
          <div class="flex flex-wrap gap-1">
            {#each Object.entries(summary) as [type, count]}
              <Badge variant="secondary">{type}: {count}</Badge>
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  {/if}
</main>
