const path = require('path');

module.exports = {
  entry: {
    'demo': path.resolve(__dirname, './src/pages/demo/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'build/static/pages'),
    filename: '[name]/index.js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};