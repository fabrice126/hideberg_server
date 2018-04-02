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

import expressGraphQL from 'express-graphql'
import router from './routes/router';
import api from './routes/api';
import _confDB from './config/_confDB';
import _confLogin from './config/_confLogin';
import configDB from './config/_confDB';
import models from './models';
import schema from './graphql/schema.graphql';
import mysql from 'mysql';
import csrf from 'csurf';
const db = mysql.createConnection({
  host: configDB.database.host,
  port: configDB.database.port,
  user: configDB.database.user,
  password: configDB.database.password,
  database: configDB.database.name,
});
console.log(configDB);
var app = express();
app.use(helmet());
app.use(compression());
app.use(cors('*'));


app.use(function (req, res, next) {
  req.models = models;
  var csrfProtection = csrf({ cookie: true })
  req.db = db;
  next();
});

// app.use(jwtExpress({ secret: _confLogin.secretKey }).unless({ path: ['/','/api/login', '/api/signup'] }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/', router);
app.use('/api', api);
app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
