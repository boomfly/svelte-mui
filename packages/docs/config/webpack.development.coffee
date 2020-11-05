{merge} = require 'webpack-merge'
common = require './webpack.common.coffee'

module.exports = [
  merge common.client, {
    mode: 'development'
    devtool: 'inline-source-map'
  }
  merge common.server, {
    mode: 'development'
    devtool: 'inline-source-map'
  }
]