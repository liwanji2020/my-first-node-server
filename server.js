var http = require('http')
http.createServer(function (request, resopnse) {
    // 发送头部HTTP
    // HTTP 状态值:200 OK
    // 内容类型：/text/plain
    resopnse.writeHead(200, { 'Content-Type': 'text/plain' })

    //发送数据hello wordl
    resopnse.end('Hello World!')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')