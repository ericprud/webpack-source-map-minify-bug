const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: [ './index.js' ],
  output: {
    filename: 'webpack-source-map-minify-bug.min.js',
    library: 'RequireFile',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  plugins: [ new MinifyPlugin({ deadcode: false }) ],
}
