# Reservoir Management Web Application — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Svelte 5 + Vite SPA in `examples/webapp/` that browses and visualizes synthetic reservoir data from the FastAPI backend in `examples/api/`.

**Architecture:** Client-side SPA with svelte-routing for URL navigation, a Vite `/api` proxy to the FastAPI backend in dev and an Express proxy in prod, localStorage-based API key auth, uPlot for 2D well log and production charts, and three.js for 3D well path trajectories and seismic cube visualization.

**Tech Stack:** Svelte 5, Vite 5, TypeScript, Tailwind CSS 3, uPlot 1.6, three.js, svelte-routing, PapaParse, Vitest, @testing-library/svelte

**Spec:** `docs/petropowers/specs/2026-04-06-reservoir-webapp-design.md`

---

## File Map

```
examples/webapp/
├── index.html
├── package.json
├── vite.config.ts              proxy + vitest config
├── svelte.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── server.cjs                  prod Express server + proxy
├── src/
│   ├── main.ts
│   ├── app.css                 Tailwind + CSS variables
│   ├── App.svelte              router root + auth guard
│   ├── lib/
│   │   ├── utils.ts            cn() helper
│   │   ├── types.ts            API response types
│   │   ├── stores.ts           apiKey + reservoirs stores
│   │   ├── api.ts              fetch wrapper + typed helpers
│   │   ├── las.ts              LAS 2.0 in-browser parser
│   │   ├── segy.ts             SEG-Y IEEE/IBM float reader
│   │   └── wellpath.ts         JSON well path → XYZ converter
│   ├── components/
│   │   ├── NavBar.svelte
│   │   ├── WellLogChart.svelte    uPlot multi-track log
│   │   ├── ProductionChart.svelte uPlot time-series
│   │   ├── WellPaths3D.svelte     three.js trajectory scene
│   │   └── SeismicViewer.svelte   three.js SEG-Y cube
│   ├── pages/
│   │   ├── Login.svelte
│   │   ├── ReservoirList.svelte
│   │   ├── ReservoirOverview.svelte
│   │   ├── WellLogs.svelte
│   │   ├── Production.svelte
│   │   ├── WellPaths.svelte
│   │   ├── Seismic.svelte
│   │   ├── CorePhotos.svelte
│   │   └── OsduManifests.svelte
│   └── test/
│       ├── setup.ts
│       ├── api.test.ts
│       ├── las.test.ts
│       ├── segy.test.ts
│       └── wellpath.test.ts
```

---

## Task 1: Project scaffold

**Files:**
- Create: `examples/webapp/package.json`
- Create: `examples/webapp/vite.config.ts`
- Create: `examples/webapp/svelte.config.js`
- Create: `examples/webapp/tsconfig.json`
- Create: `examples/webapp/tailwind.config.js`
- Create: `examples/webapp/postcss.config.js`
- Create: `examples/webapp/index.html`
- Create: `examples/webapp/src/main.ts`
- Create: `examples/webapp/src/app.css`
- Create: `examples/webapp/src/App.svelte`
- Create: `examples/webapp/src/test/setup.ts`

- [ ] Create `examples/webapp/package.json`:

```json
{
  "name": "reservoir-webapp",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-svelte": "^0.460.0",
    "papaparse": "^5.4.1",
    "svelte": "^5.1.0",
    "svelte-routing": "^2.13.0",
    "tailwind-merge": "^2.5.4",
    "three": "^0.169.0",
    "uplot": "^1.6.31"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/svelte": "^5.2.4",
    "@types/papaparse": "^5.3.15",
    "@types/three": "^0.169.0",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.47",
    "svelte-check": "^4.0.0",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3",
    "vite": "^5.4.11",
    "vitest": "^2.1.4"
  }
}
```

- [ ] Create `examples/webapp/vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.ts'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

- [ ] Create `examples/webapp/svelte.config.js`:

```js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
}
```

- [ ] Create `examples/webapp/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "strict": true,
    "noEmit": true,
    "lib": ["ESNext", "DOM", "DOM.Iterable"]
  },
  "include": ["src/**/*.ts", "src/**/*.svelte"]
}
```

- [ ] Create `examples/webapp/tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,ts}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
```

- [ ] Create `examples/webapp/postcss.config.js`:

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
}
```

- [ ] Create `examples/webapp/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reservoir Manager</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] Create `examples/webapp/src/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --radius: 0.5rem;
  }
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
```

- [ ] Create `examples/webapp/src/main.ts`:

```ts
import './app.css'
import App from './App.svelte'
import { mount } from 'svelte'

mount(App, { target: document.getElementById('app')! })
```

- [ ] Create stub `examples/webapp/src/App.svelte`:

```svelte
<script lang="ts">
</script>

<div class="p-4 text-foreground">Loading...</div>
```

- [ ] Create `examples/webapp/src/test/setup.ts`:

```ts
import '@testing-library/jest-dom'
```

- [ ] Install dependencies and verify dev server starts:

```bash
cd examples/webapp && npm install
npm run dev
```

Expected: dev server at `http://localhost:5173`, page shows "Loading..."

- [ ] Run tests to confirm the test harness works (no tests yet, just verify runner starts):

```bash
npm test
```

Expected: `No test files found` or `0 tests passed`.

- [ ] Commit:

```bash
git add examples/webapp/
git commit -m "feat(webapp): scaffold Svelte 5 + Vite + Tailwind project"
```

---

## Task 2: Shared UI components and utils

**Files:**
- Create: `examples/webapp/src/lib/utils.ts`
- Create: `examples/webapp/src/components/ui/Button.svelte`
- Create: `examples/webapp/src/components/ui/Card.svelte`
- Create: `examples/webapp/src/components/ui/Input.svelte`
- Create: `examples/webapp/src/components/ui/Alert.svelte`
- Create: `examples/webapp/src/components/ui/Badge.svelte`
- Create: `examples/webapp/src/components/ui/Dialog.svelte`
- Create: `examples/webapp/src/components/ui/Slider.svelte`
- Create: `examples/webapp/src/components/ui/Spinner.svelte`

- [ ] Create `examples/webapp/src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
```

