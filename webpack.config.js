const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
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
