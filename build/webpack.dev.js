const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const HOST = process.env.HOST;
const PORT = 8080
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
    host: HOST,
    port: PORT,
    proxy: {
      '/api': {
        target: 'http://172.21.10.44:8028',
        pathRewrite: { '^/api': '' },
      },
    },
  },
});

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      process.env.port = port;
      config.devServer.port = port;
      config.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${config.devServer.host}:${port}`],
        },
        onErrors: undefined
      }))
      resolve(config)
    }
  })
});
