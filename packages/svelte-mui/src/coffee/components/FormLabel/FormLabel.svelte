<script lang='coffee'>
  export color = 'primary'
  export focused = false
  export disabled = false
  export error = false
  export required = false

  (`$:`) classes = (->
    result = ''
    if color is 'secondary'
      result += "color-#{color} "
    #console.log 'classes', result, color
    result
  )()

  (`$:`) props = {...$$props, class: "root #{classes} #{$$props.class ? ''}"}
</script>

<style>
  .root {
    color: var(--theme-palette-text-secondary);
    margin: 0;
    font-family: var(--font-family, var(--theme-typography-body1-font-family));
    font-weight: var(--font-weight, var(--theme-typography-body1-font-weight));
    font-size: var(--font-size, var(--theme-typography-body1-font-size));
    /* line-height: var(--line-height, var(--theme-typography-body1-line-height)); */
    letter-spacing: var(--letter-spacing, var(--theme-typography-body1-letter-spacing));
    text-transform: var(--text-transform, inherit);
    line-height: 1;
    padding: 0;
  }
  .focused {
    color: var(--theme-palette-primary-main);
  }
  .disabled {
    color: var(--theme-palette-text-disabled);
  }
  .error {
    color: var(--theme-palette-error-main);
  }
  .color-secondary.focused {
    color: var(--theme-palette-secondary-main);
  }
</style>

<label
  class:focused
  class:disabled
  class:error
  for={$$props.for}
  {...props}
>
  <slot />
  {#if required}
    <span>&thinsp;*</span>
  {/if}
</label>