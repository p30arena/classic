#!/bin/env node
var express = require('express'),
    bodyParser = require('body-parser'),
    Router = require('app/handlers/router'),
    app = express(),
    server = require('http').Server(app);


var app_port = 80;
var app_addr = '127.0.0.1';
server.listen(app_port, app_addr);

app.use(bodyParser.json());
app.use (function (error, req, res, next){
    //Catch json error
    res.status(400).send('DAFUQ');
});
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/'));
app.enable('trust proxy'); //HAProxy (reverse proxy)

//add promises to event emitter
//quota vulnerability : memory over flow...
//quota limits are not good, for e.g. use dev_id for register

app.route(Router.api_string).post(Router.api_post_handler);