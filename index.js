var express = require("express");
var logfmt = require("logfmt");
var db = require('./models');
var bodyParser = require('body-parser');

var app = express();


app.use(logfmt.requestLogger());
app.use(bodyParser.urlencoded());

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

app.get('/', function(req, res) { res.sendfile(__dirname + "/index.html"); });
app.get('/accommodations', function(req, res) { res.sendfile(__dirname + "/accommodations.html"); });
app.get('/faq', function(req, res) { res.sendfile(__dirname + "/faq.html"); });
app.get('/registry', function(req, res) { res.sendfile(__dirname + "/registry.html"); });
app.get('/rsvp', function(req, res) { res.sendfile(__dirname + "/rsvp.html"); });
app.get('/rsvp_error', function(req, res) { res.sendfile(__dirname + "/rsvp_fail.html"); });
app.get('/thanks', function(req, res) { res.sendfile(__dirname + "/thanks.html"); });

app.post('/rsvp', function(req, res) {
    if (req.body.accept) {
        db.Accept.create({
            name: req.body.name,
            guest: req.body.guest,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            food: req.body.food,
            other: req.body.other
        }).success( function() {
            res.redirect('/thanks');
        }).error( function(error) {
            res.redirect('/rsvp_error');
        });
    }
    else if (req.body.decline) {
        db.Decline.create({
            name: req.body.name,
            other: req.body.other
        }).success( function() {
            res.redirect('/thanks');
        }).error( function(error) {
            res.redirect('/rsvp_error');
        });
    }
    else {
        res.redirect('/rsvp_error');
    }
    
});

/////////////// STATIC ///////////////
app.get('/static/css/:file', function(req, res) {
    res.sendfile(__dirname + "/static/css/" + req.params.file);
});
app.get('/static/img/:file', function(req, res) {
    res.sendfile(__dirname + "/static/img/" + req.params.file);
});

///////// CATCH-ALL REDIRECT //////////
app.get('*', function(req, res) {
    res.redirect('/');
});