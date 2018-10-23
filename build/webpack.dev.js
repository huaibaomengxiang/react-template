const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://kia-dev-trade.haimaiche.net',
        pathRewrite: { '^/api': '' },
      },
    },
  },
});

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
