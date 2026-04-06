<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import { get } from 'svelte/store'
  import { navigate } from 'svelte-routing'
  import { apiKey } from './lib/stores'
  import Login from './pages/Login.svelte'
  import ReservoirList from './pages/ReservoirList.svelte'
  import ReservoirOverview from './pages/ReservoirOverview.svelte'
  import WellLogs from './pages/WellLogs.svelte'
  import Production from './pages/Production.svelte'
  import CorePhotos from './pages/CorePhotos.svelte'
  import OsduManifests from './pages/OsduManifests.svelte'
  import WellMap from './pages/WellMap.svelte'

  // Auth guard: redirect to /login if no key and not already there
  $effect(() => {
    if (!get(apiKey) && window.location.pathname !== '/login') {
      navigate('/login', { replace: true })
    }
  })
</script>

<Router>
  <Route path="/login"><Login /></Route>
  <Route path="/"><ReservoirList /></Route>
  <Route path="/reservoirs/:name" let:params>
    <ReservoirOverview name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_logs" let:params>
    <WellLogs name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/production" let:params>
    <Production name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/well_map" let:params>
    <WellMap name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/core_photos" let:params>
    <CorePhotos name={params.name} />
  </Route>
  <Route path="/reservoirs/:name/osdu_manifests" let:params>
    <OsduManifests name={params.name} />
  </Route>
</Router>
