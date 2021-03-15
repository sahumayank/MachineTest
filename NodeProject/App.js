var express = require('express');
var session = require("express-session")
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
app.use(session({
    secret: 'test',
    saveUninitialized: false,
    resave: true,
    cookie: {
        maxAge: 10000000,
        secure: false,
        httpOnly: false
    }
}));

app.use('/', require('./appRouter'))
//Start server at 8080 port
var listener = app.listen(8080, "localhost", function () {
    var host = listener.address().address
    var port = listener.address().port
    console.log('listening to http://' + host + ':' + port);
});