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
    currentTheme
  } from '@svelte-mui/core'

  text = ''
  active = false
</script>

<style lang='scss'>
  :global(.primary-text) {
    color: var(--theme-palette-primary-main);
  }
</style>


# TextField

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.


<Paper elevation={2} class='mt2'>
  <Grid container spacing={1}>
    <Grid item xs>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>
          Item 2
          <span slot="append">
            <span class="mdi mdi-home" />
          </span>
          <span slot="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, saepe. Quis nam non
            perferendis doloremque?
          </span>
        </ListItem>
      </List>
    </Grid>
    <Grid item xs={12}>
      <List dense class="elevation-2" style="width:300px">
        <ListItemGroup class="primary-text" value={[1]}>
          <ListItem>
            <span slot="prepend">
              <Icon class="mdi mdi-home" />
            </span>
            Item 1
          </ListItem>
          <ListItem>
            <span slot="prepend">
              <Icon class="mdi mdi-account" />
            </span>
            Item 2
          </ListItem>
          <ListItem>
            <span slot="prepend">
              <Icon class="mdi mdi-flag" />
            </span>
            Item 3
          </ListItem>
        </ListItemGroup>
      </List>
    </Grid>
  </Grid>
</Paper>


<Grid container spacing={1}>
  <Grid item xs='auto'>
    <Paper elevation={2} class='mt2'>
      <List outlined class="elevation-2" style="width:300px">
        <ListItem>
          <span slot="prepend">
            <Icon class="mdi mdi-home" />
          </span>
          Home
        </ListItem>
        <ListGroup bind:active offset={72} class='primary-text'>
          <span slot="prepend">
            <Icon class="mdi mdi-cog" />
          </span>
          <span slot="activator"> Actions </span>
          <span slot="append">
            <Icon class="mdi mdi-chevron-up" rotate={active ? 0 : 180} />
          </span>
          <ListItem>Create</ListItem>
          <ListItem>Read</ListItem>
          <ListItem>Write</ListItem>
          <ListItem>Delete</ListItem>
        </ListGroup>
      </List>
    </Paper>
  </Grid>
</Grid>

