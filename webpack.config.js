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
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
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
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
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
          // {
          //   loader: 'ng-annotate-loader'
          // },
          {
            loader: 'babel-loader',
          },
        ]
      }
    ]
  }
}
