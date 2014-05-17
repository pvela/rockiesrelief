var db = require('../models')

exports.create = function(req, res) {
    db.Material.create({
        id: req.param('id')
    }).success(function() {
        res.redirect('/')
    })
}