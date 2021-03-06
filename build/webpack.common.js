const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('../config')
const webpack = require('webpack')


// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebPackPlugin({
  // 虚拟的html文件名 index.html
  filename: 'index.html',
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, '../public/index.html')
})

module.exports = {
  context: path.resolve(__dirname, '../'),

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
      // 配置js/jsx语法解析
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/,  use: ["style-loader","css-loader","sass-loader"]},
      { test: /\.css$/,  use:['style-loader','css-loader']},
      { test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']}
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    // 该插件帮助我们安心地使用环境变量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env'),
      'process.env.URL': JSON.stringify(process.env.URL)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}