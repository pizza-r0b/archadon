const path = require('path');
const src = path.resolve(__dirname, '../');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

Object.entries(slsw.lib.serverless.service.provider.environment).forEach(([key, val]) => {
  process.env[key] = val;
});

// const prependSrc = pathStr => `${src}/${pathStr}`;

const base = extend => {
  const rules = [
    {
      test: /(\.js)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'react', 'stage-2'],
        },
      }],
    },
    {
      test: /(\.key)$/,
      use: 'raw-loader',
    },
  ];

  if (extend.rules) {
    rules.push(...extend.rules);
  }

  return Object.assign({}, {
    entry: slsw.lib.entries,
    // devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()],
    // devtool: 'source-map',
    resolve: {
      extensions: ['.js'],
      modules: [src, 'node_modules'],
      alias: {
        utils: path.resolve(__dirname, '../functions/utils'),
        schemas: path.resolve(__dirname, '../schemas'),
      },
    },
    module: {
      rules,
    },
  }, extend.config);
};

module.exports = base;
