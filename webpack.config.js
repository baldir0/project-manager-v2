const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },

      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: () => [require('autoprefixer')]
            }
          }
        }, "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*",".js",".jsx",".ts",".tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",

  },
  devServer: {
    static: {
      directory:path.join(__dirname, "public/"),
      publicPath: "/",
    },
    port: 8080,
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin()]
}
