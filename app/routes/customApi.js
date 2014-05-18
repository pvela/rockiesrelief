/*
donationCenter.findAll({
            include: [centerMaterial],
            having: ['SUM(?) >= ?', '`centerMaterial`.`itemQuantity`', 0]
*/
var Sequelize = require('sequelize');

module.exports = function(db, app) {
    app.get('/rest/categoryMap', function(req, res) {
        var category = db.Category;
        var donationCenter = db.DonationCenter;
        var centerMaterial = db.CenterMaterial;
        donationCenter.findAll({
            include: [centerMaterial],
            attributes: [
                [Sequelize.fn('SUM', Sequelize.col('CenterMaterials.itemQuantity')), 'total']
            ],
            group: ['CenterMaterials.MaterialId', 'CenterMaterials.DonationCenterId']
        }).success(function(result) {
            console.log(result.count);
            console.log(result.rows);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result.rows));
        });

    });
}