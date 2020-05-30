# Mongodb



一个mongodb服务器中，可以有多个**数据库**，例如：电影项目的数据库、教务管理项目的数据库、电商项目的数据库。

在每一个数据库中，又有多个数据**集合**，例如：教务管理系统中有学生的数据集合、教师的数据集合、班级的数据集合...

## 常用命令

- 查看当前服务器中的所有数据库

```bash
show dbs
```

- 选择要操作的数据库

```bash
use 数据库名称
```

注：如果数据库名称不存在的话，use 则会自动创建该数据库。

- 查看当前操作数据库

```bash
db
```

- 查看当前数据库中的所有集合

```bash
show collections
```

- 添加集合和数据

```bash
db.users.insert({username: 'lisi', password: '000'})
```

- 查看某个集合中的所有数据

```bash
db.users.find().pretty()
```

## mongoose

mongoose 是 node.js 提供的一个便捷操作 mongodb 的库（工具）。

### 1. 下载

在项目根目录执行以下命令：

```bash
npm i mongoose
```

### 2. 连接项目与 mongodb

通过以下代码，将当前项目与mongodb数据库关联起来：

```js
// 连接数据库
const mongoose = require('mongoose');
// 设置目标数据库的地址(web02是要连接的数据库名称)
const dbURI = 'mongodb://localhost/web02';
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 数据库连接成功后触发的方法
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功：' + dbURI);
});
```

### 3. 数据集合相关配置

1. 定义数据集合的结构

```js
const usersSchema = new mongoose.Schema({
  username: String,
  password: String
});
```

mongoose 中数据的类型有以下几种：

- String
- Number
- Boolean
- Array
- Date
- ObjectId

2. 定义数据模型（后续都是通过数据模型去操作数据库）

```js
// 参数一：当前数据模型的名称
// 参数二：对应的数据结构的名称
// 参数三：数据库中所对应的数据集合的名称
mongoose.model('usersModel', usersSchema, 'users');
```

3. 操作数据集合

   - 新增

     ```js
     mongoose.model('usersModel').create(user, function (err, data) {});
     ```

   - 查询

     - 查询所有

     ```js
     mongoose.model('usersModel').find(function (err, data) {});
     ```

     - 条件查询

     ```js
     mongoose.model('usersModel').find({username: 'zhangsan'},function (err, data) {});
     ```

   - 修改

     ```js
     await mongoose.model('usersModel').updateOne({_id: 1}, {name: 'lisi'})
     ```

   - 删除

     ```js
     await mongoose.model('usersModel').deleteOne({_id: 1});
     ```

### 4. 多表关联

集合与集合之间，通过 _id 进行关联。

数据结构设置代码如下：

```js
const studentsSchema = new mongoose.Schema({
    name: String,
   	// classesId 用于对外关联
    classesId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref 用于设置关联集合的模型名称
        ref: 'classesModel'
    }
}, { versionKey: false });
```

多表关联查询代码如下：

```js
await studentsModel.find().populate('classesId');
```

`populate()` 方法用于关联查询，该方法的参数为：对外做关联的属性名。

关联查询回来的数据中，原本的 classesId 的值，从 ObjectId 变为对象。

## 三层架构

- 第一层：表现层：负责和前端交互（ajax所对应的接口）---> 对应项目中的 routes 文件
- 第二层：服务层：负责逻辑和业务处理 ---> 对应项目中的 service 文件
- 第三层：持久层：负责和数据库交互 ---> 对应项目中的 dao 文件

