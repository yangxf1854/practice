const http = require('http'); // 引入 required 模块
http.createServer(function(request, reponse) {
    // 发送HTTP请求
    // HTTP状态值200OK
    // 内容类型text/plain
    reponse.writeHead(200, {'Content-Type': 'text/plain'});
    reponse.end('Hello World\n');
}).listen(8888);
console.log('server is running at 8888 ');