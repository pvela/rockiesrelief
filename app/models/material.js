//material.js
/*itemId: "",
           itemName : "",
           itemCategoryId : "",
           itemCategoryName : "",
           itemQuantity : "",
           itemUOM : ""

           */
module.exports = function(sequelize, DataTypes) {
    var Material = sequelize.define('Material', {
        itemId: DataTypes.INTEGER,
        itemName: DataTypes.STRING,
        itemCategoryId: DataTypes.INTEGER,
        itemCategoryName: DataTypes.STRING,
        itemQuantity: DataTypes.INTEGER,
        itemUOM: DataTypes.STRING
    }, {
        classMethods: {

        }
    })

    return Material
}