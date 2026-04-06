<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import type { WellPathJson } from '../lib/wellpath'
  import NavBar from '../components/NavBar.svelte'
  import WellPaths3D from '../components/WellPaths3D.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let wellPaths: Array<{ name: string; path: WellPathJson }> = $state([])
  let loading = $state(true)
  let pageError = $state('')
  let loaded = $state(0)

  onMount(async () => {
    try {
      const files = await listFiles(name, 'well_paths')
      const apiKey = localStorage.getItem('reservoir_api_key') ?? ''
      const results = await Promise.all(
        files.map(async f => {
          const r = await fetch(downloadFileUrl(name, 'well_paths', f), { headers: { 'X-API-Key': apiKey } })
          const path: WellPathJson = await r.json()
          loaded += 1
          return { name: f.replace('_path.json', ''), path }
        })
      )
      wellPaths = results
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Well Paths']} />
<main class="p-6 max-w-6xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex flex-col items-center gap-3 py-12">
      <Spinner class="h-8 w-8" />
      <p class="text-sm text-muted-foreground">Loading well paths… {loaded} fetched</p>
    </div>
  {:else}
    <WellPaths3D {wellPaths} />
    <p class="text-xs text-muted-foreground mt-2">
      {wellPaths.length} wells — drag to rotate, scroll to zoom, right-click to pan
    </p>
  {/if}
</main>
