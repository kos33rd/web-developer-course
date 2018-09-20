const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = path.join(__dirname, 'dist');

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "[name].js"
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      title: "My App",
      hash: true,
      template: "stub/index.html"
    })
  ],
  devServer: {
    contentBase: outputDirectory,
    compress: true,
    port: 9000
  }
};
