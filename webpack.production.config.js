var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

var config = {
  // We change to normal source mapping, if you need them
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"),
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader"),
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true })
  ]
};

module.exports = config;
