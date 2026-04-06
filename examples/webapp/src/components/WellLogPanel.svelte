<script lang="ts">
  import type { LasData } from '../lib/las'
  import { depthToY, linearToX, log10ToX } from '../lib/logscale'

  interface Props { data: LasData }
  let { data }: Props = $props()

  const SVG_H = 2000        // SVG coordinate height (all tracks share this)
  const TRACK_W = 100       // SVG coordinate width per track
  const TICK_INTERVAL = 100 // depth tick every 100 m

  const depthMin = $derived(data.depth[0] ?? 0)
  const depthMax = $derived(data.depth[data.depth.length - 1] ?? 1)

  function toY(d: number) { return depthToY(d, depthMin, depthMax, SVG_H) }

  /** Build an SVG polyline points string from parallel depth + value arrays. */
  function buildPoints(
    values: number[],
    toX: (v: number) => number
  ): string {
    return data.depth
      .map((d, i) => {
        const v = values[i]
        if (!isFinite(v)) return null
        return `${toX(v).toFixed(1)},${toY(d).toFixed(1)}`
      })
      .filter(Boolean)
      .join(' ')
  }

  /** Build an SVG path for a left-fill (shale indicator) on GR track. */
  function grFillPath(values: number[]): string {
    const points = data.depth
      .map((d, i) => {
        const v = values[i]
        if (!isFinite(v)) return null
        return { x: linearToX(v, 0, 150, TRACK_W), y: toY(d) }
      })
      .filter(Boolean) as { x: number; y: number }[]
    if (points.length < 2) return ''
    const first = points[0]
    const last = points[points.length - 1]
    const outline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')
    return `M 0,${first.y.toFixed(1)} L ${outline} L 0,${last.y.toFixed(1)} Z`
  }

  const gr    = $derived(data.curves['GR']   ?? [])
  const rhob  = $derived(data.curves['RHOB'] ?? [])
  const nphi  = $derived(data.curves['NPHI'] ?? [])
  const rt    = $derived(data.curves['RT']   ?? [])
  const dt    = $derived(data.curves['DT']   ?? [])

  // Precompute polyline points for each curve
  const grPoints   = $derived(buildPoints(gr,   v => linearToX(v, 0, 150, TRACK_W)))
  const rhobPoints = $derived(buildPoints(rhob, v => linearToX(v, 1.7, 2.9, TRACK_W)))
  const nphiPoints = $derived(buildPoints(nphi, v => linearToX(v, 0.45, 0, TRACK_W))) // reversed
  const rtPoints   = $derived(buildPoints(rt,   v => log10ToX(v, 0.2, 2000, TRACK_W)))
  const dtPoints   = $derived(buildPoints(dt,   v => linearToX(v, 140, 40, TRACK_W)))  // reversed
  const grFill     = $derived(grFillPath(gr))

  // Depth tick marks
  const ticks = $derived(() => {
    const result: number[] = []
    const start = Math.ceil(depthMin / TICK_INTERVAL) * TICK_INTERVAL
    for (let d = start; d <= depthMax; d += TICK_INTERVAL) result.push(d)
    return result
  })
</script>

<!--
  Layout: [depth ruler] [GR track] [RHOB+NPHI track] [RT track] [DT track]
  All tracks share the same SVG coordinate height (SVG_H) so they are depth-synced.
  The outer div is vertically scrollable; track headers are sticky.
-->
<div class="well-log-panel" style="--track-w:{TRACK_W}px; --svg-h:{SVG_H}px;">
  <!-- Sticky header row -->
  <div class="log-headers">
    <div class="depth-header">DEPTH<br/>(m)</div>
    <div class="track-header" style="color:#22c55e;">GR<br/><span>0 — 150 API</span></div>
    <div class="track-header" style="color:#3b82f6;">RHOB / NPHI<br/><span>1.7—2.9 g/cc / 0.45—0</span></div>
    <div class="track-header" style="color:#f59e0b;">RT<br/><span>0.2 — 2000 Ω·m</span></div>
    <div class="track-header" style="color:#8b5cf6;">DT<br/><span>140 — 40 µs/ft</span></div>
  </div>

  <!-- Scrollable track area -->
  <div class="log-tracks">
    <!-- Depth ruler -->
    <div class="depth-ruler">
      <svg viewBox="0 0 40 {SVG_H}" width="40" height={SVG_H} preserveAspectRatio="none">
        {#each ticks() as tick}
          <line x1="28" y1={toY(tick)} x2="40" y2={toY(tick)} stroke="#444" stroke-width="1"/>
          <text x="0" y={toY(tick) + 4} font-size="16" fill="#888">{tick}</text>
        {/each}
      </svg>
    </div>

    <!-- GR track with left-fill -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if grFill}
          <path d={grFill} fill="#22c55e" fill-opacity="0.25"/>
        {/if}
        {#if grPoints}
          <polyline points={grPoints} fill="none" stroke="#22c55e" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>

    <!-- RHOB + NPHI shared track -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if rhobPoints}
          <polyline points={rhobPoints} fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        {/if}
        {#if nphiPoints}
          <polyline points={nphiPoints} fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3"/>
        {/if}
      </svg>
    </div>

    <!-- RT track (log scale) -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if rtPoints}
          <polyline points={rtPoints} fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>

    <!-- DT track (reversed scale) -->
    <div class="track">
      <svg viewBox="0 0 {TRACK_W} {SVG_H}" width={TRACK_W} height={SVG_H} preserveAspectRatio="none">
        {#if dtPoints}
          <polyline points={dtPoints} fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
        {/if}
      </svg>
    </div>
  </div>
</div>

<style>
  .well-log-panel {
    display: flex;
    flex-direction: column;
    border: 1px solid #2a3040;
    border-radius: 8px;
    background: #0f1117;
    overflow: hidden;
    max-height: 75vh;
  }

  .log-headers {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #0f1117;
    border-bottom: 2px solid #2a3040;
    flex-shrink: 0;
  }

  .depth-header {
    width: 40px;
    min-width: 40px;
    font-size: 10px;
    color: #888;
    text-align: center;
    padding: 6px 2px;
    border-right: 1px solid #2a3040;
    line-height: 1.3;
  }

  .track-header {
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    padding: 6px 4px;
    border-right: 1px solid #2a3040;
    line-height: 1.3;
  }

  .track-header span {
    display: block;
    font-size: 9px;
    color: #666;
    font-weight: normal;
  }

  .log-tracks {
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .depth-ruler {
    width: 40px;
    min-width: 40px;
    flex-shrink: 0;
    border-right: 1px solid #2a3040;
    background: #13161f;
  }

  .track {
    flex: 1;
    border-right: 1px solid #2a3040;
    background: #0f1117;
    overflow: hidden;
  }

  .track:last-child {
    border-right: none;
  }
</style>
