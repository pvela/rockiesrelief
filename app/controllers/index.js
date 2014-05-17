// for index.js rendering
exports.index = function(req, res){
    console.log('rendering Index')
    res.sendfile('../views/home/index.html');
};
