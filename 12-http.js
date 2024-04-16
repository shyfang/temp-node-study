const http = require('http');

const server = http.createServer((req, res) => {
 if(req.url === '/') {
    

  }
  
  // res.write('Welcom to Node.js!')
  // res.end()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
})

server.listen(5000) 

