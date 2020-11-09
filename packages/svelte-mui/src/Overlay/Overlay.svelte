<script lang='coffee'>
  import {fade} from 'svelte/transition'
  export active = true
  export opacity = 0.46
  export color = 'rgb(33, 33, 33)'
  export index = 5;
  export absolute = false;
  export fadeOptions = {}
  export style = ''
</script>

<style>
  .overlay {
    align-items: center;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: auto;
  }
  .overlay.absolute {
    position: absolute;
  }
  .wrapper {
    border-radius: inherit;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    width: 100%;
    will-change: opacity;
  }
  .content {
   position: relative; 
  }
</style>

{#if active}
  <div
    transition:fade={fadeOptions}
    class='overlay {$$props.class || ''}'
    class:absolute
    on:click
    style='z-index:{index};{style}'>
    <div class='wrapper' style='opacity:{opacity};background-color:{color}' />
    <div class='content'>
      <slot />
    </div>
  </div>
{/if}