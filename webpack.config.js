
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ['./main.ts'],
  // entry: () => new Promise((resolve) => resolve(['./src/main.ts'])),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  target: 'web',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  //  devtool: 'inline-source-map',
   module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    //  new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin(
      {
        title: 'algorithm design'
        // templateParameters: function () { /* omitted long function */ },
        // template: path.resolve(__dirname,'public/index.html')
      }
    ),
    //  new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   ignored: /node_modules/,
  // }
};

 module.exports = config;