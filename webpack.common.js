const path = require('path');
const dotenv = require('dotenv');

const { ProvidePlugin, EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 실행 환경에 따라 다른 env 파일을 사용해서 빌드
const env = process.env.NODE_ENV === 'development' ? '.env.local' : '.env.prod';

dotenv.config({
  path: path.resolve(__dirname, env),
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new EnvironmentPlugin([]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};