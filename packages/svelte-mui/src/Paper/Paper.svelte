<script lang='coffee'>
  export square = false
  export elevation = 1
  export variant = 'elevation'

  (`$:`) style = (
    result = ''
    if variant is 'elevation'
      result += "--shadow: var(--theme-shadows-#{elevation});"
    result
  )
</script>

<style>
  .paper-root {
    --shadow: var(--theme-shadow-0);

    background-color: var(--theme-palette-background-paper);
    color: var(--theme-palette-text-primary)
  }
  .rounded {
    border-radius: var(--theme-shape-border-radius)
  }
  .outlined {
    border: 1px solid var(--theme-palette-divider);
  }
  .elevation {
    box-shadow: var(--shadow);
  }
</style>

<div
  class:rounded={!square}
  class='paper-root {variant} {$$props.class || ''}'
  style='{style}{$$props.style || ''}'
>
  <slot />
</div>
