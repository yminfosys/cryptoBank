var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var adminsRouter = require('./routes/admins');
var accountantRouter = require('./routes/accountant');
var apiRouter = require('./routes/api');

var app = express();


var server = require('http').Server(app);
var io = require('socket.io')(server);

// view engine setup
app.set('views', [path.join(__dirname, 'views'),path.join(__dirname, 'views/admin'),path.join(__dirname, 'views/driver'),path.join(__dirname, 'views/user')]);
app.set('view engine', 'ejs');


app.use(function(req, res, next){
  res.io = io;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/driver', accountantRouter);
app.use('/admin', adminsRouter);
app.use('/api', apiRouter);




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



module.exports = {app: app, server: server};
