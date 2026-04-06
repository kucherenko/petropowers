<script lang="ts">
  import { navigate } from 'svelte-routing'
  import { apiKey } from '../lib/stores'
  import { getHealth } from '../lib/api'
  import Card from '../components/ui/Card.svelte'
  import Input from '../components/ui/Input.svelte'
  import Button from '../components/ui/Button.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Spinner from '../components/ui/Spinner.svelte'

  let keyInput = $state('')
  let loading = $state(false)
  let error = $state('')

  async function connect() {
    if (!keyInput.trim()) { error = 'API key is required'; return }
    loading = true
    error = ''
    // Temporarily set key so apiFetch can use it
    apiKey.set(keyInput.trim())
    try {
      await getHealth()
      navigate('/', { replace: true })
    } catch (e: unknown) {
      apiKey.clear()
      const msg = e instanceof Error ? e.message : String(e)
      error = msg.startsWith('401') ? 'Invalid API key' : `Connection failed: ${msg}`
    } finally {
      loading = false
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-muted/30">
  <Card class="w-full max-w-sm p-8 flex flex-col gap-4">
    <h1 class="text-2xl font-bold text-center">Reservoir Manager</h1>
    <p class="text-sm text-muted-foreground text-center">Enter your API key to connect</p>

    {#if error}
      <Alert variant="destructive">{error}</Alert>
    {/if}

    <Input
      bind:value={keyInput}
      placeholder="X-API-Key value"
      type="password"
      onkeydown={(e) => e.key === 'Enter' && connect()}
    />
    <Button onclick={connect} disabled={loading} class="w-full">
      {#if loading}<Spinner class="mr-2" />{/if}
      Connect
    </Button>
  </Card>
</div>
