const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const base = require('./base.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const serverConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
    },
  ],
  config: {
    entry: {
      server: './src/server/index.js',
    },
    target: 'node',
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '../.env'),
      }),
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    ],
    externals: [nodeExternals()],
  },
});

module.exports = serverConfig;
