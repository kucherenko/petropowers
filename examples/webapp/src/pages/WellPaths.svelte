<script lang="ts">
  interface Props { name: string }
  let { name }: Props = $props()
</script>
<div class="p-4">Well Paths: {name}</div>
