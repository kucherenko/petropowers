<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, imageUrl } from '../lib/api'
  import NavBar from '../components/NavBar.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'
  import Dialog from '../components/ui/Dialog.svelte'
  import Button from '../components/ui/Button.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let files: string[] = $state([])
  let loading = $state(true)
  let pageError = $state('')
  let lightboxSrc = $state('')
  let lightboxOpen = $state(false)

  // Group files by well name: "PPR1-Well-001/photo_001.png" → grouped by "PPR1-Well-001"
  const grouped = $derived(() => {
    const map = new Map<string, string[]>()
    for (const f of files) {
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

  function openLightbox(src: string) {
    lightboxSrc = src
    lightboxOpen = true
  }
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
            <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
            <img
              src={imageUrl(name, 'core_photos', photo)}
              alt={photo}
              class="h-48 rounded-lg border object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onclick={() => openLightbox(imageUrl(name, 'core_photos', photo))}
            />
          {/each}
        </div>
      </section>
    {/each}
  {/if}
</main>

<Dialog bind:open={lightboxOpen} class="max-w-3xl p-2">
  <img src={lightboxSrc} alt="Core photo" class="w-full rounded" />
  <div class="flex justify-end mt-2">
    <Button variant="outline" size="sm" onclick={() => { lightboxOpen = false }}>Close</Button>
  </div>
</Dialog>
