var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: [
  //   './src/index.js'
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: { extensions: [".js", ".jsx"] }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader" // translates CSS into CommonJS
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
  // devServer: {
  //   inline: true,
  //   port: 8080,
  //   historyApiFallback: true
  // }
};
