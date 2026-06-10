const { createServer } = require('node:http');
const hostname = 'localhost';//local host 
const port = 3000; 
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n I am learning Node.js');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});