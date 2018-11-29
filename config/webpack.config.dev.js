const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const staticPath = path.resolve(__dirname, '../trocit/static');
const frontPath = path.resolve(__dirname, '../trocit/front');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: path.resolve(frontPath, 'index.js'),
  output: {
    path: staticPath,
    filename: 'bundle.js',
    publicPath: '/static',
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
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
