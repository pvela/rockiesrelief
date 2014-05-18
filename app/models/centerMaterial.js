//material.js
//
// Use required info in order to set foreign keys
//
var donationCenter = require("donationCenter");
var material = require("material");

/*
           itemName : "",
           itemCategoryId : "",
           itemCategoryName : "",
           itemQuantity : "",
           itemUOM : ""

           */
module.exports = function(sequelize, DataTypes) {
    var CenterMaterial = sequelize.define('CenterMaterial', {
        itemQuantity:     DataTypes.INTEGER
    }, {
        classMethods: {

        }
    })

    // FK Associations
    CenterMaterial.belongsTo(center);
    CenterMaterial.belongsTo(material);

    material.hasMany(CenterMaterial);
    dontationCenter.hasMany(CenterMaterial);

    return CenterMaterial
}
