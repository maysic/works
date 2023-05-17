const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { DefinePlugin } = require("webpack");
const NODE_ENV = process.env.NODE_ENV;
const GlOBAL_CSS_GENEXP = /\.global.\css$/;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: GlOBAL_CSS_GENEXP
      },
      {
        test: GlOBAL_CSS_GENEXP,
        use: ['css-loader']
      }
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [new DefinePlugin({
    'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`,
    'process.env.URI': `'${process.env.URI}'`,
    'process.env.SECRET': `'${process.env.SECRET}'`,
  })],

};
