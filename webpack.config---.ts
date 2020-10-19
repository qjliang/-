import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  // entry: ['./src/main.ts'],
  entry: () => new Promise((resolve) => resolve(['./src/main.ts'])),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  target: 'web',
  // devServer: {
  //   contentBase: './dist',
  // hot: true
  // },
  //  devtool: 'inline-source-map',
  plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
      title: 'algorithm design'
     }),
    //  new webpack.NamedModulesPlugin(),
+    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  }
};

export default config;