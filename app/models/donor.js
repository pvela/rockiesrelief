//donor.js

//var intake = require("./intake");
//var donationCenter = require("./donationCenter");

/*
    donorLastName: "May",
    donorFirstName: "Paul",
    donorAddress1 : "4520 Broadway Street",
    donorAddress2 : "",
    donorZipCode : "",
    donorState : "CO",
    donorCity : "Boulder"
    donorEmail : "paul@mayga.me"
    donorMobileNumber : "38346413234"
    */

module.exports = function(sequelize, DataTypes) {
    var Donor = sequelize.define('Donor', {
        donorName: DataTypes.STRING,
        donorAddress1: DataTypes.STRING,
        donorAddress2: DataTypes.STRING,
        donorZipCode: DataTypes.STRING,
        donorState: DataTypes.STRING,
        donorCity: DataTypes.STRING,
        donorEmail: DataTypes.STRING,
        donorMobileNumber: DataTypes.INTEGER

    }, {
        classMethods: {

        }
    })

    return Donor;
}