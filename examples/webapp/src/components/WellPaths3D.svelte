<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
  import { wellpathToXyz } from '../lib/wellpath'
  import type { WellPathJson } from '../lib/wellpath'

  interface Props {
    wellPaths: Array<{ name: string; path: WellPathJson }>
  }
  let { wellPaths }: Props = $props()

  let canvasEl: HTMLCanvasElement | undefined = $state()
  let renderer: THREE.WebGLRenderer | undefined
  let animFrameId: number | undefined

  // 50 distinct colors for wells
  const COLORS = Array.from({ length: 50 }, (_, i) =>
    new THREE.Color().setHSL(i / 50, 0.75, 0.5)
  )

  onMount(() => {
    if (!canvasEl) return
    const width = canvasEl.clientWidth
    const height = canvasEl.clientHeight

    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8fafc)

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 50000)
    camera.position.set(2000, -1500, 3000)
    camera.lookAt(0, -1500, 0)

    const controls = new OrbitControls(camera, canvasEl)
    controls.enableDamping = true
    controls.target.set(0, -1500, 0)

    // Grid on ground plane (y = 0)
    scene.add(new THREE.GridHelper(5000, 20, 0xcccccc, 0xe2e8f0))
    scene.add(new THREE.AxesHelper(500))
    scene.add(new THREE.AmbientLight(0xffffff, 1))

    // Add each well path as a tube
    wellPaths.forEach(({ path }, i) => {
      const pts = wellpathToXyz(path)
      const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p.x, p.y, p.z)))
      const tubeGeo = new THREE.TubeGeometry(curve, pts.length, 8, 6, false)
      const mat = new THREE.MeshLambertMaterial({ color: COLORS[i % COLORS.length] })
      scene.add(new THREE.Mesh(tubeGeo, mat))
    })

    function animate() {
      animFrameId = requestAnimationFrame(animate)
      controls.update()
      renderer!.render(scene, camera)
    }
    animate()

    const resizeObs = new ResizeObserver(() => {
      const w = canvasEl!.clientWidth
      const h = canvasEl!.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer!.setSize(w, h)
    })
    resizeObs.observe(canvasEl)

    return () => resizeObs.disconnect()
  })

  onDestroy(() => {
    if (animFrameId) cancelAnimationFrame(animFrameId)
    renderer?.dispose()
  })
</script>

<canvas bind:this={canvasEl} class="w-full rounded-lg border" style="height: 600px;"></canvas>
