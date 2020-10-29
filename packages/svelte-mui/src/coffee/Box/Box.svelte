<script lang='coffee'>
  import {onMount} from 'svelte'
  export p = null
  export pt = null
  export pb = null
  export pl = null
  export pr = null

  export m = null
  export mt = null
  export mb = null
  export ml = null
  export mr = null

  padding = {p, pt, pb, pl, pr}
  margin = {m, mt, mb, ml, mr}
  
  (`$:`) {style, classes} = (
    # return '' unless elementStyle
    result = {style: '', classes: ''}
    space = ''
    for key, value of {...padding, ...margin}
      if not value
        continue
      if value
        result.style += "--#{key}: #{value};"
        result.classes += "#{space}#{key}"
        space = ' ' unless space
    #console.log 'style', result
    result
  )
  
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
