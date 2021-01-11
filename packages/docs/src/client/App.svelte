<script lang='coffee' context='module'>
  import {register} from 'svelte-loadable'
  ButtonLoader = register {
    loader: -> import('./pages/button')
    resolve: -> './pages/button'
  }
  GridLoader = register {
    loader: -> import('./pages/grid')
    resolve: -> './pages/grid'
  }
  TextFieldLoader = register {
    loader: -> import('./pages/text-field')
    resolve: -> './pages/text-field'
  }
  ListLoader = register {
    loader: -> import('./pages/list')
    resolve: -> './pages/list'
  }
  SelectLoader = register {
    loader: -> import('./pages/select')
    resolve: -> './pages/select'
  }
  DialogLoader = register {
    loader: -> import('./pages/dialog')
    resolve: -> './pages/dialog'
  }
</script>

<script lang='coffee'>
  import {getContext, onMount} from 'svelte'
  import {Router, Route, link} from 'svelte-routing'
  import AnimatedRoute from './components/AnimatedRoute.svelte'
  #import ThemeProvider from '@svelte-mui/core/src/coffee/styles/ThemeProvider.svelte'
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, Overlay, currentTheme} from '@svelte-mui/core'
  import NotFound from './pages/NotFound.svelte'
  import Cookie from 'js-cookie'
  import PrismLight from '!raw-loader!prismjs/themes/prism.css'
  import PrismDark from '!raw-loader!prismjs/themes/prism-okaidia.css'

  import Loadable from 'svelte-loadable'

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
  test =
    css: '.string {color: white;}'

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

  export theme = $currentTheme
  (`$:`) (
    theme = $currentTheme
  )

  prismStyleEl = null
  (`$:`) (
    if prismStyleEl
      if theme is 'light'
        prismStyleEl.innerHTML = PrismLight
      else
        prismStyleEl.innerHTML = PrismDark
  )

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

  if window?
    window.addEventListener 'popstate', (e) ->
      console.log e
    window.addEventListener 'pushstate', (e) ->
      console.log e
    
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
  .app-root :global(.button) {
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

<svelte:head>
  <style bind:this={prismStyleEl} id='prism' />
</svelte:head>

<ThemeProvider {theme} />

<div class='app-root'>
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
        <a href='/components/text-field' use:link>TextField Component</a>
        <a href='/components/list' use:link>List Component</a>
        <a href='/components/select' use:link>Select Component</a>
        <a href='/components/dialog' use:link>Dialog Component</a>
        <a href='/not-found' use:link>Not Found</a>
      </Grid>
    </Grid>
    
    <Grid container style='justify-content: center'>
      <Grid item xs={12} md={8} style='position: relative;'>
        <Router {url}>
          <AnimatedRoute path='components/button'>
            <Loadable loader='{ButtonLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='components/grid'>
            <Loadable loader='{GridLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='components/text-field'>
            <Loadable loader='{TextFieldLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='components/list'>
            <Loadable loader='{ListLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='components/select'>
            <Loadable loader='{SelectLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='components/dialog'>
            <Loadable loader='{DialogLoader}' />
          </AnimatedRoute>
          <AnimatedRoute path='/'>
            Home Page
          </AnimatedRoute>
          <AnimatedRoute path=''>
            <NotFound {staticContext} />
          </AnimatedRoute>
        </Router>
      </Grid>
    </Grid>

    <!-- <Overlay active={overlayActive} on:click={toggleOverlay} absolute /> -->

  </div>
</div>