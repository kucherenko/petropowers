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
