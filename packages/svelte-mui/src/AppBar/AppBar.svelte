<script lang='coffee'>
  import Element from '../common/Element.svelte'
  import Paper from '../Paper'
  import {currentTheme} from '../styles'
  export position = 'static'
  export color = 'default'
  export headerStyle = ''
</script>

<style>
  :global([theme=light]) {
    --theme-palette-background-appbar: var(--theme-colors-grey-100);
  }
  :global([theme=dark]) {
    --theme-palette-background-appbar: var(--theme-colors-grey-900);
  }
  .root {
    --theme-z-index-appbar: 1100;
    
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    z-index: var(--theme-z-index-appbar);
    flex-shrink: 0;
  }
  .root :global(.paper) {
    background-color: var(--theme-palette-background-appbar);
  }
  .position-fixed {
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
  }
  @media print {
    .position-fixed {
      position: absolute;
    }
  }
  .position-absolute {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
  }
  .position-sticky {
    position: sticky;
    top: 0;
    left: auto;
    right: 0;
  }
  .position-static {
    position: static;
  }

  .position-relative {
    position: relative;
  }
  .root :global(.color-primary) {
    background-color: var(--theme-palette-primary-main);
    color: var(--theme-palette-primary-contrast-text);
  }
  .root :global(.color-secondary) {
    background-color: var(--theme-palette-secondary-main);
    color: var(--theme-palette-secondary-contrast-text);
  }
  .root :global(.color-inherit) {
    color: inherit;
  }
  .root :global(.color-transparent) {
    background-color: transparent;
    color: inherit;
  }
</style>

<header
  class="root position-{position}"
  style={headerStyle}
>
  <Paper
    square
    elevation={1}
    class="paper color-{color} {$$props.class || ''}"
    style="{$$props.style || ''}"
  >
    <slot />
  </Paper>
</header>
