const base = require('./base');
// const webpack = require('webpack');

const clientConfig = base({
  rules: [],
  config: {
    entry: '../src/index.js',
    stats: 'minimal',
    plugins: [
      // new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
  },
});

module.exports = clientConfig;
