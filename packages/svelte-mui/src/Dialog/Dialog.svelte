<script>
  import Overlay from '../Overlay';
  import Style from '../internal/Style';
  import { scale } from 'svelte/transition';

  let klass = '';
  export { klass as class };
  export let active = false;
  export let persistent = false;
  export let disabled = false;
  export let width = 500;
  export let fullscreen = false;
  export let transition = scale;
  export let overlay = {};

  function close() {
    if (!persistent) active = false;
  }
  $: visible = active && !disabled;
</script>

{#if visible}
  <div role="document" class="s-dialog" use:Style={{ 'dialog-width': width }}>
    <div
      class="s-dialog__content {klass}"
      class:fullscreen
      transition:transition={{ duration: 300, start: 0.1 }}>
      <slot />
    </div>
  </div>
{/if}
<Overlay {...overlay} active={visible} on:click={close} />

<style lang='scss'>
  $dialog-border-radius: var(--theme-shape-border-radius) !default;
  $dialog-card-subtitle-padding: 0 24px 20px !default;
  $dialog-card-text-padding: 0 24px 20px !default;
  $dialog-card-title-font-size: var(--theme-typography-h6-font-family) !default;
  $dialog-card-title-font-weight: var(--theme-typography-h6-font-weight) !default;
  $dialog-card-title-letter-spacing: var(--theme-typography-h6-font-letter-spacing) !default;
  $dialog-card-title-padding: 16px 24px 10px !default;
  $dialog-elevation: 24 !default;
  $dialog-margin: 24px !default;
  $dialog-max-height: 90% !default;

  .s-dialog {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
    width: 100%;
    z-index: 6;
    outline: none;
  }

  .s-dialog__content {
    background-color: var(--theme-palette-background-paper);
    border-radius: $dialog-border-radius;
    margin: $dialog-margin;
    overflow-y: auto;
    pointer-events: auto;
    z-index: inherit;
    box-shadow: var(--theme-shadows-24);

    &:not(.fullscreen) {
      max-height: $dialog-max-height;
      width: var(--s-dialog-width);
    }

    &.fullscreen {
      border-radius: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      position: fixed;
      overflow-y: auto;
      top: 0;
      left: 0;
    }

    > :global(.s-card) {
      > :global(.s-card-title) {
        font-size: $dialog-card-title-font-size;
        font-weight: $dialog-card-title-font-weight;
        letter-spacing: $dialog-card-title-letter-spacing;
        padding: $dialog-card-title-padding;
      }

      > :global(.s-card-text) {
        padding: $dialog-card-text-padding;
      }

      > :global(.s-card-subtitle) {
        padding: $dialog-card-subtitle-padding;
      }
    }
  }

  .fullscreen {
    border-radius: 0;
    margin: 0;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;

    > :global(.s-card) {
      min-height: 100%;
      min-width: 100%;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
</style>