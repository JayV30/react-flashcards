var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [
    path.join(srcPath, 'app.js'),
    path.join(srcPath, 'styles', 'main.less')
  ],
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-3']
            }
          },
          {
            test: /\.less$/,
            exclude: /(node_modules|bower_components)/,
            loader: ExtractTextPlugin.extract('css-loader?-url!postcss-loader!less-loader')
          },
          { test: /\.json$/, loader: "json-loader" }
      ]
  },
  postcss: [require('autoprefixer')],
  lessLoader: {
    includePaths: [srcPath]
  },
  plugins: [
    new ExtractTextPlugin("./style/main.css", {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
      { from: 'src/data', to: 'data'},
      { from: 'src/assets', to: 'assets'},
	    { from: 'src/favicon.ico'}
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    colors: true,
    historyApiFallback: true,
    contentBase: buildPath,
  }
};
