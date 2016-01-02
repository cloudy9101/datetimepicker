var path = require('path');

var config = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080",
    path.resolve(__dirname, "app/index.js")
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=react,presets[]=es2015'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=25000' 
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000' 
    }],
  }
}

module.exports = config;
