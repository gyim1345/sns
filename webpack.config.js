var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist/'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    proxy: [
      {
        context: ['/login', '/SearchPage', '/TimeLine', '/:user'],
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      }
    ]
    // devServer: {
    //   inline: true,
    //   port: 8080,
    //   historyApiFallback: true
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([{ from: 'src/images', to: './src/images' }])
  ]
};
