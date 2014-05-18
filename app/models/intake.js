//intake.js

//
// Use required info in order to set foreign keys
//
var donor = require("./donor");
var volunteer = require("./volunteer");
var donationCenter = require("./donationCenter");
var centerMaterial = require("./centerMaterial");

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

    return Intake;
}