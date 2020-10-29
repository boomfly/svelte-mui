<script lang='coffee'>
  import Element from '../common/Element.svelte'
  import Paper from '../Paper/index.coffee'
  import {currentTheme} from '../styles/index.coffee'
  export position = 'static'
  export color = 'default'
  export headerStyle = ''

  (`$:`) style = (
    result = ''
    if color is 'default'
      if $currentTheme is 'light'
        result += 'background-color: var(--theme-colors-grey-100);'
      else
        result += 'background-color: var(--theme-colors-grey-900);'
    result
  )

  (`$:`) _className = (
    "root position-#{position} color-#{color} #{$$props.class ? ''}"
  )

  (`$:`) restProps = (
    props = {...$$props}
    delete props['class']
    props
  )
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    z-index: var(--theme-z-index-appbar);
    flex-shrink: 0;
  }
  .root :global(.position-fixed) {
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
  }
  @media print {
    .root :global(.position-fixed) {
      position: absolute;
    }
  }
  .root :global(.position-absolute) {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
  }
  .root :global(.position-sticky) {
    position: sticky;
    top: 0;
    left: auto;
    right: 0;
  }
  .root :global(.position-static) {
    position: static;
  }

  .position-static {
    position: static;
  }

  .root :global(.position-relative) {
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
  class="root"
  style={headerStyle}
  {...restProps}
>
  <Paper
    square
    elevation={1}
    class="position-{position} color-{color} {$$props.class || ''}"
    {style}
  >
    <slot />
  </Paper>
</header>
