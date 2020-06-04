const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World My pm2 test');
}).listen(9999, () => {
  console.log('node服务已开启：9999')
})