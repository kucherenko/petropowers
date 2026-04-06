# Geoscience Theme & Dark Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a Geoscience Blue color palette with a persistent light/dark toggle to the Reservoir Management webapp.

**Architecture:** CSS custom properties on `:root` (light) and `:root.dark` (dark) drive all theming; a Svelte writable store persists the preference to `localStorage`; `App.svelte` applies the `dark` class to `<html>`; a pill toggle in `NavBar.svelte` wires the UI.

**Tech Stack:** Svelte 5, TypeScript, Tailwind CSS (CSS custom properties), Vitest (jsdom)

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/app.css` | Modify | Replace `:root` light values with Geoscience palette; add `:root.dark` block |
| `src/lib/stores.ts` | Modify | Add `theme` store with `toggle()` and `localStorage` persistence |
| `src/test/stores.test.ts` | Create | Unit tests for theme store |
| `src/App.svelte` | Modify | Subscribe to theme store; apply/remove `dark` class on `<html>` |
| `src/components/NavBar.svelte` | Modify | Add pill sun/moon toggle button |

---

## Task 1: Theme store

**Files:**
- Modify: `src/lib/stores.ts`
- Create: `src/test/stores.test.ts`

- [ ] **Step 1.1: Write the failing tests**

Create `src/test/stores.test.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { get } from 'svelte/store'

// vi.resetModules() is required — the theme store reads localStorage at module
// initialization time, so each test needs a fresh module import.
beforeEach(() => {
  localStorage.clear()
  vi.resetModules()
})

describe('theme store', () => {
  it('defaults to dark when localStorage is empty', async () => {
    const { theme } = await import('../lib/stores')
    expect(get(theme)).toBe('dark')
  })

  it('initializes from localStorage if set', async () => {
    localStorage.setItem('reservoir_theme', 'light')
    const { theme } = await import('../lib/stores')
    expect(get(theme)).toBe('light')
  })

  it('toggle switches dark → light', async () => {
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(get(theme)).toBe('light')
  })

  it('toggle switches light → dark', async () => {
    localStorage.setItem('reservoir_theme', 'light')
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(get(theme)).toBe('dark')
  })

  it('persists to localStorage on toggle', async () => {
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(localStorage.getItem('reservoir_theme')).toBe('light')
    theme.toggle()
    expect(localStorage.getItem('reservoir_theme')).toBe('dark')
  })
})
```

- [ ] **Step 1.2: Run tests to verify they fail**

```bash
cd examples/webapp && npm test -- --reporter=verbose 2>&1 | grep -A3 "theme store"
```

Expected: FAIL — `theme` is not exported from `stores.ts`

- [ ] **Step 1.3: Add theme store to `src/lib/stores.ts`**

Append to the end of the existing file (after `export const reservoirs = writable<string[]>([])`):

```typescript
const THEME_KEY = 'reservoir_theme'
type Theme = 'light' | 'dark'

function createThemeStore() {
  const initial: Theme = (localStorage.getItem(THEME_KEY) as Theme) ?? 'dark'
  const { subscribe, set } = writable<Theme>(initial)

  return {
    subscribe,
    toggle() {
      const current = localStorage.getItem(THEME_KEY) ?? 'dark'
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(THEME_KEY, next)
      set(next)
    },
  }
}

export const theme = createThemeStore()
```

- [ ] **Step 1.4: Run tests to verify they pass**

```bash
cd examples/webapp && npm test -- --reporter=verbose 2>&1 | grep -A3 "theme store"
```

Expected: 5 tests pass.

- [ ] **Step 1.5: Run full test suite to check no regressions**

```bash
cd examples/webapp && npm test
```

Expected: all previously passing tests still pass.

- [ ] **Step 1.6: Commit**

```bash
cd examples/webapp && git add src/lib/stores.ts src/test/stores.test.ts && git commit -m "feat: add theme store with localStorage persistence"
```

---

## Task 2: CSS custom properties

**Files:**
- Modify: `src/app.css`

No unit tests — CSS correctness is verified visually and via the passing build.

- [ ] **Step 2.1: Replace `src/app.css` with Geoscience palette**

The current file is:
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

Replace the entire file with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Light mode — Geoscience Blue tinted */
  :root {
    --background: 214 100% 97%;
    --foreground: 215 51% 24%;
    --card: 0 0% 100%;
    --card-foreground: 215 51% 24%;
    --primary: 224 71% 46%;
    --primary-foreground: 214 100% 97%;
    --secondary: 214 89% 93%;
    --secondary-foreground: 215 51% 24%;
    --muted: 214 89% 93%;
    --muted-foreground: 217 91% 60%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 213 97% 87%;
    --input: 214 89% 93%;
    --ring: 224 71% 46%;
    --radius: 0.5rem;
  }

  /* Dark mode — Geoscience Blue deep navy */
  :root.dark {
    --background: 216 67% 12%;
    --foreground: 206 100% 97%;
    --card: 215 65% 17%;
    --card-foreground: 206 100% 97%;
    --primary: 207 82% 67%;
    --primary-foreground: 216 67% 12%;
    --secondary: 215 64% 28%;
    --secondary-foreground: 206 100% 97%;
    --muted: 215 64% 28%;
    --muted-foreground: 207 79% 77%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 206 100% 97%;
    --border: 215 55% 35%;
    --input: 215 64% 28%;
    --ring: 207 82% 67%;
  }

  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
```

