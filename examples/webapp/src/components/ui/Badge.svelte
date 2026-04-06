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
