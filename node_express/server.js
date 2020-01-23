// 채팅프로그램

var express = require('express');
var app = express();
var http = require('http').Server(app); 
var io = require('socket.io')(http);    
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {  
  res.render('chat');  // /로 접속시 chat을 randering 함
});

var count=1; //
io.on('connection', function(socket){ // 채팅방 입장시 이름을 출력
  	console.log('user connected: ', socket.id);  // socket.id는 자동으로 생성되는 랜덤문자열임.(닉네임과 다름)
  	var name = "익명" + count++; // 익명1로 넣고 2로 바꿈
	socket.name = name;  // 익명1을 저장
	  io.to(socket.id).emit('create name', name); // 서버가 해당 socket id에만 이벤트를 전달
	  // 채팅방에 접속한 유저들마다 닉네임이 다른데, 모두 바뀌지 않고 각 유저들에게만 닉네임이 보여지기 위해 io.to(socket.id).emit을 이용해서 create name 이라는 이벤트를 발생
	
	io.emit('new_connect', name);

	socket.on('disconnect', function(){ // 접속이 끊어졌을 때 아래를 출력
	  console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	io.emit('new_connect', socket.name);
	});
	
	socket.on('send message', function(name, text){ //msg를 보냈을 때
		var msg = name + ' : ' + text;  // 닉네임과 msg를 합쳐서 저장
		if(name != socket.name)
		{
			io.emit('change name', socket.name)
		}    // 닉네임을 바꿧을 때
		socket.name=name;
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
