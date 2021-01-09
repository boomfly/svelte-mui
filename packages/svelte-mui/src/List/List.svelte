<script lang='coffee'>
  import {setContext, getContext} from 'svelte'

  export dense = null
  export disabled = null
  export flat = false
  export rounded = false
  export nav = false
  export outlined = false
  export style = null

  role = null
  if not getContext('S_ListItemRole')
    setContext('S_ListItemRole', 'listitem')
    role = 'list'
</script>

<div
  {role}
  class="s-list {$$props.class}"
  aria-disabled={disabled}
  class:dense
  class:disabled
  class:flat
  class:nav
  class:outlined
  class:rounded
  {style}>
  <slot />
</div>

<style lang='scss'>
  .s-list {
    color: var(--theme-palette-text-primary);
    display: block;
    padding: 8px 0;
    padding-top: 8px;
    position: static;

    .s-subheader {
      padding-top: 0;
    }

    .s-list-item.active {
      color: inherit;
    }

    &.disabled {
      pointer-events: none;
    }

    &.dense {
      .s-subheader {
        font-size: 0.75rem;
        height: 40px;
        padding: 0 8px;
      }
    }

    &.rounded {
      padding: 8px;

      .s-list-item {
        border-radius: 32px !important;
      }
    }

    &.nav {
      padding-left: 8px;
      padding-right: 8px;

      .s-list-item {
        padding: 0 16px;
        border-radius: 10px;

        &::before {
          border-radius: 10px;
        }
      }
    }

    &.nav,
    &.rounded {
      .s-list-item:not(:last-child):not(:only-child) {
        margin-bottom: 8px;
      }

      .s-list-item.dense:not(:last-child):not(:only-child) {
        margin-bottom: 8px;
      }
    }

    &.outlined {
      border: thin solid var(--theme-divider);
    }

    &.flat {
      .s-list-item::before {
        display: none;
      }
    }
  }
</style>