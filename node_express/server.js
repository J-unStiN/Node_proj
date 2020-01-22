// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app); 
var io = require('socket.io')(http);    
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {  
  res.render('chat');
});

var count=1;
io.on('connection', function(socket){ 
  	console.log('user connected: ', socket.id);  
  	var name = "익명" + count++;                 
	socket.name = name;
  	io.to(socket.id).emit('create name', name);   
	
	socket.on('disconnect', function(){ 
	  console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	});

	socket.on('send message', function(name, text){ 
		var msg = name + ' : ' + text;
		socket.name = name;
    	console.log(msg);
    	io.emit('receive message', msg);
	});
	
});

http.listen(3000, function(){ 
	console.log('server on..');
});

//connection은 웹사이트를 열면 자동으로 발생하는 socket.io의 기본 이벤트
// index.html을 불러오고 에러처리함
//socket.emit은 socket을 통해 상대편으로 전달하고, io.emit을 이용하면 서버가 현재 접속해있는 모든 클라이언트에게 이벤트를 전달
// 콘솔창에 전달받은 data 출력
// 접속이 끊어지면 자동 발생하는 이벤트인데 외우기!!!
