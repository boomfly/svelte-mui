<script lang='coffee'>
  import { fade, fly } from 'svelte/transition'
</script>

<div in:fly="{{x: 200, duration: 300}}" out:fly="{{x: 200, duration: 300}}">
  <slot />
</div>