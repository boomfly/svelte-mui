<script>
  import { getContext } from 'svelte';
  import Ripple from '../actions/Ripple';
  import Class from '../internal/Class';

  const role = getContext('S_ListItemRole');
  const ITEM_GROUP = getContext('S_ListItemGroup');
  const DEFAULTS = {
    select: () => null,
    register: () => null,
    index: () => null,
    activeClass: 'active',
  };
  const ITEM = ITEM_GROUP ? getContext(ITEM_GROUP) : DEFAULTS;

  let klass = '';
  export { klass as class };
  export let activeClass = ITEM.activeClass;
  export let value = ITEM.index();
  export let active = false;
  export let dense = false;
  export let disabled = null;
  export let multiline = false;
  export let link = role;
  export let selectable = !link;
  export let ripple = getContext('S_ListItemRipple') || role || false;
  export let style = null;

  ITEM.register((values) => {
    active = values.includes(value);
  });

  function click() {
    if (!disabled) ITEM.select(value);
  }
</script>

<div
  class="s-list-item {klass}"
  use:Class={[active && activeClass]}
  {role}
  tabindex={link ? 0 : -1}
  aria-selected={role === 'option' ? active : null}
  class:dense
  class:disabled
  class:multiline
  class:link
  class:selectable
  use:Ripple={ripple}
  on:click={click}
  on:click
  {style}>
  <slot name="prepend" />
  <div class="s-list-item__content">
    <div class="s-list-item__title">
      <slot />
    </div>
    <div class="s-list-item__subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <slot name="append" />
</div>

<style lang='scss'>
  .s-list-item__content {
    align-items: center;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    overflow: hidden;
    padding: 12px 0;

    > * {
      line-height: 1.1;
      flex: 1 0 100%;

      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }
  }

  .s-list-item__title,
  .s-list-item__subtitle {
    flex: 1 1 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  .s-list-item__title {
    align-self: center;
    font-size: var(--theme-typography-subtitle1-font-size);
  }

  .s-list-item__subtitle {
    font-size: var(--theme-typography-subtitle2-font-size);
    color: var(--theme-palette-text-secondary);
  }

  .s-list-item {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    letter-spacing: normal;
    min-height: 48px;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;

    :global(.s-avatar) {
      align-self: center;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    :global(.s-icon) {
      align-self: flex-start;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    :global(.s-icon),
    :global(.s-avatar) {
      display: inline-flex;
      min-width: 24px;
    }

    :global([slot='prepend']) {
      :global(.s-avatar) {
        margin-right: 16px;
      }

      :global(.s-icon),
      :global(.s-checkbox),
      :global(.s-radio) {
        margin-right: 32px;
      }
    }

    &.link {
      cursor: pointer;
      user-select: none;

      &::before {
        background-color: var(--theme-palette-primary-main);
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        content: '';
        pointer-events: none;
        position: absolute;
        opacity: 0;
        // transition: $primary-transition;
      }

      &:not(.active):hover::before {
        opacity: 0.04;
      }
    }

    &.selectable {
      user-select: auto;
    }

    &.multiline {
      .s-list-item__title,
      .s-list-item__subtitle {
        white-space: normal;
      }
    }

    &:not(.disabled) {
      &.focus-visible {
        &::before {
          opacity: 0.12;
        }
      }
    }

    &.disabled {
      pointer-events: none;
      color: var(--theme-palette-text-disabled);
    }

    &.flat {
      &::before {
        display: none;
      }
    }

    &.active {
      &::before {
        opacity: 0.12;
      }

      :global(.s-icon) {
        color: inherit;
      }
    }

    &::after {
      content: '';
      min-height: inherit;
      font-size: 0;
    }

    &:not(.active) {
      color: var(--theme-palette-text-primary);
    }
  }

  .s-list-item.dense,
  :global(.s-list.dense) .s-list-item {
    min-height: 32px;

    :global(.s-icon) {
      margin-top: calc(16px / 2);
      margin-bottom: calc(16px / 2);
    }

    :global([slot='prepend']) {
      :global(.s-icon),
      :global(.s-checkbox),
      :global(.s-radio) {
        margin-right: 24px;
      }
    }

    .s-list-item__content {
      padding: 8px 0;
    }

    .s-list-item__title,
    .s-list-item__subtitle {
      font-size: 0.8125rem;
      font-weight: 500;
      line-height: 1rem;
    }
  }
</style>