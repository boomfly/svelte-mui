const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const sveltePreprocess = require('svelte-preprocess')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Manifest = require('webpack-manifest-plugin')

const clientConfig = {
  mode: 'none',
  entry: './src/client/index.coffee',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  target: 'web',
  // externals: [nodeExternals({
  //   allowlist: ['@svelte-mui/core']
  // })],
  resolve: {
    extensions: ['.svelte', '.mjs', '.js', '.coffee', '.css'],
    mainFields: ['svelte', 'module', 'browser', 'main']
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /.(js)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          },
        }
      },
      {
        test: /\.coffee$/,
        use: 'coffee-loader'
      },
      {
        test: /\.(svelte)$/,
        // exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            hydratable: true,
            preprocess: sveltePreprocess()
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     injectType: 'linkTag'
          //   }
          // },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
              name: 'index.css'
            }
          },
          {
            loader: 'css-loader',
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: 'index.css'
          //   }
          // },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new Manifest({
      publicPath: ''
    }),
  ]
}

module.exports = [
  clientConfig,
  {
    mode: 'none',
    entry: './src/index.coffee',
    output: {
      filename: 'index.js',
    },
    target: 'node',
    externals: [nodeExternals({
      allowlist: ['@svelte-mui/core'],
      modulesDir: '../../node_modules'
    })],
    resolve: {
      extensions: ['.mjs', '.js', '.coffee', '.svelte'],
      mainFields: ['svelte', 'module', 'browser', 'main']
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /.(js)$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            },
          }
        },
        {
          test: /\.coffee$/,
          use: 'coffee-loader'
        },
        {
          test: /\.(svelte)$/,
          exclude: /node_modules/,
          use: {
            loader: 'svelte-loader',
            options: {
              generate: 'ssr',
              hydratable: true,
              preprocess: sveltePreprocess()
            }
          }
        },
        {
          test: /\.hbs$/,
          exclude: /node_modules/,
          use: {
            loader: 'raw-loader'
          }
        }
      ]
    }
  }
]