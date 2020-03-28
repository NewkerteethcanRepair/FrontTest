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


// app.js
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
  name: 'currentUser',
  secret: 'secret',
  store: new FileStore(),
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 10 // 2分钟
  }
}));



var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCrossDomain); // 使用该中间件

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

app.listen(3001,()=> console.log("3001端口 成功"));