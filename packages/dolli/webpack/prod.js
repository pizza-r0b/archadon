const base = require('./base');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = base({
  rules: [],
  config: {
    stats: 'minimal',
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].js',
      libraryTarget: 'commonjs',
    },
    plugins: [
      // new webpack.EnvironmentPlugin([
      //   'NODE_ENV',
      //   'STRIPE_SECRET_KEY',
      //   'MONGO_URI',
      //   'ALGOLIA_API_KEY',
      //   'ALGOLIA_SECRET_KEY',
      //   'ADMIN_EMAIL',
      // ]),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../templates'),
          to: 'templates',
        },
      ]),
      new UglifyJSPlugin({
        parallel: true,
        cache: true,
      }),
    ],
  },
});

module.exports = clientConfig;
