//test data
var db = require('../app/models');
var Faker = require('./Faker');

var INTAKE_CNT = 20;
var INTAKE_MATERIAL_CNT = 50;
var DELIVERY_CNT = 20;
var VOLUNTEER_CNT = 10;
var SURVIVOR_CNT = 10;
var DONOR_CNT = 10;
var MATERIAL_CNT = 34;
var CENTER_MAT_CNT = MATERIAL_CNT * 3; // material * center

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
for (var i = 0; i < DONOR_CNT; i++) {
    fakeDonorData.push(donorData());
}

//
// Return a random int 
//
function randomInt(min,max) {
    return Math.floor(Math.random()*(max-(min+1))+(min+1));
}

//
// Return a city in Colorado
//
function randomCity() {
    var city = "Red Cross";
    var cnt = randomInt(0,5);
    // could have used property file with generic city#
    // and just returned value from that
    switch (cnt) {
        case 0:
           city = "Boulder";
           break; 
        case 1:
           city = "Westminster";
           break; 
        case 2:
           city = "Fort Collins";
           break; 
        case 3:
           city = "Denver";
           break; 
        case 3:
           city = "Colorado Springs";
           break; 
        default:
           city = "Longmont";
           break; 
    }
    return city;
}

//
// Return a random affiliate 
//
function getAffiliate() {
    var affiliate = "Red Cross";
    var cnt = randomInt(0,2);
    switch (cnt) {
        case 0:
           affiliate = "FEMA";
           break; 
        case 1:
           affiliate = "CEMA";
           break; 
        default:
           affiliate = "Red Cross";
           break; 
    }
    return affiliate;
}

//
// Load Center Data
//
function loadCenterData() {
    var centerData = [{
        donationCenterLocation: "Foothills Mall",
        donationCenterAffiliate: "Larimer CO",
        donationCenterHours: "9:00am - 7:00pm",
        donationCenterAddress1: "215 East Foothills Parkway",
        donationCenterAddress2: "",
        donationCenterZipCode: "80525",
        donationCenterState: "CO",
        donationCenterCity: "Fort Collins", 
        donationCenterGeoLat: "40.5428",
        donationCenterGeoLong: "-105.072414",
        donationCenterContactEmail: Faker.Internet.email(),
        donationCenterContactName: Faker.Name.firstName() 
                                   + " " 
                                   + Faker.Name.lastName(),
        donationCenterContactNumber: Faker.PhoneNumber.phoneNumber()
    }, {
        donationCenterLocation: "Longmont Disaster Assistant Center",
        donationCenterAffiliate: "Boulder CO",
        donationCenterHours: "9:00am - 8:00pm",
        donationCenterAddress1: "1250 S. Hover Rd",
        donationCenterAddress2: "",
        donationCenterZipCode: "80501",
        donationCenterState: "CO",
        donationCenterCity: "Longmont", 
        donationCenterGeoLat: "40.14811",
        donationCenterGeoLong: "-105.128058",
        donationCenterContactEmail: Faker.Internet.email(),
        donationCenterContactName: Faker.Name.firstName() 
                                   + " "
                                   + Faker.Name.lastName(),
        donationCenterContactNumber: Faker.PhoneNumber.phoneNumber()
    }, {
        donationCenterLocation: "Boulder Office of Emergency Management",
        donationCenterAffiliate: "City of Boulder",
        donationCenterHours: "9:00am - 9:00pm",
        donationCenterAddress1: "5495 Arapahoe Ave",
        donationCenterAddress2: "",
        donationCenterZipCode: "80303",
        donationCenterState: "CO",
        donationCenterCity: "Boulder", 
        donationCenterGeoLat: "40.01508",
        donationCenterGeoLong: "-105.226307",
        donationCenterContactEmail: Faker.Internet.email(),
        donationCenterContactName: Faker.Name.firstName() 
                                   + " "
                                   + Faker.Name.lastName(),
        donationCenterContactNumber: Faker.PhoneNumber.phoneNumber()
    }];

    return centerData;
}

//
// Load Category Data
//
function loadCategoryData() {

    var categoryData = [{
        categoryName: "Clothing"
    }, {
        categoryName: "Equipment"
    }, {
        categoryName: "Food"
    }, {
        categoryName: "Household Items"
    }, {
        categoryName: "Liquid",
    }, {
        categoryName: "Medications"
    }, {
        categoryName: "Pet Supplies"
    }, {
        categoryName: "Toiletries"
    }];

    return categoryData;
}

