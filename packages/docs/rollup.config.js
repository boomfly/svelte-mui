import commonjs from 'rollup-plugin-commonjs'
import coffeescript from 'rollup-plugin-coffee-script'
import nodeResolve from 'rollup-plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import json from '@rollup/plugin-json'
import html from '@rollup/plugin-html'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import css from 'rollup-plugin-css-only'

export default [
  {
    input: 'src/index.coffee',
    output: {
      file: 'dist/index.js',
      format: 'umd'
    },
    plugins: [
      json(),
      coffeescript(),
      nodeResolve({ extensions: ['.js', '.coffee'] }),
      commonjs({
        extensions: ['.js', '.coffee'],
        ignore: ["conditional-runtime-dependency"]
      }),
      svelte({
        generate: 'ssr',
        hydratable: true,
        preprocess: sveltePreprocess()
      })
    ]
  },
  {
    input: 'src/client/index.coffee',
    output: {
      file: 'dist/public/index.js',
      format: 'cjs',
      // name: 'app'
    },
    plugins: [
      // htmlTemplate({
      //   template: 'src/client/index.html',
      //   target: 'index.html',
      // }),
      json(),
      coffeescript(),
      nodeResolve({ extensions: ['.js', '.coffee'] }),
      commonjs({
        extensions: ['.js', '.coffee'],
        ignore: ["conditional-runtime-dependency"]
      }),
      svelte({
        // emitCss: true,
        preprocess: sveltePreprocess()
      }),
      css({
        output: 'dist/public/bundle.css'
      })
    ]
  }
]