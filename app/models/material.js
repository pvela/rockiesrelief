//material.js
//
// Use required info in order to set foreign keys
//
var centerMaterial = require("centerMaterial");

/*
           itemName : "",
           itemCategoryId : "",
           itemCategoryName : "",
           itemQuantity : "",
           itemUOM : ""

           */
module.exports = function(sequelize, DataTypes) {
    var Material = sequelize.define('Material', {
        itemName:         DataTypes.STRING,
        itemCategoryId:   DataTypes.INTEGER,
        itemCategoryName: DataTypes.STRING,
        itemQuantity:     DataTypes.INTEGER,
        itemUOM:          DataTypes.STRING
    }, {
        classMethods: {

        }
    })

    // FK Associations
    Material.hasMany(centerMaterial);

    return Material;
}
