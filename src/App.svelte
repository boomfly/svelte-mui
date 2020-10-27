<script lang='coffee'>
  import {getContext} from 'svelte'
  import Nested from './Nested.svelte'
  #import Button from './Button.svelte'
  import Badge from './Badge.svelte'
  import Paper from '/mui/Paper'
  import Grid from '/mui/Grid'
  import AppBar from '/mui/AppBar'
  import Typography from '/mui/Typography'
  #import ThemeDark from './ThemeDark'
  #import ThemeLight from './ThemeLight'
  import CssBaseline from '/mui/styles/CssBaseline'
  import Theme from './Theme'
  #Paper = import('./Paper')

  import Element from '/mui/common/Element'

  theme = 'light'

  count = 2
  buttonColor = 'white'
  #themeComponent = ThemeLight
  (`$:`) doubled = count * 2

  component = AppBar

  handleClick = ->
    count += 1
    console.log "count clicked #{count}"

  toggleTheme = ->
    if theme is 'light'
      theme = 'dark'
    else
      theme = 'light'
    
</script>

<style>
  :root {
    --theme-spacing: 8px;
  }

  .root :global(.root-badge) {
    background-color: red;
  }

  .root :global(.appbar) {
    /* padding: calc(var(--theme-spacing) * 2) */
    padding: 16px;
  }

  .root :global(.left-column) {
    height: 200px;
    display: flex;
  }
</style>

<CssBaseline {theme} />
<Theme />
<div class='root'>
  <AppBar class='appbar' color='default' position='static'>
    <Typography variant='h5'>Messages</Typography>
  </AppBar>
  
  <br />

  <Element tag={'div'} class='hello world'>
    Hello From Element
  </Element>

  <br />

  <a class="waves-effect waves-light btn materialize-red" href='#/'>button</a>
  Hello World {count} {doubled}
  <br />
  <button
    hello='world'
    style="
      color: {buttonColor};
      background-color: black
    "
    on:click={handleClick}
  >
    Click Me
  </button>
  <button on:click={toggleTheme}>Toggle Theme ({theme})</button>
  <Nested answer={count} />
  <Nested />
  <Badge badgeContent='4' variant='primary' class='some-style'>
    Hello Icon
  </Badge>
  <!-- {#await Paper}
    Loading...
  {:then Component}
    <svelte:component this={Component.default} variant='elevation' class='p2'>
      Hello From Paper
    </svelte:component>
  {/await} -->
  

  <div class='p1'>
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} class='left-column'>
        <Paper square variant='outlined' class='p2' style='flex: 1'>
          Hello From Paper 1
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper variant='outlined' class='p2'>
          Hello From Paper 2
        </Paper>
      </Grid>
      <Grid item xs sm={2} lg>
        <Paper variant='outlined' class='p2'>
          Hello From Paper 3
        </Paper>
      </Grid>
      <Grid item xs sm={2} lg>
        <Paper variant='outlined' class='p2'>
          Hello From Paper 4
        </Paper>
      </Grid>
      <Grid item xs sm={2} lg>
        <Paper variant='outlined' class='p2'>
          Hello From Paper 4
        </Paper>
      </Grid>
    </Grid>
  </div>
</div>