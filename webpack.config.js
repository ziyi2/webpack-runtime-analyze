const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app1: "./src/app1.js",
    app2: "./src/app2.js",
  },
  output: {
    path: path.resolve(__dirname, "public/dist"), // 输出的文件夹
    chunkFilename: "my-chunk.js", // 设置非入口 chunk 的文件名
  },
  // 设置输出文件夹
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
  },
};
