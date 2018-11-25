'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../trocit/front/index.js'),
  output: {
    path: path.resolve(__dirname, '../trocit/static/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
