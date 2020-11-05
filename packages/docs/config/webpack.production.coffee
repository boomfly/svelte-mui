{merge} = require 'webpack-merge'
common = require './webpack.common.coffee'

mode = 'production'

module.exports = [
  merge common.client, {
    mode
  }
  merge common.server, {
    mode
  }
]