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
var cac = require("./test");

fs.readFile('./test_txt.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
});


// exports 객체를 활용하여 모듈을 만든 예제
//console.log(cac.div(3));


// 파일 입출력에 대한 방법
/*
fs.readFile(filename, [options], callback) 
: filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다. (비동기적) 

fs.readFileSync(filename, [options]) 
: filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다.(동기적)

fs.writeFile(filename, data, [options], callback) 
: filename의 파일에 [options]의 방식으로 data 내용을 쓴 후 callback 함수를 호출합니다.(비동기적) 

fs.writeFileSync(filename, data, [options]) 
: filename의 파일에 [options]의 방식으로 data 내용을 씁니다.(동기적)
*/


// 비동기에서 콜백함수를 적을 때 첫번 째 인자가 에러, 두번 째 인자를 String으로 받아옴
fs.readFile('test_txt.txt','utf8',function a(err,data) {
	console.log('비동기'+data);	
})

console.log (fs.readFileSync('test_txt.txt','utf8'));


// 예외처리를 하면서 파일을 읽는 방법
fs.readFile('test_txt.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});
