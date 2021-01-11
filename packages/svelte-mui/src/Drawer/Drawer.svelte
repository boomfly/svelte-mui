<script>
  import { fade } from 'svelte/transition';
  import Style from '../internal/Style';

  let klass = '';
  export { klass as class };
  export let width = '256px';
  export let active = true;
  export let fixed = false;
  export let absolute = false;
  export let right = false;
  export let mini = false;
  export let clipped = false;
  export let borderless = false;
  export let miniWidth = '56px';
  export let clippedHeight = '56px';
  export let transition = fade;
  export let transitionOpts = {};
  export let style = null;
</script>

<aside
  class="s-navigation-drawer {klass}"
  transition:transition={transitionOpts}
  class:active
  class:fixed
  class:absolute
  class:right
  class:mini
  class:clipped
  on:hover
  use:Style={{ 'nav-width': width, 'nav-min-width': miniWidth, 'nav-clipped-height': clippedHeight }}
  {style}>
  <slot name="prepend" />
  <div class="s-navigation-drawer__content">
    <slot />
  </div>
  <slot name="append" />
  {#if !borderless}
    <div class="s-navigation-drawer__border" />
  {/if}
</aside>

<style lang='scss'>
  $navigation-drawer-border-width: 1px !default;
  $navigation-drawer-mobile-temporary-elevation: 16 !default;

  .s-navigation-drawer__border {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: $navigation-drawer-border-width;
    background-color: var(--theme-divider);
  }

  .s-navigation-drawer__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .s-navigation-drawer {
    background-color: var(--theme-navigation-drawer);
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
    left: 0;
    max-width: 100%;
    width: var(--s-nav-width);
    height: 100%;
    overflow: hidden;
    pointer-events: auto;
    top: 0;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    transition-property: transform, visibility, width;

    &:not(.active) {
      transform: translateX(-100%);
    }

    &.fixed {
      position: fixed;
      z-index: 6;
    }

    &.absolute {
      position: absolute;
      z-index: 2;
    }

    &.right {
      left: auto;
      right: 0;

      &::after {
        left: 0;
        right: initial;
      }

      &:not(.active) {
        transform: translate(100%);
      }

      .s-navigation-drawer__border {
        right: auto;
        left: 0;
      }
    }

    &.clipped {
      z-index: 4;
      top: var(--s-nav-clipped-height);
      max-height: calc(100% - var(--s-nav-clipped-height));
    }

    :global(&.mini) {
      width: var(--s-nav-min-width);
      overflow: hidden;

      :global(.s-list-item) {
        > :global(*:first-child) {
          margin-left: 0;
          margin-right: 0;
        }

        > *:not(:first-child) {
          display: none;
        }
      }
    }
  }
</style>