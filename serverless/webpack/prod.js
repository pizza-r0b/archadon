const base = require('./base');
const path = require('path');
// const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

console.log(process.env);
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
      // new webpack.EnvironmentPlugin(['NODE_ENV', 'STRIPE_SECRET_KEY', 'MONGO_URI']),
      new UglifyJSPlugin({
        uglifyOptions: {
          ecma: 5,
        },
      }),
    ],
  },
});

module.exports = clientConfig;
