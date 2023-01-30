/* eslint-disable no-undef */
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = (env) => ({
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: env.production ? "production" : "development",
  devtool: env.production ? "source-map" : "eval-cheap-module-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { debug: true }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
})
