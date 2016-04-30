module.exports = {
  entry: "./src/js/App.jsx",
  output: {
    path: __dirname + '/public/dist/',
    filename: "bundle.js"
  },
  module: {
    loaders:[{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /(node_modules\/|bower_components\/)/,
      query:{
        cacheDirectory: true,
        presets: ['es2015','react']
      }
    }]
  }
};
