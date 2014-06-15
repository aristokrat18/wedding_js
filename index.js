var express = require("express");
var logfmt = require("logfmt");
var db = require('./models');

var app = express();


app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 5000);

db.sequelize.sync().complete(function(err) {
    if (err) {
        throw err[0];
    }
    else {
        app.listen(port, function() {
            console.log("Listening on " + port);
        });
    }
});

///////////// PAGES //////////////////

app.get('/', function(req, res) {
    res.sendfile(__dirname + "/index.html");
});

app.get('/accommodations', function(req, res) {
    res.sendfile(__dirname + "/accommodations.html");
});

app.get('/faq', function(req, res) {
    res.sendfile(__dirname + "/faq.html");
});

app.get('/registry', function(req, res) {
    res.sendfile(__dirname + "/registry.html");
});

app.get('/rsvp', function(req, res) {
    res.sendfile(__dirname + "/rsvp.html");
});


/////////////// CSS /////////////////////

app.get('/static/css/accommodations.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/accommodations.css");
});

app.get('/static/css/base.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/base.css");
});

app.get('/static/css/faq.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/faq.css");
});

app.get('/static/css/index.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/index.css");
});

app.get('/static/css/registry.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/registry.css");
});

app.get('/static/css/rsvp.css', function(req, res) {
    res.sendfile(__dirname + "/static/css/rsvp.css");
});


/////////////// PNGs ///////////////////////

app.get('/static/img/accommodations_header.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/accommodations_header.png");
});

app.get('/static/img/accommodations_main.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/accommodations_main.png");
});

app.get('/static/img/copley.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/copley.png");
});

app.get('/static/img/faq_main.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/faq_main.png");
});

app.get('/static/img/favicon.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/favicon.png");
});

app.get('/static/img/index_header.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/index_header.png");
});

app.get('/static/img/index_main.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/index_main.png");
});

app.get('/static/img/lenox.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/lenox.png");
});

app.get('/static/img/registry_main.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/registry_main.png");
});

app.get('/static/img/rsvp_main.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/rsvp_main.png");
});

app.get('/static/img/westin.png', function(req, res) {
    res.sendfile(__dirname + "/static/img/westin.png");
});