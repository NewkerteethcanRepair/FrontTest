// 引入 fs 模块
const fs = require('fs');

// 1. 读取文件内容
// fs.readFile('../data/msg.txt', 'utf-8', function(err, data) {
//     console.log(1, data);
// });
// // 同步读取文件内容
// const data = fs.readFileSync('../data/msg.txt', 'utf-8');
// console.log(2, data);

// // 2. 写入文件内容(覆盖原内容)
// fs.writeFile('../data/msg.txt', '这是我新写入的内容', function(err) {});

// 3. 追加内容（保留原内容）
// fs.appendFile('../data/msg.txt', '这是我要追加的新内容', function(err) {});

// 4. 复制文件
// fs.copyFile('../data/msg.txt', '../data/newmsg.txt', function(err){});

// 5. 删除文件
// fs.unlink('../data/newmsg.txt', err => { });

// 6. 创建文件夹
// fs.mkdir('../public', err => {});

// 7. 删除文件夹
// fs.rmdir('../public', err => {});

// 作业：创建两个非空文件 a.txt 和 b.txt，将 a.txt 的内容拷贝到 b.txt 中，同时保留 b.txt 的原内容。

// 读取文件内容
// fs.writeFile("")
// 异步
// fs.readFile("./a.txt","utf-8",(err,data)=>{
//     console.log(data);
//     fs.appendFile("./b.txt",data,(err)=>{

//     })
// })

// 追加内容（保留原内容）

// 判断文件是否存在
// fs.access("./b.txt",(err)=>{
    
// })
console.log("sad");

// 10 判断是文件还是文件夹
// fs.stat("../fs", (err,stats)=>{
//     console.log(stats);
//     console.log(err);
   
    
// })
// 11重名
// fs.rename("../a.txt","./aa.txt",(err)=>{
//     console.log(err);
    
// })


// fs.readFile('../fs/a.txt', 'utf-8', function(err, data) {
//     console.log(1, data);
//     if(data.length>0){
//         fs.unlink('../fs/a.txt', (err,data) => {
//             fs.rmdir('../fs', err => {})
//          });
    
//     }
//     else{
//         fs.rmdir('../fs', err => {})
//     }
// });

// 读取当前文件夹是否为空
fs.readdir("../fs",(err,data)=>{
    console.log(data);
    // if(data.length>0){
        // foreach可以省略掉if 英文不是foreach就不会报错
        data.forEach((item)=>{
            // 同步 unlinkSync
            fs.unlink("../fs"+item,(err)=>{
    
            })
        })
        fs.rmdir('../fs', err => {})
    // }
    // else{
        fs.rmdir('../fs', err => {})
    // }
    
})


