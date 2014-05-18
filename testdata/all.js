//test data
var db = require('../app/models');
var Faker = require('./Faker');

var sampleDonorData = [{
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
var donorData = function() {
    return {
        donorLastName: Faker.Name.lastName(),
        donorFirstName: Faker.Name.firstName(),
        donorAddress1: Faker.Address.streetName(),
        donorAddress2: Faker.Address.streetAddress(),
        donorZipCode: Faker.Address.zipCode(),
        donorState: Faker.Address.usState(),
        donorCity: Faker.Address.city(),
        donorEmail: Faker.Internet.email(),
        donorMobileNumber: Faker.PhoneNumber.phoneNumber()
    };
};
var fakeDonorData = [];
for (var i = 0; i < 10; i++) {
    fakeDonorData.push(donorData());
}
var deliveryData = [];
var donationCenterData = [];
var centerMaterialData = [];
var centerMaterialIntakeData = [];
var intakeData = [];
var materialData = [];
var survivorData = [];
var voluteerData = [];

module.exports = function(db) {
    /*db
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
    });*/
    db.Donor.bulkCreate(fakeDonorData).success(function() {
        console.log("successfully created Donor")
    });
}