var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!pleeease', exclude: /node_modules/ }
    ]
  },

  pleeease: {
    stylus: true,
    autoprefixer: { browsers: ['last 4 versions', 'ios 6']},
    minifier: true,
    mqpacker: true
  }
};
