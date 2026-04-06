<script lang="ts">
  interface Props {
    value?: number
    min?: number
    max?: number
    step?: number
    label?: string
    onchange?: (value: number) => void
  }

  let { value = $bindable(0), min = 0, max = 100, step = 1, label, onchange }: Props = $props()
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <span class="text-xs text-muted-foreground">{label}: {value}</span>
  {/if}
  <input
    type="range"
    bind:value
    {min} {max} {step}
    class="w-full h-2 accent-primary cursor-pointer"
    oninput={(e) => onchange?.(Number((e.target as HTMLInputElement).value))}
  />
</div>
