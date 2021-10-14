const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  // babel-polyfill async await
  entry: ["babel-polyfill", "./src/main.js"],

  //debug source-map
  devtool: "#eval-source-map",

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

      //vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],
};

//production zip
if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}
