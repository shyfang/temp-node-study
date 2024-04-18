const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('home page');
  } else if (req.url === '/about') {
    console.log("about page");
    
    res.end('about page');
  } else {
    res.end('404 Not Found');
  }
})

server.listen(5000, () => {
  console.log('Server is running on port 5000...');
})

