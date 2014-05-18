//test data
var db = require('../app/models');

var donorData = [{
    donorLastName: "May",
    donorFirstName: "Paul",
    donorAddress1: "4520 Broadway Street",
    donorAddress2: "",
    donorZipCode: "80201",
    donorState: "CO",
    donorCity: "Boulder",
    donorEmail: "paultr@gmail.com",
    donorMobileNumber: "38346413234"
}];
var deliveryData = [];
var donationCenterData = [];
var centerMaterialData = [];
var centerMaterialIntakeData = [];
var intakeData = [];
var materialData = [];
var survivorData = [];
var voluteerData = [];

db
    .sequelize
    .sync({
        force: true
    })
    .complete(function(err) {
        if (err) {
            throw err[0]
        } else {
            db.Donor.bulkCreate(donorData).success(function() {
                console.log("successfully created Donor")
            });
        }
    });