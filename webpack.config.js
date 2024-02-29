const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    app1: "./src/app1.js",
    app2: "./src/app2.js",
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
