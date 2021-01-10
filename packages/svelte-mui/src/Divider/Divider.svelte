<script>
  let klass = '';
  export { klass as class };
  export let inset = false;
  export let vertical = false;
  export let style = null;
</script>

<hr
  class="s-divider {klass}"
  role="separator"
  aria-orientation={vertical ? 'vertical' : 'horizontal'}
  class:inset
  class:vertical
  {style}
/>

<style lang='scss'>
  :root {
    --theme-divider-inset-margin: 72px;
    --theme-divider-inset-margin-top: 8px;
    --theme-divider-inset-max-height: calc(100% - 16px);
  }
  .s-divider {
    display: block;
    flex: 1 1 0;
    max-width: 100%;
    height: 0;
    max-height: 0;
    border: solid;
    border-width: thin 0 0 0;
    border-color: var(--theme-divider);
    transition: inherit;

    &.inset:not(.vertical) {
      max-width: calc(100% - var(--theme-divider-inset-margin));
      margin-left: var(--theme-divider-inset-margin);
    }

    &.vertical {
      align-self: stretch;
      border: solid;
      border-width: 0 thin 0 0;
      display: inline-flex;
      height: inherit;
      min-height: 100%;
      max-height: 100%;
      max-width: 0;
      width: 0;
      vertical-align: text-bottom;

      &.inset {
        margin-top: var(--theme-divider-inset-margin-top);
        min-height: 0;
        max-height: var(--theme-divider-inset-max-height);
      }
    }
  }
</style>