//
// Load CenterMaterial Data
//
function loadCenterMaterialsData() {

    var fakeData = [];
    var centerMaterialData = function(materialId, centerId) {
        return {
            itemQuantity: randomInt(0, 10),
            itemShelf: randomInt(1,50),
            DonationCenterId: centerId,
            MaterialId: materialId
        };
    };

    for (var j = 1; j < 4; j++) {
        for (var i = 1; i < MATERIAL_CNT; i++) {
            fakeData.push(centerMaterialData(i, j));
        }
    }
    return fakeData;
}

//
// Load CenterMaterialIntake Data
//
function loadCenterMaterialIntakesData() {

    var fakeData = [];
    var centerMaterialIntakeData = function() {
        return {
            intakeQuantity: randomInt(0, 10),
            intake_id: randomInt(1,INTAKE_CNT),
            material_id: randomInt(1,MATERIAL_CNT)
        };
    };

    for (var i = 0; i < INTAKE_MATERIAL_CNT; i++) {
        fakeData.push(centerMaterialIntakeData());
    }
    return fakeData;
}

//
// Load Delivery Data
//
function loadDeliveryData() {
    var fakeData = [];
    var deliveryData = function () {
        return {
            deliveryQuantity: randomInt(1, 5),
            SurvivorId: randomInt(1, SURVIVOR_CNT),
            CenterMaterialId: randomInt(1, CENTER_MAT_CNT),
            VolunteerId: randomInt(1, VOLUNTEER_CNT),
            DonationCenterId: randomInt(1,3)
        };
    };

    for (var i = 0; i < DELIVERY_CNT; i++) {
        fakeData.push(deliveryData());
    }
    return fakeData;
}

//
//
// Load Intake Data
//
function loadIntakeData() {
    var fakeIntakeData = [];
    var intakeData = function () {
        return {
            intakeNotes: Faker.Lorem.sentence(),
            DonorId: randomInt(1, DONOR_CNT),
            VolunteerId: randomInt(1, VOLUNTEER_CNT),
            DonationCenterId: randomInt(1, 3)
        };
    };

    for (var i = 0; i < INTAKE_CNT; i++) {
        fakeIntakeData.push(intakeData());
    }
    return fakeIntakeData;
}

//
// Load Material Data
//
function loadMaterialData() {

    var fakeMaterialData = [];

    // Clothing
    var materialData = [{
        itemName: "Coat",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Hat",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Shirts",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Men Pants",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Women Pants",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Infant outfit",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Toddler Pants",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Toddler Shirt",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Children Shirt",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
        itemName: "Children Pants",
        itemCategoryId: 1,
        itemCategoryName: "Clothing",
        itemUOM:""
    }, {
    // Medication
        itemName: "Aspirin",
        itemCategoryId: 5,
        itemCategoryName: "Medications",
        itemUOM:""
    }, {
        itemName: "Bandage (30ct Box)",
        itemCategoryId: 5,
        itemCategoryName: "Medications",
        itemUOM:""
    }, {
        itemName: "Orange Juice",
        itemCategoryId: 5,
        itemCategoryName: "Liquid",
        itemUOM:""
    }, {
        itemName: "Bottled Water",
        itemCategoryId: 5,
        itemCategoryName: "Liquid",
        itemUOM:""
    }, {
        itemName: "Milk",
        itemCategoryId: 5,
        itemCategoryName: "Liquid",
        itemUOM:""
    }, {
        itemName: "Tomato Juice",
        itemCategoryId: 5,
        itemCategoryName: "Liquid",
        itemUOM:""
    }, {
    // Household Items
        itemName: "Shovel",
        itemCategoryId: 4,
        itemCategoryName: "Household Items",
        itemUOM:""
    }, {
        itemName: "Mop",
        itemCategoryId: 4,
        itemCategoryName: "Household Items",
        itemUOM:""
    }, {
        itemName: "Rotating Fan",
        itemCategoryId: 4,
        itemCategoryName: "Household Items",
        itemUOM:""
    }, {
    // Equipment
        itemName: "Generator",
        itemCategoryId: 2,
        itemCategoryName: "Equipment",
        itemUOM:""
    }, {
        itemName: "Water Pump",
        itemCategoryId: 2,
        itemCategoryName: "Equipment",
        itemUOM:""
    }, {
        itemName: "Sand Bags",
        itemCategoryId: 2,
        itemCategoryName: "Equipment",
        itemUOM:""
    }, {
        itemName: "Plywood",
        itemCategoryId: 2,
        itemCategoryName: "Equipment",
        itemUOM:""
    }, {
    // Toiletries
        itemName: "Soap",
        itemCategoryId: 8,
        itemCategoryName: "Toiletries",
        itemUOM:""
    }, {
        itemName: "Shampoo",
        itemCategoryId: 8,
        itemCategoryName: "Toiletries",
        itemUOM:""
    }, {
        itemName: "Toothbrush",
        itemCategoryId: 8,
        itemCategoryName: "Toiletries",
        itemUOM:""
    }, {
        itemName: "Toothpaste",
        itemCategoryId: 8,
        itemCategoryName: "Toiletries",
        itemUOM:""
    }, {
        itemName: "Dog Food",
        itemCategoryId: 7,
        itemCategoryName: "Pet Food",
        itemUOM:""
    }, {
        itemName: "Cat Food",
        itemCategoryId: 7,
        itemCategoryName: "Pet Food",
        itemUOM:""
    }, { // Food
        itemName: "Powdered Milk",
        itemCategoryId: 3,
        itemCategoryName: "Food",
        itemUOM:""
    }, {
        itemName: "Canned Soup",
        itemCategoryId: 3,
        itemCategoryName: "Food",
        itemUOM:""
    }, {
        itemName: "Canned Peas",
        itemCategoryId: 3,
        itemCategoryName: "Food",
        itemUOM:""
    }, {
        itemName: "Mac & Cheese",
        itemCategoryId: 3,
        itemCategoryName: "Food",
        itemUOM:""
    }, {
        itemName: "Baby Formula",
        itemCategoryId: 3,
        itemCategoryName: "Food",
        itemUOM:""
    }]

    return materialData;

}

