const packageName = require("./package.json").name;

module.exports = {
  output: {
    library: "myLibrary",
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
};
