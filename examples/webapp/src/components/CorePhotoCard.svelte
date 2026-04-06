<script lang="ts">
  import { downloadFileUrl, imageUrl } from '../lib/api'
  import { metadataPath } from '../lib/corephoto'
  import type { CorePhotoMeta } from '../lib/corephoto'
  import Dialog from './ui/Dialog.svelte'
  import Button from './ui/Button.svelte'

  interface Props {
    reservoirName: string
    photoPath: string   // e.g. "PPR1-Well-001/PPR1-Well-001_depth_2021.9m.png"
  }

  let { reservoirName, photoPath }: Props = $props()

  // Metadata fetch state per photo: undefined = not fetched, 'loading', 'error', or the data
  let meta: CorePhotoMeta | 'loading' | 'error' | undefined = $state(undefined)
  let hovered = $state(false)
  let lightboxOpen = $state(false)

  async function fetchMeta() {
    if (meta !== undefined) return  // already fetched or in progress
    meta = 'loading'
    try {
      const url = downloadFileUrl(reservoirName, 'core_photos', metadataPath(photoPath))
      const res = await fetch(url, {
        headers: { 'X-API-Key': localStorage.getItem('reservoir_api_key') ?? '' },
      })
      if (!res.ok) throw new Error(`${res.status}`)
      meta = await res.json() as CorePhotoMeta
    } catch {
      meta = 'error'
    }
  }

  function handleMouseEnter() {
    hovered = true
    fetchMeta()
  }

  const imgSrc = $derived(imageUrl(reservoirName, 'core_photos', photoPath))

  const displayedMeta = $derived(
    (meta && meta !== 'loading' && meta !== 'error' ? meta : null) as CorePhotoMeta | null
  )
</script>

<div
  class="photo-card"
  role="figure"
  onmouseenter={handleMouseEnter}
  onmouseleave={() => { hovered = false }}
>
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
  <img
    src={imgSrc}
    alt={photoPath}
    class="photo-img"
    style={hovered ? 'filter: brightness(0.5);' : ''}
    onclick={() => { lightboxOpen = true; fetchMeta() }}
  />

  {#if hovered}
    <div class="meta-overlay" style="opacity: {meta === 'loading' ? 0.7 : 1};">
      {#if meta === 'loading'}
        <div class="meta-loading">Loading…</div>
      {:else if meta === 'error'}
        <div class="meta-loading">Metadata unavailable</div>
      {:else if displayedMeta}
        <table class="meta-table">
          <tbody>
            <tr><td>Depth</td><td>{displayedMeta.depth_start.toFixed(1)}–{displayedMeta.depth_end.toFixed(1)} m</td></tr>
            <tr><td>Lithology</td><td>{displayedMeta.lithology}</td></tr>
            <tr><td>Porosity</td><td>{(displayedMeta.porosity * 100).toFixed(1)}%</td></tr>
            <tr><td>Perm</td><td>{displayedMeta.permeability.toFixed(1)} mD</td></tr>
            <tr><td>Grain</td><td>{displayedMeta.grain_size}</td></tr>
            <tr><td>Oil stain</td><td>{displayedMeta.oil_staining ? 'Yes' : 'No'}</td></tr>
            <tr><td>Formation</td><td>{displayedMeta.formation}</td></tr>
          </tbody>
        </table>
      {/if}
    </div>
  {/if}
</div>

<!-- Lightbox with metadata panel -->
<Dialog bind:open={lightboxOpen} class="max-w-4xl p-0">
  <div class="lightbox-inner">
    <div class="lightbox-image">
      <img src={imgSrc} alt={photoPath} class="w-full rounded-l" />
    </div>
    <div class="lightbox-meta">
      {#if displayedMeta}
        <h3 class="text-sm font-semibold mb-3">{displayedMeta.well_name}</h3>
        <dl class="meta-dl">
          <dt>Depth</dt><dd>{displayedMeta.depth_start.toFixed(1)}–{displayedMeta.depth_end.toFixed(1)} m</dd>
          <dt>Lithology</dt><dd>{displayedMeta.lithology}</dd>
          <dt>Porosity</dt><dd>{(displayedMeta.porosity * 100).toFixed(1)}%</dd>
          <dt>Permeability</dt><dd>{displayedMeta.permeability.toFixed(1)} mD</dd>
          <dt>Grain size</dt><dd>{displayedMeta.grain_size}</dd>
          <dt>Texture</dt><dd>{displayedMeta.texture}</dd>
          <dt>Color</dt><dd>{displayedMeta.color}</dd>
          <dt>Fractures</dt><dd>{displayedMeta.fractures}</dd>
          <dt>Bedding angle</dt><dd>{displayedMeta.bedding_angle.toFixed(1)}°</dd>
          <dt>Oil staining</dt><dd>{displayedMeta.oil_staining ? 'Yes' : 'No'}</dd>
          <dt>Formation</dt><dd>{displayedMeta.formation}</dd>
          <dt>Field</dt><dd>{displayedMeta.field_name}</dd>
          <dt>Sample date</dt><dd>{displayedMeta.sample_date}</dd>
        </dl>
      {:else}
        <p class="text-sm text-muted-foreground">Metadata unavailable</p>
      {/if}
      <div class="flex justify-end mt-4">
        <Button variant="outline" size="sm" onclick={() => { lightboxOpen = false }}>Close</Button>
      </div>
    </div>
  </div>
</Dialog>

<style>
  .photo-card {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .photo-img {
    height: 192px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    object-fit: cover;
    display: block;
    transition: filter 150ms;
  }

  .meta-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.82);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    transition: opacity 150ms;
    pointer-events: none;
  }

  .meta-loading {
    color: #94a3b8;
    font-size: 12px;
    margin: auto;
  }

  .meta-table {
    width: 100%;
    font-size: 11px;
    border-collapse: collapse;
  }

  .meta-table td {
    padding: 1px 4px;
    color: #e2e8f0;
  }

  .meta-table td:first-child {
    color: #94a3b8;
    white-space: nowrap;
    padding-right: 8px;
  }

  .lightbox-inner {
    display: flex;
    max-height: 80vh;
  }

  .lightbox-image {
    flex: 1;
    overflow: hidden;
  }

  .lightbox-meta {
    width: 220px;
    flex-shrink: 0;
    padding: 20px;
    overflow-y: auto;
    border-left: 1px solid #e2e8f0;
  }

  .meta-dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2px 12px;
    font-size: 12px;
  }

  .meta-dl dt {
    color: #94a3b8;
    white-space: nowrap;
  }

  .meta-dl dd {
    margin: 0;
    color: #1e293b;
    word-break: break-word;
  }
</style>
