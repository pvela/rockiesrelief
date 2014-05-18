/*
donationCenter.findAll({
            include: [centerMaterial],
            having: ['SUM(?) >= ?', '`centerMaterial`.`itemQuantity`', 0]
*/
var Sequelize = require('sequelize');
var config = require('../../config/config');

module.exports = function(db, app) {
    app.get('/rest/categoryMap', function(req, res) {
        /*var category = db.Category;
        var donationCenter = db.DonationCenter;
        var centerMaterial = db.CenterMaterial;
        donationCenter.findAll({
            include: [centerMaterial, centerMaterial.material],
            attributes: [
                [Sequelize.fn('SUM', Sequelize.col('CenterMaterials.itemQuantity')), 'total']
            ],
            group: ['CenterMaterials.MaterialId', 'CenterMaterials.DonationCenterId']
        }).success(function(result) {
            console.dir(result[0].centerMaterials);
            //console.log(result.rows);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result[0].centerMaterials));
        });*/

        //var sql = "select sum(cm.itemQuantity) count,dc.donationCenterCity address, dc.donationCenterAffiliate title, c.categoryName category, dc.donationCenterGeoLat lat, dc.donationCenterGeoLat lng from DonationCenters dc, CenterMaterials cm, Materials m, Categories c where dc.id = cm.DonationCenterId and  cm.MaterialId = m.id and c.id = m.CategoryId group by dc.donationCenterCity, dc.donationCenterAffiliate , dc.donationCenterGeoLat, dc.donationCenterGeoLat, c.categoryName";
        var sql = "select sum(cm.itemQuantity) count,dc.* from DonationCenters dc, CenterMaterials cm where dc.id = cm.DonationCenterId  group by dc.donationCenterCity, dc.donationCenterAffiliate , dc.donationCenterGeoLat, dc.donationCenterGeoLat";

        getSQL(sql, function(err, results) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(results);
        })

    });

    app.get('/rest/inventory', function(req, res) {
        var sql = "select cm.*,m.itemName from Materials m, CenterMaterials cm where m.id = cm.MaterialId";

        getSQL(sql, function(err, results) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(results);
        })

    });

    app.get('/rest/totalIntakes', function(req, res) {
        var sql = "select count(id) totalIntakes from Intakes";

        getSQL(sql, function(err, results) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.send(results);
        })

    });

    /*
intakeId : null,
    donationCenterLocationId : "",
    acceptedByVolunteerId : "",
    donorName: "Paul",
    donorAddress1 : "4520 Broadway Street",
    donorAddress2 : "",
    donorZipCode : "",
    donorState : "CO",
    donorCity : "Boulder"
    donorEmail : "paul@mayga.me"
    donorMobileNumber : "38346413234"

	donationCenter :
		donationCenterLocation:
        donationCenterAffiliate: 
        donationCenterHours: 
        donationCenterAddress1: 
        donationCenterAddress2: 
        donationCenterZipCode: 
        donationCenterState: 
        donationCenterCity: 
        donationCenterGeoLat: 
        donationCenterGeoLong: 
        donationCenterContactName:
        donationCenterContactEmail: 
        donationCenterContactNumber:

    intake :
    	intakeNotes
	centermaterialintake :
		intakeQuantity,
        intake_id,
        material_id
	centerMaterials :
		itemQuantity
        itemShelf
*/
    app.post('/rest/intake', function(req, res) {
        var intake = db.Intake;
        var centerMaterials = db.CenterMaterial;
        var centerMaterialIntakes = db.CenterMaterialIntake;
        console.dir(req.body)
        var data = req.body;
        var materials = [];
        try {
            intake.create({
                "intakeNotes": data.intakeNotes || data.intakeNotes != null || data.intakeNotes.trim() != "" ? data.intakeNotes : ""
            }).success(function(intake, created) {
                    //create centerMaterialsIntake
                    // update qty in centerMaterials
                    if (data.donatedItems && data.donatedItems.length > 0) {
                        for (var i = 0; i < data.donatedItems.length; i++) {
                            var item = data.donatedItems[i];
                            centerMaterialIntakes.create({
                                intakeId: intake.id,
                                intakeQuantity: item.intakeQuantity,
                                material_id: item.materialId
                            });
                            centerMaterials.findAll();
                            materials.push(centerMaterials)
                        }
                    }
                    centerMaterials.findAll({
                        where: ""
                    })
                })
        } catch (e) {
            console.dir(e)
        }

    })
}

var mysql = require('mysql');
//config.db.database, config.db.username, config.db.password, config.db.options
var connection = mysql.createConnection({
    host: config.db.options.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database
});
connection.connect();

function getSQL(query, callback) {

    var json = '';
    connection.query(query, function(err, results, fields) {
        if (err)
            return callback(err, null);

        console.log('The query-result is: ', results[0]);

        // wrap result-set as json
        json = JSON.stringify(results);

        /***************
         * Correction 2: Nest the callback correctly!
         ***************/
        //connection.end();
        console.log('JSON-result:', json);
        callback(null, json);
    });
};
