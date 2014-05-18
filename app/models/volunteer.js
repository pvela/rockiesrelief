//volunteer.js
var donationCenter = requires("donationCenter");

/*
    volunteerLastName: "Paul",
    volunteerFirstName: "May",
    volunteerAddress1 : "4520 Broadway Street",
    volunteerAddress2 : "",
    volunteerZipCode : "",
    volunteerState : "CO",
    volunteerCity : "Boulder"
    volunteerEmail : "paul@mayga.me"
    volunteerMobileNumber : "38346413234"
*/

module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define('Volunteer', {
        volunteerName:     DataTypes.STRING,
        volunteerAddress1: DataTypes.STRING,
        volunteerAddress2: DataTypes.STRING,
        volunteerZipCode: DataTypes.STRING,
        volunteerState: DataTypes.STRING,
        volunteerCity: DataTypes.STRING,
        volunteerEmail: DataTypes.STRING,
        volunteerMobileNumber: DataTypes.INTEGER

    }, {
        classMethods: {

        }
    })

//    Volunteer.hasMany(delivery);
    Volunteer.belongsTo(donationCenter);

    return Volunteer;
}
