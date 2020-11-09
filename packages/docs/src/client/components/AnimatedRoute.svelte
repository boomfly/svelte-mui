<script lang='coffee'>
  import { fade, fly } from 'svelte/transition'
</script>

<style>
  .animated-route-root {
    position: absolute;
  }
</style>

<div class='animated-route-root' in:fly="{{x: 200, opacity: 0, duration: 300}}" out:fly="{{x: 200, opacity: 0, duration: 300}}">
  <slot />
</div>