<script lang='coffee'>
  import Mui, {ThemeProvider, Paper, Box} from '../dist/browser/index.js'

  console.log Mui, Box
    
</script>

<style lang='scss'>
  .root {
    $color: white;
    color: $color;
  }
</style>

<ThemeProvider theme='dark' />
<div class='root'>hello</div>
<Paper class='m2'>
  <Box p={5}>
  </Box>
</Paper>