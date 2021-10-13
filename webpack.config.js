const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist",
    filename: "build.js",
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
  },

  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },

  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },

      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      //js
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },

      //img
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
};
