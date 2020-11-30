// express框架内使用cookie
// 一个包npm i cookie-parser --save,借助官方文档来使用，引入


// 引入模块
const express = require('express')
// 引入模块
const cookieParser = require('cookie-Parser')


// 创建应用对象
const app = express()
// 使用对象
app.use(cookieParser())

// 设置
app.get('/set-cookie',(request,response)=>{
    // 方法传参
    response.cookie('cn','dfsf',{maxAge:3000})
    // 响应提
    response.send('setting cookie')

})
// 获取
app.get('/get-cookie',(request,response)=>{
    console.log(response.cookie)

    response.send('good good')
})
// 删除
app.get('/delete-cookie',(request,response)=>{
    esponse.clearcookie('cn')
    // response.cookie('cn','dfsf',{maxAge:0})
    response.send('clear cookie')
})

app.listen(8000,()=>{
    console.log('start')
})