- [ ] **Step 2.2: Run tests (CSS change should not affect tests)**

```bash
cd examples/webapp && npm test
```

Expected: all tests pass.

- [ ] **Step 2.3: Commit**

```bash
cd examples/webapp && git add src/app.css && git commit -m "feat: add Geoscience Blue CSS custom properties (light + dark)"
```

---

## Task 3: Apply theme class in App.svelte

**Files:**
- Modify: `src/App.svelte`

- [ ] **Step 3.1: Update `src/App.svelte`**

Replace the current file content:

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
  import CorePhotos from './pages/CorePhotos.svelte'
  import OsduManifests from './pages/OsduManifests.svelte'
  import WellMap from './pages/WellMap.svelte'

  // Auth guard: redirect to /login if no key and not already there
  $effect(() => {
    if (!get(apiKey) && window.location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  })
</script>

<Router>
  <Route path="/login"><Login /></Route>
  <Route path="/"><ReservoirList /></Route>
  <Route path="/reservoirs/:name" let:params>
    <ReservoirOverview name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_logs" let:params>
    <WellLogs name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/production" let:params>
    <Production name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_map" let:params>
    <WellMap name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/core_photos" let:params>
    <CorePhotos name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/osdu_manifests" let:params>
    <OsduManifests name={params.name} />
  </Route>
</Router>
```

With this updated version:

```svelte
<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import { get } from 'svelte/store'
  import { navigate } from 'svelte-routing'
  import { apiKey, theme } from './lib/stores'
  import Login from './pages/Login.svelte'
  import ReservoirList from './pages/ReservoirList.svelte'
  import ReservoirOverview from './pages/ReservoirOverview.svelte'
  import WellLogs from './pages/WellLogs.svelte'
  import Production from './pages/Production.svelte'
  import CorePhotos from './pages/CorePhotos.svelte'
  import OsduManifests from './pages/OsduManifests.svelte'
  import WellMap from './pages/WellMap.svelte'

  // Auth guard: redirect to /login if no key and not already there
  $effect(() => {
    if (!get(apiKey) && window.location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  })

  // Apply theme class to <html> element
  $effect(() => {
    if ($theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
</script>

<Router>
  <Route path="/login"><Login /></Route>
  <Route path="/"><ReservoirList /></Route>
  <Route path="/reservoirs/:name" let:params>
    <ReservoirOverview name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_logs" let:params>
    <WellLogs name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/production" let:params>
    <Production name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_map" let:params>
    <WellMap name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/core_photos" let:params>
    <CorePhotos name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/osdu_manifests" let:params>
    <OsduManifests name={params.name} />
  </Route>
</Router>
```

- [ ] **Step 3.2: Run tests**

```bash
cd examples/webapp && npm test
```

Expected: all tests pass.

- [ ] **Step 3.3: Commit**

```bash
cd examples/webapp && git add src/App.svelte && git commit -m "feat: apply theme class to html element from store"
```

---

## Task 4: Theme toggle in NavBar

**Files:**
- Modify: `src/components/NavBar.svelte`

- [ ] **Step 4.1: Update `src/components/NavBar.svelte`**

Replace the current file content:

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

With this updated version:

```svelte
<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { apiKey, theme } from '../lib/stores'
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

<header class="sticky top-0 z-10 flex items-center justify-between border-b bg-card px-6 h-14 shadow-sm">
  <div class="flex items-center gap-2 text-sm font-medium">
    <span class="font-semibold text-primary">Reservoir Manager</span>
    {#each breadcrumb as crumb, i}
      <span class="text-muted-foreground">/</span>
      <span class={i === breadcrumb.length - 1 ? 'text-foreground' : 'text-muted-foreground'}>{crumb}</span>
    {/each}
  </div>
  <div class="flex items-center gap-3">
    <!-- Theme toggle pill -->
    <button
      role="switch"
      aria-checked={$theme === 'dark'}
      aria-label="Toggle light/dark mode"
      onclick={() => theme.toggle()}
      class="flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span aria-hidden="true">{$theme === 'dark' ? '☽' : '☀'}</span>
      <span>{$theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
    <Button variant="ghost" size="sm" onclick={disconnect}>Disconnect</Button>
  </div>
</header>
```

- [ ] **Step 4.2: Run tests**

```bash
cd examples/webapp && npm test
```

Expected: all tests pass.

- [ ] **Step 4.3: Start dev server and manually verify**

```bash
cd examples/webapp && npm run dev
```

Open `http://localhost:5173` and verify:

1. App loads in dark (navy) mode by default
2. Toggle in nav bar shows "☽ Dark"
3. Clicking toggle switches to light (blue-tinted) mode and shows "☀ Light"
4. Refreshing the page preserves the selected mode
5. All pages render without obvious color bleed (no hardcoded `white` or `gray` backgrounds visible as wrong-theme artifacts)

- [ ] **Step 4.4: Commit**

```bash
cd examples/webapp && git add src/components/NavBar.svelte && git commit -m "feat: add light/dark theme toggle to nav bar"
```

---

## Acceptance Criteria Checklist

After all 4 tasks are complete, verify against the spec:

- [ ] App loads in dark (Geoscience Blue) mode by default on first visit
- [ ] Toggle in nav bar switches between light and dark modes
- [ ] Theme preference persists across page reloads via `localStorage`
- [ ] All existing pages render correctly in both modes
- [ ] No regressions — full test suite passes (`npm test`)