- [ ] Create `examples/webapp/src/components/ui/Button.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'
  import type { Snippet } from 'svelte'

  interface Props {
    variant?: 'default' | 'outline' | 'ghost' | 'destructive'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    type?: 'button' | 'submit'
    class?: string
    onclick?: () => void
    children?: Snippet
  }

  let {
    variant = 'default',
    size = 'md',
    disabled = false,
    type = 'button',
    class: className = '',
    onclick,
    children,
  }: Props = $props()

  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none'
  const variants: Record<string, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-muted',
    ghost: 'hover:bg-muted',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  }
  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-6 text-base',
  }
</script>

<button
  {type}
  {disabled}
  class={cn(base, variants[variant], sizes[size], className)}
  {onclick}
>
  {@render children?.()}
</button>
```

- [ ] Create `examples/webapp/src/components/ui/Card.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'
  import type { Snippet } from 'svelte'

  interface Props {
    class?: string
    onclick?: () => void
    children?: Snippet
  }

  let { class: className = '', onclick, children }: Props = $props()
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<div
  class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', onclick && 'cursor-pointer hover:shadow-md transition-shadow', className)}
  {onclick}
>
  {@render children?.()}
</div>
```

- [ ] Create `examples/webapp/src/components/ui/Input.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'

  interface Props {
    value?: string
    placeholder?: string
    type?: string
    class?: string
    oninput?: (e: Event) => void
    onkeydown?: (e: KeyboardEvent) => void
  }

  let {
    value = $bindable(''),
    placeholder = '',
    type = 'text',
    class: className = '',
    oninput,
    onkeydown,
  }: Props = $props()
</script>

<input
  {type}
  bind:value
  {placeholder}
  class={cn('flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50', className)}
  {oninput}
  {onkeydown}
/>
```

- [ ] Create `examples/webapp/src/components/ui/Alert.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'
  import type { Snippet } from 'svelte'

  interface Props {
    variant?: 'default' | 'destructive'
    class?: string
    children?: Snippet
  }

  let { variant = 'default', class: className = '', children }: Props = $props()

  const variants: Record<string, string> = {
    default: 'bg-muted text-foreground',
    destructive: 'bg-destructive/10 text-destructive border-destructive/30',
  }
</script>

<div class={cn('relative w-full rounded-lg border p-4 text-sm', variants[variant], className)}>
  {@render children?.()}
</div>
```

- [ ] Create `examples/webapp/src/components/ui/Badge.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'
  import type { Snippet } from 'svelte'

  interface Props {
    variant?: 'default' | 'secondary' | 'outline'
    class?: string
    children?: Snippet
  }

  let { variant = 'default', class: className = '', children }: Props = $props()

  const variants: Record<string, string> = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-input text-foreground',
  }
</script>

<span class={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', variants[variant], className)}>
  {@render children?.()}
</span>
```

- [ ] Create `examples/webapp/src/components/ui/Dialog.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'
  import type { Snippet } from 'svelte'

  interface Props {
    open?: boolean
    onclose?: () => void
    class?: string
    children?: Snippet
  }

  let { open = $bindable(false), onclose, class: className = '', children }: Props = $props()

  let dialogEl: HTMLDialogElement | undefined = $state()

  $effect(() => {
    if (!dialogEl) return
    if (open) {
      dialogEl.showModal()
    } else {
      dialogEl.close()
    }
  })
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialogEl}
  class={cn('rounded-lg border bg-card p-6 shadow-lg backdrop:bg-black/50 w-full max-w-lg', className)}
  onclose={() => { open = false; onclose?.() }}
>
  {@render children?.()}
</dialog>
```

- [ ] Create `examples/webapp/src/components/ui/Slider.svelte`:

```svelte
<script lang="ts">
  interface Props {
    value?: number
    min?: number
    max?: number
    step?: number
    label?: string
    onchange?: (value: number) => void
  }

  let { value = $bindable(0), min = 0, max = 100, step = 1, label, onchange }: Props = $props()
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <span class="text-xs text-muted-foreground">{label}: {value}</span>
  {/if}
  <input
    type="range"
    bind:value
    {min} {max} {step}
    class="w-full h-2 accent-primary cursor-pointer"
    oninput={(e) => onchange?.(Number((e.target as HTMLInputElement).value))}
  />
</div>
```

- [ ] Create `examples/webapp/src/components/ui/Spinner.svelte`:

```svelte
<script lang="ts">
  import { cn } from '../../lib/utils'

  interface Props { class?: string }
  let { class: className = '' }: Props = $props()
</script>

<div class={cn('animate-spin rounded-full border-2 border-muted border-t-primary h-5 w-5', className)}></div>
```

- [ ] Commit:

```bash
git add examples/webapp/src/
git commit -m "feat(webapp): add shared UI components and cn() utility"
```

---

## Task 3: Types, stores, and API client

**Files:**
- Create: `examples/webapp/src/lib/types.ts`
- Create: `examples/webapp/src/lib/stores.ts`
- Create: `examples/webapp/src/lib/api.ts`
- Create: `examples/webapp/src/test/api.test.ts`

- [ ] Write failing tests first — create `examples/webapp/src/test/api.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the stores module so apiKey is controllable
vi.mock('../lib/stores', () => ({
  apiKey: { subscribe: vi.fn(), set: vi.fn() },
}))

// We import api after mocking stores
describe('apiFetch', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    global.fetch = vi.fn()
  })

  it('prepends /api to the path', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify({ status: 'ok', reservoirs: [] }), { status: 200 })
    )
    const { apiFetch } = await import('../lib/api')
    await apiFetch('/health')
    expect(global.fetch).toHaveBeenCalledWith('/api/health', expect.any(Object))
  })

  it('throws on non-2xx responses', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response('Unauthorized', { status: 401 })
    )
    const { apiFetch } = await import('../lib/api')
    await expect(apiFetch('/health')).rejects.toThrow('401')
  })
})

describe('listReservoirs', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    global.fetch = vi.fn()
  })

  it('returns reservoir name array', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify(['ppr-1', 'ppr-2']), { status: 200 })
    )
    const { listReservoirs } = await import('../lib/api')
    const result = await listReservoirs()
    expect(result).toEqual(['ppr-1', 'ppr-2'])
  })
})
```

- [ ] Run tests — expect failures:

```bash
cd examples/webapp && npm test -- api.test.ts
```

Expected: FAIL — `Cannot find module '../lib/api'`

- [ ] Create `examples/webapp/src/lib/types.ts`:

```ts
export interface HealthResponse {
  status: string
  reservoirs: string[]
}

export interface ReservoirSummary {
  [dataType: string]: number
}

export interface ApiError {
  status: number
  message: string
}
```

- [ ] Create `examples/webapp/src/lib/stores.ts`:

