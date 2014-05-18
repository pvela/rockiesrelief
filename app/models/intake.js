//intake.js

/* 
  intakeQuantity : ""
*/
module.exports = function(sequelize, DataTypes) {
    var Intake = sequelize.define('Intake', {
        intakeNotes: DataTypes.STRING
    }, {
        classMethods: {

        }
    })

    return Intake;
}
