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
