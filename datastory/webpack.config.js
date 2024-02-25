const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/chart.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "stream": require.resolve('stream-browserify'),
      "process": require.resolve('process/browser'), // Add this if you're also polyfilling 'process'
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/chart.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser', // This line is for polyfilling 'process'
    }),
  ]
};
