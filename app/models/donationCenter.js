//donationCenter.js
//
// Use required info in order to set foreign keys
//

/*donationCenter : null,
    donationCenterLocation : "Boulder Disaster Facility 1",
    donationCenterAffiliate : "FEMA",
    donationCenterHours : "FEMA",
    donationCenterAddress1 : "4520 Broadway Street",
    donationCenterAddress2 : "",
    donationCenterZipCode : "",
    donationCenterState : "CO",
    donationCenterCity : "Boulder"
    donorGeoLat : "51.50335",
    donorGeoLong : "-0.227721",
    donationCenterContactName : "Paul May",
    donationCenterContactEmail : "paul@mayga.me".
    donationCenterContactNumber : "38346413234"
    */

module.exports = function(sequelize, DataTypes) {
    var DonationCenter = sequelize.define('DonationCenter', {
        donationCenterLocation: DataTypes.STRING,
        donationCenterAffiliate: DataTypes.STRING,
        donationCenterHours: DataTypes.STRING,
        donationCenterAddress1: DataTypes.STRING,
        donationCenterAddress2: DataTypes.STRING,
        donationCenterZipCode: DataTypes.STRING,
        donationCenterState: DataTypes.STRING,
        donationCenterCity: DataTypes.STRING,
        donationCenterGeoLat: DataTypes.FLOAT(10, 6),
        donationCenterGeoLong: DataTypes.FLOAT(10, 6),
        donationCenterContactName: DataTypes.STRING,
        donationCenterContactEmail: DataTypes.STRING,
        donationCenterContactNumber: DataTypes.INTEGER

    }, {
        classMethods: {

        }
    })



    return DonationCenter;
}