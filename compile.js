const fs = require('fs')
const svelte = require('svelte/compiler')
const sveltePreprocess = require('svelte-preprocess')

let filename = 'App.svelte'
let source = fs.readFileSync('./src/App.svelte').toString()

console.log(source)

const compile = async () => {
  let processed = await svelte.preprocess(source, sveltePreprocess(), {filename})
  console.log('preprocessed', processed)
  let compiled
  try {
    compiled = svelte.compile(processed.code, {filename})
  } catch(e) {
    console.log(e.message)
    console.log(e.stack)
    return
  }

  console.log('compiled', compiled)
}

compile()