```ts
import { writable } from 'svelte/store'

const STORAGE_KEY = 'reservoir_api_key'

function createApiKeyStore() {
  const initial = localStorage.getItem(STORAGE_KEY) ?? ''
  const { subscribe, set } = writable<string>(initial)

  return {
    subscribe,
    set(value: string) {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
      set(value)
    },
    clear() {
      localStorage.removeItem(STORAGE_KEY)
      set('')
    },
  }
}

export const apiKey = createApiKeyStore()
export const reservoirs = writable<string[]>([])
```

- [ ] Create `examples/webapp/src/lib/api.ts`:

```ts
import { get } from 'svelte/store'
import { apiKey } from './stores'
import type { HealthResponse, ReservoirSummary } from './types'

function getHeaders(): HeadersInit {
  const key = get(apiKey)
  return key ? { 'X-API-Key': key } : {}
}

export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(`/api${path}`, {
    ...options,
    headers: { ...getHeaders(), ...options.headers },
  })
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
  return response
}

export async function getHealth(): Promise<HealthResponse> {
  const r = await apiFetch('/health')
  return r.json()
}

export async function listReservoirs(): Promise<string[]> {
  const r = await apiFetch('/reservoirs')
  return r.json()
}

export async function getReservoir(name: string): Promise<ReservoirSummary> {
  const r = await apiFetch(`/reservoirs/${encodeURIComponent(name)}`)
  return r.json()
}

export async function listFiles(name: string, dataType: string): Promise<string[]> {
  const r = await apiFetch(`/reservoirs/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}`)
  return r.json()
}

export function downloadFileUrl(name: string, dataType: string, file: string): string {
  return `/api/reservoirs/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}/${file}`
}

export function imageUrl(name: string, dataType: string, file: string): string {
  return `/api/images/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}/${file}`
}
```

- [ ] Run tests — expect pass:

```bash
npm test -- api.test.ts
```

Expected: `2 passed`

- [ ] Commit:

```bash
git add examples/webapp/src/lib/ examples/webapp/src/test/api.test.ts
git commit -m "feat(webapp): add types, stores, and API client"
```

---

## Task 4: LAS 2.0 parser

**Files:**
- Create: `examples/webapp/src/lib/las.ts`
- Create: `examples/webapp/src/test/las.test.ts`

- [ ] Write failing test — create `examples/webapp/src/test/las.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

const SAMPLE_LAS = `~VERSION INFORMATION
 VERS.                 2.0: CWLS log ASCII Standard - Version 2.0
 WRAP.                  NO: One Line per depth step
~WELL INFORMATION
 STRT.M              1500.00: Start depth
 STOP.M              1500.30: Stop depth
 STEP.M               0.15: Step
 NULL.               -9999.25: Null value
~CURVE INFORMATION
 DEPT.M               : Depth
 GR.API               : Gamma Ray
 RHOB.G/C3            : Bulk Density
~A  DEPT    GR    RHOB
   1500.00  50.0  2.50
   1500.15  55.0  2.52
   1500.30  48.0  2.48
`

describe('parseLas', () => {
  it('extracts curve names', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.curves).toHaveProperty('GR')
    expect(result.curves).toHaveProperty('RHOB')
  })

  it('extracts depth array', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.depth).toEqual([1500.0, 1500.15, 1500.3])
  })

  it('extracts curve values', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.curves['GR']).toEqual([50.0, 55.0, 48.0])
    expect(result.curves['RHOB']).toEqual([2.50, 2.52, 2.48])
  })

  it('replaces null values with NaN', async () => {
    const { parseLas } = await import('../lib/las')
    const lasWithNull = SAMPLE_LAS.replace('  1500.30  48.0  2.48', '  1500.30  -9999.25  2.48')
    const result = parseLas(lasWithNull)
    expect(Number.isNaN(result.curves['GR'][2])).toBe(true)
  })
})
```

- [ ] Run to verify failure:

```bash
npm test -- las.test.ts
```

Expected: FAIL — `Cannot find module '../lib/las'`

- [ ] Create `examples/webapp/src/lib/las.ts`:

```ts
export interface LasData {
  depth: number[]
  curves: Record<string, number[]>
  units: Record<string, string>
}

export function parseLas(text: string): LasData {
  const lines = text.split('\n')
  const curves: string[] = []
  const units: Record<string, string> = {}
  let nullValue = -9999.25
  let inCurveSection = false
  let inDataSection = false
  const rows: number[][] = []

  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue

    if (line.startsWith('~')) {
      inCurveSection = line.toUpperCase().startsWith('~C')
      inDataSection = line.toUpperCase().startsWith('~A')
      continue
    }

    if (inCurveSection) {
      // Format: MNEM.UNIT   value : description
      const match = line.match(/^(\w+)\s*\.\s*(\S*)\s/)
      if (match) {
        curves.push(match[1].toUpperCase())
        units[match[1].toUpperCase()] = match[2]
      }
      continue
    }

    // Parse NULL value from well information section
    const nullMatch = line.match(/^NULL\s*\.\s*\S*\s+([-\d.]+)/i)
    if (nullMatch) {
      nullValue = parseFloat(nullMatch[1])
    }

    if (inDataSection) {
      const vals = line.split(/\s+/).map(Number)
      if (vals.length === curves.length) rows.push(vals)
    }
  }

  const depth: number[] = []
  const curveData: Record<string, number[]> = {}
  for (const name of curves.slice(1)) curveData[name] = []

  for (const row of rows) {
    depth.push(row[0])
    curves.slice(1).forEach((name, i) => {
      const v = row[i + 1]
      curveData[name].push(Math.abs(v - nullValue) < 0.01 ? NaN : v)
    })
  }

  return { depth, curves: curveData, units }
}
```

- [ ] Run tests — expect pass:

```bash
npm test -- las.test.ts
```

Expected: `4 passed`

- [ ] Commit:

```bash
git add examples/webapp/src/lib/las.ts examples/webapp/src/test/las.test.ts
git commit -m "feat(webapp): add LAS 2.0 in-browser parser"
```

---

## Task 5: SEG-Y binary reader

**Files:**
- Create: `examples/webapp/src/lib/segy.ts`
- Create: `examples/webapp/src/test/segy.test.ts`

