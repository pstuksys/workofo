const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //the DefinePlugin

require('dotenv').config({path:'.env.development'});
require('dotenv').config({ path: `.env.${process.env.REACT_APP_ENVIRONMENT}` });

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static:{
      directory: path.join(__dirname, 'dist'),
    },
    port: process.env.REACT_APP_PORT,
    open:true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_PORT': JSON.stringify(process.env.REACT_APP_PORT || '9000'),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  mode: 'development'
};
