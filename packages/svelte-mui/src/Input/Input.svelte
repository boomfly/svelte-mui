<script>
  import TextColor from '../internal/TextColor';

  let klass = '';
  export { klass as class };
  export let color = null;
  export let dense = false;
  export let readonly = false;
  export let disabled = false;
  export let error = false;
  export let success = false;
  export let style = null;

  let _color = null
  $: {
    if (color) {
      _color = `--theme-palette-${color}-main`;
    } else {
      _color = null
    }
  }
</script>

<div
  class="s-input {klass}"
  class:dense
  class:error
  class:success
  class:readonly
  class:disabled
  {style}
  use:TextColor={success ? 'success' : error ? 'error' : _color}>
  <slot name="prepend-outer" />
  <div class="s-input__control">
    <div class="s-input__slot">
      <slot />
    </div>
    <div class="s-input__details">
      <slot name="messages" />
    </div>
  </div>
  <slot name="append-outer" />
</div>

<style lang='scss'>
  $input-font-size: 16px !default;
  $input-letter-spacing: normal !default;
  $input-text-align: left !default;
  $input-max-height: 32px !default;
  $input-label-height: 20px !default;
  $input-label-letter-spacing: 20px !default;
  $input-prepend-append-outer-margin: 9px !default;
  $input-icon-height: 24px !default;
  $input-icon-min-width: 24px !default;
  $input-icon-width: 24px !default;
  $input-slot-margin-bottom: 8px !default;
  $input-dense-slot-margin-bottom: 4px !default;

  .s-input__slot {
    border-radius: inherit;
    align-items: center;
    color: inherit;
    display: flex;
    margin-bottom: $input-slot-margin-bottom;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
    height: inherit;
  }

  .s-input__control {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .s-input__details {
    color: var(--theme-palette-text-secondary);
    display: flex;
    flex: 1 0 auto;
    max-width: 100%;
    font-size: 12px;
    overflow: hidden;

    & > :global([slot='messages']) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
    }
  }

  .s-input {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1 1 auto;
    font-size: $input-font-size;
    letter-spacing: $input-letter-spacing;
    max-width: 100%;
    text-align: $input-text-align;

    :global(input) {
      max-height: $input-max-height;
    }

    :global(input),
    :global(textarea) {
      color: var(--theme-palette-text-primary);
      background-color: transparent;
      border-style: none;

      &:invalid {
        box-shadow: none;
      }

      &:focus,
      &:active {
        outline: none;
      }

      &::placeholder {
        color: var(--theme-palette-text-disabled);
      }
    }

    & > {
      :global([slot='prepend-outer']),
      :global([slot='append-outer']) {
        align-self: flex-start;
        display: inline-flex;
        margin-bottom: 4px;
        margin-top: 4px;
        line-height: 1;
      }

      :global([slot='prepend-outer']) {
        margin-right: $input-prepend-append-outer-margin;
      }

      :global([slot='append-outer']) {
        margin-left: $input-prepend-append-outer-margin;
      }
    }

    :global(.s-icon) {
      user-select: none;
      align-items: center;
      display: inline-flex;
      height: $input-icon-height;
      flex: 1 0 auto;
      justify-content: center;
      min-width: $input-icon-min-width;
      width: $input-icon-width;
    }

    :global(label) {
      height: $input-label-height;
      line-height: $input-label-letter-spacing;
      color: var(--theme-palette-text-secondary);
      white-space: nowrap;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }

    &:focus-within {
      :global(.s-icon) {
        color: inherit;
      }
    }

    &.disabled {
      pointer-events: none;
      color: var(--theme-palette-text-disabled);

      :global(input),
      :global(textarea) {
        color: var(--theme-palette-text-disabled);
      }

      :global(.s-icon) {
        color: var(--theme-palette-text-disabled);
      }

      :global(label) {
        color: var(--theme-palette-text-disabled);
      }
    }

    &.dense {
      .s-input__slot {
        margin-bottom: $input-dense-slot-margin-bottom;
      }
    }
  }
</style>