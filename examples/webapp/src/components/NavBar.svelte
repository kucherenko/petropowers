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
