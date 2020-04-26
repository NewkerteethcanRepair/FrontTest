// 模拟数据库
const users = [
    { username: 'zhangsan', password: '123' },
    { username: 'lisi', password: '000' }
];

// 模拟服务端
// 登录
Mock.mock(/\/users\/login/, 'post', ({ body }) => {
    // 将 "username=zhangsan&password=123" 格式转换为 { username: 'zhangsan', password: '123' }
    const data = parse(body);
    return users.some(item => item.username == data.username && item.password == data.password);
})

// 注册
