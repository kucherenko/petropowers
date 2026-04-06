<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let files: string[] = $state([])
  let selected = $state('')
  let manifest: unknown = $state(null)
  let loading = $state(false)
  let pageError = $state('')

  onMount(async () => {
    try {
      files = await listFiles(name, 'osdu_manifests')
      if (files.length) selected = files[0]
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    }
  })

  $effect(() => {
    if (!selected) return
    loading = true
    manifest = null
    fetch(downloadFileUrl(name, 'osdu_manifests', selected), {
      headers: { 'X-API-Key': localStorage.getItem('reservoir_api_key') ?? '' },
    })
      .then(r => r.json())
      .then(j => { manifest = j })
      .catch(e => { pageError = e.message })
      .finally(() => { loading = false })
  })
</script>

<NavBar breadcrumb={[name, 'OSDU Manifests']} />
<main class="p-6 max-w-4xl mx-auto">
  <div class="flex items-center gap-4 mb-4">
    <label class="text-sm font-medium">File:</label>
    <select class="border rounded-md px-2 py-1 text-sm bg-background flex-1" bind:value={selected}>
      {#each files as f}
        <option value={f}>{f}</option>
      {/each}
    </select>
  </div>

  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if manifest}
    <pre class="rounded-lg border bg-muted/40 p-4 text-xs overflow-auto max-h-[70vh] font-mono">{JSON.stringify(manifest, null, 2)}</pre>
  {/if}
</main>
