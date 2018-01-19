import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import jwt from "jsonwebtoken";
import jwtExpress from 'express-jwt';


import router from './routes/router';
import api from './routes/api';
import mysql from 'mysql';
import _confDB from './config/_confDB';
import db from './models'

var app = express();
app.use(helmet());
app.use(compression());
app.use(cors('*'));

// const db = mysql.createConnection(_confDB);
// db.connect((err) => {
//   if (err) console.log(err);
//   else console.log('MySql connected');
// });

app.use(function (req, res, next) {
  req.db = db;
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', router);
app.use('/api', api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
