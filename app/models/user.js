module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING
    }, {
        classMethods: {

        }
    })

    return User
}