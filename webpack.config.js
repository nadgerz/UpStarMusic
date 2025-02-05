var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  externals: nodeModules,
  entry: ['./src/main.js'],
  target: 'node',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './sass')],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.md$/,
        loader: 'html!markdown',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 4172,
  },
}
