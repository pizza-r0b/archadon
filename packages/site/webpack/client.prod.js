const base = require('./base');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PackerPlugin = require('packer-webpack-plugin');

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
      vendor: [
        'react',
        'react-redux',
        'react-router-redux',
        'react-router',
        'react-router-dom',
        'classnames',
      ],
    },
    output: Object.assign(defaults.output, {
      path: outputPath,
      publicPath: '/',
    }),
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, '../../../.env_prod'),
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new UglifyJSPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        // filename: "vendor.js"
        // (Give the chunk a different name)

        minChunks: Infinity,
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.NamedModulesPlugin(),
      new webpack.EnvironmentPlugin(['NODE_ENV', 'DEV_SERVER_PORT']),
    ],
  },
});

module.exports = clientConfig;
