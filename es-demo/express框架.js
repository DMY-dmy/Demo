
// node express.js 启动服务
// localhost：8000

// 引入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
// get请求，url为/（也可以为/admin等等），则运行下列代码
app.get('/',(request,response)=>{
    response.send('hello express')
});

// 监听端口启动服务
app.listen(8000,()=>{
    console.log('server start')
})