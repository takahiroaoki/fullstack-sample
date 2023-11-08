const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    path: path.resolve(__dirname, 'build'),
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
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...getHtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/pages/[name]/index.css',
    }),
  ]
};