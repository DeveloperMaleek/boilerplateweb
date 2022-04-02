const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')
// const { ModuleFilenameHelpers } = require('webpack')

module.exports = merge(config, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },

  // devServer: {
  //     writeToDisk: true
  // },

  output: {
    path: path.resolve(__dirname, 'public')
  }
})
