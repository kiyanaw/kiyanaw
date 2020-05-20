const path = require('path')
const webpackMerge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common')

const CordovaHtmlOutputPlugin = require('../webpack/plugins/CordovaHtmlOutputPlugin.js')

module.exports = function () {
  return webpackMerge(commonConfig({ mode: 'production' }), {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CordovaHtmlOutputPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
      new CleanWebpackPlugin({
        dry: false,
        verbose: false,
        cleanOnceBeforeBuildPatterns: ['!index.html'],
        cleanAfterEveryBuildPatterns: ['!index.html'],
      }),
    ],
  })
}
