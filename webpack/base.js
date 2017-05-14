const path = require('path');
const src = path.resolve(__dirname, '../src');
const prependSrc = pathStr => `${src}/${pathStr}`;

const base = extend => {
  const rules = [
    {
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'react', 'stage-2'],
        },
      }],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-inline-loader',
        },
      ],
    },
    {
      test: /\.(ttf|woff|eot)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif)$/i,
      use: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        {
          loader: 'image-webpack-loader',
          query: {
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
              progressive: true,
            },
            optipng: {
              optimizationLevel: 7,
            },
          },
        },
      ],
    },
  ];

  if (extend.rules) {
    rules.push(...extend.rules);
  }

  return Object.assign({}, {
    context: path.resolve(__dirname, '../'),
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].js',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      modules: [src, 'node_modules'],
      alias: {
        Components: prependSrc('client/components'),
        Actions: prependSrc('client/actions'),
        Containers: prependSrc('client/containers'),
        Reducers: prependSrc('client/reducers'),
        Utils: prependSrc('client/utils'),
        Constants: prependSrc('client/constants.js'),
        Store: prependSrc('client/store.js'),
        Sagas: prependSrc('client/sagas/index.js'),
        Images: prependSrc('client/images'),
        Ui: prependSrc('client/components/ui'),
        Types: prependSrc('client/types.js'),
      },
    },
    module: {
      rules,
    },
  }, extend.config);
};

module.exports = base;
