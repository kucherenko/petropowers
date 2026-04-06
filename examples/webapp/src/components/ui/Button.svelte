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
