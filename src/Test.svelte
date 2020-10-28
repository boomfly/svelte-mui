<script lang='coffee'>
  import Mui, {ThemeProvider, Paper, Box} from '../dist/browser/index.js'

  console.log Mui, Box
    
</script>

<style>

</style>

<ThemeProvider theme='dark' />
<div>hello</div>
<Paper class='m2'>
  <Box p={5}>
  </Box>
</Paper>