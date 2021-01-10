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
    currentTheme
  } from '@svelte-mui/core'

  text = ''
  active = false

  items = [
    { name: 'Foo', value: 'foo' },
    { name: 'Bar', value: 'bar' },
    { name: 'Fizz', value: 'fizz' },
    { name: 'Buzz', value: 'buzz' },
  ]
</script>

<!-- <style lang='scss'>
  :global(.primary-text) {
    color: var(--theme-palette-primary-main);
  }
</style> -->


# Select

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.

<Grid container spacing={1}>
  <Grid item xs='auto'>
    <Paper variant='outlined' elevation={2} class='mt2 p2'>
      <TextField bind:text>Hello World</TextField>
      <br />
      <Select {items} multiple chips>Regular</Select>
    </Paper>
  </Grid>
</Grid>

