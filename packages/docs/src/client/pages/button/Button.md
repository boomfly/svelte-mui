<script lang='coffee'>
  import {ThemeProvider, AppBar, Grid, Box, Paper, Typography, FormLabel, Button, currentTheme} from '@svelte-mui/core'
</script>
<style>
  
</style>


# Button

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.


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