//material.js
//
// Use required info in order to set foreign keys
//
var donationCenter = require("./donationCenter");
var material = require("./material");

/*
           itemName : "",
           itemCategoryId : "",
           itemCategoryName : "",
           itemQuantity : "",
           itemUOM : ""

           */
module.exports = function(sequelize, DataTypes) {
    var CenterMaterial = sequelize.define('CenterMaterial', {
        itemQuantity: DataTypes.INTEGER
    }, {
        classMethods: {

        }
    })

    return CenterMaterial
}