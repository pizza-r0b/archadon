const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const base = require('./base.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const PackerPlugin = require('packer-webpack-plugin');

const serverConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', {
        loader: 'sass-loader',
        options: {
          data: '$env: ' + process.env.NODE_ENV + ';',
        },
      }],
    },
  ],
  config: {
    entry: {
      server: './src/server/index.js',
    },
    target: 'node',
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '../../../.env_prod'),
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      // new webpack.optimize.UglifyJsPlugin(),
      new PackerPlugin(),
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    ],
    externals: [nodeExternals({
      whitelist: ['react-hot-loader'],
    })],
  },
});

module.exports = serverConfig;
