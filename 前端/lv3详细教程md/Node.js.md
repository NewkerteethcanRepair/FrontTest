# Node.js

诞生于 09 年。

## 简介

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

-  Chrome V8 引擎：
- 运行时：代码运行环境。

### 引擎

浏览器内核：

- JS 引擎：负责解析运行 JavaScript 代码；
- 渲染引擎：负责HTML、CSS代码的解析渲染；

### npm

包管理工具（器）

#### 项目初始化

先进入项目根目录，然后执行以下代码完成项目的初始化：

```bash
npm init
```

项目初始化完成后，会在项目根目录生成一个 package.json 文件，该文件是项目的描述（说明）文件，该文件不需要我们手动去修改。

#### 下载包

在项目根目录执行下载命令：

```bash
npm install 包名称
# 简写
npm i 包名称
```

由于直接通过 npm 下载，是从外网进行下载，所以很多时候下载会很慢，所以建议大家设置淘宝镜像。

```bash
npm config set registry https://registry.npm.taobao.org
```

#### 卸载包

```bash
npm uninstall 包名称
```

### 命令行工具常用命令

进入文件夹

```bash
cd 路径
```

返回上一级目录

```bash
cd..
```

切换盘

```bash
D:
```

在命令行中要输入某一个目录的名称，不用全部输完，只需要输入一两个字母，然后按 Tab 键，命令行中会自动补全。

## 模块化

Node.js 遵循 commonJS 规范。（JavaScript 遵循 ECMAScript 规范）

commonJS 规范中模块化的特点：

1. 每一个js文件都是一个独立的模块，js 和 js 之前互相不影响。
2. 模块可以多次加载，但只在第一次加载时运行，然后运行结果就被缓存下来了。以后再加载，就是读取的缓存。
3. 模块的加载顺序，按照它们在代码中出现的先后顺序。

### 引入

在一个模块中引入另一个模块。

```bash
require('路径');
const 变量名 = require('路径');
```

注意：

1. 同级路径，必须加 `./`
2. `.js` 可以省略
3. 如果路径中只有一个包名称，则默认该文件是 node_modules 中下载的包文件，或者是 Node.js 提供的原生包文件。

### 暴露

当前模块中，只有暴露出去的数据，其他模块才能访问。

```js
let b = 2;
// 将变量b赋值给module.exports对象的b属性，将其暴露出去。
module.exports.b = b;
module.exports.foo = foo;
// 或者
module.exports = {
    b, foo
};
```



