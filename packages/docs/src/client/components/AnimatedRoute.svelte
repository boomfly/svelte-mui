<script lang='coffee'>
  import { fade, fly } from 'svelte/transition'
</script>

<style>
  /* .animated-route-root {
    opacity: 0;
  } */
</style>

<div class='animated-route-root' in:fly="{{x: 200, opacity: 0, duration: 300}}" out:fly="{{x: 200, opacity: 0, duration: 300}}">
  <slot />
</div>