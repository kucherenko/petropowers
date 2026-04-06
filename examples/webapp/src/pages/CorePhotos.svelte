<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import CorePhotoCard from '../components/CorePhotoCard.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let files: string[] = $state([])
  let loading = $state(true)
  let pageError = $state('')

  // Group files by well: "PPR1-Well-001/photo_001.png" → keyed by "PPR1-Well-001"
  const grouped = $derived(() => {
    const map = new Map<string, string[]>()
    for (const f of files) {
      // Skip metadata JSON sidecars — show only image files
      if (f.endsWith('_metadata.json')) continue
      const slash = f.indexOf('/')
      if (slash === -1) continue
      const well = f.slice(0, slash)
      if (!map.has(well)) map.set(well, [])
      map.get(well)!.push(f)
    }
    return map
  })

  onMount(async () => {
    try {
      files = await listFiles(name, 'core_photos')
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Core Photos']} />
<main class="p-6 max-w-6xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if files.length === 0}
    <p class="text-muted-foreground">No core photos available for this reservoir.</p>
  {:else}
    {#each [...grouped().entries()] as [well, photos]}
      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-3">{well}</h2>
        <div class="flex flex-wrap gap-3">
          {#each photos as photo}
            <CorePhotoCard reservoirName={name} photoPath={photo} />
          {/each}
        </div>
      </section>
    {/each}
  {/if}
</main>
