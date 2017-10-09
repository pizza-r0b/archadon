const base = require('./base');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const defaults = base({});

const outputPath = path.resolve(__dirname, '../public');

const clientConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{ loader: 'css-loader' }, {
          loader: 'sass-loader',
          options: {
            data: '$env: ' + process.env.NODE_ENV + ';',
          },
        }],
        fallback: 'style-loader',
      }),
    },
  ],
  config: {
    entry: {
      client: [
        './src/client/client.js',
      ],
    },
    output: Object.assign(defaults.output, {
      path: outputPath,
    }),
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '../.env_dev'),
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.NamedModulesPlugin(),
      new webpack.EnvironmentPlugin(['NODE_ENV', 'DEV_SERVER_PORT', 'DEV_DEPLOY']),
    ],
  },
});

module.exports = clientConfig;
