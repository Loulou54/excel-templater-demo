const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      showErrors: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**',
          to: '',
          context: 'public',
          globOptions: {
            ignore: ["**/index.html*"],
          },
        }
      ]
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
