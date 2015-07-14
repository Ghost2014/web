/**
 * Created by Ghost2015 on 2015/7/13.
 * 创建一个nodejs服务器
 */

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<P>hello nodejs Tony Stark</P>');
}).listen(3000);

console.log("HTTP server is listening at port 3000.");
