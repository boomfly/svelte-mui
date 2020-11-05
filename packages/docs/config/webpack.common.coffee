path = require('path')
fs = require('fs')
webpack = require('webpack')
sveltePreprocess = require('svelte-preprocess')
{mdsvex} = require 'mdsvex'
nodeExternals = require('webpack-node-externals')
MiniCssExtractPlugin = require('mini-css-extract-plugin')
Manifest = require('webpack-manifest-plugin')

mode = 'none'

client = {
  mode
  entry: {
    index: './src/client/index.coffee'
  }
  output:
    filename: 'index.js'
    path: path.resolve(process.cwd(), 'dist/public')
  target: 'web',
  # externals: [nodeExternals({
  #   allowlist: ['@svelte-mui/core']
  # })],
  resolve:
    extensions: ['.svelte', '.mjs', '.js', '.coffee', '.css', '.md']
    mainFields: ['svelte', 'module', 'browser', 'main']
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve:
          fullySpecified: false
      }
      {
        test: /.(js)$/
        exclude: [path.resolve(process.cwd(), "node_modules")]
        use:
          loader: "babel-loader"
          options:
            presets: ['@babel/preset-env']
      }
      {
        test: /\.coffee$/
        use: 'coffee-loader'
      }
      {
        test: /\.(svelte)$/
        exclude: /node_modules/
        use:
          loader: 'svelte-loader'
          options:
            hydratable: true
            preprocess: sveltePreprocess()
      }
      {
        test: /\.(md)$/
        use:
          loader: 'svelte-loader'
          options:
            hydratable: true
            preprocess: mdsvex {
              extensions: ['.md']
            }
      }
      {
        test: /\.css$/
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            options:
              publicPath: ''
              name: 'index.css'
          }
          {
            loader: 'css-loader'
          }
        ]
      }
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      }
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin {
      filename: 'index.css'
    }
    new Manifest {
      publicPath: ''
    }
  ]
}

server = {
  mode
  entry: './src/index.coffee'
  output:
    filename: 'index.js'
  target: 'node',
  externals: [
    nodeExternals {
      allowlist: ['@svelte-mui/core']
      modulesDir: '../../node_modules'
    }
  ]
  resolve:
    extensions: ['.mjs', '.js', '.coffee', '.svelte']
    mainFields: ['svelte', 'module', 'browser', 'main']
  module:
    rules: [
      {
        test: /\.m?js/
        resolve:
          fullySpecified: false
      }
      {
        test: /.(js)$/
        exclude: [path.resolve(__dirname, "node_modules")]
        use:
          loader: "babel-loader"
          options:
            presets: ['@babel/preset-env']
      }
      {
        test: /\.coffee$/
        use: 'coffee-loader'
      }
      {
        test: /\.(svelte)$/
        exclude: /node_modules/
        use:
          loader: 'svelte-loader'
          options:
            generate: 'ssr'
            hydratable: true
            preprocess: sveltePreprocess()
      }
      {
        test: /\.(md)$/
        use:
          loader: 'svelte-loader'
          options:
            generate: 'ssr'
            hydratable: true
            preprocess: mdsvex {
              extensions: ['.md']
            }
      }
      {
        test: /\.hbs$/
        exclude: /node_modules/
        use:
          loader: 'raw-loader'
      }
    ]
}

module.exports = {
  client
  server
}