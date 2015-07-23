var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'app', 'app.js');

var config = {

  // We change to normal source mapping, if you need them
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader")
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: [nodeModulesPath]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true })
  ]
};

module.exports = config;
