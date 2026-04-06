<script lang="ts">
  import { onMount } from 'svelte'
  import Papa from 'papaparse'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import ReservoirMap from '../components/ReservoirMap.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  interface WellData { wellName: string; avgPressure: number }

  let wells: WellData[] = $state([])
  let loading = $state(true)
  let pageError = $state('')

  onMount(async () => {
    try {
      const files = await listFiles(name, 'production')
      const apiKey = localStorage.getItem('reservoir_api_key') ?? ''

      const results = await Promise.all(
        files.map(async (file) => {
          const res = await fetch(downloadFileUrl(name, 'production', file), {
            headers: { 'X-API-Key': apiKey },
          })
          if (!res.ok) return null
          const text = await res.text()
          const parsed = Papa.parse<Record<string, string>>(text, {
            header: true,
            skipEmptyLines: true,
          })
          const pressures = parsed.data
            .map(r => parseFloat(r['wellhead_pressure_psi']))
            .filter(v => isFinite(v))
          if (pressures.length === 0) return null
          const avg = pressures.reduce((a, b) => a + b, 0) / pressures.length
          // Derive well name from filename: "PPR1-Well-001_production.csv" → "PPR1-Well-001"
          const wellName = file.replace(/_production\.csv$/i, '')
          return { wellName, avgPressure: avg } satisfies WellData
        })
      )

      wells = results.filter((r): r is WellData => r !== null)
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
