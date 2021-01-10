<script>
  import Input from '../Input';
  import Icon from '../Icon';
  import uid from '../internal/uid';
  import clearIcon from '../internal/Icons/close';

  let klass = '';
  export { klass as class };
  export let value = '';
  export let color = 'primary';
  export let filled = false;
  export let solo = false;
  export let outlined = false;
  export let flat = false;
  export let dense = false;
  export let rounded = false;
  export let clearable = false;
  export let readonly = false;
  export let disabled = false;
  export let placeholder = null;
  export let hint = '';
  export let counter = false;
  export let messages = [];
  export let rules = [];
  export let errorCount = 1;
  export let validateOnBlur = false;
  export let error = false;
  export let success = false;
  export let id = `s-input-${uid(5)}`;
  export let style = null;

  let focused = false;
  $: labelActive = !!placeholder || value || focused;
  let errorMessages = [];

  function checkRules() {
    errorMessages = rules.map((r) => r(value)).filter((r) => typeof r === 'string');
    if (errorMessages.length) error = true;
    else {
      error = false;
    }
  }

  function onFocus() {
    focused = true;
  }

  function onBlur() {
    focused = false;
    if (validateOnBlur) checkRules();
  }

  function clear() {
    value = '';
  }

  function onInput() {
    if (!validateOnBlur) checkRules();
  }
</script>

