<script lang='coffee'>
  import {getContext, onMount} from 'svelte'
  import {Router, Route, link} from 'svelte-routing'
  #import ThemeProvider from '@svelte-mui/core/src/coffee/styles/ThemeProvider.svelte'
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, Overlay, currentTheme} from '@svelte-mui/core'
  import NotFound from './pages/NotFound.svelte'
  import GridPage from './pages/grid'
  import ButtonPage from './pages/button'
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

  export url = ''
  export staticContext = null
  overlayActive = true

  toggleOverlay = ->
    overlayActive = false

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
  :global([theme=light]) {
    --theme-palette-background-level1: #fff;
    --theme-palette-background-level2: var(--theme-colors-grey-100);
  }
  :global([theme=dark]) {
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
  .main-content a {
    color: var(--theme-palette-primary-main);
  }
</style>

<ThemeProvider {theme} />

<div class='root'>
  <AppBar class='p2' color='default' position='fixed' style='display: flex;'>
    <Typography variant='h5' style='flex-grow: 1'>Messages</Typography>
    <Button on:click={toggleTheme} variant='contained' disabled={false}>Toggle Theme</Button>
  </AppBar>

  <div class='main-content'>

    <Grid container style='justify-content: center'>
      <Grid item xs={12} md={8}>
        <a href='/' use:link>Home</a>
        <a href='/components/grid' use:link>Grid Component</a>
        <a href='/components/button' use:link>Button Component</a>
        <a href='/not-found' use:link>Not Found</a>
      </Grid>
    </Grid>
    
    <Grid container style='justify-content: center'>
      <Grid item xs={12} md={8} style='position: relative'>
        <Router {url}>
          <Route path='components/button' component={ButtonPage} />
          <Route path='components/grid' component={GridPage} />
          <Route path='/'>
            Home Page
          </Route>
          <Route path=''>
            <NotFound {staticContext} />
          </Route>
        </Router>
      </Grid>
    </Grid>

    <!-- <Overlay active={overlayActive} on:click={toggleOverlay} absolute /> -->

  </div>
</div>