//
// Load Volunteer Data
//
function loadVolunteerData() {
    var volunteerData = function() {
        return {
            volunteerLastName: Faker.Name.lastName(),
            volunteerFirstName: Faker.Name.firstName(),
            volunteerAddress1: Faker.Address.streetName(),
            volunteerAddress2: Faker.Address.streetAddress(),
            volunteerZipCode: Faker.Address.zipCode(),
            volunteerState: Faker.Address.usState(),
            volunteerCity: Faker.Address.city(),
            volunteerEmail: Faker.Internet.email(),
            donationCenterId: randomInt(1,3),
            volunteerMobileNumber: Faker.PhoneNumber.phoneNumber()
        };
    };

    var fakeData = [];
    for (var i = 0; i < VOLUNTEER_CNT; i++) {
        fakeData.push(volunteerData());
    }
    return fakeData;
}

//
// Load Survivor Data
//
function loadSurvivorData() {
    var survivorData = function () {
        return {
            survivorLastName: Faker.Name.lastName(),
            survivorFirstName: Faker.Name.firstName(),
            survivorAddress1: Faker.Address.streetName(),
            survivorAddress2: Faker.Address.streetAddress(),
            survivorZipCode: Faker.Address.zipCode(),
            survivorState: "CO",
            survivorCity: randomCity(),
            survivorEmail: Faker.Internet.email(),
            survivorMobileNumber: Faker.PhoneNumber.phoneNumber()
        };
    };

    var fakeData = [];
    for (var i = 0; i < SURVIVOR_CNT; i++) {
        fakeData.push(survivorData());
    }
    return fakeData;
}

var deliveryData = [];
//var donationCenterData = [];
var centerMaterialData = [];
var centerMaterialIntakeData = [];
var intakeData = [];
//var materialData = [];
//var survivorData = [];
//var voluteerData = [];

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
                console.log("successfully created Donor");
            });
        }
    });*/
    db.Donor.bulkCreate(fakeDonorData).success(function() {
        console.log("successfully created Donor");
    });

    // Load Category data
    db.Category.bulkCreate(loadCategoryData()).success(function() {
        console.log("successfully created Category");
    });

    // Load Donation Center data
    db.DonationCenter.bulkCreate(loadCenterData()).success(function() {
        console.log("successfully created Center");
    });

    // Load Material data
    db.Material.bulkCreate(loadMaterialData()).success(function() {
        console.log("successfully created Material")
    });

    // Load Survivor data
    db.Survivor.bulkCreate(loadSurvivorData()).success(function() {
        console.log("successfully created Survivor");
    });

    // Load Volunteer data
    db.Volunteer.bulkCreate(loadVolunteerData()).success(function() {
        console.log("successfully created Volunteer");
    });

    // Load Intake data
    db.Intake.bulkCreate(loadIntakeData()).success(function() {
        console.log("successfully created Intake");
    });

    // Load CenterMaterial data
    db.CenterMaterial.bulkCreate(loadCenterMaterialsData()).success(function() {
        console.log("successfully created CenterMaterial");
    });

    // Load CenterMaterialIntake data
    db.CenterMaterialIntake.bulkCreate(loadCenterMaterialIntakesData()).success(function() {
        console.log("successfully created CenterMaterialsIntake");
    });

    // Load Delivery data
    db.Delivery.bulkCreate(loadDeliveryData()).success(function() {
        console.log("successfully created Delivery");
    });

}