- [ ] Write failing test — create `examples/webapp/src/test/segy.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

/** Build a minimal valid SEG-Y ArrayBuffer with 2 inline × 2 crossline traces, 4 samples each */
function buildMinimalSegy(formatCode: number): ArrayBuffer {
  const samplesPerTrace = 4
  const traceCount = 4 // 2 inline × 2 crossline
  const traceDataBytes = samplesPerTrace * 4
  const totalBytes = 3200 + 400 + traceCount * (240 + traceDataBytes)
  const buf = new ArrayBuffer(totalBytes)
  const view = new DataView(buf)

  // Binary header (starts at byte 3200, big-endian)
  view.setInt16(3200 + 16, 2000, false) // sample interval µs = 2ms
  view.setInt16(3200 + 20, samplesPerTrace, false) // samples per trace
  view.setInt16(3200 + 24, formatCode, false) // data format code

  const traces: Array<[number, number, number[]]> = [
    [1, 1, [1.0, 2.0, 3.0, 4.0]],
    [1, 2, [5.0, 6.0, 7.0, 8.0]],
    [2, 1, [9.0, 10.0, 11.0, 12.0]],
    [2, 2, [13.0, 14.0, 15.0, 16.0]],
  ]

  let offset = 3600
  for (const [il, xl, samples] of traces) {
    // Trace header: inline at byte 188 (0-indexed), crossline at 192
    view.setInt32(offset + 188, il, false)
    view.setInt32(offset + 192, xl, false)
    offset += 240
    for (const s of samples) {
      view.setFloat32(offset, s, false) // big-endian IEEE float32
      offset += 4
    }
  }

  return buf
}

describe('parseSegy with IEEE float32 (format 5)', () => {
  it('reads geometry from binary header', async () => {
    const { parseSegy } = await import('../lib/segy')
    const result = parseSegy(buildMinimalSegy(5))
    expect(result.samplesPerTrace).toBe(4)
    expect(result.inlines).toEqual([1, 2])
    expect(result.crosslines).toEqual([1, 2])
  })

  it('reads amplitude values correctly', async () => {
    const { parseSegy } = await import('../lib/segy')
    const result = parseSegy(buildMinimalSegy(5))
    // IL=1, XL=1, first sample should be 1.0
    expect(result.amplitude(1, 1, 0)).toBeCloseTo(1.0)
    // IL=2, XL=2, last sample should be 16.0
    expect(result.amplitude(2, 2, 3)).toBeCloseTo(16.0)
  })
})
```

- [ ] Run to verify failure:

```bash
npm test -- segy.test.ts
```

Expected: FAIL — `Cannot find module '../lib/segy'`

- [ ] Create `examples/webapp/src/lib/segy.ts`:

```ts
export interface SegyData {
  samplesPerTrace: number
  sampleIntervalUs: number
  inlines: number[]
  crosslines: number[]
  /** Returns amplitude at given inline, crossline, sample index. Returns NaN if not found. */
  amplitude(il: number, xl: number, sampleIdx: number): number
}

function ibmToIeee(ibm: number): number {
  if (ibm === 0) return 0
  const sign = (ibm >>> 31) & 1
  const exp = ((ibm >>> 24) & 0x7f) - 64
  const mantissa = (ibm & 0xffffff) / 16777216
  const value = mantissa * Math.pow(16, exp)
  return sign ? -value : value
}

export function parseSegy(buffer: ArrayBuffer): SegyData {
  const view = new DataView(buffer)

  // Binary header starts at byte 3200 (0-indexed)
  const sampleIntervalUs = view.getInt16(3200 + 16, false)
  const samplesPerTrace = view.getInt16(3200 + 20, false)
  const formatCode = view.getInt16(3200 + 24, false) // 1=IBM float, 5=IEEE float32

  const traceBytes = 240 + samplesPerTrace * 4
  // Map [il, xl] → Float32Array of samples
  const traceMap = new Map<string, Float32Array>()

  let offset = 3600
  while (offset + 240 + samplesPerTrace * 4 <= buffer.byteLength) {
    const il = view.getInt32(offset + 188, false)
    const xl = view.getInt32(offset + 192, false)
    const key = `${il},${xl}`
    const samples = new Float32Array(samplesPerTrace)
    const dataStart = offset + 240
    for (let i = 0; i < samplesPerTrace; i++) {
      const raw = view.getUint32(dataStart + i * 4, false)
      samples[i] = formatCode === 1 ? ibmToIeee(raw) : view.getFloat32(dataStart + i * 4, false)
    }
    traceMap.set(key, samples)
    offset += traceBytes
  }

  // Collect sorted unique inline and crossline numbers
  const ilSet = new Set<number>()
  const xlSet = new Set<number>()
  for (const key of traceMap.keys()) {
    const [il, xl] = key.split(',').map(Number)
    ilSet.add(il)
    xlSet.add(xl)
  }
  const inlines = [...ilSet].sort((a, b) => a - b)
  const crosslines = [...xlSet].sort((a, b) => a - b)

  return {
    samplesPerTrace,
    sampleIntervalUs,
    inlines,
    crosslines,
    amplitude(il, xl, sampleIdx) {
      const trace = traceMap.get(`${il},${xl}`)
      return trace ? trace[sampleIdx] : NaN
    },
  }
}
```

- [ ] Run tests — expect pass:

```bash
npm test -- segy.test.ts
```

Expected: `2 passed`

- [ ] Commit:

```bash
git add examples/webapp/src/lib/segy.ts examples/webapp/src/test/segy.test.ts
git commit -m "feat(webapp): add SEG-Y binary reader (IBM + IEEE float32)"
```

---

## Task 6: Well path XYZ converter

**Files:**
- Create: `examples/webapp/src/lib/wellpath.ts`
- Create: `examples/webapp/src/test/wellpath.test.ts`

- [ ] Write failing tests — create `examples/webapp/src/test/wellpath.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

describe('wellpathToXyz', () => {
  it('returns an array of Vector3-like points', async () => {
    const { wellpathToXyz } = await import('../lib/wellpath')
    const path = {
      md: [0, 100, 200],
      tvd: [0, 90, 180],
      inclination: [0, 10, 10],
      azimuth: [0, 45, 45],
    }
    const pts = wellpathToXyz(path)
    expect(pts).toHaveLength(3)
    expect(pts[0]).toMatchObject({ x: 0, y: 0, z: 0 })
  })

  it('vertical well stays at x=0, z=0', async () => {
    const { wellpathToXyz } = await import('../lib/wellpath')
    const path = { md: [0, 100, 200], tvd: [0, 100, 200], inclination: [0, 0, 0], azimuth: [0, 0, 0] }
    const pts = wellpathToXyz(path)
    for (const p of pts) {
      expect(Math.abs(p.x)).toBeLessThan(0.001)
      expect(Math.abs(p.z)).toBeLessThan(0.001)
    }
    // y increases with depth (TVD grows downward, represented as negative y in three.js)
    expect(pts[2].y).toBeLessThan(pts[1].y)
  })
})
```

