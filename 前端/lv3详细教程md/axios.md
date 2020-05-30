# axios

## 安装下载

```bash
npm i axios
```

## 项目中引入

```js
import axios from 'axios';
```

## 使用

```js
axios
    .get('/users/login', { params: { username: 'zhangsan' } })
    .then(({data}) => { })
```

```js
axios
    .post('/users/login', { username: 'zhangsan' })
    .then(({data}) => { })
```

```js
axios
    .put('/users/login', { username: 'zhangsan' })
    .then(({data}) => { })
```

```js
axios
    .delete('/users/login', { data: { username: 'zhangsan' } })
    .then(({data}) => { })
```

