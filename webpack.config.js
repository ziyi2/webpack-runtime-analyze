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
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
  },
};
