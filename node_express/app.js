var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // http 리퀘스트에 대해 로깅하는 모듈

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // 이걸로 웹서버의 특징 기술함 

// 웹 서버의 특징을 기술
app.set('views', path.join(__dirname, 'views')); // 화면 출력을 담당하는 부분, views폴더로 지정
app.set('view engine', 'pug'); // 기본엔진 설정 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 디렉터리 구조를 url에 정적으로 반영

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러처리 함수
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
