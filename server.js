const express = require("express");
const morgan = require("morgan");
// const ip = require("ip");
const app = express();
// const host = ip.address();
const port = 4000;

// 打印请求日志
app.use(morgan("dev"));

app.use(
  // 利用 Express 托管静态文件：https://www.expressjs.com.cn/starter/static-files.html
  express.static("public", {
    cacheControl: true,
    maxAge: 5000,
    etag: true,
    lastModified: false,
  })
);

// 启动 Node 服务
app.listen(port);
console.log(`server start at http://localhost:${port}/`);
