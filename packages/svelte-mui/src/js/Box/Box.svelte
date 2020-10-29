<script>var classes, key, margin, padding, result, space, style, value;

import {
  onMount
} from 'svelte';

export var p = null;

export var pt = null;

export var pb = null;

export var pl = null;

export var pr = null;

export var m = null;

export var mt = null;

export var mb = null;

export var ml = null;

export var mr = null;

padding = {p, pt, pb, pl, pr};

margin = {m, mt, mb, ml, mr};

$:(({style, classes} = ((function() {
  var ref;
  // return '' unless elementStyle
  result = {
    style: '',
    classes: ''
  };
  space = '';
  ref = {...padding, ...margin};
  for (key in ref) {
    value = ref[key];
    if (!value) {
      continue;
    }
    if (value) {
      result.style += `--${key}: ${value};`;
      result.classes += `${space}${key}`;
      if (!space) {
        space = ' ';
      }
    }
  }
  //console.log 'style', result
  return result;
})())));
</script>

<style>
  .root {
    --p: inherit;
    --pt: inherit;
    --pb: inherit;
    --pl: inherit;
    --pr: inherit;

    --m: inherit;
    --mt: inherit;
    --mb: inherit;
    --ml: inherit;
    --mr: inherit;
  }

  .p {padding: calc(var(--theme-spacing) * var(--p))}
  .pt {padding-top: calc(var(--theme-spacing) * var(--pt))}
  .pb {padding-bottom: calc(var(--theme-spacing) * var(--pb))}
  .pl {padding-left: calc(var(--theme-spacing) * var(--pl))}
  .pr {padding-right: calc(var(--theme-spacing) * var(--pr))}

  .m {margin: calc(var(--theme-spacing) * var(--m))}
  .mt {margin-top: calc(var(--theme-spacing) * var(--mt))}
  .mb {margin-bottom: calc(var(--theme-spacing) * var(--mb))}
  .ml {margin-left: calc(var(--theme-spacing) * var(--ml))}
  .mr {margin-right: calc(var(--theme-spacing) * var(--mr))}
</style>

<div
  class="root {classes}{$$props.class || ''}"
  style="{style}{$$props.style || ''}"
>
  <slot />
</div>
