# bcryptjs 加密

## 1. 下载

```bash
npm i bcryptjs
```

## 2. 引入

```js
const bcryptjs = require('bcryptjs');
```

## 3. 使用

###  数据加密

```js
const password = "123";
const newPassword = bcryptjs.hashSync(password, 10);
```

### 验证加密数据

1. 获取到之前加密过的数据（例如：从数据库中获取）

2. 调用 bcryptjs 插件提供的比较方法：`compareSync()` 来进行数据的比较

   ```js
   // password 表示未加密的数据
   // data.password 表示加密后的数据
   const isValid = bcryptjs.compareSync(password, data.password);
   console.log(isValid);
   ```

## 4. 常用案例





