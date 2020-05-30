# Express

基于 Node.js 的一个服务端框架。

同类型的框架还有：Koa、Koa2

## 1. 安装 Express 应用生成器

执行以下命令在电脑全局安装 Express 应用生成器（只需要安装一次）

```bash
npm install express-generator -g
```

![image-20200508163328826](C:\Users\nocat\Desktop\md\assets\image-20200508163328826.png)

## 2. 通过生成器快速创建项目

执行以下命令创建项目（在想要创建项目的目录路径下执行该命令）：

```bash
express 项目名称
```

![image-20200508163634592](C:\Users\nocat\Desktop\md\assets\image-20200508163634592.png)

进入项目根目录：

```bash
cd 项目目录名称
```

下载项目所有的依赖包：

```bash
npm i 
```

`npm i`  下载的是 package.json 中所有的配置文件。

![image-20200508163734703](C:\Users\nocat\Desktop\md\assets\image-20200508163734703.png)

在项目根目录执行以下命令启动项目:

```bash
npm start
```

在浏览器中输入 localhost:3000 来访问项目。

**修改启动命令：**

在项目根目录的 app.js 文件中，将最后一行代码替换成以下代码：

```js
app.listen(3000, () => console.log('3000 端口启动成功'));
```

在后续的使用中，项目启动命令就更换为：

```bash
node app.js
```

关闭服务器的方法：ctrl + c

## 3. 项目目录说明

- public：用于存放静态资源（例如 HTML、CSS、JS、图片等）
- routes：用于设置后端路由（就是前端 ajax 的 url 所匹配的接口）
- app.js：项目入口文件（关于服务端的相关配置代码）

## 4. 服务端

### 获取前端发送的数据

- get：req.query
- post：req.body

![image-20200508180109933](C:\Users\nocat\Desktop\md\assets\image-20200508180109933.png)