# SPA

Single Page Application（单页应用），整个应用程序中只有一个 `index.html` 文件。

## vue router

### 设置路由出口

`router-view`：当路由匹配到对应的组件后，由 `router-view` 标签来决定组件显示的位置。

### 路由的跳转

通过改变路由，来加载不同的组件。

- 标签跳转：`router-link`

### 路由的传参

1. 传递参数：在路径后通过 `/` 添加参数。
   - 例：`/login/001`，001 即为参数。 
2. 配置参数的接收：在路由配置文件`router/index.js` 配置路由的 `path` 属性，添加一个变量名用来接收参数。
   - 例：`/login/:_id`，`_id` 即为接收参数的变量。
3. 组件内接收参数：在组件中通过  `this.$route.params` 接收参数。##

### 导航守卫

- 全局
- 单个路由
- 组件