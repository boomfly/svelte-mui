<script lang='coffee'>
  export variant = 'text'
  export color = 'inherit'
  export disabled = false

  (`$:`) style = (
    result = ''
  )

  createRipple = (event) ->
    button = event.currentTarget
    circle = document.createElement('span')
    diameter = Math.max(button.clientWidth, button.clientHeight)
    radius = diameter / 2
    circle.style.width = circle.style.height = "#{diameter}px"
    #circle.style.left = "#{event.clientX - (button.offsetLeft + radius)}px"
    #circle.style.top = "#{event.clientY - (button.offsetTop + radius)}px"
    circle.style.left = "#{event.offsetX - radius}px"
    circle.style.top = "#{event.offsetY - radius}px"
    circle.classList.add('ripple')

    ripple = button.getElementsByClassName('ripple')[0]
    if ripple
      ripple.remove()
    button.appendChild(circle)
</script>

<style>
  .root {
    --color: inherit;

    overflow: hidden;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent; /* Reset default value */
    /* We disable the focus ring for mouse, touch and keyboard users. */
    outline: 0;
    border: 0;
    margin: 0; /* Remove the margin in Safari */
    border-radius: 0;
    padding: 0; /* Remove the padding in Firefox */
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none; /* Reset */
    -webkit-appearance: none; /* Reset */
    text-decoration: none;
    /* So we take precedent over the style of a native <a /> element. */
    color: var(--color);
  
    font-family: var(--theme-typography-button-font-family);
    font-weight: var(--theme-typography-button-font-weight);
    font-size: var(--theme-typography-button-font-size);
    line-height: var(--theme-typography-button-line-height);
    letter-spacing: var(--theme-typography-button-letter-spacing);
    text-transform: var(--theme-typography-button-text-transform);

    min-width: 64px;
    padding: 6px 16px;
    border-radius: var(--theme-shape-border-radius);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .root:hover {
    text-decoration: none;
  }

  .root:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--theme-palette-text-primary);
    opacity: var(--theme-palette-action-hover-opacity);
  }

  .label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  .text {
    padding: 6px 8px;
  }

  .text.primary {
    --color: var(--theme-palette-primary-main);
  }

  .text.primary:hover:after, .outlined.primary:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--theme-palette-primary-main);
    opacity: var(--theme-palette-action-hover-opacity);
  }

  .text.secondary {
    --color: var(--theme-palette-secondary-main);
  }

  .text.secondary:hover:after, .outlined.secondary:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--theme-palette-secondary-main);
    opacity: var(--theme-palette-action-hover-opacity);
  }

  .outlined {
    --color: var(--theme-palette-text-primary);
    padding: 5px 15px;
    border: 1px solid var(--color);
  }

  .outlined.disabled {
    border: 1px solid var(--theme-palette-action-disabled-background);
  }

  .outlined.primary {
    --color: var(--theme-palette-primary-main);
    border: 1px solid var(--theme-palette-primary-main);
  }

  .outlined.secondary {
    --color: var(--theme-palette-secondary-main);
    border: 1px solid var(--theme-palette-secondary-main);
  }

  .contained {
    --color: var(--theme-colors-common-black);
    background-color: var(--theme-colors-grey-300);
    box-shadow: var(--theme-shadows-2);
  }

  .contained:hover {
    background-color: var(--theme-colors-grey-A100);
    box-shadow: var(--theme-shadows-4);
  }

  .contained:active {
    box-shadow: var(--theme-shadows-8);
  }

  .contained.primary {
    --color: var(--theme-palette-primary-contrast-text);
    background-color: var(--theme-palette-primary-main);
  }

  .contained.primary:hover {
    background-color: var(--theme-palette-primary-dark);
  }

  .contained.secondary {
    --color: var(--theme-palette-secondary-contrast-text);
    background-color: var(--theme-palette-secondary-main);
  }

  .contained.secondary:hover {
    background-color: var(--theme-palette-secondary-dark);
  }

  .contained.disabled {
    --color: var(--theme-palette-action-disabled);
    background-color: var(--theme-palette-action-disabled-background);
    box-shadow: var(--theme-shadows-0);
  }

  .disabled {
    --color: var(--theme-palette-action-disabled);
  }

  .root.inherit {
    /* color: inherit; */
    border-color: inherit;
  }

  .root :global(.ripple) {
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    /* background-color: var(--theme-palette-action-disabled-background); */
    background-color: var(--color);
    opacity: 0.3;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>

<button
  {disabled}
  class:disabled
  class:text={variant === 'text'}
  class='root {variant} {color}'
  on:click={createRipple}
  on:click
>
  <span class='label'>
    <slot></slot>
  </span>
  <span class='ripple'></span>
</button>
