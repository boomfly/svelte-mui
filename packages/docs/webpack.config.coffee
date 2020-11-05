{merge} = require 'webpack-merge'
common = require './config/webpack.common.coffee'

module.exports = [
  merge common.client, {
    mode: 'none'
  }
  merge common.server, {
    mode: 'none'
  }
]