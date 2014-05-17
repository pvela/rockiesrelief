module.exports = function(app){

	//home route
	var index = require('../app/controllers/index');
	app.get('/', index.index);

};
