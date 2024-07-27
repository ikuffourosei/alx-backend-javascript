const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('Hello Holberton School!');
});

server.listen(1245);

module.exports = server;
