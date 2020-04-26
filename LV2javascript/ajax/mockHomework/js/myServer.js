const users = [
    { username: 'dx', password: '123' },
    { username: 'xd', password: '321' }
];


var res = sessionStorage.getItem("dd");
console.info(res);
if(res){
    
    users.push(JSON.parse(res))
}


// console.info(sessionStorage.key(0))




// 模拟服务端
// 登录
Mock.mock(/\/users\/login/, 'post', ({ body }) => {
    // 将 "username=zhangsan&password=123" 格式转换为 { username: 'zhangsan', password: '123' }
    const data = parse(body);
    return users.some(item => item.username == data.username && item.password == data.password);
})
Mock.mock(/\/users\/register/, 'post', ({ body }) => {
    // 将 "username=zhangsan&password=123" 格式转换为 { username: 'zhangsan', password: '123' }
    const data = parse(body);
    console.log(data);
    
    // console.log(users.some(item => item.username != data.username ))
    
    return (users.every((item)=> {
        if(item.username != data.username){
            
            
            // users.push({
            //     username:data.username,
            //     password: data.password

            // })
            ;
            var d= {
                username:data.username,
                password: data.password
            
            }
            var h=JSON.stringify(d)
            sessionStorage.setItem("dd",h
            );
            
            return true
        }
        else{
            return false
        }
    })
    
    
    );

});


// 注册