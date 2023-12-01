const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyFilePlugin = require("copy-webpack-plugin")

const buildDir = path.resolve(__dirname, 'build')
const targetDir = path.resolve(__dirname, '../backend/demo/src/main/resources')

// Get entry points as directory-names under src/pages
function getEntry() {
  const pages = fs.readdirSync(path.join(__dirname, 'src/pages')).filter((file) => {
    return fs.statSync(path.join(__dirname, 'src/pages', file)).isDirectory()
  })
  const entry = {}
  for (const page of pages) {
    const file = path.resolve(__dirname, `src/pages/${page}/index.ts`)
    if (fs.existsSync(file)) {
      entry[page] = file
    }
  }
  return entry
}

// Get html files under /src in order to move them to ../main/resources/templates
function getHtmlWebpackPlugin() {
  const htmlFiles = glob.sync(path.resolve(__dirname, 'src/**/*.html'))
  const entry = []
  for (const file of htmlFiles) {
    entry.push(
      new HtmlWebpackPlugin({
        inject: false,
        filename: `templates/${file.replace(/.*frontend\/src\//, '')}`,
        template: file,
      })
    )
  }
  return entry
}



module.exports = {
  entry: getEntry(),
  output: {
    path: buildDir,
    filename: 'static/pages/[name]/index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...getHtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/pages/[name]/index.css',
    }),
    new CleanWebpackPlugin(),
    new CopyFilePlugin({
      patterns: [
        {
          from: buildDir,
          to: targetDir,
        },
      ],
    }),
  ],
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};