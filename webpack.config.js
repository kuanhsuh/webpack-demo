var path = require('path');

module.exports = {
  entry: {
    App: "./js/App.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts.js"
  },
}