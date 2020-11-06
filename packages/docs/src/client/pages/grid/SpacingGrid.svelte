<script lang='coffee'>
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, currentTheme} from '@svelte-mui/core'
  import Example from '../../components/Example.svelte'
  spacing = 2
  radios = []
  for i in [0..12]
    radios.push {label: i.toString(), value: i}
</script>

<style>
  div :global(.paper) {
    height: 140px;
    width: 100px;
  }
</style>

<div>
  <Example>
    <Box mt={1}>
      <Grid container spacing={spacing} justify='center' style='justify-content: center'>
        {#each [1,2,3] as paper}
          <Grid item>
            <Paper class='paper'>
              
            </Paper>
          </Grid>
        {/each}
      </Grid>
    </Box>

    <Box mt={2}>
      <Paper class='p2'>
        <Typography variant='body1'>
          spacing
        </Typography>
        <Grid container spacing={2}>
          {#each radios as radio}
            <Grid item>
              <label style='display: inline-flex; align-items: center'>
                <input type='radio' bind:group={spacing} value={radio.value} style='margin: 0; margin-right: 4px' />
                {radio.label}
              </label>
            </Grid>
          {/each}
        </Grid>
      </Paper>
    </Box>
  </Example>
</div>