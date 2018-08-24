const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const config = merge.smart(baseConfig, {
  output: {
    publicPath: "./",
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
})

config.plugins.push(new MiniExtractPlugin({
  filename: 'css/[name].[hash:8].css',
  chunkFilename: '[id].[hash:8].css'
}));

config.plugins.push(new cleanWebpackPlugin('dist'));

module.exports = config;