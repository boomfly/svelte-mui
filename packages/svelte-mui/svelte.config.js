const sveltePreprocess = require('svelte-preprocess');

const target = process.env.TARGET || 'browser'

const generate = target === 'node' ? 'ssr' : 'dom'

module.exports = {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    css: false,
    generate,
    hydratable: true
  }
};