- [ ] Run to verify failure:

```bash
npm test -- wellpath.test.ts
```

Expected: FAIL — `Cannot find module '../lib/wellpath'`

- [ ] Create `examples/webapp/src/lib/wellpath.ts`:

```ts
export interface WellPathJson {
  md: number[]
  tvd: number[]
  inclination: number[]
  azimuth: number[]
}

export interface XYZPoint {
  x: number // east (m)
  y: number // up — negative TVD so depth increases downward
  z: number // north (m)
}

const DEG = Math.PI / 180

/**
 * Converts a well path survey (minimum curvature approximation) to Cartesian XYZ
 * suitable for three.js (Y-up coordinate system, depth as negative Y).
 */
export function wellpathToXyz(path: WellPathJson): XYZPoint[] {
  const { md, tvd, inclination, azimuth } = path
  const n = md.length
  const points: XYZPoint[] = [{ x: 0, y: 0, z: 0 }]
  let east = 0
  let north = 0

  for (let i = 1; i < n; i++) {
    const dMd = md[i] - md[i - 1]
    const inc1 = inclination[i - 1] * DEG
    const inc2 = inclination[i] * DEG
    const az1 = azimuth[i - 1] * DEG
    const az2 = azimuth[i] * DEG

    // Minimum curvature method
    const dl = Math.acos(
      Math.cos(inc2 - inc1) - Math.sin(inc1) * Math.sin(inc2) * (1 - Math.cos(az2 - az1))
    )
    const rf = dl === 0 ? 1 : (2 / dl) * Math.tan(dl / 2)

    east += (dMd / 2) * (Math.sin(inc1) * Math.sin(az1) + Math.sin(inc2) * Math.sin(az2)) * rf
    north += (dMd / 2) * (Math.sin(inc1) * Math.cos(az1) + Math.sin(inc2) * Math.cos(az2)) * rf

    points.push({ x: east, y: -tvd[i], z: north })
  }

  return points
}
```

- [ ] Run tests — expect pass:

```bash
npm test -- wellpath.test.ts
```

Expected: `2 passed`

- [ ] Run full test suite to confirm no regressions:

```bash
npm test
```

Expected: all previous tests still pass (api, las, segy, wellpath).

- [ ] Commit:

```bash
git add examples/webapp/src/lib/wellpath.ts examples/webapp/src/test/wellpath.test.ts
git commit -m "feat(webapp): add well path JSON → XYZ converter"
```

---

## Task 7: App shell — router, auth guard, NavBar, Login

