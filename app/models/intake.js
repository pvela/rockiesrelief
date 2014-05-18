//intake.js

//
// Use required info in order to set foreign keys
//
var donor = require("donor");
var volunteer = require("volunteer");
var donationCenter = require("donationCenter");
var centerMaterial = require("centerMaterial");

/* 
  intakeQuantity : ""
*/
module.exports = function(sequelize, DataTypes) {
    var Intake = sequelize.define('Intake', {
        intakeQuantity: DataTypes.INTEGER
    }, {
        classMethods: {

        }
    })

    // FK Associations
    donor.hasMany(Intake);
    centerMaterial.belongsTo(Intake);
    volunteer.hasMany(Intake);
    donationCenter.hasMany(Intake);

    Intake.belongsTo(donor);
    Intake.hasMany(centerMaterial);
    Intake.belongsTo(volunteer);
    Intake.belongsTo(donationCenter);

    return Intake;
}
