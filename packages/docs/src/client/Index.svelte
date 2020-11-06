<script lang='coffee'>
  import {getContext, onMount} from 'svelte'
  #import ThemeProvider from '@svelte-mui/core/src/coffee/styles/ThemeProvider.svelte'
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, currentTheme} from '@svelte-mui/core'
  import GridPage from './pages/grid'
  import Cookie from 'js-cookie'
  #import Button from '@svelte-mui/core/src/coffee/Button/Button.svelte'

  # console.log Button, ThemeProvider

  #import Box from '@svelte-mui/core/Box'
  #import Button from '@svelte-mui/core/Button'
  #import Paper from '@svelte-mui/core/Paper'
  #import Grid from '@svelte-mui/core/Grid'
  #import AppBar from '@svelte-mui/core/AppBar'
  #import Typography from '@svelte-mui/core/Typography'
  #import FormLabel from '@svelte-mui/core/FormLabel'
  

  onMount ->
    document.documentElement.getElementById
    cssStyles = document.getElementById('css-server-side')
    if cssStyles and cssStyles.parentNode
      cssStyles.parentNode.removeChild(cssStyles)

  storage = localStorage ? {
    getItem: (name) -> 'light'
    setItem: (name, value) -> value
  }

  # export theme = storage.getItem('mui-theme') ? 'dark'
  export theme = $currentTheme

  # (`$:`) storage.setItem('mui-theme', theme)
  (`$:`) theme = $currentTheme

  spacing = 2

  radios = []

  for i in [0..12]
    radios.push {label: i.toString(), value: i}

  toggleTheme = ->
    if theme is 'light'
      theme = 'dark'
    else
      theme = 'light'
    Cookie.set('mui-theme', theme)
    
</script>

<style>
  :global(html[theme=light]) {
    --theme-palette-background-level1: #fff;
    --theme-palette-background-level2: var(--theme-colors-grey-100);
  }
  :global(html[theme=dark]) {
    --theme-palette-background-level1: var(--theme-colors-grey-900);
    --theme-palette-background-level2: #333;
  }
  .root :global(.button) {
    margin-left: calc(var(--theme-spacing) * 2) !important;
  }
  .main-content {
    padding-top: calc(var(--theme-spacing) * 12);
    padding-left: calc(var(--theme-spacing) * 2);
    padding-right: calc(var(--theme-spacing) * 2);
  }
</style>

<ThemeProvider {theme} />

<div class='root'>
  <AppBar class='p2' color='default' position='fixed'>
    <Typography variant='h5'>Messages</Typography>
  </AppBar>

  <div class='main-content'>
    <Grid container style='justify-content: center'>
      <Grid item xs={12} md={8}>
        <GridPage />
      </Grid>
    </Grid>

    <Paper class='p2' elevation={5}>
      <Button on:click={toggleTheme} variant='contained' disabled={false}>Toggle Theme</Button>
    </Paper>

    <Paper class='p2 mt2'>
      <Grid container spacing={1}>
        <Grid item xs>
          <Button variant='contained' fullWidth>
            <i slot='start-icon' class='fas fa-users fa-fw'></i>
            Default
            <i slot='end-icon' class='fas fa-home fa-fw'></i>
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant='contained' color='primary' fullWidth>Primary</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary'>Secondary</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' disabled>Disabled</Button>
        </Grid>
      </Grid>
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
</div>