<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl, imageUrl } from '../lib/api'
  import { parseLas } from '../lib/las'
  import type { LasData } from '../lib/las'
  import NavBar from '../components/NavBar.svelte'
  import WellLogPanel from '../components/WellLogPanel.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let wellFiles: string[] = $state([])
  let photoFiles: string[] = $state([])
  let selectedWell = $state('')
  let lasData: LasData | null = $state(null)
  let loading = $state(false)
  let pageError = $state('')

  onMount(async () => {
    try {
      ;[wellFiles, photoFiles] = await Promise.all([
        listFiles(name, 'well_logs'),
        listFiles(name, 'core_photos').catch(() => []),
      ])
      if (wellFiles.length) selectedWell = wellFiles[0]
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    }
  })

  $effect(() => {
    if (!selectedWell) return
    loading = true
    lasData = null
    fetch(downloadFileUrl(name, 'well_logs', selectedWell), {
      headers: { 'X-API-Key': localStorage.getItem('reservoir_api_key') ?? '' },
    })
      .then(r => r.text())
      .then(text => { lasData = parseLas(text) })
      .catch(e => { pageError = e.message })
      .finally(() => { loading = false })
  })

  // Well name stem: "PPR1-Well-001.las" → "PPR1-Well-001"
  const wellStem = $derived(selectedWell.replace(/\.las$/i, ''))
  const wellPhotos = $derived(photoFiles.filter(p => p.startsWith(wellStem + '/')))
</script>

<NavBar breadcrumb={[name, 'Well Logs']} />
<main class="p-6 max-w-7xl mx-auto">
  <div class="flex items-center gap-4 mb-4">
    <label class="text-sm font-medium">Well:</label>
    <select
      class="border rounded-md px-2 py-1 text-sm bg-background"
      bind:value={selectedWell}
    >
      {#each wellFiles as f}
        <option value={f}>{f.replace('.las', '')}</option>
      {/each}
    </select>
  </div>

  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if lasData}
    <WellLogPanel data={lasData} />

    {#if wellPhotos.length}
      <h2 class="text-lg font-semibold mt-6 mb-2">Core Photos</h2>
      <div class="flex gap-3 overflow-x-auto">
        {#each wellPhotos as photo}
          <img
            src={imageUrl(name, 'core_photos', photo)}
            alt={photo}
            class="h-48 rounded border object-cover"
          />
        {/each}
      </div>
    {/if}
  {/if}
</main>
