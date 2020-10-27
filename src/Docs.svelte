<script lang='coffee'>
  import {getContext} from 'svelte'
  import ThemeProvider from '/mui/styles/ThemeProvider'
  import Theme from './Theme'

  import Paper from '/mui/Paper'
  import Grid from '/mui/Grid'
  import AppBar from '/mui/AppBar'
  import Typography from '/mui/Typography'
  import FormLabel from '/mui/FormLabel'

  theme = localStorage.getItem('mui-theme') ? 'light'

  (`$:`) localStorage.setItem('mui-theme', theme)

  spacing = 2

  radios = []

  for i in [0..12]
    radios.push {label: i.toString(), value: i}

  toggleTheme = ->
    if theme is 'light'
      theme = 'dark'
    else
      theme = 'light'
    
</script>

<style>
  
</style>

<ThemeProvider {theme} />
<Theme />
<div class='root'>
  <AppBar class='p2' color='default' position='static'>
    <Typography variant='h5'>Messages</Typography>
  </AppBar>
  
  <br />

  <button on:click={toggleTheme}>Toggle Theme</button>

  <br />
  <br />

  <FormLabel for='test' required>Hello From Label</FormLabel>
  <textarea id='test' />
  
  <div class='p1'>
    <Grid container spacing={spacing} justify='center'>
      <Grid item xs={3}>
        <Paper variant='elevation' elevation={24} class='p2'>
          
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper variant='elevation' class='p2'>
          
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant='elevation' class='p2'>
          
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant='elevation' class='p2'>
          
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper variant='elevation' class='p2'>
          
        </Paper>
      </Grid>
    </Grid>
  </div>

  <div class='p1'>
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
  </div>
</div>