import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import coffeescript from 'rollup-plugin-coffee-script'
import nodeResolve from 'rollup-plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import json from '@rollup/plugin-json'
import html from '@rollup/plugin-html'
import css from 'rollup-plugin-css-only'
import multi from '@rollup/plugin-multi-entry'
import multiInput from 'rollup-plugin-multi-input'

export default [
  {
    input: 'src/coffee/**/*',
    output: {
      dir: 'build/',
      format: 'es',
      exports: 'auto'
    },
    plugins: [
      css(),
      json(),
      coffeescript(),
      nodeResolve({ extensions: ['.js', '.coffee'] }),
      commonjs({
        extensions: ['.js', '.coffee'],
        ignore: ["conditional-runtime-dependency"]
      }),
      svelte({
        preprocess: sveltePreprocess()
      }),
      multiInput({
        relative: './',
        transformOutputPath: (output, input) => {
          return output.replace('src/coffee/', '')
        }
      })
    ]
  },
  {
    input: 'src/coffee/**/*',
    output: {
      dir: 'build/cjs',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [
      css(),
      json(),
      coffeescript(),
      nodeResolve({ extensions: ['.js', '.coffee'] }),
      commonjs({
        extensions: ['.js', '.coffee'],
        ignore: ["conditional-runtime-dependency"]
      }),
      svelte({
        preprocess: sveltePreprocess()
      }),
      multiInput({
        relative: './',
        transformOutputPath: (output, input) => {
          return output.replace('src/coffee/', '')
        }
      })
    ]
  },
  {
    input: 'src/coffee/**/*',
    output: {
      dir: 'build/ssr',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [
      css(),
      json(),
      coffeescript(),
      nodeResolve({ extensions: ['.js', '.coffee'] }),
      commonjs({
        extensions: ['.js', '.coffee'],
        ignore: ["conditional-runtime-dependency"]
      }),
      svelte({
        generate: 'ssr',
        preprocess: sveltePreprocess({})
      }),
      multiInput({
        relative: './',
        transformOutputPath: (output, input) => {
          return output.replace('src/coffee/', '')
        }
      })
    ]
  }
]