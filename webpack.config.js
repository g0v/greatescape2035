/* eslint-env node */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: "web",
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './static', to: './' }
      ]
    }),
  ],
}
