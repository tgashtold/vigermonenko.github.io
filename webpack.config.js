
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    main: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    // filename: '[name].js',
    // chunkFilename: '[name].chunk.js',
    filename: "js/bundle.js",
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      favicon: 'assets/favicon.ico',
    }),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

};
