//centerMaterialIntake.js


/* 
  centerMaterialIntakeQuantity : ""
  material_id : ""
  intake_id : ""
  donationCenter_id : ""
*/
module.exports = function(sequelize, DataTypes) {
    var CenterMaterialIntake = sequelize.define('CenterMaterialIntake', {
        centerMaterialIntakeQuantity: DataTypes.INTEGER,
        intake_id: {
           type: DataTypes.INTEGER,
           references: "intake",
           referencesKey: "id"
        },
        material_id: {
           type: DataTypes.INTEGER,
           references: "material",
           referencesKey: "id"
        },
        donationCenter_id: {
           type: DataTypes.INTEGER,
           references: "donationCenter",
           referencesKey: "id"
        }
    }, {
        classMethods: {

        }
    })

    return CenterMaterialIntake;
}
