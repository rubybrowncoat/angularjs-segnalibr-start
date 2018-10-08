const path = require('path')

module.exports = {
  extends: path.resolve(__dirname, 'webpack.config.js'),
  name: 'development',
  devtool: 'eval',
}
