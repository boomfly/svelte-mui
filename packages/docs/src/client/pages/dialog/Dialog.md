<script lang='coffee'>
  import {
    TextField
    Grid
    Box
    Paper
    Typography
    FormLabel
    Button
    List
    ListItem
    ListItemGroup
    ListGroup
    Icon
    Select
    Drawer
    Dialog
    currentTheme
  } from '@svelte-mui/core'

  text = ''
  active = false

  open = -> active = true
</script>


# Dialog

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.

<Grid container spacing={1}>
  <Grid item xs='auto'>
    <Paper variant='outlined' elevation={2} class='mt2 p2'>
      <div class="text-center">
        <Button on:click={open}>Open Dialog</Button>
      </div>
      <Dialog class="p2" bind:active>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam quia esse impedit
        libero mollitia tempore nisi dolore ut, quasi incidunt sunt sapiente vero iusto
        necessitatibus eius nulla dignissimos laboriosam.
      </Dialog>
    </Paper>
  </Grid>
</Grid>