**Files:**
- Modify: `examples/webapp/src/App.svelte`
- Create: `examples/webapp/src/components/NavBar.svelte`
- Create: `examples/webapp/src/pages/Login.svelte`
- Create: stub pages for all routes (so the router doesn't crash)

- [ ] Create stub pages for all routes. Run this script to create them all:

Create `examples/webapp/src/pages/ReservoirList.svelte`:
```svelte
<script lang="ts"></script>
<div class="p-4">Reservoir List (coming soon)</div>
```

Create `examples/webapp/src/pages/ReservoirOverview.svelte`:
```svelte
<script lang="ts">
  interface Props { name: string }
  let { name }: Props = $props()
</script>
<div class="p-4">Overview: {name}</div>
```

Create `examples/webapp/src/pages/WellLogs.svelte`:
```svelte
<script lang="ts">
  interface Props { name: string }
  let { name }: Props = $props()
</script>
<div class="p-4">Well Logs: {name}</div>
```

Create identical stubs for `Production.svelte`, `WellPaths.svelte`, `Seismic.svelte`, `CorePhotos.svelte`, `OsduManifests.svelte` — each accepting a `name: string` prop and showing a placeholder `<div class="p-4">PageName: {name}</div>`.

- [ ] Create `examples/webapp/src/components/NavBar.svelte`:

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { apiKey } from '../lib/stores'
  import Button from './ui/Button.svelte'

  interface Props {
    breadcrumb?: string[]
  }
  let { breadcrumb = [] }: Props = $props()

  function disconnect() {
    apiKey.clear()
    navigate('/login', { replace: true })
  }
</script>

<header class="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-6 h-14 shadow-sm">
  <div class="flex items-center gap-2 text-sm font-medium">
    <span class="font-semibold text-primary">Reservoir Manager</span>
    {#each breadcrumb as crumb, i}
      <span class="text-muted-foreground">/</span>
      <span class={i === breadcrumb.length - 1 ? 'text-foreground' : 'text-muted-foreground'}>{crumb}</span>
    {/each}
  </div>
  <Button variant="ghost" size="sm" onclick={disconnect}>Disconnect</Button>
</header>
```

- [ ] Create `examples/webapp/src/pages/Login.svelte`:

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { apiKey } from '../lib/stores'
  import { getHealth } from '../lib/api'
  import Card from '../components/ui/Card.svelte'
  import Input from '../components/ui/Input.svelte'
  import Button from '../components/ui/Button.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  let keyInput = $state('')
  let loading = $state(false)
  let error = $state('')

  async function connect() {
    if (!keyInput.trim()) { error = 'API key is required'; return }
    loading = true
    error = ''
    // Temporarily set key so apiFetch can use it
    apiKey.set(keyInput.trim())
    try {
      await getHealth()
      navigate('/', { replace: true })
    } catch (e: unknown) {
      apiKey.clear()
      const msg = e instanceof Error ? e.message : String(e)
      error = msg.startsWith('401') ? 'Invalid API key' : `Connection failed: ${msg}`
    } finally {
      loading = false
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-muted/30">
  <Card class="w-full max-w-sm p-8 flex flex-col gap-4">
    <h1 class="text-2xl font-bold text-center">🛢 Reservoir Manager</h1>
    <p class="text-sm text-muted-foreground text-center">Enter your API key to connect</p>

    {#if error}
      <Alert variant="destructive">{error}</Alert>
    {/if}

    <Input
      bind:value={keyInput}
      placeholder="X-API-Key value"
      type="password"
      onkeydown={(e) => e.key === 'Enter' && connect()}
    />
    <Button onclick={connect} disabled={loading} class="w-full">
      {#if loading}<Spinner class="mr-2" />{/if}
      Connect
    </Button>
  </Card>
</div>
```

- [ ] Replace `examples/webapp/src/App.svelte` with full router + auth guard:

```svelte
<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import { get } from 'svelte/store'
  import { navigate } from 'svelte-routing'
  import { apiKey } from './lib/stores'
  import Login from './pages/Login.svelte'
  import ReservoirList from './pages/ReservoirList.svelte'
  import ReservoirOverview from './pages/ReservoirOverview.svelte'
  import WellLogs from './pages/WellLogs.svelte'
  import Production from './pages/Production.svelte'
  import WellPaths from './pages/WellPaths.svelte'
  import Seismic from './pages/Seismic.svelte'
  import CorePhotos from './pages/CorePhotos.svelte'
  import OsduManifests from './pages/OsduManifests.svelte'

  // Auth guard: redirect to /login if no key and not already there
  $effect(() => {
    if (!get(apiKey) && window.location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  })
</script>

<Router>
  <Route path="/login" component={Login} />
  <Route path="/" component={ReservoirList} />
  <Route path="/reservoirs/:name" let:params>
    <ReservoirOverview name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_logs" let:params>
    <WellLogs name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/production" let:params>
    <Production name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_paths" let:params>
    <WellPaths name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/seismic" let:params>
    <Seismic name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/core_photos" let:params>
    <CorePhotos name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/osdu_manifests" let:params>
    <OsduManifests name={params.name} />
  </Route>
</Router>
```

- [ ] Start the dev server and verify manually:

```bash
npm run dev
```

Open `http://localhost:5173` — should redirect to `/login` and show the API key form. Enter a key and verify Connect button works (with the FastAPI backend running).

- [ ] Commit:

```bash
git add examples/webapp/src/
git commit -m "feat(webapp): add router, auth guard, NavBar, and Login page"
```

---

## Task 8: ReservoirList and ReservoirOverview pages

**Files:**
- Modify: `examples/webapp/src/pages/ReservoirList.svelte`
- Modify: `examples/webapp/src/pages/ReservoirOverview.svelte`

- [ ] Replace `examples/webapp/src/pages/ReservoirList.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { listReservoirs, getReservoir } from '../lib/api'
  import type { ReservoirSummary } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import Card from '../components/ui/Card.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'
  import Badge from '../components/ui/Badge.svelte'

  let loading = $state(true)
  let error = $state('')
  let items: Array<{ name: string; summary: ReservoirSummary }> = $state([])

  onMount(async () => {
    try {
      const names = await listReservoirs()
      const summaries = await Promise.all(names.map(n => getReservoir(n)))
      items = names.map((name, i) => ({ name, summary: summaries[i] }))
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar />
<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6">Reservoirs</h1>

  {#if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if error}
    <Alert variant="destructive">{error}</Alert>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each items as { name, summary }}
        <Card onclick={() => navigate(`/reservoirs/${name}`)} class="p-5">
          <h2 class="text-lg font-semibold mb-2">{name}</h2>
          <div class="flex flex-wrap gap-1">
            {#each Object.entries(summary) as [type, count]}
              <Badge variant="secondary">{type}: {count}</Badge>
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  {/if}
</main>
```

- [ ] Replace `examples/webapp/src/pages/ReservoirOverview.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { getReservoir } from '../lib/api'
  import type { ReservoirSummary } from '../lib/types'
  import NavBar from '../components/NavBar.svelte'
  import Card from '../components/ui/Card.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let loading = $state(true)
  let error = $state('')
  let summary: ReservoirSummary = $state({})

  const DATA_TYPES: Array<{ key: string; label: string; color: string }> = [
    { key: 'well_logs',      label: 'Well Logs',      color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
    { key: 'production',     label: 'Production',     color: 'bg-green-100 text-green-800 hover:bg-green-200' },
    { key: 'well_paths',     label: 'Well Paths',     color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
    { key: 'seismic',        label: 'Seismic',        color: 'bg-red-100 text-red-800 hover:bg-red-200' },
    { key: 'core_photos',    label: 'Core Photos',    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
    { key: 'osdu_manifests', label: 'OSDU Manifests', color: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200' },
  ]

  onMount(async () => {
    try {
      summary = await getReservoir(name)
    } catch (e: unknown) {
      error = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name]} />
<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6">{name}</h1>

  {#if loading}
    <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
  {:else if error}
    <Alert variant="destructive">{error}</Alert>
  {:else}
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {#each DATA_TYPES as dt}
        {#if summary[dt.key] !== undefined}
          <button
            class="rounded-lg border p-5 text-left transition-colors cursor-pointer {dt.color}"
            onclick={() => navigate(`/reservoirs/${name}/${dt.key}`)}
          >
            <div class="text-sm font-medium mb-1">{dt.label}</div>
            <div class="text-3xl font-bold">{summary[dt.key]}</div>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</main>
```

- [ ] Verify manually with the backend running:

```bash
npm run dev
```

Login, then confirm reservoir cards appear and clicking one shows the overview with data type counts.

- [ ] Commit:

```bash
git add examples/webapp/src/pages/ReservoirList.svelte examples/webapp/src/pages/ReservoirOverview.svelte
git commit -m "feat(webapp): add ReservoirList and ReservoirOverview pages"
```

---

## Task 9: WellLogChart component + WellLogs page

**Files:**
- Create: `examples/webapp/src/components/WellLogChart.svelte`
- Modify: `examples/webapp/src/pages/WellLogs.svelte`

- [ ] Create `examples/webapp/src/components/WellLogChart.svelte`:

```svelte
<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import uPlot from 'uplot'
  import 'uplot/dist/uPlot.min.css'
  import type { LasData } from '../lib/las'

  interface Props {
    data: LasData
    visibleCurves?: string[]
  }
  let { data, visibleCurves = ['GR', 'RHOB', 'NPHI', 'RT', 'DT'] }: Props = $props()

  // Each curve gets its own track (uPlot instance sharing depth axis)
  const CURVE_COLORS: Record<string, string> = {
    GR: '#22c55e', RHOB: '#3b82f6', NPHI: '#ef4444', RT: '#f59e0b', DT: '#8b5cf6',
  }

  let containers: HTMLDivElement[] = $state([])
  let plots: uPlot[] = []

  function buildPlot(container: HTMLDivElement, curveName: string) {
    const depthVals = data.depth
    const curveVals = data.curves[curveName] ?? []
    const opts: uPlot.Options = {
      width: 140,
      height: container.parentElement?.clientHeight ?? 500,
      title: curveName,
      axes: [
        { show: false }, // x (depth) hidden — we display it once outside
        { label: curveName },
      ],
      series: [
        {},
        {
          stroke: CURVE_COLORS[curveName] ?? '#64748b',
          width: 1.5,
          label: curveName,
          spanGaps: false,
        },
      ],
    }
    return new uPlot(opts, [depthVals, curveVals], container)
  }

  onMount(() => {
    plots = containers.map((c, i) => buildPlot(c, activeCurves[i]))
  })

  onDestroy(() => {
    plots.forEach(p => p.destroy())
    plots = []
  })

  const activeCurves = $derived(
    visibleCurves.filter(c => Object.keys(data.curves).includes(c))
  )
</script>

<div class="flex gap-2 overflow-x-auto border rounded-lg bg-background p-2" style="min-height: 500px;">
  <!-- Depth axis label -->
  <div class="flex flex-col justify-between text-xs text-muted-foreground py-8 pr-1 min-w-[40px]">
    <span>{data.depth[0]?.toFixed(0)} m</span>
    <span>Depth</span>
    <span>{data.depth[data.depth.length - 1]?.toFixed(0)} m</span>
  </div>
  {#each activeCurves as _curve, i}
    <div bind:this={containers[i]}></div>
  {/each}
</div>
```

- [ ] Replace `examples/webapp/src/pages/WellLogs.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl, imageUrl } from '../lib/api'
  import { parseLas } from '../lib/las'
  import type { LasData } from '../lib/las'
  import NavBar from '../components/NavBar.svelte'
  import WellLogChart from '../components/WellLogChart.svelte'
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
    <WellLogChart data={lasData} />

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
```

- [ ] Verify manually: navigate to a reservoir → Well Logs, pick a well, confirm the chart renders.

- [ ] Commit:

```bash
git add examples/webapp/src/components/WellLogChart.svelte examples/webapp/src/pages/WellLogs.svelte
git commit -m "feat(webapp): add WellLogChart (uPlot) and WellLogs page"
```

---

## Task 10: ProductionChart component + Production page

**Files:**
- Create: `examples/webapp/src/components/ProductionChart.svelte`
- Modify: `examples/webapp/src/pages/Production.svelte`

- [ ] Create `examples/webapp/src/components/ProductionChart.svelte`:

```svelte
<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import uPlot from 'uplot'
  import 'uplot/dist/uPlot.min.css'

  interface ProductionRow {
    date: number   // Unix timestamp (seconds)
    oil: number
    gas: number
    water: number
    pressure: number
    temperature: number
  }

  interface Props {
    rows: ProductionRow[]
    visibleSeries?: Array<'oil' | 'gas' | 'water' | 'pressure'>
  }
  let { rows, visibleSeries = ['oil', 'gas', 'water', 'pressure'] }: Props = $props()

  let container: HTMLDivElement | undefined = $state()
  let plot: uPlot | undefined

  const SERIES_CONFIG: Record<string, { label: string; stroke: string; scale: string }> = {
    oil:         { label: 'Oil (m³/d)',    stroke: '#22c55e', scale: 'rate' },
    gas:         { label: 'Gas (m³/d)',    stroke: '#f59e0b', scale: 'rate' },
    water:       { label: 'Water (m³/d)',  stroke: '#3b82f6', scale: 'rate' },
    pressure:    { label: 'Pressure (bar)',stroke: '#ef4444', scale: 'pressure' },
  }

  function buildPlot() {
    if (!container) return
    const dates = rows.map(r => r.date)
    const seriesData = (visibleSeries as string[]).map(k => rows.map((r: Record<string, number>) => r[k]))

    const opts: uPlot.Options = {
      width: container.clientWidth || 800,
      height: 350,
      scales: {
        x: { time: true },
        rate: { auto: true },
        pressure: { auto: true, side: 1 },
      },
      axes: [
        { label: 'Date' },
        { scale: 'rate', label: 'Rate (m³/d)' },
        { scale: 'pressure', label: 'Pressure (bar)', side: 1 },
      ],
      series: [
        {},
        ...(visibleSeries as string[]).map(k => ({
          label: SERIES_CONFIG[k].label,
          stroke: SERIES_CONFIG[k].stroke,
          scale: SERIES_CONFIG[k].scale,
          width: 1.5,
          spanGaps: false,
        })),
      ],
    }
    plot?.destroy()
    plot = new uPlot(opts, [dates, ...seriesData], container)
  }

  onMount(buildPlot)
  onDestroy(() => plot?.destroy())
  $effect(() => { rows; buildPlot() })
</script>

<div bind:this={container} class="w-full border rounded-lg overflow-hidden"></div>
```

- [ ] Replace `examples/webapp/src/pages/Production.svelte`:

```svelte
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
      if (files.length) selected = files[0]
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
          oil: +r['oil_rate_m3d'],
          gas: +r['gas_rate_m3d'],
          water: +r['water_rate_m3d'],
          pressure: +r['wellhead_pressure_bar'],
          temperature: +r['temperature_c'],
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
```

- [ ] Verify manually: navigate to Production, pick a well, confirm chart renders with oil/gas/water/pressure series.

- [ ] Commit:

```bash
git add examples/webapp/src/components/ProductionChart.svelte examples/webapp/src/pages/Production.svelte
git commit -m "feat(webapp): add ProductionChart (uPlot) and Production page"
```

---

## Task 11: WellPaths3D component + WellPaths page

**Files:**
- Create: `examples/webapp/src/components/WellPaths3D.svelte`
- Modify: `examples/webapp/src/pages/WellPaths.svelte`

- [ ] Create `examples/webapp/src/components/WellPaths3D.svelte`:

```svelte
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
```

- [ ] Replace `examples/webapp/src/pages/WellPaths.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { listFiles, downloadFileUrl } from '../lib/api'
  import type { WellPathJson } from '../lib/wellpath'
  import NavBar from '../components/NavBar.svelte'
  import WellPaths3D from '../components/WellPaths3D.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  interface Props { name: string }
  let { name }: Props = $props()

  let wellPaths: Array<{ name: string; path: WellPathJson }> = $state([])
  let loading = $state(true)
  let pageError = $state('')
  let loaded = $state(0)

  onMount(async () => {
    try {
      const files = await listFiles(name, 'well_paths')
      const apiKey = localStorage.getItem('reservoir_api_key') ?? ''
      const results = await Promise.all(
        files.map(async f => {
          const r = await fetch(downloadFileUrl(name, 'well_paths', f), { headers: { 'X-API-Key': apiKey } })
          const path: WellPathJson = await r.json()
          loaded += 1
          return { name: f.replace('_path.json', ''), path }
        })
      )
      wellPaths = results
    } catch (e: unknown) {
      pageError = e instanceof Error ? e.message : String(e)
    } finally {
      loading = false
    }
  })
</script>

<NavBar breadcrumb={[name, 'Well Paths']} />
<main class="p-6 max-w-6xl mx-auto">
  {#if pageError}
    <Alert variant="destructive">{pageError}</Alert>
  {:else if loading}
    <div class="flex flex-col items-center gap-3 py-12">
      <Spinner class="h-8 w-8" />
      <p class="text-sm text-muted-foreground">Loading well paths… {loaded} fetched</p>
    </div>
  {:else}
    <WellPaths3D {wellPaths} />
    <p class="text-xs text-muted-foreground mt-2">
      {wellPaths.length} wells — drag to rotate, scroll to zoom, right-click to pan
    </p>
  {/if}
</main>
```

- [ ] Verify manually: navigate to Well Paths, confirm 3D scene loads with colored tubes and orbit controls work.

- [ ] Commit:

```bash
git add examples/webapp/src/components/WellPaths3D.svelte examples/webapp/src/pages/WellPaths.svelte
git commit -m "feat(webapp): add WellPaths3D (three.js) and WellPaths page"
```

---

## Task 12: SeismicViewer component + Seismic page

**Files:**
- Create: `examples/webapp/src/components/SeismicViewer.svelte`
- Modify: `examples/webapp/src/pages/Seismic.svelte`

- [ ] Create `examples/webapp/src/components/SeismicViewer.svelte`:

```svelte
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
```

- [ ] Replace `examples/webapp/src/pages/Seismic.svelte`:

```svelte
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
```

- [ ] Verify manually: navigate to Seismic, confirm the three-slice viewer loads and sliders update the textures.

- [ ] Commit:

```bash
git add examples/webapp/src/components/SeismicViewer.svelte examples/webapp/src/pages/Seismic.svelte
git commit -m "feat(webapp): add SeismicViewer (three.js) and Seismic page"
```

---

## Task 13: CorePhotos page

**Files:**
- Modify: `examples/webapp/src/pages/CorePhotos.svelte`

- [ ] Replace `examples/webapp/src/pages/CorePhotos.svelte`:

```svelte
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
```

- [ ] Verify manually: navigate to Core Photos, confirm photo grid loads and clicking a photo opens the lightbox.

- [ ] Commit:

```bash
git add examples/webapp/src/pages/CorePhotos.svelte
git commit -m "feat(webapp): add CorePhotos page with lightbox"
```

---

## Task 14: OsduManifests page

**Files:**
- Modify: `examples/webapp/src/pages/OsduManifests.svelte`

- [ ] Replace `examples/webapp/src/pages/OsduManifests.svelte`:

```svelte
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

<script context="module" lang="ts">
  // Recursive JSON tree component (inline as a named export for self-reference)
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
```

- [ ] Verify manually: navigate to OSDU Manifests, pick a file, confirm JSON is displayed.

- [ ] Commit:

```bash
git add examples/webapp/src/pages/OsduManifests.svelte
git commit -m "feat(webapp): add OsduManifests page"
```

---

## Task 15: Production server

**Files:**
- Create: `examples/webapp/server.cjs`
- Modify: `examples/webapp/package.json` (add express + http-proxy-middleware as prod deps)

- [ ] Add production server dependencies to `package.json`. Under `"dependencies"` add:

```json
"express": "^4.21.1",
"http-proxy-middleware": "^3.0.3"
```

- [ ] Run install:

```bash
cd examples/webapp && npm install
```

- [ ] Create `examples/webapp/server.cjs`:

```js
'use strict'
const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

const PORT = process.env.PORT || 3000
const API_TARGET_URL = process.env.API_TARGET_URL || 'http://127.0.0.1:8000'
const DIST_DIR = path.join(__dirname, 'dist')

const app = express()

// Proxy /api/* → FastAPI backend (strip /api prefix)
app.use(
  '/api',
  createProxyMiddleware({
    target: API_TARGET_URL,
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
)

// Serve built Svelte app
app.use(express.static(DIST_DIR))

// SPA fallback — all unmatched routes return index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Reservoir Manager running at http://localhost:${PORT}`)
  console.log(`Proxying /api → ${API_TARGET_URL}`)
})
```

- [ ] Build the app and start the prod server to verify:

```bash
cd examples/webapp
npm run build
node server.cjs
```

Expected output:
```
Reservoir Manager running at http://localhost:3000
Proxying /api → http://127.0.0.1:8000
```

Open `http://localhost:3000` with the FastAPI backend running — confirm the login page appears and full app works.

