<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
  import type { SegyData } from '../lib/segy'
  import Slider from './ui/Slider.svelte'

  interface Props { segy: SegyData }
  let { segy }: Props = $props()

  let canvasEl: HTMLCanvasElement | undefined = $state()
  let renderer: THREE.WebGLRenderer | undefined
  let animFrameId: number | undefined

  // Slice indices
  let ilIdx = $state(0)
  let xlIdx = $state(0)
  let tIdx = $state(0)

  let ilMesh: THREE.Mesh | undefined
  let xlMesh: THREE.Mesh | undefined
  let tMesh: THREE.Mesh | undefined
  let scene: THREE.Scene | undefined
  let camera: THREE.PerspectiveCamera | undefined

  const ilCount = $derived(segy.inlines.length)
  const xlCount = $derived(segy.crosslines.length)
  const tCount = $derived(segy.samplesPerTrace)

  /** Map amplitude value to 0-255 grayscale using global min/max */
  function buildTexture(getAmp: (a: number, b: number) => number, rows: number, cols: number): THREE.DataTexture {
    const data = new Uint8Array(rows * cols)
    let min = Infinity, max = -Infinity
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const v = getAmp(r, c)
        if (isFinite(v)) { min = Math.min(min, v); max = Math.max(max, v) }
      }
    const range = max - min || 1
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        data[r * cols + c] = Math.round(((getAmp(r, c) - min) / range) * 255)
    const tex = new THREE.DataTexture(data, cols, rows, THREE.LuminanceFormat)
    tex.needsUpdate = true
    return tex
  }

  function makeSlice(w: number, h: number, texture: THREE.DataTexture): THREE.Mesh {
    const geo = new THREE.PlaneGeometry(w, h)
    const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
    return new THREE.Mesh(geo, mat)
  }

  function updateIlSlice() {
    if (!scene || !ilMesh) return
    const il = segy.inlines[ilIdx]
    const tex = buildTexture((xi, ti) => segy.amplitude(il, segy.crosslines[xi], ti), xlCount, tCount)
    ;(ilMesh.material as THREE.MeshBasicMaterial).map = tex
    ;(ilMesh.material as THREE.MeshBasicMaterial).needsUpdate = true
    ilMesh.position.x = ilIdx - ilCount / 2
  }

  function updateXlSlice() {
    if (!scene || !xlMesh) return
    const xl = segy.crosslines[xlIdx]
    const tex = buildTexture((ili, ti) => segy.amplitude(segy.inlines[ili], xl, ti), ilCount, tCount)
    ;(xlMesh.material as THREE.MeshBasicMaterial).map = tex
    ;(xlMesh.material as THREE.MeshBasicMaterial).needsUpdate = true
    xlMesh.position.z = xlIdx - xlCount / 2
  }

  function updateTSlice() {
    if (!scene || !tMesh) return
    const tex = buildTexture((ili, xli) => segy.amplitude(segy.inlines[ili], segy.crosslines[xli], tIdx), ilCount, xlCount)
    ;(tMesh.material as THREE.MeshBasicMaterial).map = tex
    ;(tMesh.material as THREE.MeshBasicMaterial).needsUpdate = true
    tMesh.position.y = -tIdx + tCount / 2
  }

  onMount(() => {
    if (!canvasEl) return
    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true })
    renderer.setSize(canvasEl.clientWidth, canvasEl.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1e1e2e)

    camera = new THREE.PerspectiveCamera(45, canvasEl.clientWidth / canvasEl.clientHeight, 0.1, 2000)
    camera.position.set(ilCount, tCount, xlCount)
    camera.lookAt(0, 0, 0)

    const controls = new OrbitControls(camera, canvasEl)
    controls.enableDamping = true

    // Build initial slices
    const ilTex = buildTexture((xi, ti) => segy.amplitude(segy.inlines[0], segy.crosslines[xi], ti), xlCount, tCount)
    ilMesh = makeSlice(xlCount, tCount, ilTex)
    ilMesh.rotation.y = Math.PI / 2
    scene.add(ilMesh)

    const xlTex = buildTexture((ili, ti) => segy.amplitude(segy.inlines[ili], segy.crosslines[0], ti), ilCount, tCount)
    xlMesh = makeSlice(ilCount, tCount, xlTex)
    scene.add(xlMesh)

    const tTex = buildTexture((ili, xli) => segy.amplitude(segy.inlines[ili], segy.crosslines[xli], 0), ilCount, xlCount)
    tMesh = makeSlice(ilCount, xlCount, tTex)
    tMesh.rotation.x = Math.PI / 2
    scene.add(tMesh)

    scene.add(new THREE.AxesHelper(Math.max(ilCount, xlCount, tCount) * 0.5))

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      controls.update()
      renderer!.render(scene!, camera!)
    }
    animate()
  })

  onDestroy(() => {
    if (animFrameId) cancelAnimationFrame(animFrameId)
    renderer?.dispose()
  })

  $effect(() => { ilIdx; updateIlSlice() })
  $effect(() => { xlIdx; updateXlSlice() })
  $effect(() => { tIdx; updateTSlice() })
</script>

<div class="flex flex-col gap-4">
  <canvas bind:this={canvasEl} class="w-full rounded-lg border" style="height: 550px;"></canvas>
  <div class="grid grid-cols-3 gap-4">
    <Slider bind:value={ilIdx} min={0} max={ilCount - 1} step={1} label="Inline" />
    <Slider bind:value={xlIdx} min={0} max={xlCount - 1} step={1} label="Crossline" />
    <Slider bind:value={tIdx}  min={0} max={tCount - 1}  step={1} label="Time slice" />
  </div>
</div>
