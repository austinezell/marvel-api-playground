module.exports = {
  entry: "./src/js/App.js",
  output: {
    path: __dirname + '/public/dist/',
    filename: "bundle.js"
  },
  module: {
    test: /\.jsx?$/,
    loader: "babel",
    exclude: /(node_modules\/|bower_components\/)/,
    query:{
      presets: ['es2015','react']
    }
  }
};
