var db = require('../models')

exports.index = function(req, res) {
    db.Donor.findAll({

    }).success(function(donors) {
        res.render('index', {
            title: 'Express',
            donors: donors
        })
    })
}