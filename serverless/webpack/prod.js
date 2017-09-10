const base = require('./base');
const path = require('path');
// const webpack = require('webpack');

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
      // new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
  },
});

module.exports = clientConfig;
