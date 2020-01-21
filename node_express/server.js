
var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(3000);

function handler (req, res) {
	fs.readFile('index.html', function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}

//connection은 웹사이트를 열면 자동으로 발생하는 socket.io의 기본 이벤트
io.on('connection', function (socket) {  // index.html을 불러오고 에러처리함
	socket.emit('news', { serverData : "서버 작동" }); //socket.emit은 socket을 통해 상대편으로 전달하고, io.emit을 이용하면 서버가 현재 접속해있는 모든 클라이언트에게 이벤트를 전달
	
	socket.on('client login', function (data) {  // 콘솔창에 전달받은 data 출력
		console.log(data);
	});
		
	socket.on('disconnect', function(){  // 접속이 끊어지면 자동 발생하는 이벤트인데 외우기!!!
		console.log('접속이 종료되었습니다.');
	});

});