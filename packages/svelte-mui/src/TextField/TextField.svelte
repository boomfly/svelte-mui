<script lang='coffee'>
  export variant = 'standard'
  export color = 'primary'
  export disabled = false
  export autofocus = false
  export autocomplete = false
  export fullWidth = false
  export id = null
  export label = null
  export multiline = false
  export value = null
  export maxLines = 999
  export disableUnderline = false

  inputEl = null
  height = null
  offset = null
  rows = null
  maxAllowedHeight = null
  focused = false

  getStyleValue = (computedStyle, property) -> parseInt(computedStyle[property], 10) ? 0

  syncHeight = (value) ->
    return unless inputEl

    newHeight = 0
    hasGrow = false
    if inputEl.scrollHeight - offset > maxAllowedHeight
      inputEl.style.overflowY = 'scroll'
      newHeight = maxAllowedHeight
    else
      inputEl.style.overflowY = 'hidden'
      inputEl.style.height = 'auto'
      newHeight = inputEl.scrollHeight - offset
      hasGrow = true
    inputEl.style.height = "#{newHeight}px"

  onInit = (ref) ->
    return unless ref
    computedStyle = window.getComputedStyle ref
    offset = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top')
    rows = ref.rows ? 1
    lineHeight = (ref.scrollHeight / rows) - (offset / rows)
    maxAllowedHeight = (ref.scrollHeight * maxLines) - offset

  (`$:`) onInit inputEl

  (`$:`) style = (
    result = ''
    if height
      result += "height: #{height};"
    result
  )

  onInput = (e) ->
    console.log e.target.value
    value = e.target.value
    if multiline
      syncHeight()

  onFocus = (e) ->
    focused = true

  onBlur = (e) ->
    focused = false
</script>

<div
  {disabled}
  class:disabled
  class:focused
  class:fullWidth
  class:underline={!disableUnderline}
  class='text-field-root {variant} {color} {$$props.class}'
>
  <span class='start adornment'>
    <slot name='start-adornment'></slot>
  </span>
    
  {#if label}
    {label}
  {/if}
  {#if multiline}
    <!-- svelte-ignore a11y-autofocus -->
    <textarea
      bind:this={inputEl}
      class='input'
      class:multiline
      autofocus={autofocus}
      bind:value
      on:input={onInput}
      rows='1'
      on:focus={onFocus}
      on:blur={onBlur}
      {style}
    />
  {:else}
    <!-- svelte-ignore a11y-autofocus -->
    <input
      bind:this={inputEl}
      class='input'
      autofocus={autofocus}
      bind:value
      on:focus={onFocus}
      on:blur={onBlur}
    />
  {/if}

  <span class='end adornment'>
    <slot name='end-adornment'></slot>
  </span>
  <span class='ripple'></span>
</div>

<style>
  .text-field-root {
    --color: inherit;

    overflow: hidden;

    font-family: var(--theme-typography-body1-font-family);
    font-weight: var(--theme-typography-body1-font-weight);
    font-size: var(--theme-typography-body1-font-size);
    line-height: var(--theme-typography-body1-line-height);
    letter-spacing: var(--theme-typography-body1-letter-spacing);
    text-transform: var(--theme-typography-body1-text-transform);

    line-height: 1.4375em;
    box-sizing: border-box;
    position: relative;
    cursor: text;
    display: inline-flex;
    align-items: center;
  }

  .fullWidth {
    width: 100%;
  }

  .disabled {
    color: var(--theme-palette-text-disabled);
    cursor: default;
  }

  .label {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, 24px) scale(1);
  }

  .label.shrink {
    transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
  }

  .input {
    font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 0;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    display: block;
    min-width: 0;
    width: 100%;
  }

  .input:focus {
    outline: 0;
  }

  .input.multiline {
    height: auto;
    resize: none;
    padding: 0;
  }

  .underline:after {
    border-bottom: 2px solid var(--theme-palette-primary-main);
    left: 0;
    bottom: 0;
    content: '';
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: transform 0.2s cubic-bezier(0.0, 0, 0.2, 1);
    pointer-events: none;
  }

  .underline:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    left: 0;
    bottom: 0;
    content: '\00a0';
    position: absolute;
    right: 0;
    transition: border-bottom-color 0.2s;
    pointer-events: none;
  }

  .underline:hover:not(.disabled):before {
    border-bottom: 2px solid var(--theme-palette-text-primary);
  }

  .focused.underline:after {
    transform: scaleX(1);
  }
</style>
