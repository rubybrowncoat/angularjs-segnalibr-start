const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff2?)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node-modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      }
    ]
  }
}
