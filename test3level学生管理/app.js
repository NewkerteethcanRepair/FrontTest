var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./dao/mysqlconfig")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sRouter = require('./routes/sd');
var sClass = require('./routes/studentClass');
var filesRouter=require("./routes/files")
var app = express();

// CORS：设置允许跨域中间件



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sd', sRouter);
app.use('/studentClass', sClass);
app.use('/files', filesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

app.listen(8000,()=> console.log("8000端口 成功"));