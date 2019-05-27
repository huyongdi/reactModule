const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
//const devMode = process.env.NODE_ENV !== 'production'
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js'
      //  button1: path.resolve(__dirname, 'src/ui/button1'),
      //  button2: path.resolve(__dirname, 'src/ui/button2'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    publicPath: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs',
    chunkFilename: '[name].[hash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader?modules=true&localIdentName=[local]-[hash:base64:5]', {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')(), //CSS浏览器兼容
                require('cssnano')()  //压缩css
              ]
            }
          }, 'less-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    autoprefixer,
  ]
}