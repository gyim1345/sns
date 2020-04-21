var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js',
    // publicPath: 'https://image123.com'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: { extensions: ['.js', '.jsx'] }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader' // translates CSS into CommonJS
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    proxy: [
      {
        context: ['/login', '/SearchPage', '/TimeLine', '/:user'],
        target:
          'http://ec2-13-209-40-94.ap-northeast-2.compute.amazonaws.com:8000',
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
      new CopyPlugin([
        { from: 'src/images', to: './src/images' },
      ]),
   
    ]
};
