var express = require('express'),
  orm = require('orm'),
  fs = require('fs'),
  config = require('./config/config');

orm.db = orm.connect(config.db, function(err, db){
  if(err){
    console.log("Something is wrong with the connection", err);
    return ;
  }
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});
*/

var app = express();

require('./config/express')(app, config);
//require('./config/routes')(app);

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/', routes.index)
app.post('/materials/create', material.create)
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
        }
    })app.get('/', function(req,res) {
    res.sendfile('./app/views/index.html');
});

app.listen(config.port);
