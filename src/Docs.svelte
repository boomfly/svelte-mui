<script lang='coffee'>
  import {getContext} from 'svelte'
  import ThemeProvider from '/mui/styles/ThemeProvider'

  import Box from '/mui/Box'
  import Button from '/mui/Button'
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

<div class='root'>
  <AppBar class='p2' color='default' position='static'>
    <Typography variant='h5'>Messages</Typography>
  </AppBar>
  
  <br />

  
  <Box p={2} m={2} mb={5}>
    <Paper variant='outlined' style='height: 50px'></Paper>
  </Box>

  <Paper class='p2' elevation={5}>
    <Button on:click={toggleTheme} variant='contained' disabled={false}>Toggle Theme</Button>
  </Paper>

  <Paper class='p2 mt2'>
    <Button variant='contained'>
      <i slot='start-icon' class='fas fa-users fa-fw'></i>
      Default
      <i slot='end-icon' class='fas fa-home fa-fw'></i>
    </Button>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' disabled>Disabled</Button>
  </Paper>

  <Paper class='p2 mt2'>
    <Button variant='outlined'>
      <i slot='start-icon' class='fas fa-users fa-fw'></i>
      Default
      <i slot='end-icon' class='fas fa-home fa-fw'></i>
    </Button>
    <Button variant='outlined' color='primary'>Primary</Button>
    <Button variant='outlined' color='secondary'>Secondary</Button>
    <Button variant='outlined' disabled>Disabled</Button>
  </Paper>

  <Paper class='p2 mt2'>
    <Button variant='text'>Default</Button>
    <Button variant='text' color='primary'>Primary</Button>
    <Button variant='text' color='secondary'>Secondary</Button>
    <Button variant='text' disabled>Disabled</Button>
  </Paper>

  <br />
  <br />

  <FormLabel for='test' required>Hello From Label</FormLabel>
  <textarea id='test' />
  
  <div class='p1'>
    <Grid container spacing={spacing} justify='center'>
      <Grid item xs={3}>
        <Paper variant='outlined' elevation={24} class='p2'>
          
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper variant='outlined' class='p2'>
          
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