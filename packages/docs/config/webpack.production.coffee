{merge} = require 'webpack-merge'
common = require './webpack.common.coffee'

module.exports = [
  merge common.client, {
    mode: 'production'
  }
  merge common.server, {
    mode: 'production'
  }
]