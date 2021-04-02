const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonOpts = {
  // webpack --mode=development
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

const projectA = {
  ...commonOpts,
  entry: { index: './src/index.ts' },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/',
  },
  devServer: {
    contentBase: __dirname + '/dist/',
  },
  name: 'example',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: './src/index-in.svg',
      filename: 'index.svg'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}

module.exports = [projectA];