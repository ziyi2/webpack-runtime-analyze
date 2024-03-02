// 用于分析构建产物
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
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    // 将复用的代码抽离出来，形成一个单独的 vendors.js 文件
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
  },
};
