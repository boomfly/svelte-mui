<script lang='coffee'>
  import {Paper} from '@svelte-mui/core'
</script>
<style>
  .example :global(.background) {
    background-color: var(--theme-palette-background-level2);
    padding: calc(var(--theme-spacing) * 3);
    margin-left: calc(var(--theme-spacing) * -2);
    margin-right: calc(var(--theme-spacing) * -2);
  }
</style>

<div class='example'>
  <Paper class='background' square elevation={1}>
    <slot></slot>
  </Paper>
</div>