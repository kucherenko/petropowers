<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import { parseSegy } from '../lib/segy'
  import type { SegyData } from '../lib/segy'
  import NavBar from '../components/NavBar.svelte'
  import SeismicViewer from '../components/SeismicViewer.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let segy: SegyData | null = $state(null)
  let loading = $state(true)
  let pageError = $state('')

  onMount(async () => {
    try {
      const files = await listFiles(name, 'seismic')
      const segyFile = files.find(f => f.endsWith('.segy') || f.endsWith('.sgy'))
      if (!segyFile) throw new Error('No SEG-Y file found for this reservoir')
      const apiKey = localStorage.getItem('reservoir_api_key') ?? ''
      const r = await fetch(downloadFileUrl(name, 'seismic', segyFile), { headers: { 'X-API-Key': apiKey } })
      const buf = await r.arrayBuffer()
      segy = parseSegy(buf)
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Seismic']} />
<main class="p-6 max-w-6xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex flex-col items-center gap-3 py-12">
      <Spinner class="h-8 w-8" />
      <p class="text-sm text-muted-foreground">Loading SEG-Y file…</p>
    </div>
  {:else if segy}
    <SeismicViewer {segy} />
    <p class="text-xs text-muted-foreground mt-2">
      {segy.inlines.length} inlines × {segy.crosslines.length} crosslines × {segy.samplesPerTrace} time samples
      — drag to orbit, scroll to zoom, sliders control slice position
    </p>
  {/if}
</main>
