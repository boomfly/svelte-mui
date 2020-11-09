<script lang='coffee'>
  import { fade, fly } from 'svelte/transition'
  import {Route} from 'svelte-routing'
</script>

<style>
  .animated-route-root {
    width: 100%;
    position: absolute;
    overflow-x: hidden;
  }
</style>

<Route {...$$props}>
  <div class='animated-route-root' in:fly="{{x: 200, opacity: 0, duration: 300}}" out:fly="{{x: 200, opacity: 0, duration: 300}}">
    <slot />
  </div>
</Route>