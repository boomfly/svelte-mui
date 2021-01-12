<script>
  import Ripple from '../actions/Ripple';
  import Icon from '../Icon';
  import closeIcon from '../internal/Icons/close';
  import { createEventDispatcher } from 'svelte';

  // Classes to add to chip.
  let klass = '';
  let style = '';
  export { klass as class };
  // Determines whether the chip is visible or not.
  export let active = true;
  // Selected state
  export let selected = false;
  /**
   * Specifies the size of chip.
   * @type {x-small|small|default|large|x-large}
   */
  export let size = 'default';
  export let outlined = false;
  export let pill = false;
  export let link = false;
  export let label = false;
  export let close = false;
  const dispatch = createEventDispatcher();
  function onClose(e) {
    active = false;
    dispatch('close', e);
  }
</script>

{#if active}
  <span
    class="s-chip {klass} size-{size}"
    use:Ripple={link}
    class:outlined
    class:pill
    class:link
    class:label
    class:selected
    style="{style}"
    on:click>
    <slot />
    {#if close}
      <div class="s-chip__close" on:click={onClose}>
        <slot name="close-icon">
          <Icon path={closeIcon} />
        </slot>
      </div>
    {/if}
  </span>
{/if}

<style lang='scss'>
  :global([theme=light]) {
    --chip-background-color: var(--theme-colors-grey-100);
    --chip-color: var(--theme-colors-common-white);
  }
  :global([theme=dark]) {
    --chip-background-color: var(--theme-colors-grey-900);
    --chip-color: var(--theme-colors-common-white);
  }

  $chip-avatar-size: 24px !default;
  $chip-close-size: 18px !default;
  $chip-icon-margin-after: 6px !default;
  $chip-icon-margin-before: -6px !default;
  $chip-icon-right-margin-after: -4px !default;
  $chip-icon-right-margin-before: 8px !default;
  $chip-icon-size: 24px !default;
  $chip-label-border-radius: var(--theme-shape-border-radius) !default;
  $chip-link-focus-opacity: 0.32 !default;
  $chip-pill-avatar-margin-after: 8px !default;
  $chip-pill-avatar-margin-before: -12px !default;
  $chip-pill-avatar-size: 32px !default;
  $chip-pill-filter-margin: 0 16px 0 0 !default;
  $chip-transition-duration: 0.28s !default;
  $chip-transition-fn: cubic-bezier(0.4, 0, 0.2, 1) !default;
  $icon-outlined-border-width: thin !default;
  $chip-line-height: 20px !default;
  $chip-padding: 0 12px !default;
  $chip-white-space: nowrap !default;
  $chip-disabled-opacity: 0.4 !default;
  $chip-filter-max-width: 24px !default;
  $chip-outlined-active-opacity: 0.08 !default;
  $chip-selected-opacity: 0.28 !default;
  $icon-sizes: () !default;
  // $icon-sizes: map-deep-merge(
  //   (
  //     'x-small': (
  //       'font-size': 10,
  //       'height': 16,
  //     ),
  //     'small': (
  //       'font-size': 12,
  //       'height': 24,
  //     ),
  //     'default': (
  //       'font-size': 14,
  //       'height': 32,
  //     ),
  //     'large': (
  //       'font-size': 16,
  //       'height': 54,
  //     ),
  //     'x-large': (
  //       'font-size': 18,
  //       'height': 66,
  //     ),
  //   ),
  //   $icon-sizes
  // );
  $icon-sizes: (
    'x-small': (
      'font-size': 10,
      'height': 16,
    ),
    'small': (
      'font-size': 12,
      'height': 24,
    ),
    'default': (
      'font-size': 14,
      'height': 32,
    ),
    'large': (
      'font-size': 16,
      'height': 54,
    ),
    'x-large': (
      'font-size': 18,
      'height': 66,
    ),
  );

  .s-chip__close {
    cursor: pointer;
    margin-left: $chip-icon-margin-after;
    margin-right: $chip-icon-margin-before;

    :global(.s-icon) {
      font-size: $chip-close-size;
      max-height: $chip-close-size;
      max-width: $chip-close-size;
      user-select: none;
    }

    &:focus,
    &:hover,
    &:active {
      opacity: 0.72;
    }
  }

  .s-chip {
    border-color: var(--theme-divider);
    color: var(--chip-color);
    align-items: center;
    cursor: default;
    display: inline-flex;
    line-height: $chip-line-height;
    max-width: 100%;
    outline: none;
    overflow: hidden;
    padding: $chip-padding;
    position: relative;
    text-decoration: none;
    transition-duration: $chip-transition-duration;
    transition-property: box-shadow, opacity;
    transition-timing-function: $chip-transition-fn;
    vertical-align: middle;
    white-space: $chip-white-space;

    &::before {
      background-color: currentColor;
      bottom: 0;
      border-radius: inherit;
      content: '';
      left: 0;
      opacity: 0;
      position: absolute;
      pointer-events: none;
      right: 0;
      top: 0;
    }

    :global(.s-avatar) {
      height: $chip-avatar-size;
      min-width: $chip-avatar-size;
      width: $chip-avatar-size;
    }

    :global(.s-icon) {
      font-size: $chip-icon-size;
    }

    & > :global(.s-icon),
    & > :global(.s-avatar) {
      color: inherit;

      &:first-child {
        margin-left: $chip-icon-margin-before;
        margin-right: $chip-icon-margin-after;
      }

      &:last-child {
        margin-left: $chip-icon-margin-after;
        margin-right: $chip-icon-margin-before;
      }
    }

    @each $name, $size in $icon-sizes {
      &.size-#{$name} {
        border-radius: #{map-get($size, 'height') / 2}px;
        font-size: #{map-get($size, 'font-size')}px;
        height: #{map-get($size, 'height')}px;
      }
    }

    &:not(.outlined) {
      color: var(--theme-palette-text-primary)
    }

    &:not(.selected) {
      background-color: var(--chip-background-color);
    }

    &.pill {
      & > :global(.s-avatar) {
        height: $chip-pill-avatar-size;
        width: $chip-pill-avatar-size;

        &:first-child {
          margin-left: $chip-pill-avatar-margin-before;
        }

        &:last-child {
          margin-right: $chip-pill-avatar-margin-before;
        }
      }
    }

    &.link {
      cursor: pointer;
      user-select: none;

      &:active {
        box-shadow: var(--theme-shadows-2);
      }
    }

    &.outlined {
      border: currentColor solid $icon-outlined-border-width;
      background: transparent;

      &:active::before {
        opacity: $chip-outlined-active-opacity;
      }
    }

    &.label {
      border-radius: $chip-label-border-radius;
    }

    &.disabled {
      opacity: $chip-disabled-opacity;
      pointer-events: none;
      user-select: none;
    }
  }
</style>