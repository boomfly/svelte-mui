<script lang='coffee'>
  import {TextField, Grid, Box, Paper, Typography, FormLabel, Button, currentTheme} from '@svelte-mui/core'

  text = ''
</script>

<style lang='scss'>
  $sizes: 40px, 50px, 80px;

  @each $size in $sizes {
    :global(.icon-#{$size}) {
      font-size: $size;
      height: $size;
      width: $size;
    }
  }
</style>


# TextField

### The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.


<Paper class='p2 mt2'>
  <Grid container spacing={1}>
    <Grid item xs>
      Value: {text}
      <br />
      <TextField type='tel' multiline={false} label='' bind:value={text} /> 
    </Grid>
  </Grid>
</Paper>
