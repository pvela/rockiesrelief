var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    config = require('../../config/config'),
    sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db.options),
    db = {}

    /*fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })
*/

var donor = sequelize.import("./donor");
db[donor.name] = donor;

var donationCenter = sequelize.import("./donationCenter");
db[donationCenter.name] = donationCenter;

var centerMaterial = sequelize.import("./centerMaterial");
db[centerMaterial.name] = centerMaterial;

var material = sequelize.import("./material");
db[material.name] = material;

var intake = sequelize.import("./intake");
db[intake.name] = intake;

var volunteer = sequelize.import("./volunteer");
db[volunteer.name] = volunteer;

// donor FK

donor.hasMany(intake);
donor.hasMany(donationCenter);

// donation center FK Associations

donationCenter.hasMany(donor, {
    as: "donor"
});
donationCenter.hasMany(centerMaterial, {
    as: "centerMaterial"
});

centerMaterial.belongsTo(donationCenter);
donor.hasMany(donationCenter);

// centerMaterial FK Associations
centerMaterial.belongsTo(donationCenter, {
    as: 'donationCenter'
});
centerMaterial.belongsTo(material);

material.hasMany(centerMaterial);
donationCenter.hasMany(centerMaterial);


// material FK Associations
material.hasMany(centerMaterial);


// Intake FK Associations
donor.hasMany(intake);
centerMaterial.hasMany(intake);
volunteer.hasMany(intake);
donationCenter.hasMany(intake);

intake.belongsTo(donor);
intake.hasMany(centerMaterial);
intake.belongsTo(volunteer);
intake.belongsTo(donationCenter);


//    Volunteer.hasMany(delivery);
volunteer.belongsTo(donationCenter);


Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db)