- [ ] Commit:

```bash
git add examples/webapp/server.cjs examples/webapp/package.json examples/webapp/package-lock.json
git commit -m "feat(webapp): add production Express server with /api proxy"
```

---

## Final Verification

- [ ] Run all unit tests — expect 100% pass:

```bash
cd examples/webapp && npm test
```

Expected: `api.test.ts` (2), `las.test.ts` (4), `segy.test.ts` (2), `wellpath.test.ts` (2) = **10 tests passed**

- [ ] Start dev server + FastAPI backend and do a full manual smoke test:

```bash
# Terminal 1
cd examples && uvicorn api.main:app --reload

# Terminal 2
cd examples/webapp && npm run dev
```

Verify:
1. `/login` → enter API key → redirect to `/`
2. `/` → reservoir cards with counts
3. `/reservoirs/ppr-1` → 6 data type cards with counts
4. `/reservoirs/ppr-1/well_logs` → well selector + uPlot log chart
5. `/reservoirs/ppr-1/production` → well selector + uPlot production chart
6. `/reservoirs/ppr-1/well_paths` → three.js 3D scene with 50 well tubes
7. `/reservoirs/ppr-1/seismic` → three.js seismic cube with 3 sliders
8. `/reservoirs/ppr-1/core_photos` → photo grid + lightbox
9. `/reservoirs/ppr-1/osdu_manifests` → file picker + JSON viewer
10. Disconnect button → clears key → redirects to login
