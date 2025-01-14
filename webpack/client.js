const base = require('./base');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const defaults = base({});

const outputPath = path.resolve(__dirname, '../public');

const clientConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          data: '$env: ' + process.env.NODE_ENV + ';',
        },
      }],
    },
  ],
  config: {
    entry: {
      client: [
        `webpack-hot-middleware/client?path=${'http://localhost'}:${process.env.DEV_SERVER_PORT}/__webpack_hmr`,
        'react-hot-loader/patch',
        './src/client/client.js',
      ],
    },
    output: Object.assign(defaults.output, {
      path: outputPath,
      publicPath: `${'http://localhost'}:${process.env.DEV_SERVER_PORT}/`,
    }),
    devServer: {
      hot: true,
      contentBase: outputPath,
      publicPath: `${'http://localhost'}:${process.env.DEV_SERVER_PORT}/`,
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '../.env_dev'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.EnvironmentPlugin(['NODE_ENV', 'DEV_SERVER_PORT']),
    ],
  },
});

module.exports = clientConfig;
