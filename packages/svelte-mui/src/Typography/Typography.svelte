<script lang='coffee'>
  export variant = 'body1'
  export component = 'p'
  export color = 'initial'
  export align = 'inherit'
  export display = 'initial'
  export nowrap = false
  export gutterBottom = false
  export paragraph = false

  (`$:`) style = (
    result =
    """
    --font-family: var(--theme-typography-#{variant}-font-family);
    --font-weight: var(--theme-typography-#{variant}-font-weight);
    --font-size: var(--theme-typography-#{variant}-font-size);
    --line-height: var(--theme-typography-#{variant}-line-height);
    --letter-spacing: var(--theme-typography-#{variant}-letter-spacing);
    """
    if variant is 'overline'
      result += "--text-transform: var(--theme-typography-#{variant}-text-transform);"
    #console.log 'style', result
    result
  )

  (`$:`) classes = (
    result = ''
    if color isnt 'initial'
      result += "color-#{color} "
    if align isnt 'inherit'
      result += "align-#{align} "
    if display isnt 'initial'
      result += "display-#{display} "
    if nowrap
      result += "nowrap "
    if gutterBottom
      result += "gutter-bottom "
    if paragraph
      result += "paragraph "
    #console.log 'classes', result, color
    result
  )

  (`$:`) props = {class: "root #{classes} #{$$props.class}", style: "#{style} #{$$props.style ? ''}"}
</script>

<style>
  .root {
    margin: 0;
    font-family: var(--font-family, var(--theme-typography-body1-font-family));
    font-weight: var(--font-weight, var(--theme-typography-body1-font-weight));
    font-size: var(--font-size, var(--theme-typography-body1-font-size));
    line-height: var(--line-height, var(--theme-typography-body1-line-height));
    letter-spacing: var(--letter-spacing, var(--theme-typography-body1-letter-spacing));
    text-transform: var(--text-transform, inherit);
  }
  .align-left {
    text-align: left;
  }
  .align-center {
    text-align: center;
  }
  .align-right {
    text-align: right;
  }
  .align-justify {
    text-align: justify;
  }
  .nowrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .gutter-bottom {
    margin-bottom: 0.35em;
  }
  .paragraph {
    margin-bottom: calc(var(--theme-spacing) * 2);
  }
  .color-inherit {
    color: inherit;
  }
  .color-primary {
    color: var(--theme-palette-primary-main);
  }
  .color-secondary {
    color: var(--theme-palette-secondary-main);
  }
  .color-text-primary {
    color: var(--theme-palette-text-primary);
  }
  .color-text-secondary {
    color: var(--theme-palette-text-secondary);
  }
  .color-error {
    color: var(--theme-palette-error-main);
  }
  .display-inline {
    display: inline;
  }
  .display-block {
    display: block;
  }
</style>

{#if component === 'p'}
  <p {...props}><slot /></p>
{:else if component === 'h1'}
  <h1 {...props}><slot /></h1>
{:else if component === 'h2'}
  <h2 {...props}><slot /></h2>
{:else if component === 'h3'}
  <h3 {...props}><slot /></h3>
{:else if component === 'h4'}
  <h4 {...props}><slot /></h4>
{:else}
  <p {...props}><slot /></p>
{/if}