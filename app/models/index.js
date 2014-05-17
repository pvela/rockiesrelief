var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    config = require('../../config/config'),
    sequelize = new Sequelize("d7mkneoe8vasis", "ucxmwrzqjuahnf", "T_b9-BLUKHqDEHzsQSwmrZVAtN", {
        host: "ec2-54-225-101-119.compute-1.amazonaws.com",
        port: 5432,
        dialect: "postgres",
        protocol: "postgres",
        logging: console.log,
        ssl: true
    }),
    db = {}

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db)