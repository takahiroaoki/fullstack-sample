const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.(scss|sass|css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
			filename: 'templates/pages/demo/index.html',
			template: './src/pages/demo/index.html',
		}),
    new MiniCssExtractPlugin({
      filename: 'static/pages/[name]/index.css',
    }),
  ]
};