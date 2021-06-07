const path = require('path');
const ROOT = path.resolve( __dirname, 'src' );
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: ROOT,
  mode: 'development',
  entry: {
    main: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }, {
        test: /\.pug$/,
        loader: ['pug-loader']
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    contentBase: './build',
    port: 8001,
    disableHostCheck: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: ROOT + '/index.pug',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
