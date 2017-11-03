'use strict'

/**
 * Created by kylinhuang on 03/11/2017.
 */


var koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var app = koa();

app.keys = ['server']; // cookie session 加密key

app.use(logger());
app.use(session(app));
app.use(bodyParser());


app.use(function *(next){
    console.log(this.href);
    console.log(this.method);
    this.body = {
        success : true
    }
    yield next;
});



app.listen('1234');
console.log('http://localhost:1234/')



