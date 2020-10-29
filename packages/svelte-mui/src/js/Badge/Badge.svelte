<script>var className;

className = '';

export var variant = 'standard';

export var badgeContent = '';

export {className as class};
</script>

<style>
  :root {
    --badge-radius-standard: 10;
    --badge-radius-dot: 4;
  }

  .root {
    position: relative;
    display: inline-flex;
    /* For correct alignment with the text. */
    vertical-align: middle;
    flex-shrink: 0;
  }
  /* Styles applied to the badge `span` element. */
  .badge {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-family: var(--theme-typography-font-family);
    font-weight: var(--theme-typography-font-weight-medium);
    font-size: var(--theme-typography-font-size);
    min-width: calc(var(--badge-radius-standard) * 2);
    line-height: 1;
    padding: 0 6px;
    height: calc(var(--badge-radius-standard) * 2);
    border-radius: var(--badge-radius-standard);
    z-index: 1; /*Render the badge on top of potential ripples.*/
  }

  .standard {}

  /* Styles applied to the root element if `color="primary"`. */
  .primary {
    background-color: var(--theme-palette-primary-main);
    color: var(--theme-palette-primary-contrast-text);
  }
</style>

<span class='root {$$props.class || ''}'>
  <slot />
  <span class='badge {variant}'>{badgeContent}</span>
</span>
