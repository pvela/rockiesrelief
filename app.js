var express = require('express'),
    config = require('./config/config');
fs = require('fs'),
http = require('http'),
path = require('path'),
config = require('./config/config'),
restful = require('sequelize-restful'),
db = require('./app/models');

var app = express();
app.use(restful(db.sequelize, {
    endpoint: '/api',
    logLevel: 'debug'
}));
require("./app/routes/customApi")(db, app);
require('./config/express')(app, config);
//require('./config/routes')(app);
// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'html');
// make a custom html template
app.engine('html', function(str, options) {
    return function(locals) {
        return str;
    };
});
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/', function(req, res) {
    res.sendfile('./app/views/index.html');
});

// config route
var config = require('./app/routes/config');
app.get('/config', config.create);

app.get('/', function(req, res) {
    res.sendfile('./app/views/index.html');
});

var user = require('./app/routes/user');
app.get('/user', user.validate);


db
    .sequelize
    .sync({
        force: true
    })
    .complete(function(err) {
        if (err) {
            throw err[0]
        } else {
            http.createServer(app).listen(app.get('port'), function() {
                console.log('Express server listening on port ' + app.get('port'))
            })
            //require("./testdata/all")(db);
        }
    });