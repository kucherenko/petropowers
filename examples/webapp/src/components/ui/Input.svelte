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
