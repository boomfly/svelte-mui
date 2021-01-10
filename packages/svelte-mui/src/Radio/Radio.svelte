<script context="module">
  import uid from '../internal/uid';
</script>

<script>
  import TextColor from '../internal/TextColor';
  import Ripple from '../actions/Ripple';
  // Add class to radio wrapper.
  let klass = '';
  export { klass as class };
  // Color of the radio when active.
  export let color = 'primary';
  // Disables the radio.
  export let disabled = false;
  // Bind radio to a group.
  export let group = [];
  // Value for the radio.
  export let value = null;
  // Id for the checkbox.
  export let id = null;
  // Styles for the radio wrapper.
  export let style = null;
  id = id || `s-radio-${uid(5)}`;
  $: active = group === value;
</script>

<div class="s-radio" {style}>
  <div
    class="s-radio__wrapper {klass}"
    class:disabled
    use:TextColor={!disabled && active && color}
    use:Ripple={{ centered: true }}>
    <input
      type="radio"
      role="radio"
      aria-selected={active}
      bind:group
      {id}
      {value}
      {disabled} />
    <div class="s-radio__background" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<style lang='scss'>
  .s-radio {
    display: flex;
    align-items: center;
    position: relative;

    label {
      padding-left: 12px;
    }
  }

  .s-radio__background {
    width: 100%;
    height: 100%;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border: 2px solid currentColor;
    border-radius: 100%;
    color: inherit;
    background-color: transparent;
    pointer-events: none;

    &::before {
      transition: 60ms cubic-bezier(0.4, 0, 0.6, 1);
      width: calc(18px - 8);
      height: calc(18px - 8);
      border-radius: 100%;
      content: '';
      background-color: currentColor;
      transform: scale(0);
      will-change: transform;
    }
  }

  .s-radio__wrapper {
    overflow: unset !important;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    height: 18px;
    width: 18px;
    position: relative;
    user-select: none;
    border-radius: 100%;

    &::before {
      border-radius: inherit;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: currentColor;
      transform: scale(2);
      opacity: 0;
    }

    &:not(.disabled) {
      color: var(--theme-palette-text-secondary);
      cursor: pointer;

      &:hover::before {
        opacity: 0.16;
      }
    }

    &.disabled {
      color: var(--theme-palette-action-disabled-opacity) !important;
    }

    input {
      position: absolute;
      width: calc(18px * 2);
      height: calc(18px * 2);
      cursor: inherit;
      opacity: 0;
      margin: 0;
      padding: 0;

      &:checked ~ .s-radio__background::before {
        transform: scale(1);
      }
    }
  }
</style>