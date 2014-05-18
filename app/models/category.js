//category.js

/* 
  categoryName : ""
*/
module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        categoryName: DataTypes.STRING
    }, {
        classMethods: {

        }
    })

    return Category;
}
