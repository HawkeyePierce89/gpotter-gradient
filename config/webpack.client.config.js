const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'gpotter-gradient.client.js',
    libraryTarget: "var",
    library: 'getColorFromGradient'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ["add-module-exports"]
      }
    }]
  }
};
