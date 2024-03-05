// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  // 详见：https://webpack.docschina.org/api/module-methods 和 https://webpack.docschina.org/guides/code-splitting/#dynamic-imports
  // 调用 import()，被视为分割点，意思是，被请求的模块和它引用的所有子模块，会分割到一个单独的 chunk 中
  { path: '/about', component: () => import(/* webpackChunkName: "about" */ './about.js')},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！