<Input
  class="s-text-field {klass}"
  {color}
  {dense}
  {readonly}
  {disabled}
  {error}
  {success}
  {style}>
  <!-- Slot for prepend outside the input. -->
  <slot slot="prepend-outer" name="prepend-outer" />
  <div
    class="s-text-field__wrapper"
    class:filled
    class:solo
    class:outlined
    class:flat
    class:rounded>
    <!-- Slot for prepend inside the input. -->
    <slot name="prepend" />

    <div class="s-text-field__input">
      <label for={id} class:active={labelActive}>
        <slot />
      </label>
      <slot name="content" />
      <input
        type="text"
        bind:value
        {placeholder}
        {id}
        {readonly}
        {disabled}
        on:focus={onFocus}
        on:blur={onBlur}
        on:input={onInput}
        on:focus
        on:blur
        on:input
        on:change
        on:keypress
        {...$$restProps} />
    </div>

    {#if clearable && value !== ''}
      <div on:click={clear} style="cursor:pointer">
        <!-- Slot for the icon when `clearable` is true. -->
        <slot name="clear-icon">
          <Icon path={clearIcon} />
        </slot>
      </div>
    {/if}

    <!-- Slot for append inside the input. -->
    <slot name="append" />
  </div>

  <div slot="messages">
    <div>
      <span>{hint}</span>
      {#each messages as message}<span>{message}</span>{/each}
      {#each errorMessages.slice(0, errorCount) as message}<span>{message}</span>{/each}
    </div>
    {#if counter}<span>{value.length} / {counter}</span>{/if}
  </div>

  <!-- Slot for append outside the input. -->
  <slot slot="append-outer" name="append-outer" />
</Input>

<style lang='scss'>
  $text-field-line-height: 20px !default;
  $text-field-label-top: 6px !default;
  $text-field-prepend-append-margin: 8px !default;
  $text-field-label-active-transform: translateY(-18px) scale(0.75) !default;
  $text-field-padding: 8px 0 8px !default;
  $text-field-dense-padding: 4px 0 2px !default;
  $text-field-border-radius: var(--theme-shape-border-radius) !default;
  $text-field-rounded-border-radius: 28px !default;
  $text-field-wrapper-padding: 0 1px 0 12px;
  $text-field-filled-outlined-min-height: 56px !default;
  $text-field-filled-outlined-dense-min-height: 40px !default;

  // Outlined
  $text-field-outlined-label-top: 18px !default;
  $text-field-outlined-label-active-transform: translateY(-24px) scale(0.75) !default;
  $text-field-outlined-dense-label-top: 10px !default;
  $text-field-outlined-dense-label-active-transform: translateY(-16px) scale(0.75) !default;
  $text-field-outlined-rounded-padding: 0 24px !default;

  // Solo
  $text-field-solo-depth: 2 !default;
  $text-field-solo-min-height: 48px !default;
  $text-field-solo-dense-min-height: 40px !default;

  // Filled
  $text-field-filled-label-top: 20px !default;
  $text-field-filled-label-active-transform: translateY(-10px) scale(0.75) !default;
  $text-field-filled-dense-label-top: 12px !default;
  $text-field-filled-dense-label-active-transform: translateY(-8px) scale(0.75) !default;
  $text-field-filled-border-radius: $text-field-border-radius $text-field-border-radius 0 0 !default;
  $text-field-filled-margin-top: 22px !default;

  .s-text-field__input {
    display: flex;
    flex-grow: 1;

    label {
      position: absolute;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      top: $text-field-label-top;
      pointer-events: none;
      transform-origin: top left;

      &.active {
        max-width: 133%;
        transform: $text-field-label-active-transform;
      }
    }

    input {
      caret-color: inherit;
      flex: 1 1 auto;
      line-height: $text-field-line-height;
      padding: $text-field-padding;
      max-width: 100%;
      min-width: 0;
      width: 100%;
    }
  }

  .s-text-field__wrapper {
    width: 100%;
    color: inherit;
    caret-color: currentColor;
    display: flex;
    align-items: center;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    // transition: $primary-transition;

    &::before,
    &::after {
      border-radius: inherit;
      width: inherit;
      bottom: -1px;
      content: '';
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      pointer-events: none;
    }

    &::before {
      border-color: var(--theme-palette-primary-main);
      border-style: solid;
      border-width: thin 0 0 0;
    }

    &::after {
      border-color: currentColor;
      border-style: solid;
      border-width: thin 0 thin 0;
      transform: scaleX(0);
    }

    &:hover {
      &::before {
        border-color: var(--theme-palette-primary-main);
      }
    }

    &:focus-within {
      &::after {
        transform: scale(1);
      }

      label {
        color: inherit;
      }
    }

    & > {
      :global([slot='prepend']) {
        margin-right: $text-field-prepend-append-margin;
      }

      :global([slot='append']) {
        margin-right: $text-field-prepend-append-margin;
      }
    }

    &.outlined {
      &::before {
        top: 0;
        border-width: thin;
      }

      &:focus-within::before {
        border-color: currentColor;
        border-width: 2px;
      }

      label {
        top: $text-field-outlined-label-top;

        &.active {
          padding: 0 4px;
          background-color: var(--theme-palette-background-paper);
          transform: $text-field-outlined-label-active-transform;
        }
      }
    }

    &.outlined,
    &.solo,
    &.filled {
      padding: $text-field-wrapper-padding;
    }

    &.filled,
    &.outlined {
      min-height: $text-field-filled-outlined-min-height;
    }

    &.filled {
      border-radius: $text-field-filled-border-radius;
      background-color: var(--theme-text-fields-filled);

      &:hover {
        background-color: var(--theme-text-fields-filled-hover);
      }

      :global(input),
      :global(textarea) {
        padding-top: $text-field-filled-margin-top;
      }

      :global(label) {
        top: $text-field-filled-label-top;

        &.active {
          transform: $text-field-filled-label-active-transform;
        }
      }
    }

    &.outlined,
    &.solo,
    &.rounded {
      &::after {
        display: none;
      }
    }

    &.outlined,
    &.solo {
      border-radius: $text-field-border-radius;
    }

    &.solo {
      min-height: $text-field-solo-min-height;
      box-shadow: var(--theme-shadows-2);

      &::before {
        display: none;
      }
    }

    &.rounded {
      border-radius: $text-field-rounded-border-radius;

      &.filled::before {
        border: none;
      }

      &.outlined {
        padding: $text-field-outlined-rounded-padding;
      }
    }

    &.flat {
      // @include elevation(0, true);
      box-shadow: var(--theme-shadows-0);
    }
  }

  .s-text-field {
    &.error,
    &.success {
      :global(.s-text-field__wrapper::before) {
        border-color: currentColor !important;
      }
    }

    :global(&.dense) {
      :global(input) {
        padding: $text-field-dense-padding;
      }

      :global(.s-text-field__wrapper) {
        :global(&.outlined),
        :global(&.filled) {
          min-height: $text-field-filled-outlined-dense-min-height;
        }

        &.outlined {
          label {
            top: $text-field-outlined-dense-label-top;

            &.active {
              transform: $text-field-outlined-dense-label-active-transform;
            }
          }
        }

        &.solo {
          min-height: $text-field-solo-dense-min-height;
        }

        &.filled {
          :global(input),
          :global(textarea) {
            margin-top: $text-field-filled-margin-top / 2;
          }

          label {
            top: $text-field-filled-dense-label-top;

            &.active {
              transform: $text-field-filled-dense-label-active-transform;
            }
          }
        }
      }
    }
  }

</style>
