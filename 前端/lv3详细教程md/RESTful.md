# RESTful

REST，表现层状态转换。它是一个规范或原则，它规定了我们前后端的接口要按照怎样的规则去定义。

- url 路径中只有名词，把动词换到了 type 中去

## 请求类型

CRUD：create read update delete

- GET：获取资源；
- POST：新增资源；
- PUT：修改资源；
- DELETE：删除资源；

```js
$.ajax({
    url: '/students',
    type: 'DELETE'
})

$.ajax({
    url: '/students/001',
    type: 'GET'
})
```

