<script lang="ts">
  import { onMount } from 'svelte'
  import Papa from 'papaparse'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import ProductionChart from '../components/ProductionChart.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  interface ProductionRow {
    date: number; oil: number; gas: number; water: number; pressure: number; temperature: number
  }

  let files: string[] = $state([])
  let selected = $state('')
  let rows: ProductionRow[] = $state([])
  let loading = $state(false)
  let pageError = $state('')

  onMount(async () => {
    try {
      files = await listFiles(name, 'production')
      const params = new URLSearchParams(window.location.search)
      const wellParam = params.get('well')
      if (wellParam && files.includes(wellParam)) {
        selected = wellParam
      } else if (files.length) {
        selected = files[0]
      }
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    }
  })

  $effect(() => {
    if (!selected) return
    loading = true
    rows = []
    fetch(downloadFileUrl(name, 'production', selected), {
      headers: { 'X-API-Key': localStorage.getItem('reservoir_api_key') ?? '' },
    })
      .then(r => r.text())
      .then(text => {
        const parsed = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: true })
        rows = parsed.data.map(r => ({
          date: new Date(r['date']).getTime() / 1000,
          oil: +r['oil_rate_bbl_d'],
          gas: +r['gas_rate_mscf_d'],
          water: +r['water_rate_bbl_d'],
          pressure: +r['wellhead_pressure_psi'],
          temperature: +r['temperature_f'],
        }))
      })
      .catch(e => { pageError = e.message })
      .finally(() => { loading = false })
  })
</script>

<NavBar breadcrumb={[name, 'Production']} />
<main class="p-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-4">
    <label class="text-sm font-medium">Well:</label>
    <select class="border rounded-md px-2 py-1 text-sm bg-background" bind:value={selected}>
      {#each files as f}
        <option value={f}>{f.replace('_production.csv', '')}</option>
      {/each}
    </select>
  </div>

  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if rows.length}
    <ProductionChart {rows} />
  {/if}
</main>
