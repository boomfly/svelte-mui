<script>var result, style;

export var square = false;

export var elevation = 1;

export var variant = 'elevation';

$:(style = (result = '', variant === 'elevation' ? result += `--shadow: var(--theme-shadows-${elevation});` : void 0, result));
</script>

<style>
  .root {
    --shadow: var(--theme-shadow-0);

    background-color: var(--theme-palette-background-paper);
    color: var(--theme-palette-text-primary)
  }
  .rounded {
    border-radius: var(--theme-shape-border-radius)
  }
  .outlined {
    border: 1px solid var(--theme-palette-divider);
  }
  .elevation {
    box-shadow: var(--shadow);
  }
</style>

<div
  class:rounded={!square}
  class='root {variant} {$$props.class || ''}'
  style='{style}{$$props.style || ''}'
>
  <slot />
</div>
