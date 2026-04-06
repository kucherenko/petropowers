<script lang="ts">
  import { cn } from '../../lib/utils'

  interface Props { class?: string }
  let { class: className = '' }: Props = $props()
</script>

<div class={cn('animate-spin rounded-full border-2 border-muted border-t-primary h-5 w-5', className)}></div>
