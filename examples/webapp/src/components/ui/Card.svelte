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
