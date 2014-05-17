var db = require('../models')

exports.create = function(req, res) {
    db.Donor.create({
        id: req.param('id')
    }).success(function() {
        res.redirect('/')
    })
}