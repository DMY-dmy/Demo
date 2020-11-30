// http服务搭建，引入模块
const http = require ("http")

// 规则
const server = http.createServer((request,response)=>{
    // 设置cookie请求头
    response.setHeader('set-cookie','name=shang;max-age=60');
    // 设置响应体
    response.end('cookie')
});
// 监听端口
server.listen(8000)