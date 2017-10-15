const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const base = require('./base.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const serverConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', {
        loader: 'sass-loader',
        options: {
          data: '$env: "production";',
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
        path: path.resolve(__dirname, '../.env_deploy_dev'),
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    ],
    externals: [nodeExternals({
      whitelist: ['react-hot-loader'],
    })],
  },
});

module.exports = serverConfig;
