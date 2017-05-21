module.exports = {
  context: __dirname + '/src',
  entry: {
    'entry': './entry'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'sample'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:{
          presets: ['es2015', 'es2016']
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  node: {
    fs: 'empty'
  }
};

