//delivery.js

//
// Use required info in order to set foreign keys
//
var survivor = require("./survivor");
var volunteer = require("./volunteer");
var donationCenter = require("./donationCenter");
var centerMaterial = require("./centerMaterial");

/* 
  deliveryQuantity : ""
*/
module.exports = function(sequelize, DataTypes) {
    var Delivery = sequelize.define('Delivery', {
        deliveryQuantity: DataTypes.INTEGER
    }, {
        classMethods: {

        }
    })

    // FK Associations
    survivor.hasMany(Delivery);
    centerMaterial.belongsTo(Delivery);
    volunteer.hasMany(Delivery);
    donationCenter.hasMany(Delivery);

    Delivery.belongsTo(survivor);
    Delivery.hasMany(centerMaterial);
    Delivery.belongsTo(volunteer);
    Delivery.belongsTo(donationCenter);

    return Delivery;
}
