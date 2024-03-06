// 使用 import { bootstrap } from './single-spa.js' 引入时只会构建单个 Bundle
// 这里采用 import('./single-spa.js') 进行动态导入，会自动分离 chunk 文件
import("./single-spa.js").then((res) => {
  console.log(res);
});