//survivor.js

var delivery = require("./delivery");
var donationCenter = require("./donationCenter");

/*
    survivorLastName: "May",
    survivorFirstName: "Paul",
    survivorAddress1 : "4520 Broadway Street",
    survivorAddress2 : "",
    survivorZipCode : "",
    survivorState : "CO",
    survivorCity : "Boulder"
    survivorEmail : "paul@mayga.me"
    survivorMobileNumber : "38346413234"
    */

module.exports = function(sequelize, DataTypes) {
    var Survivor = sequelize.define('Survivor', {
        survivorLastName:     DataTypes.STRING,
        survivorFirstName:    DataTypes.STRING,
        survivorAddress1:     DataTypes.STRING,
        survivorAddress2:     DataTypes.STRING,
        survivorZipCode:      DataTypes.STRING,
        survivorState:        DataTypes.STRING,
        survivorCity:         DataTypes.STRING,
        survivorEmail:        DataTypes.STRING,
        survivorMobileNumber: DataTypes.INTEGER

    }, {
        classMethods: {

        }
    })

   
    Survivor.hasMany(delivery);
    Survivor.hasMany(donationCenter);

    delivery.belongsTo(Survivor);

    return Survivor;
}
