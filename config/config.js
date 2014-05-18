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
            database: "dfgpjq72i33tlv",
            username: "vphqordohuvjtc",
            password: "UR2ZJYnPV4NmbtBmLxaoq9RYoa",
            options: {
                host: "ec2-174-129-197-200.compute-1.amazonaws.com",
                port: 5432,
                dialect: "postgres",
                protocol: "postgres"
            }
        },
        db_url: 'postgres://vphqordohuvjtc:UR2ZJYnPV4NmbtBmLxaoq9RYoa@ec2-174-129-197-200.compute-1.amazonaws.com:5432/dfgpjq72i33tlv'
    }
};

module.exports = config[env];