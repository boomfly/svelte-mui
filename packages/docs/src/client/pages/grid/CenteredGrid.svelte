<script lang='coffee'>
  import {Grid, Box, Paper} from '@svelte-mui/core'
  import Example from '/src/client/components/Example.svelte'
</script>

<style>
  .example :global(.background) {
    background-color: var(--theme-palette-background-level2);
    padding: calc(var(--theme-spacing) * 3);
    margin-left: calc(var(--theme-spacing) * -2);
    margin-right: calc(var(--theme-spacing) * -2);
  }
  .example :global(.paper) {
    text-align: center;
    padding: calc(var(--theme-spacing) * 2);
    color: var(--theme-palette-text-secondary);
  }
</style>

<div class='example'>
  <Example>
    <Box mt={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper class='paper'>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper class='paper'>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper class='paper'>xs=6</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper class='paper'>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper class='paper'>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper class='paper'>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper class='paper'>xs=3</Paper>
        </Grid>
      </Grid>
    </Box>
  </Example>
</div>