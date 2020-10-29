<script>var key, lastValue, result, sizes, style, value;

import {
  onMount
} from 'svelte';

export var container = false;

export var item = false;

export var zeroMinWidth = false;

export var xs = false;

export var sm = false;

export var md = false;

export var lg = false;

export var xl = false;

export var spacing = 0;

sizes = {xs, sm, md, lg, xl};

$:(style = ((function() {
  // return '' unless elementStyle
  result = '';
  if (item) {
    lastValue = null;
    for (key in sizes) {
      value = sizes[key];
      if (!value) {
        // continue
        if (!lastValue) {
          continue;
        }
        value = lastValue;
      }
      if (value === true) {
        result += `--size-${key}: 0; --grow-${key}: 1; --max-${key}: 100%;`;
      } else if (value === 'auto') {
        result += `--size-${key}: auto; --max-${key}: auto;`;
      } else {
        result += `--size-${key}: ${value}; --max-${key}: none;`;
      }
      lastValue = value;
    }
  }
  if (container) {
    result += `--spacing: ${spacing};`;
  }
  //console.log 'style', result
  return result;
})()));
</script>

<style>
  /* .root {
    
  } */
  .container {
    --margin: calc(var(--theme-spacing, 0) * var(--spacing, 0));

    box-sizing: border-box;
    display: inline-flex;
    flex-wrap: wrap;
    width: calc(100% + var(--margin));
    margin: calc(-1 * var(--margin)) 0 0 calc(-1 * var(--margin));
  }
  .item {
    --size: 0;
    --grow: 1;
    --max: none;
    --width: calc(var(--size) / 12 * 100%);

    flex-basis: calc(var(--width) - calc(var(--margin)));
    flex-grow: var(--grow);
    max-width: var(--max);
    margin: var(--margin) 0 0 var(--margin);

    box-sizing: border-box;
    flex-shrink: 1;
  }
  .zeroMinWidth {
    min-width: 0;
  }

  /* xs */
  @media (max-width: 600px) {
    .root.item {
      --size: var(--size-xs, 0);
      --grow: var(--grow-xs, 0);
      --max: var(--max-xs, none);
    }
  }

  /* sm */
  /* @media (min-width: 600px) and (max-width: 960px) {
    .root {
      --size: var(--size-sm, 0);
    }
  } */
  @media (min-width: 600px) {
    .root.item {
      --size: var(--size-sm, 0);
      --grow: var(--grow-sm, 0);
      --max: var(--max-sm, none);
    }
  }

  /* md */
  @media (min-width: 960px) and (max-width: 1280px) {
    .root.item {
      --size: var(--size-md, 0);
      --grow: var(--grow-md, 0);
      --max: var(--max-md, none);
    }
  }

  /* lg */
  @media (min-width: 1280px) and (max-width: 1920px) {
    .root.item {
      --size: var(--size-lg, 0);
      --grow: var(--grow-lg, 0);
      --max: var(--max-lg, none);
    }
  }

  /* xl */
  @media (min-width: 1920px) {
    .root.item {
      --size: var(--size-xl, 0);
      --grow: var(--grow-xl, 0);
      --max: var(--max-xl, none);
    }
  }
</style>

<div
  class:container
  class:item
  class:zeroMinWidth
  class="root {$$props.class || ''}"
  style="{style} {$$props.style || ''}"
>
  <slot />
</div>
