const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     plugins: [
          //       isDevelopment && require.resolve("react-refresh/babel"),
          //     ].filter(Boolean),
          //   },
        },
      },
      //   {
      //     test: /\.scss$/,
      //     exclude: /node_modules/,
      //     use: ["style-loader", "css-loader", "sass-loader"],
      //   },
    ],
  },
};
