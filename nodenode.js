/*
var server = require('http');

server.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end("Hello Jun_node! \n");
}).listen(3000, 'localhost');

console.log('Server is running at http://localhost:3000/');
*/

// 파일 읽는법!!
var fs = require("fs"); 

fs.readFile('./test_txt.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
});
