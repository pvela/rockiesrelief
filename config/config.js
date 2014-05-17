var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
/*
  173.194.244.81 --user=relief --password=
db - reliefdb
*/
var config = {
    development: {
        root: rootPath,
        app: {
            name: 'cogovdev'
        },
        port: 3000,
        db: {
            database: "reliefdb",
            username: "root",
            password: "",
            options: {
                host: "localhost",
                port: 3306,
                dialect: "mysql",
                protocol: "mysql",
                logging: console.log,
                ssl: true
            }
        },
        db_url: 'mysql://relief:reliefpwd@localhost/reliefdb'
    },

    test: {
        root: rootPath,
        app: {
            name: 'cogovdev'
        },
        port: 3000,
        db: 'mysql://relief:reliefpwd@173.194.244.81/reliefdb'
    },

    production: {
        root: rootPath,
        app: {
            name: 'cogovdev'
        },
        port: 3000,
        db: {
            database: "d7mkneoe8vasis",
            username: "ucxmwrzqjuahnf",
            password: "T_b9-BLUKHqDEHzsQSwmrZVAtN",
            options: {
                host: "ec2-54-225-101-119.compute-1.amazonaws.com",
                port: 5432,
                dialect: "postgres",
                protocol: "postgres",
                logging: console.log,
                ssl: true
            }
        },
        db_url: 'postgres://ucxmwrzqjuahnf:T_b9-BLUKHqDEHzsQSwmrZVAtN@ec2-54-225-101-119.compute-1.amazonaws.com:5432/d7mkneoe8vasis'
    }
};

module.exports = config[env];