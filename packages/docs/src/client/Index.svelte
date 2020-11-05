<script lang='coffee'>
  import {getContext, onMount} from 'svelte'
  #import ThemeProvider from '@svelte-mui/core/src/coffee/styles/ThemeProvider.svelte'
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, currentTheme} from '@svelte-mui/core'
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
  
</style>

<ThemeProvider {theme} />

<div class='root'>
  <AppBar class='p2' color='default' position='static'>
    <Typography variant='h5'>Messages</Typography>
  </AppBar>
  
  <br />

  
  <Grid container style='justify-content: center'>
    <Grid item md={8}>
      <Box p={2} m={2} mb={5}>
        <Paper variant='outlined' style='min-height: 50px;' class='p2'>
          <Typography variant='h1'>
            Lorem ipsum
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo condimentum interdum. Cras in aliquam nisi. Vivamus odio odio, congue eu rutrum non, cursus ut risus. Mauris eu sagittis sem, in egestas elit. Aenean vestibulum accumsan nunc a condimentum. Nunc fermentum, risus vitae porta congue, urna mauris sollicitudin nisl, a hendrerit ante urna eu erat. Etiam mollis, enim nec pellentesque maximus, dolor risus tincidunt est, a accumsan lectus lectus id dolor. Aenean dictum lectus eros, sed malesuada mauris eleifend ut. Etiam nulla tortor, sodales sit amet lobortis cursus, tempor quis nisi. Cras egestas quam eget mauris mattis, non viverra turpis egestas. Donec pretium dui ut elit pharetra volutpat.
            <br />
            Praesent eu leo sed eros lobortis bibendum vitae non sapien. Suspendisse potenti. Etiam laoreet porta purus. Donec nec cursus est. Praesent condimentum urna eu tempor lobortis. Duis at nulla diam. Praesent eleifend nunc a velit rutrum fermentum. Phasellus faucibus, lorem et sodales rutrum, ligula quam pretium sapien, a maximus justo enim vel sapien. Vivamus sagittis convallis ipsum, ac fringilla nisl ullamcorper et. Integer posuere non mauris sed tincidunt. Nunc molestie libero ac ex dictum ultrices. In id enim interdum, venenatis metus vitae, ullamcorper neque. Nullam et efficitur nibh.
            <br />
            Aliquam ornare diam nec tortor luctus efficitur. Duis at rhoncus massa, quis bibendum diam. Aliquam erat volutpat. Maecenas elit libero, ultricies at efficitur in, mattis faucibus diam. Nulla id euismod ligula. Ut faucibus massa purus, non venenatis elit vestibulum eu. Aliquam vestibulum ornare ultrices. Sed sollicitudin nibh non vehicula cursus. Mauris consequat auctor lacus dictum consequat.
            <br />
            Vestibulum consectetur tincidunt lorem, maximus viverra sapien commodo in. Vestibulum efficitur neque urna, id lobortis massa varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc posuere tincidunt diam. Sed vel neque blandit sapien cursus finibus a sed leo. Cras placerat metus at magna varius, in malesuada arcu porttitor. In vel erat eget ipsum elementum pretium. Pellentesque commodo hendrerit consectetur. Sed dolor tellus, tincidunt nec turpis vitae, pulvinar luctus ligula. Cras tincidunt risus sed faucibus pellentesque. Sed ultrices felis tempus mi fringilla, nec porttitor ligula dignissim. Suspendisse malesuada aliquet dui, dignissim faucibus lacus eleifend id. Mauris sit amet feugiat ipsum, a porttitor quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            <br />
            Pellentesque eu felis cursus, luctus diam a, consectetur mi. Ut elit nibh, ultrices quis faucibus id, iaculis ac magna. Aenean tempus, odio in dapibus tempor, metus enim commodo erat, ut eleifend nisi ante eu ex. Proin fringilla lectus augue, in rutrum lectus dignissim in. Phasellus non velit eget sapien tincidunt tristique. Vivamus eget dolor vitae diam blandit scelerisque. Phasellus velit metus, molestie sit amet porta a, pretium et mi. Curabitur tincidunt enim a diam tincidunt pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </Typography>
        </Paper>
      </Box>
    </Grid>
  </Grid>

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