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
      role="button"
      aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onclick={() => theme.toggle()}
      class="flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span aria-hidden="true">{$theme === 'dark' ? '☽' : '☀️'}</span>
      <span>{$theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
    <Button variant="ghost" size="sm" onclick={disconnect}>Disconnect</Button>
  </div>
</header>
