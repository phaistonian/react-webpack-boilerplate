var Webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appPath = path.resolve(__dirname, 'app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname,  'build');

var config = {
  //context: __dirname,
  devtool: 'eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.resolve(appPath, 'app.js')
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/' // This HAS to point to the build path in order for hot reload to work
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: [nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader'
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      }
    ]
  },

  resolve: {
    extensions:  ['', '.js', '.json', '.css', 'styl']
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html'
    })
  ]
};

module.exports = config;
