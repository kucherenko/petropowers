# Reservoir List — Card Redesign with Pressure Map Previews

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the compact reservoir list with big 2-per-row cards that each embed a live pressure map preview built from production CSV data.

**Architecture:** Add a `loadWellPressures` utility to `api.ts` that fetches and parses production CSVs per reservoir; create a `ReservoirCard` component that renders the map preview + metadata; rewrite `ReservoirList` to use the new card and a 2-column grid. `WellMap` is simplified by delegating its data loading to the shared utility.

**Tech Stack:** Svelte 5, TypeScript, Tailwind CSS, PapaParse, uplot (existing), vitest

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/lib/api.ts` | Modify | Add `WellPressure` interface + `loadWellPressures` function |
| `src/test/api.test.ts` | Modify | Tests for `loadWellPressures` |
| `src/components/ReservoirCard.svelte` | Create | Big card: async pressure map preview + metadata |
| `src/pages/ReservoirList.svelte` | Modify | Remove title, 2-col grid, use ReservoirCard |
| `src/pages/WellMap.svelte` | Modify | Replace inline CSV logic with `loadWellPressures` |

---

### Task 1: Add `loadWellPressures` to `api.ts`

**Files:**
- Modify: `src/lib/api.ts`
- Modify: `src/test/api.test.ts`

- [ ] **Step 1: Write the failing tests**

  Add to the end of `src/test/api.test.ts`:

  ```ts
  describe('loadWellPressures', () => {
    beforeEach(() => {
      global.fetch = vi.fn()
    })

    it('parses production CSVs and returns averaged pressures', async () => {
      const csv = 'wellhead_pressure_psi,other\n1000,a\n2000,b\n3000,c\n'
      ;(global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce(new Response(JSON.stringify(['Well-001_production.csv']), { status: 200 }))
        .mockResolvedValueOnce(new Response(csv, { status: 200 }))
      const { loadWellPressures } = await import('../lib/api')
      const result = await loadWellPressures('ppr-1')
      expect(result).toHaveLength(1)
      expect(result[0].wellName).toBe('Well-001')
      expect(result[0].avgPressure).toBeCloseTo(2000)
    })

    it('skips files with no valid pressure values', async () => {
      const csv = 'wellhead_pressure_psi\nnotanumber\n'
      ;(global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce(new Response(JSON.stringify(['Bad_production.csv']), { status: 200 }))
        .mockResolvedValueOnce(new Response(csv, { status: 200 }))
      const { loadWellPressures } = await import('../lib/api')
      const result = await loadWellPressures('ppr-1')
      expect(result).toHaveLength(0)
    })

    it('derives well name by stripping _production.csv suffix', async () => {
      const csv = 'wellhead_pressure_psi\n1500\n'
      ;(global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce(new Response(JSON.stringify(['PPR1-Well-007_production.csv']), { status: 200 }))
        .mockResolvedValueOnce(new Response(csv, { status: 200 }))
      const { loadWellPressures } = await import('../lib/api')
      const result = await loadWellPressures('ppr-1')
      expect(result[0].wellName).toBe('PPR1-Well-007')
    })

    it('returns empty array when reservoir has no production files', async () => {
      ;(global.fetch as ReturnType<typeof vi.fn>)
        .mockResolvedValueOnce(new Response(JSON.stringify([]), { status: 200 }))
      const { loadWellPressures } = await import('../lib/api')
      const result = await loadWellPressures('empty-reservoir')
      expect(result).toEqual([])
    })
  })
  ```

- [ ] **Step 2: Run tests — verify they fail**

  ```bash
  npm test -- --reporter=verbose 2>&1 | grep -A 3 "loadWellPressures"
  ```

  Expected: `loadWellPressures is not a function` or similar import error.

- [ ] **Step 3: Add `WellPressure` interface and `loadWellPressures` to `api.ts`**

  Add at the top of `src/lib/api.ts` after the existing imports:

  ```ts
  import Papa from 'papaparse'
  ```

  Add at the end of `src/lib/api.ts`:

  ```ts
  export interface WellPressure {
    wellName: string
    avgPressure: number
  }

  export async function loadWellPressures(name: string): Promise<WellPressure[]> {
    const files = await listFiles(name, 'production')
    const results = await Promise.all(
      files.map(async (file): Promise<WellPressure | null> => {
        try {
          const r = await apiFetch(
            `/reservoirs/${encodeURIComponent(name)}/production/${encodeURIComponent(file)}`
          )
          const text = await r.text()
          const parsed = Papa.parse<Record<string, string>>(text, {
            header: true,
            skipEmptyLines: true,
          })
          const pressures = parsed.data
            .map(row => parseFloat(row['wellhead_pressure_psi']))
            .filter(v => isFinite(v))
          if (pressures.length === 0) return null
          const avg = pressures.reduce((a, b) => a + b, 0) / pressures.length
          const wellName = file.replace(/_production\.csv$/i, '')
          return { wellName, avgPressure: avg }
        } catch {
          return null
        }
      })
    )
    return results.filter((r): r is WellPressure => r !== null)
  }
  ```

- [ ] **Step 4: Run tests — verify they pass**

  ```bash
  npm test -- --reporter=verbose 2>&1 | grep -A 3 "loadWellPressures"
  ```

  Expected: all 4 `loadWellPressures` tests pass.

- [ ] **Step 5: Run full test suite — no regressions**

  ```bash
  npm test
  ```

  Expected: all existing tests still pass.

- [ ] **Step 6: Commit**

  ```bash
  git add src/lib/api.ts src/test/api.test.ts
  git commit -m "feat: add loadWellPressures utility to api.ts"
  ```

---

### Task 2: Create `ReservoirCard` component

**Files:**
- Create: `src/components/ReservoirCard.svelte`

- [ ] **Step 1: Create the component**

  Create `src/components/ReservoirCard.svelte` with this content:

  ```svelte
  <script lang="ts">
    import { onMount } from 'svelte'
    import { loadWellPressures } from '../lib/api'
    import type { WellPressure } from '../lib/api'
    import type { ReservoirSummary } from '../lib/types'
    import ReservoirMap from './ReservoirMap.svelte'
    import Badge from './ui/Badge.svelte'
    import Spinner from './ui/Spinner.svelte'

    interface Props {
      name: string
      summary: ReservoirSummary
      onclick: () => void
    }

    let { name, summary, onclick }: Props = $props()

    let wells: WellPressure[] = $state([])
    let mapLoading = $state(true)
    let mapError = $state('')
    let cardWidth = $state(0)

    onMount(async () => {
      try {
        wells = await loadWellPressures(name)
      } catch (e: unknown) {
        mapError = e instanceof Error ? e.message : String(e)
      } finally {
        mapLoading = false
      }
    })
  </script>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <button
    class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-full text-left cursor-pointer hover:shadow-md transition-shadow"
    {onclick}
  >
    <div class="w-full" bind:clientWidth={cardWidth}>
      {#if mapLoading}
        <div class="flex items-center justify-center bg-[#13161f]" style="height:220px;">
          <Spinner class="h-6 w-6" />
        </div>
      {:else if mapError || wells.length === 0}
        <div
          class="flex items-center justify-center bg-[#13161f] text-muted-foreground text-sm"
          style="height:220px;"
        >
          No well data
        </div>
      {:else}
        <ReservoirMap {wells} reservoirName={name} width={cardWidth || 400} height={220} />
      {/if}
    </div>

    <div class="p-4">
      <h2 class="text-base font-semibold mb-2">{name}</h2>
      <div class="flex flex-wrap gap-1">
        {#each Object.entries(summary) as [type, count]}
          <Badge variant="secondary">{type}: {count}</Badge>
        {/each}
      </div>
    </div>
  </button>
  ```

- [ ] **Step 2: Type-check**

  ```bash
  npm run check 2>&1 | tail -20
  ```

  Expected: no errors in `ReservoirCard.svelte`.

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/ReservoirCard.svelte
  git commit -m "feat: add ReservoirCard component with pressure map preview"
  ```

---

### Task 3: Update `ReservoirList` page

**Files:**
- Modify: `src/pages/ReservoirList.svelte`

- [ ] **Step 1: Replace the page content**

  Replace the entire content of `src/pages/ReservoirList.svelte` with:

  ```svelte
  <script lang="ts">
    import { onMount } from 'svelte'
    import { navigate } from 'svelte-routing'
    import { listReservoirs, getReservoir } from '../lib/api'
    import type { ReservoirSummary } from '../lib/types'
    import NavBar from '../components/NavBar.svelte'
    import ReservoirCard from '../components/ReservoirCard.svelte'
    import Alert from '../components/ui/Alert.svelte'
    import Spinner from '../components/ui/Spinner.svelte'

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
  <main class="p-6 max-w-6xl mx-auto">
    {#if loading}
      <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
    {:else if error}
      <Alert variant="destructive">{error}</Alert>
    {:else}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each items as { name, summary }}
          <ReservoirCard
            {name}
            {summary}
            onclick={() => navigate(`/reservoirs/${name}`)}
          />
        {/each}
      </div>
    {/if}
  </main>
  ```

- [ ] **Step 2: Type-check**

  ```bash
  npm run check 2>&1 | tail -20
  ```

  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/pages/ReservoirList.svelte
  git commit -m "feat: redesign reservoir list with big cards and 2-col grid"
  ```

---

### Task 4: Simplify `WellMap` page

**Files:**
- Modify: `src/pages/WellMap.svelte`

- [ ] **Step 1: Replace the page content**

  Replace the entire content of `src/pages/WellMap.svelte` with:

  ```svelte
  <script lang="ts">
    import { onMount } from 'svelte'
    import { loadWellPressures } from '../lib/api'
    import type { WellPressure } from '../lib/api'
    import NavBar from '../components/NavBar.svelte'
    import ReservoirMap from '../components/ReservoirMap.svelte'
    import Alert from '../components/ui/Alert.svelte'
    import Spinner from '../components/ui/Spinner.svelte'

    interface Props { name: string }
    let { name }: Props = $props()

    let wells: WellPressure[] = $state([])
    let loading = $state(true)
    let pageError = $state('')

    onMount(async () => {
      try {
        wells = await loadWellPressures(name)
      } catch (e: unknown) {
        pageError = e instanceof Error ? e.message : String(e)
      } finally {
        loading = false
      }
    })
  </script>

  <NavBar breadcrumb={[name, 'Well Map']} />
  <main class="p-6 max-w-5xl mx-auto">
    {#if pageError}
      <Alert variant="destructive">{pageError}</Alert>
    {:else if loading}
      <div class="flex justify-center py-12"><Spinner class="h-8 w-8" /></div>
    {:else if wells.length === 0}
      <p class="text-muted-foreground">No production data available to build the well map.</p>
    {:else}
      <div class="mb-4 flex items-center gap-4 flex-wrap">
        <div class="flex items-center gap-2 text-sm">
          <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span> Low pressure
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="inline-block w-3 h-3 rounded-full bg-amber-500"></span> Mid pressure
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="inline-block w-3 h-3 rounded-full bg-red-500"></span> High pressure
        </div>
        <div class="text-sm text-muted-foreground ml-auto">Bubble size ∝ avg pressure</div>
      </div>
      <ReservoirMap {wells} reservoirName={name} width={700} height={450} />
    {/if}
  </main>
  ```

- [ ] **Step 2: Type-check**

  ```bash
  npm run check 2>&1 | tail -20
  ```

  Expected: no errors.

- [ ] **Step 3: Run full test suite**

  ```bash
  npm test
  ```

  Expected: all tests pass.

- [ ] **Step 4: Commit**

  ```bash
  git add src/pages/WellMap.svelte
  git commit -m "refactor: simplify WellMap to use shared loadWellPressures"
  ```

---

## Verification

After all tasks complete:

```bash
npm run build
```

Expected: clean build with no TypeScript errors.

Start the dev server and verify manually:
- `/` — no "Reservoirs" title; 2-col grid of big cards; each card shows a pressure map preview loading asynchronously
- `/reservoirs/:name/well_map` — still works, same visual as before
