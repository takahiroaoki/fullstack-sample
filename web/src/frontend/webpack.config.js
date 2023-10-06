const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'demo': path.resolve(__dirname, './src/pages/demo/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/pages/[name]/index.js',
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
			filename: 'templates/pages/demo/index.html',
			template: './src/pages/demo/index.html',
		}),
  ]
};